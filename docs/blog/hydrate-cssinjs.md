---
title: 동적 스타일은 어디로 갔을까?
date: 2023-07-21
author: zombieJ
---

아시다시피 antd v5는 CSS-in-JS 기술을 사용하여 혼합 스타일과 동적 스타일을 지원합니다. 하지만 이 방식은 런타임에서 스타일을 생성해야 하기 때문에 성능 저하를 초래할 수 있습니다. 이를 해결하기 위해 `@ant-design/cssinjs`라는 컴포넌트 라이브러리 차원의 라이브러리를 개발하여 캐시 효율을 높여 성능을 최적화하고자 했습니다. 또한 여기서 멈추지 않고, 특정 로직을 적용하여 런타임에서 스타일을 생성하는 단계를 생략할 수 있게 했습니다.

## 동적 스타일은 어디로 갔을까?

Ant Design의 공식 웹사이트를 살펴보면, Ant Design의 컴포넌트는 `<style />` 태그를 동적으로 삽입하여 스타일을 제어하지 않고 CSS 파일을 통해 관리한다는 것을 알 수 있습니다:

- <img width="376" alt="button" src="https://github.com/ant-design/ant-design/assets/5378891/82fc5e7a-8d68-4c37-b892-e75097f80ff8" />
- <img width="480" alt="style" src="https://github.com/ant-design/ant-design/assets/5378891/ab31820e-6602-4421-9101-50cb70738058" />

`document.head`에는 몇 가지 `css` 파일이 참조됩니다:

- umi.\[hash].css
- style-acss.\[hash].css

첫 번째 파일은 데모 블록, 검색창 스타일 등 dumi가 생성한 스타일 콘텐츠이고, 두 번째 파일은 SSR로 생성된 스타일 파일입니다. [테마 커스터마이징](/docs/react/customize-theme) 문서에서도 설명했듯이, 페이지에 사용되는 컴포넌트를 미리 처리하여 CSS 파일을 생성함으로써 캐시 적중률을 높이고 페이지 로드 속도를 향상시킬 수 있습니다. 실제로 공식 웹사이트에서도 이 방법을 사용하고 있으며, 데모에 사용된 컴포넌트들도 이 스타일을 재사용하고 있습니다.

잠시만요! CSS-in-JS는 런타임에 해시를 생성해서 `<style />`을 통해 스타일을 적용해야 하지 않나요? CSS 파일로도 동일하게 동작한다니? 걱정하지 마세요, 천천히 살펴보겠습니다.

## CSS-in-JS와 스타일 주입

애플리케이션 차원의 CSS-in-JS 방식은 생성된 스타일의 해시 값을 계산하여 캐시에 저장합니다. 이후 렌더링 시 캐시에서 해당 스타일이 존재하는지 확인해서 있으면 그대로 사용하고, 없으면 다시 생성합니다. 이 과정을 통해 스타일 중복 생성을 방지하여 성능을 개선할 수 있습니다.

![CSS-in-JS process](https://github.com/ant-design/ant-design/assets/5378891/aa8825c9-a78a-4326-ac13-30a27cbe14b6)

동적으로 페이지에 삽입된 스타일도 해시 값으로 식별됩니다. 해당 해시의 `<style />`이 이미 페이지에 존재한다면, SSR에서 인라인 스타일을 주입했다는 것을 의미합니다. 따라서 `<style />` 태그를 다시 생성하지 않아도 됩니다.

하지만 해시가 계산된 스타일 내용에 따라 달라지기 때문에 페이지에 재사용할 수 있는 스타일이 존재하더라도 한 번 더 계산하므로 비효율적입니다.

## 컴포넌트 수준의 CSS-in-JS

[컴포넌트 수준의 CSS-in-JS](/docs/blog/css-in-js) 문서에서도 설명했듯이, Ant Design의 캐시 메커니즘은 전체 스타일을 계산할 필요가 없습니다. 컴포넌트 라이브러리에서 토큰과 컴포넌트 이름만으로 스타일의 일관성을 확인할 수 있기 때문에 해시 값을 미리 계산할 수 있습니다:

<img alt="CSS-in-JS 해시 계산 방식" width="800" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*yZMNSYVtxnAAAAAAAAAAAAAADrJ8AQ/original" />

이 메커니즘을 재사용하여 클라이언트 단에서도 컴포넌트 스타일이 이미 주입되었음을 인식할 수 있습니다.

## SSR HashMap

`@ant-design/cssinjs` 라이브러리에서는 캐시 자체에 각 요소의 스타일과 해시 정보가 포함됩니다. 과거에는 `extractStyle` 메서드가 캐시에서 스타일만 추출하여 사용했습니다:

```tsx
// 예시입니다. 실제 경로는 훨씬 더 복잡합니다.
{
  "bAMbOo|Button": ["LItTlE", ":where(.bAMbOo).ant-btn { color: red }"],
  "bAMbOo|Spin": ["liGHt", ":where(.bAMbOo).ant-spin { color: blue }"]
}
```

이렇게 추출된 스타일은 다음과 같습니다:

```css
:where(.bAMbOo).ant-btn {
  color: red;
}
:where(.bAMbOo).ant-spin {
  color: blue;
}
```

스타일을 재사용하기 위해 더 나아가 경로와 해시 값도 함께 추출하여 SSR에서 필요한 정보를 모두 저장했습니다:

```tsx
{
  "bAMbOo|Button": "LItTlE",
  "bAMbOo|Spin": "liGHt"
}
```

이렇게 추출된 내용을 CSS 스타일로도 생성했습니다:

```less
// 예시입니다. 실제 코드가 아닙니다.
.cssinjs-cache-path {
  content: 'bAMbOo|Button:LItTlE;bAMbOo|Spin:liGHt';
}
```

이렇게 SSR에서 필요한 정보를 모두 저장하고, 클라이언트 단에서 이를 추출하여 사용할 수 있습니다.

## CSR HashMap

클라이언트에서는 더 간단하게 `getComputedStyle`을 사용하여 HashMap 정보를 추출합니다.

```tsx
// 예시입니다. 실제 코드가 아닙니다.
const measure = document.createElement('div');
measure.className = 'cssinjs-cache-path';
document.body.appendChild(measure);

// 이제 `content`를 파싱합니다.
const { content } = getComputedStyle(measure);
```

컴포넌트 렌더링 단계에서 `useStyleRegister`는 CSS 객체를 계산하기 전에 경로가 HashMap에 존재하는지 확인합니다. 만약 존재하면 해당 데이터는 서버에서 이미 생성된 것이므로 기존의 `<style />`에서 스타일을 추출하면 됩니다.

```tsx
// 예시입니다. 실제 경로는 훨씬 더 복잡합니다.
{
  "bAMbOo|Button": ["LItTlE", "READ_FROM_INLINE_STYLE"],
  "bAMbOo|Spin": ["liGHt", "READ_FROM_INLINE_STYLE"]
}
```

CSS 파일에서 제공하는 스타일은 `<style />`처럼 제거되지 않기 때문에 그대로 표시하며 `useInsertionEffect` 단계에서 이를 건너뛰게 됩니다.

```tsx
// 예시입니다. 실제 경로는 훨씬 더 복잡합니다.
{
  "bAMbOo|Button": ["LItTlE", "__FROM_CSS_FILE__"],
  "bAMbOo|Spin": ["liGHt", "__FROM_CSS_FILE__"]
}
```

## 결론

CSS-in-JS는 런타임 성능 문제로 비판을 받습니다. 하지만 Ant Design에서 SSR을 사용하는 경우, 클라이언트 단에서는 런타임에서 스타일을 생성하는 단계를 건너뛸 수 있어 성능을 향상시킬 수 있습니다. 계속해서 CSS-in-JS의 발전을 지켜보며 더 나은 사용자 경험을 제공하기 위해 노력할 것입니다.
