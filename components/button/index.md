---
category: Components
title: Button
description: 아래 코드로 버튼을 사용해보세요.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3T4cRqxH9-8AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: General
  order: 1
---

## 아래와 같을 때 사용합니다

버튼은 작업(또는 일련의 작업들)을 의미합니다. 버튼을 클릭하면 해당 비지니스 로직이 실행됩니다.

Ant Design에서는 5가지 유형의 버튼을 제공합니다.

- 주 버튼(Primary button): 주요 작업에 사용되며, 한 섹션에 주 버튼은 최대 하나만 있을 수 있습니다.
- 기본 버튼(Default button): 우선순위가 없는 일련의 작업에 사용됩니다.
- 대시 버튼(Dashed button): 추가 작업을 위해 일반적으로 사용됩니다.
- 텍스트 버튼(Text button): 가장 부차적인 작업에 사용됩니다.
- 링크 버튼(Link button): 외부 링크에 사용됩니다.

추가적으로 4가지 속성이 더 있습니다:

- `danger`: 삭제나 권한 부여와 같은 위험한 작업에 사용됩니다.
- `ghost`: 복잡한 배경에서 사용되며, 주로 홈 화면에서 사용됩니다.
- `disabled`: 액션을 허락되지 않을 때 사용됩니다.
- `loading`: 버튼에 로딩 스피너를 추가하여 여러 번 제출하는 것을 방지합니다.

## 예시

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Syntactic sugar</code>
<code src="./demo/color-variant.tsx" version="5.21.0">Color & Variant</code>
<code src="./demo/debug-color-variant" debug>Debug Color & Variant</code>
<code src="./demo/icon.tsx">Icon</code>
<code src="./demo/icon-position.tsx" version="5.17.0">Icon Position</code>
<code src="./demo/debug-icon.tsx" debug>Debug Icon</code>
<code src="./demo/debug-block.tsx" debug>Debug Block</code>
<code src="./demo/size.tsx">Size</code>
<code src="./demo/disabled.tsx">Disabled</code>
<code src="./demo/loading.tsx">Loading</code>
<code src="./demo/multiple.tsx">Multiple Buttons</code>
<code src="./demo/ghost.tsx">Ghost Button</code>
<code src="./demo/danger.tsx">Danger Buttons</code>
<code src="./demo/block.tsx">Block Button</code>
<code src="./demo/legacy-group.tsx" debug>Deprecated Button Group</code>
<code src="./demo/chinese-chars-loading.tsx" debug>Loading style bug</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>
<code src="./demo/linear-gradient.tsx">Gradient Button</code>

## API

공통 속성 참조：[Common props](/docs/react/common-props)

다양한 버튼 스타일은 버튼 속성을 설정함으로써 생성할 수 있습니다. 추천하는 순서는: `type` -> `shape` -> `size` -> `loading` -> `disabled` 입니다.

| 속성 | 설명 | 유형 | 기본값 | 버전 |
| --- | --- | --- | --- | --- |
| autoInsertSpace | 기본적으로 두 개의 글자 사이에 공백을 추가하지만, `autoInsertSpace` 를 `false`로 설정하면 이 공백을 제거할 수 있습니다. | boolean | `true` | 5.17.0 |
| block | 버튼 너비를 부모 요소의 너비에 맞추는 옵션 | boolean | false |  |
| classNames | Semantic DOM 클래스 | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.4.0 |
| danger | 버튼을 danger status로 설정합니다. | boolean | false |  |
| disabled | 버튼을 비활성화 합니다. | boolean | false |  |
| ghost | 배경을 투명하게 만들고 텍스트와 테두리 색상을 반전시킵니다. | boolean | false |  |
| href | 링크 버튼의 리디렉션 URL 설정 | string | - |  |
| htmlType | `button`의 원래 HTML `type` 설정, 참고: [MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
| icon | 버튼의 아이콘 컴포넌트 설정 | ReactNode | - |  |
| iconPosition | 버튼의 아이콘 위치 설정 | `start` \| `end` | `start` | 5.17.0 |
| loading | 버튼의 로딩 상태 설정 | boolean \| { delay: number } | false |  |
| shape | 버튼 모양을 설정할 수 있습니다. | `default` \| `circle` \| `round` | `default` |  |
| size | 버튼의 사이즈 설정 | `large` \| `middle` \| `small` | `middle` |  |
| styles | Semantic DOM 스타일 | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.4.0 |
| target | 링크의 target 속성과 동일하며, href가 지정된 경우에 작동합니다. | string | - |  |
| type | 버튼 타입 설정 | `primary` \| `dashed` \| `link` \| `text` \| `default` | `default` |  |
| onClick | `click` 이벤트를 처리할 핸들러를 설정합니다. | (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |  |

네이티브 버튼이 지원하는 모든 속성을 받아들입니다.

## 시맨틱(의미 있는) DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## 디자인 토큰

<ComponentTokenTable component="Button"></ComponentTokenTable>

## 자주 물어보는 질문

### 유형과 색상 및 변형을 어떻게 선택하나요?

유형(type)은 본질적으로 색상(color)과 변형(variant)에 대한 추가(syntactic sugar)된 문법입니다. 내부적으로 유형에 대해 색상과 변형 간의 매핑 관계를 설정합니다. 두 가지가 동시에 존재하는 경우, 색상과 변형이 우선적으로 사용됩니다.

```jsx
<Button type="primary">click</Button>
```

아래와도 똑같습니다.

```jsx
<Button color="primary" variant="solid">
  click
</Button>
```

### 어떻게 클릭 파동 효과를 끌 수 있나요?

이 기능이 필요하지 않다면, [ConfigProvider](/components/config-provider#api)에서 `wave`의 `disabled`을 `true`로 설정할 수 있습니다.

```jsx
<ConfigProvider wave={{ disabled: true }}>
  <Button>click</Button>
</ConfigProvider>
```

<style>
.site-button-ghost-wrapper {
  padding: 16px;
  background: rgb(190, 200, 200);
}
</style>
