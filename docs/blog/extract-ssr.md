---
title: SSR에서 정적 스타일 추출
date: 2023-04-25
author: zombieJ
zhihu_url: https://zhuanlan.zhihu.com/p/639266657
yuque_url: https://www.yuque.com/ant-design/ant-design/gyacdbtixle9bbm4
juejin_url: https://juejin.cn/post/7322352551088603163
---

기존의 JS + CSS 웹사이트에서는 SSR은 주로 첫 렌더링의 Hydration 문제만 신경 쓰면 됩니다. 하지만 CSS-in-JS 기술이 도입되면서, 개발자는 첫 렌더링의 정확성을 보장하기 위해 HTML에 스타일을 어떻게 내보낼지 따로 고민해야 합니다. 우리는 여러 가지 구현 방법을 제공하며, 여기에서는 그 아이디어를 논의하고자 합니다. 더 보완된 문서나 예시가 필요하다면 [Customize Theme](/docs/react/customize-theme) 를 참고하세요.

### 인라인 스타일

> 가장 간단한 방법은 스타일을 HTML에 직접 작성하는 것입니다. 이렇게 하면 별도의 요청이 필요하지 않지만 이 방법의 단점은 스타일을 브라우저가 캐싱할 수 없기 때문에, 요청할 때마다 매번 새로 다운로드해야 합니다. 또한, 스타일이 많을 경우 HTML 파일이 커져 최초 렌더링 속도에 영향을 줄 수 있습니다.

v5 알파 버전에서는 SSR 스타일 렌더링을 보완하기 위해, `Emotion`의 구현을 참고하여 각 요소 앞에 해당 인라인 스타일을 추가했습니다:

```html
<div>
  <style>
    :where(.css-bAmBOo).ant-btn {
      // ...
    }
  </style>
  <button className="ant-btn css-bAmBOo">Hello World</button>
</div>
```

이 구현은 간단하고 효과적이지만, `:nth` 선택자로 인해 의도하지 않은 스타일 변화가 있을 수 있습니다. 하지만 antd 컴포넌트에서는 이 선택자를 거의 사용하지 않기 때문에, 문제가 크게 발생하지는 않습니다.

초기에는 잘 작동했으며, antd의 공식 사이트는 별다른 수정 없이도 SSR 스타일을 지원하여 SEO 요구를 충족했습니다. 그러나 컴포넌트를 점진적으로 CSS-in-JS 버전으로 마이그레이션하면서 사이트의 번들 사이즈가 매우 커졌고, 결국 사용할 수 없게 되었습니다. HTML을 살펴본 결과, 기본 인라인 방식은 스타일을 여러 번 중복 삽입하는 문제가 있었습니다. 예를 들어, 한 페이지에 Button 3개가 있으면 다음과 같이 세 번 반복 삽입됩니다:

```html
<div>
  <style>
    :where(.css-bAmBOo).ant-btn {
      // ...
    }
  </style>
  <button className="ant-btn css-bAmBOo">Hello World 1</button>
  <style>
    :where(.css-bAmBOo).ant-btn {
      // ...
    }
  </style>
  <button className="ant-btn css-bAmBOo">Hello World 2</button>
  <style>
    :where(.css-bAmBOo).ant-btn {
      // ...
    }
  </style>
  <button className="ant-btn css-bAmBOo">Hello World 3</button>
</div>
```

대다수 컴포넌트를 CSS-in-JS로 변환하면, 인라인 스타일이 지나치게 많아질 수 있습니다. 그래서 우리는 스타일이 자동으로 삽입되는 방식을 제거하고, 개발자가 직접 스타일을 추출하여 사용하는 방식으로 변경했습니다:

```tsx
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { renderToString } from 'react-dom/server';

const cache = createCache();

// HTML Content
const html = renderToString(
  <StyleProvider cache={cache}>
    <MyApp />
  </StyleProvider>,
);

// Style Content
const styleText = extractStyle(cache);
```

이것이 기존의 CSS-in-JS 주입 방식입니다. 앞서 언급했듯이, 인라인 스타일은 캐시되지 않으므로 추가적인 로딩 부담이 발생할 수 있습니다. 따라서 우리는 네이티브 CSS와 유사한 로딩 경험을 얻기 위한 새로운 구현 방식을 탐구하기 시작했습니다.

### 정적 스타일 추출

우리는 v4 버전처럼 컴포넌트 스타일을 미리 생성하여 프론트엔드에서 활용할 수 있는 방안을 고민한 끝에, [\[RFC\] Static Extract style](https://github.com/ant-design/ant-design/discussions/40985)을 제안했습니다. 이 아이디어는 간단하게, 모든 컴포넌트를 미리 한 번 렌더링하여 캐시에서 스타일을 추출한 뒤 이를 CSS 파일로 저장하는 방식입니다.

```tsx
const cache = createCache();

// HTML Content
renderToString(
  <StyleProvider cache={cache}>
    <Button />
    <Switch />
    <Input />
    {/* 나머지 antd 컴포넌트들 */}
  </StyleProvider>,
);

// Style Content
const styleText = extractStyle(cache);
```

물론, 이 방식은 개발자에게 다소 번거로울 수 있습니다. 그래서 우리는 이 요구 사항을 충족하기 위해 서드 파티 패키지를 제공했습니다:

```tsx
import { extractStyle } from '@ant-design/static-style-extract';
import fs from 'fs';

// `extractStyle`은 모든 antd 컴포넌트를 포함합니다.
// SSR에 필요하지 않은 Modal, message, notification 등과 같은 팝업 컴포넌트는 제외됩니다.
const css = extractStyle();

fs.writeFile(...);
```

여러 개의 테마를 병행해서 적용하는 경우, 개발자가 직접 해당 요구 사항을 구현할 수도 있습니다:

```tsx
// `node`는 미리 정의된 컴포넌트 세트입니다.
const css = extractStyle((node) => (
  <>
    <ConfigProvider theme={theme1}>{node}</ConfigProvider>
    <ConfigProvider theme={theme2}>{node}</ConfigProvider>
    <ConfigProvider theme={theme3}>{node}</ConfigProvider>
  </>
));
```

### 부분적 정적 스타일 추출

대부분의 경우, 위의 방법으로 요구 사항을 충족할 수 있습니다. 다만 가끔은 CSS-in-JS의 유연성과 정적 파일 캐싱의 장점을 동시에 활용하고 싶을 때가 있습니다. 이 경우, 애플리케이션 레벨에서 처리가 필요하며, 필요한 콘텐츠를 렌더링한 후 인라인 스타일 대신 파일로 저장합니다. 그리고 간단한 해시를 사용해 파일 캐싱을 구현할 수 있습니다:

```tsx
import { createHash } from 'crypto';

// 위에서 설명한 것처럼 스타일 내용을 가져옵니다
const styleText = extractStyle(cache);

const hash = createHash('md5').update(styleText).digest('hex');
const cssFileName = `css-${hash.substring(0, 8)}.css`;

if (!fs.existsSync(cssFileName)) {
  fs.writeFileSync(cssFileName, styleText);
}
```

그런 다음 HTML 템플릿 측에 해당 CSS 파일을 추가합니다:

```html
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="${hashCssFileUrl}" />
  </head>
  <body>
    <div id="root">${html}</div>
  </body>
</html>
```

전체 코드는 [여기](https://github.com/ant-design/ant-design-examples/tree/main/examples/with-nextjs-generate-css-on-demand)에서 확인할 수 있습니다.

다른 페이지를 방문할 때마다 해당 페이지에 맞는 CSS가 생성되며, 각 CSS는 고유한 해시 값을 가집니다. 해시가 일치하면 해당 CSS 파일이 디스크에 저장되었음을 의미하며, 이를 바로 사용할 수 있습니다. 그 결과 클라이언트는 CSS 파일을 정상적으로 로드하며 캐시의 이점도 누릴 수 있습니다.

같은 페이지를 방문하는 사용자가 서로 다른 스타일이나 맞춤형 테마를 사용해야 할 때, 이 해시를 통해 구분할 수 있습니다.

## 결론

복잡하지 않은 애플리케이션의 경우, Static Extract Style 방식을 추천합니다. 이 방식은 꽤 간단하며, SSR 스타일 렌더링을 세밀하게 제어하고 더 빠른 접근 속도를 원하는 개발자라면 일부 스타일을 정적으로 처리하는 방법을 시도해 볼 수 있습니다.
