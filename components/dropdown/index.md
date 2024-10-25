---
category: Components
group: Navigation
title: Dropdown
description: 드롭다운 목록입니다.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gTBySYX11WcAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*k619RJ_7bKEAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## 언제 사용하나요?

선택할 수 있는 옵션이 여러 개 있을 경우, `Dropdown`으로 묶을 수 있습니다. 트리거 위에 마우스를 올리거나 클릭할 경우, 드롭다운 메뉴가 나타나고, 옵션을 선택하고 관련 작업을 실행할 수 있습니다.

## 예시

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">기본</code>
<code src="./demo/extra.tsx" version="5.21.0">추가 노드</code>
<code src="./demo/placement.tsx">배치</code>
<code src="./demo/arrow.tsx">화살표</code>
<code src="./demo/item.tsx">기타 요소</code>
<code src="./demo/arrow-center.tsx">중앙을 가리키는 화살표</code>
<code src="./demo/trigger.tsx">트리거 모드</code>
<code src="./demo/event.tsx">클릭 이벤트</code>
<code src="./demo/dropdown-button.tsx">드롭다운 메뉴가 있는 버튼</code>
<code src="./demo/custom-dropdown.tsx">사용자 지정 드롭다운</code>
<code src="./demo/sub-menu.tsx">계단식 메뉴</code>

<!-- <code src="./demo/sub-menu-debug.tsx" debug>계단식 메뉴</code> -->

<code src="./demo/overlay-open.tsx">메뉴를 숨기는 방법</code> <code src="./demo/context-menu.tsx">바로 가기 메뉴</code> <code src="./demo/loading.tsx">로딩</code> <code src="./demo/selectable.tsx">선택 가능한 메뉴</code>

<!-- <code src="./demo/menu-full.tsx" debug>메뉴 전체 스타일</code> -->
<!-- <code src="./demo/render-panel.tsx" debug>\_InternalPanelDoNotUseOrYouWillBeFired</code> -->
<!-- <code src="./demo/icon-debug.tsx" debug>아이콘 디버그</code> -->

## API

공통 속성 참조：[공통 속성](/docs/react/common-props)

### Dropdown

| 프로퍼티 | 설명 | 타입 | 기본값 | 버전 |
| --- | --- | --- | --- | --- |
| arrow | 드롭다운 화살표 표시 여부 | boolean \| { pointAtCenter: boolean } | false |  |
| autoAdjustOverflow | 드롭다운이 화면에서 사라졌을 때 드롭다운 배치를 자동으로 조정할지 여부 | boolean | true | 5.2.0 |
| autoFocus | 드롭다운이 열렸을 때 `overlay` 요소를 포커스합니다 Focus element in `overlay` when opened | boolean | false | 4.21.0 |
| disabled | 드롭다운 메뉴 비활성화 여부 | boolean | - |  |
| destroyPopupOnHide | 숨겨졌을 때 드롭다운 파괴 여부 | boolean | false |  |
| dropdownRender | 드롭다운 콘텐츠를 사용자 지정합니다 | (menus: ReactNode) => ReactNode | - | 4.24.0 |
| getPopupContainer | 드롭다운 메뉴의 컨테이너를 설정합니다. 기본적으로는 body 안에 div 요소를 만드는 것이지만, 스크롤 영역을 재설정하고 상대적인 위치를 변경할 수 있습니다. [CodePen에서의 예시](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) => HTMLElement | () => document.body |  |
| menu | 메뉴 컴포넌트의 props | [MenuProps](/components/menu/#api) | - | 4.24.0 |
| overlayClassName | 드롭다운 루트 요소의 클래스 이름 | string | - |  |
| overlayStyle | 드롭다운 루트 요소의 스타일 | CSSProperties | - |  |
| placement | 팝업 메뉴의 배치: `bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | string | `bottomLeft` |  |
| trigger | 드롭다운 동작을 실행하는 트리거 모드입니다. 마우스를 올리는 hover는 터치스크린에서 사용할 수 없다는 것을 주의하세요. | Array&lt;`click`\|`hover`\|`contextMenu`> | \[`hover`] |  |
| open | 드롭다운 메뉴가 현재 열려 있는지에 대한 여부입니다. 4.23.0 미만에서 `visible`을 사용합니다. ([그 이유에 대해서](/docs/react/faq#why-open)) | boolean | - | 4.23.0 |
| onOpenChange | open 상태가 변경될 때 호출됩니다. 메뉴 요소 클릭으로 인해 사라졌을 경우, 트리거되지 않습니다. 4.23.0 미만에서 `onVisibleChange`을 사용합니다. ([그 이유에 대해서](/docs/react/faq#why-open)) | (open: boolean, info: { source: 'trigger' \| 'menu' }) => void | - | `info.source`: 5.11.0 |

### Dropdown.Button

Dropdown의 props와 동일합니다. 그리고 다음과 같은 props를 추가로 포함하고 있습니다.

| 프로퍼티 | 설명 | 타입 | 기본값 | 버전 |
| --- | --- | --- | --- | --- |
| buttonsRender | Dropdown.Button 내부의 사용자 지정 버튼 | (buttons: ReactNode\[]) => ReactNode\[] | - |  |
| loading | 버튼의 로딩 상태 설정 | boolean \| { delay: number } | false |  |
| danger | 버튼의 위험 상태 설정 | boolean | - | 4.23.0 |
| icon | 아이콘 (오른쪽에 표시됩니다.) | ReactNode | - |  |
| size | 버튼의 크기, [Button](/components/button/#api)과 동일 | string | `default` |  |
| type | 버튼의 유형, [Button](/components/button/#api)과 동일 | string | `default` |  |
| onClick | [Button](/components/button/#api)과 동일: 왼쪽의 버튼을 클릭하면 호출됩니다. | (event) => void | - |  |

## Note

`Dropdown`의 자식 노드가 `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick` 이벤트를 허용하는지 확인해 주세요.

## Design Token

<ComponentTokenTable component="Dropdown"></ComponentTokenTable>

## FAQ

### Dropdown이 화면을 가로로 초과할 때 눌리는 것을 방지하려면 어떻게 해야 하나요?

`width: max-content`를 사용하여 해당 문제를 처리할 수 있습니다. [#43025](https://github.com/ant-design/ant-design/issues/43025#issuecomment-1594394135) 참조.
