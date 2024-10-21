---
category: Components
title: Alert
description: 주의가 필요한 경고 메시지 표시,
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*QsvtS41m45UAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gOTISoMFZV0AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: Feedback
  order: 6
---

## 언제 사용하나요?

- 사용자에게 알림 메세지를 표시해야 해야하는 경우.
- 사용자 동작으로 닫을 수 있는 지속적인 정적 컨테이너가 필요할 때 사용합니다. <br/>이는 화면에 고정되어 표시되며, 자동으로 사라지지 않고 사용자가 직접 닫기 버튼을 클릭해야 닫힙니다.

## 예시

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">기본</code>
<code src="./demo/style.tsx">네 가지 스타일</code>
<code src="./demo/closable.tsx">닫힘</code>
<code src="./demo/description.tsx">설명문</code>
<code src="./demo/icon.tsx">아이콘</code>
<code src="./demo/banner.tsx" iframe="250">배너</code>
<code src="./demo/loop-banner.tsx">순환 배너</code>
<code src="./demo/smooth-closed.tsx">부드러운 닫힘</code>
<code src="./demo/error-boundary.tsx">오류 처리 컴포넌트</code>
<code src="./demo/custom-icon.tsx" debug>커스텀 아이콘</code>
<code src="./demo/action.tsx">커스텀 액션</code>
<code src="./demo/component-token.tsx" debug>구성 Token</code>

## API

공통 속성 참조: [공통 속성](/docs/react/common-props)

| 속성 | 본문 | 타입 | 기본값 | 버전 |
| --- | --- | --- | --- | --- |
| action | 알림의 맞춤 동작 | ReactNode | - | 4.9.0 |
| afterClose | 닫기 애니메이션 종료 시 실행되는 콜백 함수 | () => void | - |  |
| banner | 상단 배너로 표시할지 여부 | boolean | false |  |
| closable | 닫기 가능 설정, 버전 5.15.0 이상: `aria-* 지원` | boolean \| ({ closeIcon?: React.ReactNode } & React.AriaAttributes) | `false` |  |
| description | 알림의 설명 내용 | ReactNode | - |  |
| icon | 사용자 정의 아이콘, `showIcon`이 true일 때 적용됨 | ReactNode | - |  |
| message | 알림 내용 | ReactNode | - |  |
| showIcon | 아이콘 표시 여부 | boolean | false，`banner` 모드 에서는 기본값이 true |  |
| type | 알림 스타일 유형, 4가지 옵션 `success`、`info`、`warning`、`error` | string | `info`，`banner` 모드 에서는 기본값이 `warning` |  |
| onClose | 알림이 닫힐 때 호출되는 콜백 함수 | (e: MouseEvent) => void | - |  |

### Alert.ErrorBoundary

| 속성 | 본문 | 타입 | 기본값 | 버전 |
| --- | --- | --- | --- | --- |
| description | 표시할 사용자 정의 오류 설명, 지정하지 않으면 오류 스택이 표시됨 | ReactNode | {{ error stack }} |  |
| message | 표시할 사용자 정의 오류 메시지, 지정하지 않으면 기본 오류 메시지가 표시됨 | ReactNode | {{ error }} |  |

## Design Token

<ComponentTokenTable component="Alert"></ComponentTokenTable>
