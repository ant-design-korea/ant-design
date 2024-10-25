---
group: Feedback
category: Components
title: Result
description: 일련의 작업 처리 결과를 피드백하는 데 사용됩니다.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-e2IRroDJyEAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-0kxQrbHx2kAAAAAAAAAAAAADrJ8AQ/original
---

## 이럴 때 사용하세요

중요한 작업의 결과를 사용자에게 알릴 필요가 있을 때나, 복잡한 피드백을 제공해야 할 때 사용합니다.

## 예시

<!-- prettier-ignore -->
<code src="./demo/success.tsx">Success</code>
<code src="./demo/info.tsx">Info</code>
<code src="./demo/warning.tsx">Warning</code>
<code src="./demo/403.tsx">403</code>
<code src="./demo/404.tsx">404</code>
<code src="./demo/500.tsx">500</code>
<code src="./demo/error.tsx">Error</code>
<code src="./demo/customIcon.tsx">Custom icon</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>

## API

공통 props 참조：[공통 props](/docs/react/common-props)

| 프로퍼티 | 설명 | 타입 | 기본값 |
| --- | --- | --- | --- |
| extra | 작업 영역 | ReactNode | - |
| icon | 사용자 지정 백 아이콘 | ReactNode | - |
| status | 결과 상태, 아이콘 및 색상을 결정합니다. | `success` \| `error` \| `info` \| `warning` \| `404` \| `403` \| `500` | `info` |
| subTitle | 부제목 | ReactNode | - |
| title | 제목 | ReactNode | - |

## 디자인 토큰

<ComponentTokenTable component="Result"></ComponentTokenTable>
