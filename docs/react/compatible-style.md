---
group:
  title: 고급기능
order: 1
title: CSS 호환성
---

### 기본 스타일 호환성

Ant Design은 [최근 2개 버전의 브라우저](https://browsersl.ist/#q=defaults)를 지원합니다. 만약 레거시 브라우저와의 호환성이 필요한 경우, 실제 필요사항에 따라 다운그레이드를 진행하세요:

| 기능 | antd 버전 | 호환성 | 최소 Chrome 버전 | 호환성 해결 방법 |
| --- | --- | --- | --- | --- |
| [:where 선택자](https://developer.mozilla.org/en-US/docs/Web/CSS/:where) | `>=5.0.0` | [caniuse](https://caniuse.com/?search=%3Awhere) | Chrome 88 | `<StyleProvider hashPriority="high">` |
| [CSS 논리적 속성](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) | `>=5.0.0` | [caniuse](https://caniuse.com/css-logical-props) | Chrome 89 | `<StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>` |

만약 더 오래된 버전을 지원해야하는 경우, [StyleProvider](https://github.com/ant-design/cssinjs#styleprovider)를 사용하여 다운그레이드를 처리하세요.

## 셀렉터 `:where`

- antd 버전: `>=5.0.0`
- MDN: [:where](https://developer.mozilla.org/en-US/docs/Web/CSS/:where)
- 브라우저 호환성: [caniuse](https://caniuse.com/?search=%3Awhere)
- 최소 지원 Chrome버전: 88
- 기본 활성화: Yes

Ant Design의 CSS-in-JS기능은 기본적으로 우선순위를 낮추기 위해 ":where" 셀렉터를 사용합니다. 이것은 사용자가 업그레이드 시 커스텀 스타일을 조정하는 비용을 줄여줍니다. 그러나, ":where" 구문의 호환성은 구 버전의 브라우저에서 좋지 않습니다. ([compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/:where#browser_compatibility)) 특정 시나리오에서, 구 버전 지원이 필요하다면, `@ant-design/cssinjs`를 사용하여 기본 우선순위 낮추기를 비활성화할 수 있습니다. (antd와 버전이 일치하는지 확인하세요).

```tsx
import { StyleProvider } from '@ant-design/cssinjs';

// `hashPriority`를 기본값  `low`대신 `high`로 설정
// 설정시 `:where` 래퍼를 제거함
export default () => (
  <StyleProvider hashPriority="high">
    <MyApp />
  </StyleProvider>
);
```

`:where`를 클래스 선택자로 변경됩니다:

```diff
--  :where(.css-bAMboO).ant-btn {
++  .css-bAMboO.ant-btn {
      color: #fff;
    }
```

참고: `:where` 다운그레이드를 끄면, 일부 스타일의 명시도를 직접 조작해야할 수도 있습니다. **PostCSS 플러그인을 사용**하여 애플리케이션의 css선택자 명시도를 높일 수 있습니다. PostCSS는 이를 위한 여러 플러그인을 제공합니다. 예시:

- [postcss-scopify](https://www.npmjs.com/package/postcss-scopify)
- [postcss-increase-specificity](https://www.npmjs.com/package/postcss-increase-specificity)
- [postcss-add-root-selector](https://www.npmjs.com/package/postcss-add-root-selector)

플러그인을 사용해 우선순위를 높이는 방법:

```diff
--  .my-btn {
++  #root .my-btn {
      background: red;
    }
```

## CSS 논리적 속성

- antd version: `>=5.0.0`
- MDN：[CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
- 브라우저 호환성: [caniuse](https://caniuse.com/css-logical-props)
- 최소 지원 Chrome버전: 89
- 기본 활성화: Yes

LTR과 RTL 스타일을 통일하기 위해 Ant Design은 CSS 논리적 속성을 사용합니다. 예를들어, 기존 `margin-left`는 `margin-inline-start`로 대체되었습니다. LTR과 RTL 모두에서 시작 위치 간격을 나타냅니다. 구 버전 브라우저에대해 호환성이 필요한 경우, `StyleProvider` of `@ant-design/cssinjs`의 `transformers`를 구성할 수 있습니다:

```tsx
import { legacyLogicalPropertiesTransformer, StyleProvider } from '@ant-design/cssinjs';

// `transformers`는 CSS 속성을 변환하는 방법을 제공
export default () => (
  <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
    <MyApp />
  </StyleProvider>
);
```

토글하면, 스타일이 CSS 논리적 속성을 다운그레이드 할 것입니다:

```diff
.ant-modal-root {
-- inset: 0;
++ top: 0;
++ right: 0;
++ bottom: 0;
++ left: 0;
}
```

## `@layer`

- antd 버전: `>=5.17.0`
- MDN：[CSS @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- 브라우저 호환성: [caniuse](https://caniuse.com/css-at-rule-layer)
- 최소 지원 Chrome버전 : 99
- 기본 활성화: No

Ant Design은 `5.17.0` 버전부터 통일된 CSS 명시도 다운그레이드를 위해 `@layer`구성을 지원합니다. 다운그레이드 후, antd의 스타일은 항상 기본 CSS 선택자 우선순위보다 낮아져 사용자가 스타일을 오버라이드 할 수 있습니다(반드시 `@layer`의 브라우저 호환성을 확인하세요):

```tsx
import { StyleProvider } from '@ant-design/cssinjs';

export default () => (
  <StyleProvider layer>
    <MyApp />
  </StyleProvider>
);
```

antd 스타일은 우선순위를 낮추기 위해 `@layer`로 캡슐화됩니다:

```diff
++  @layer antd {
      :where(.css-bAMboO).ant-btn {
        color: #fff;
      }
++  }
```

## Rem 변환 (Adaptation)

반응형 웹 개발에서, 페이지 적응과 반응형 디자인을 쉽고 유연한 방식이 필요합니다. `px2remTransformer` 변환기는 스타일시트의 픽셀 단위를 HTML 태그인 루트 요소를 기준으로 하는 rem 단위로 변환하여, 적응형 및 반응형 레이아웃 구현을 가능하게 합니다.

```tsx
import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs';

const px2rem = px2remTransformer({
  rootValue: 32, // 32px = 1rem; @default 16
});

export default () => (
  <StyleProvider transformers={[px2rem]}>
    <MyApp />
  </StyleProvider>
);
```

변환된 스타일 결과:

```diff
 .px2rem-box {
-  width: 400px;
+  width: 12.5rem;
   background-color: green;
-  font-size: 32px;
+  font-size: 1rem;
   border: 10PX solid #f0f;
 }

 @media only screen and (max-width: 600px) {
   .px2rem-box {
     background-color: red;
-    margin: 10px;
+    margin: 0.3125rem;
   }
 }
```

### Options

<!-- prettier-ignore -->
| 매개변수 | 설명  | 타입 | 기본값 |
| --- | --- | --- | --- |
| rootValue | 루트 요소의 글꼴 크기 | `number` | 16 |
| precision | 변환값의 소수점 자릿수 | `number` | 5 |
| mediaQuery | 미디어 쿼리에서 px를 변환할지 여부 | `boolean` | false |

자세한 내용은 [px2rem.ts#Options](https://github.com/ant-design/cssinjs/blob/master/src/transformers/px2rem.ts)를 참조하세요:

## Shadow DOM 사용

Shadow DOM 시나리오에서 `<style />` 태그 삽입이 일반적 DOM과 다르기 때문에, `@ant-design/cssinjs`의 `StyleProvider`를 사용하여 `container` 속성을 구성하여 삽입 위치를 설정해야 합니다:

```tsx
import { StyleProvider } from '@ant-design/cssinjs';
import { createRoot } from 'react-dom/client';

const shadowRoot = someEle.attachShadow({ mode: 'open' });
const container = document.createElement('div');
shadowRoot.appendChild(container);
const root = createRoot(container);

root.render(
  <StyleProvider container={shadowRoot}>
    <MyApp />
  </StyleProvider>,
);
```

## 써드파티(타사) 스타일 라이브러리와 호환

일부 경우, antd를 Tailwind CSS, Emotion, styled-components 등과 같은 스타일 라이브러리와 함께 사용해야 할 수 있습니다. 전통적인 CSS 솔루션과 달리, 이 써드파티(타사) 스타일 라이브러리들은 CSS셀렉터 우선순위를 높이는 것으로 antd 스타일을 오버라이드 하기 쉽지 않을 수 있습니다. antd 셀렉터의 가중치를 낮추기 위해 `@layer`를 구성할 수 있습니다. 그리고 스타일 오버라이드 문제를 해결하기 위해 `@layer` 순서를 조정할 수 있습니다:

### antd `@layer` 설정

```tsx
import { StyleProvider } from '@ant-design/cssinjs';

export default () => (
  <StyleProvider layer>
    <MyApp />
  </StyleProvider>
);
```

### TailwindCSS `@layer` 정렬

global.css에서 `@layer`를 조정하여 스타일 오버라이드의 순서를 제어할 수 있습니다. `antd` 앞에 `tailwind-base`를 배치하세요 :

```less
@layer tailwind-base, antd;

@layer tailwind-base {
  @tailwind base;
}
@tailwind components;
@tailwind utilities;
```

### reset.css

antd의 `reset.css` 스타일을 사용하는 경우, `antd` 스타일이 덮어씌워지는 것을 방지하기 위해 `@layer`를 지정해야 합니다.

```less
@layer reset, antd;

@import url(reset.css) layer(reset);
```

### 다른 CSS-in-JS 를 사용

antd의 `@layer`를 구성한 뒤, 다른 CSS-in-JS라이브러리를 위해 추가적인 구성을 할 필요가 없습니다. CSS-in-JS는 완벽하게 antd 스타일을 오버라이드 할 수 있습니다.

### SSR 시나리오

SSR을 사용할 때, 스타일은 때때로 `<style />`를 통해 HTML에서 인라인으로 렌더링 됩니다. 이때 `@layer`를 사용하기 전에 지정된 `@layer` 우선순위 순서를 가진 스타일들이 먼저 로드되도록 확인 해야 합니다.

#### ❌ Wrong

```html
<head>
  <!-- SSR 인젝션 스타일 -->
  <style>
    @layer antd {
      /** ... */
    }
  </style>

  <!-- css 파일에 @layer xxx, antd를 포함함; -->
  <link rel="stylesheet" href="/b9a0m0b9o0o3.css" />
  <!-- 또는 HTML에 직접 @layer xxx, antd;를 작성하세요 -->
  <style>
    @layer xxx, antd;
  </style>
</head>
```

#### ✅ Correct

```html
<head>
  <!-- css 파일에 @layer xxx, antd를 포함함; -->
  <link rel="stylesheet" href="/b9a0m0b9o0o3.css" />
  <!-- 또는 HTML에 직접 @layer xxx, antd;를 작성하세요 -->
  <style>
    @layer xxx, antd;
  </style>

  <!-- SSR 인젝션 스타일 -->
  <style>
    @layer antd {
      /** ... */
    }
  </style>
</head>
```
