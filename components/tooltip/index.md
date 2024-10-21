---
category: Components
group: Data Display
title: Tooltip
description: 간단한 텍스트 팝업 상자.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*9LKlRbWytugAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bCbPTJ7LQngAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## 언제 사용하나요?

- 마우스를 올리면 툴팁이 나타나고, 마우스를 떼면 툴팁이 사라집니다. 툴팁은 복잡한 텍스트나 작업을 지원하지 않습니다.
- `button/text/operation`에 대한 설명을 제공하기 위해 사용됩니다. 종종 HTML의 `title` 속성 대신 사용됩니다.

## 예시

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Basic</code>
<code src="./demo/placement.tsx">Placement</code>
<code src="./demo/arrow.tsx">Arrow</code>
<code src="./demo/shift.tsx" iframe="300">Auto Shift</code>
<code src="./demo/auto-adjust-overflow.tsx" debug>Adjust placement automatically</code>
<code src="./demo/destroy-tooltip-on-hide.tsx" debug>Destroy tooltip when hidden</code>
<code src="./demo/colorful.tsx">Colorful Tooltip</code>
<code src="./demo/render-panel.tsx" debug>_InternalPanelDoNotUseOrYouWillBeFired</code>
<code src="./demo/debug.tsx" debug>Debug</code>
<code src="./demo/disabled.tsx">Disabled</code>
<code src="./demo/disabled-children.tsx" debug>Disabled children</code>

## API

Common props ref：[Common props](/docs/react/common-props)

| Property | Description            | Type                         | Default |
| -------- | ---------------------- | ---------------------------- | ------- |
| title    | 툴팁에 표시되는 텍스트 | ReactNode \| () => ReactNode | -       |

### 공통 API

다음 API는 Tooltip, Popconfirm, Popover에서 공통으로 사용됩니다.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| align | 이 값은 placement 설정에 병합됩니다. 설정은 [dom-align](https://github.com/yiminghe/dom-align)을 참조하세요. | object | - |  |
| arrow | 화살표의 가시성을 변경하고, 화살표가 대상의 중앙을 가리킬지 여부 | boolean \| { pointAtCenter: boolean } | true | 5.2.0 |
| autoAdjustOverflow | 팝업이 화면에서 벗어날 때 팝업 위치를 자동으로 조정할지 여부 | boolean | true |  |
| color | 배경 색상 | string | - | 4.3.0 |
| defaultOpen | 툴팁 카드가 기본적으로 열려 있는지 여부 | boolean | false | 4.23.0 |
| destroyTooltipOnHide | 툴팁이 숨겨질 때 삭제할지 여부 | boolean | false |  |
| fresh | 툴팁이 닫히면 콘텐츠를 캐싱합니다. 이 속성을 설정하면 계속해서 업데이트됩니다. | boolean | false | 5.10.0 |
| getPopupContainer | 팁이 표시될 DOM 컨테이너, 기본 동작은 `body`에 `div` 요소를 생성합니다. | (triggerNode: HTMLElement) => HTMLElement | () => document.body |  |
| mouseEnterDelay | 마우스를 올렸을 때 툴팁이 표시되기 전까지의 지연 시간 (초) | number | 0.1 |  |
| mouseLeaveDelay | 마우스를 뗐을 때 툴팁이 숨겨지기 전까지의 지연 시간 (초) | number | 0.1 |  |
| overlayClassName | 툴팁 카드의 클래스명 | string | - |  |
| overlayStyle | 툴팁 카드의 스타일 | object | - |  |
| overlayInnerStyle | 툴팁 내부 콘텐츠의 스타일 | object | - |  |
| placement | 대상과의 상대적 위치, 선택 가능한 값: `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string | `top` |  |
| trigger | 툴팁을 트리거하는 모드. 배열을 전달하여 여러 모드를 설정할 수 있음 | `hover` \| `focus` \| `click` \| `contextMenu` \| Array&lt;string> | `hover` |  |
| open | 툴팁 카드가 열려 있는지 여부. 4.23.0 이하에서는 `visible` 사용([이유 보기](/docs/react/faq#why-open)) | boolean | false | 4.23.0 |
| zIndex | 툴팁의 `z-index` 설정 | number | - |  |
| onOpenChange | 툴팁 카드의 가시성이 변경될 때 실행되는 콜백 | (open: boolean) => void | - | 4.23.0 |

## Design Token

<ComponentTokenTable component="Tooltip"></ComponentTokenTable>

## FAQ

### 왜 strict mode에서 `findDOMNode is deprecated` 경고가 종종 발생하나요?

이 문제는 `rc-trigger`의 구현 방식 때문입니다. `rc-trigger`는 자식 컴포넌트가 ref를 받아들이도록 강제하며, 그렇지 않으면 `findDOMNode`로 대체됩니다. 따라서 자식 컴포넌트는 네이티브 HTML 태그여야 하며, 그렇지 않다면 `React.forwardRef`를 사용합니다. `React.forwardRef`를 사용하면 ref가 네이티브 HTML 태그로 자동으로 넘겨줍니다.

- `findDOMNode is deprecated` 재현: <https://codesandbox.io/p/sandbox/finddomnode-c5hy96>
- `forwardRef`를 사용하여 문제 해결: <https://codesandbox.io/p/sandbox/no-finddomnode-warning-forked-gdxczs>

### 왜 가끔 HOC에서 작동하지 않나요?

`Tooltip`의 자식 노드가 `onMouseEnter`, `onMouseLeave`, `onPointerEnter`, `onPointerLeave`, `onFocus`, `onClick` 이벤트를 받아들이는지 확인해야 합니다.

### placement 로직은 어떻게 되나요?

화면에 충분한 공간이 있으면 `placement` 설정을 따릅니다. 공간이 충분하지 않을 경우 `top`에서 `bottom` 또는 `topLeft`에서 `bottomLeft` 등으로 반전됩니다. `top`, `bottom`, `left`, `right`와 같은 단일 방향은 화면에 맞게 자동으로 이동됩니다:

<img alt="shift" height="200" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sxaTTJjLtIMAAAAAAAAAAAAADrJ8AQ/original" />

`topLeft` `bottomRight`와 같이 가장자리에 맞춰진 `placement`의 경우 반전만 수행되고 이동은 하지 않습니다.

### 왜 Tooltip이 닫힐 때 콘텐츠가 업데이트되지 않나요?

Tooltip은 닫힐 때 콘텐츠를 캐싱하여 콘텐츠가 업데이트될 때 깜빡임을 방지합니다:

```jsx
// `title` will not blink when `user` is empty
<Tooltip open={user} title={user?.name} />
```

<div>
<img alt="no blink" height="50" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KVx7QLOYwVsAAAAAAAAAAAAADrJ8AQ/original" />
</div>

닫힐 때 콘텐츠를 업데이트해야 하는 경우, `fresh` 속성을 설정할 수 있습니다. ([#44830](https://github.com/ant-design/ant-design/issues/44830)):

```jsx
<Tooltip open={user} title={user?.name} fresh />
```

<div>
<img alt="no blink" height="50" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*rUbsR4xWpMsAAAAAAAAAAAAADrJ8AQ/original" />
</div>
