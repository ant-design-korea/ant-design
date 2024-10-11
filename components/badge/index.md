---
category: Components
title: Badge
description: UI 요소에 대한 작은 숫자 값 또는 상태 설명자입니다.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e0qITYqF394AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*v8EQT7KoGbcAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group: Data Display
---

## When To Use

배지는 일반적으로 알림 또는 프로필 사진에 근접하여 눈길을 끌도록 표시되며, 보통 읽지 않은 메시지 수가 표시됩니다.

## Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Basic</code>
<code src="./demo/no-wrapper.tsx">Standalone</code>
<code src="./demo/overflow.tsx">Overflow Count</code>
<code src="./demo/dot.tsx">Red badge</code>
<code src="./demo/change.tsx">Dynamic</code>
<code src="./demo/link.tsx">Clickable</code>
<code src="./demo/offset.tsx">Offset</code>
<code src="./demo/size.tsx">Size</code>
<code src="./demo/status.tsx">Status</code>
<code src="./demo/colorful.tsx">Colorful Badge</code>
<code src="./demo/ribbon.tsx">Ribbon</code>
<code src="./demo/ribbon-debug.tsx" debug>Ribbon Debug</code>
<code src="./demo/mix.tsx" debug>Mixed usage</code>
<code src="./demo/title.tsx" debug>Title</code>
<code src="./demo/colorful-with-count-debug.tsx" debug>Colorful Badge support count Debug</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>

## API

Common props ref：[Common props](/docs/react/common-props)

### Badge

| 프로퍼티 | 설명 | 타입 | 기본값 | 버전 |
| --- | --- | --- | --- | --- |
| color | 배지 도트 색상의 사용자 지정 | string | - |  |
| count | 배지에 표시할 숫자, overflowCount보다 큰 경우 `${overflowCount}+`로 표시되고, 0일 경우 숨김 | ReactNode | - |  |
| classNames | 시맨틱 DOM 클래스 | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.7.0 |
| dot | `count` 대신 빨간 색 도트를 표시 여부 | boolean | false |  |
| offset | 배지 도트의 오프셋 설정 | \[number, number] | - |  |
| overflowCount | 표시할 최대 개수 | number | 99 |  |
| showZero | `count`가 0일 때 배지를 표시할지에 대한 여부 | boolean | false |  |
| size | `count`가 설정되어 있다면, `size`는 배지의 크기를 설정 | `default` \| `small` | - | - |
| status | 배지를 상태 표시 도트로 설정 | `success` \| `processing` \| `default` \| `error` \| `warning` | - |  |
| styles | 시멘틱 DOM 스타일 | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.7.0 |
| text | `status`가 설정되어 있다면, `text`는 `dot` 상태 표시 내용을 설정 | ReactNode | - |  |
| title | 배지 위에 커서가 올라갔을 때 표시할 내용 | string | - |  |

### Badge.Ribbon

| 프로퍼티 | 설명 | 타입 | 기본값 | 버전 |
| --- | --- | --- | --- | --- |
| color | 리본 색상의 사용자 지정 | string | - |  |
| placement | 리본의 배치, `start` 와 `end`를 통한 텍스트 방향 설정 (RTL 혹은 LTR) | `start` \| `end` | `end` |  |
| text | 리본 내의 콘텐츠 | ReactNode | - |  |

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## Design Token

<ComponentTokenTable component="Badge"></ComponentTokenTable>
