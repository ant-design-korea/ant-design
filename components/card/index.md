---
category: Components
group: Data Display
title: Card
description: 데이터를 담아 보여주기 위한 컨테이너입니다.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*QXO1SKEdIzYAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*5WDvQp_H7LUAAAAAAAAAAAAADrJ8AQ/original
---

## 언제 사용할까요?

카드는 단일 주제와 관련된 콘텐츠를 표시하는 데 사용할 수 있습니다. 이 콘텐츠는 다양한 유형과 크기의 여러 요소로 구성될 수 있습니다.

## 예시

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Basic card</code>
<code src="./demo/border-less.tsx" background="grey">No border</code>
<code src="./demo/simple.tsx">Simple card</code>
<code src="./demo/flexible-content.tsx">Customized content</code>
<code src="./demo/in-column.tsx" background="grey">Card in column</code>
<code src="./demo/loading.tsx">Loading card</code>
<code src="./demo/grid-card.tsx">Grid card</code>
<code src="./demo/inner.tsx">Inner card</code>
<code src="./demo/tabs.tsx">With tabs</code>
<code src="./demo/meta.tsx">Support more content configuration</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>

## API

Common props ref：[Common props](/docs/react/common-props)

```jsx
<Card title="Card title">카드 내용</Card>
```

| 프로퍼티 | 설명 | 타입 | 기본값 | 버전 |
| --- | --- | --- | --- | --- |
| actions | 카드의 하단에 표시되는 작업 목록 | Array&lt;ReactNode> | - |  |
| activeTabKey | 현재 TabPane의 키 | string | - |  |
| bordered | 카드 주위의 테두리 렌더링하는 토글 여부 | boolean | true |  |
| cover | 카드 커버 | ReactNode | - |  |
| defaultActiveTabKey | `activeTabKey`가 설정되지 않은 경우 초기 활성 탭 패널의 키 | string | `The key of first tab` |  |
| extra | 카드의 오른쪽 상단에 렌더링할 콘텐츠 | ReactNode | - |  |
| hoverable | 카드를 호버할 때 카드가 위로 올라갑니다. | boolean | false |  |
| loading | 카드의 콘텐츠를 가져오는 동안 로딩 표시 여부 | boolean | false |  |
| size | 카드의 크기 | `default` \| `small` | `default` |  |
| tabBarExtraContent | 탭 바의 추가 콘텐츠 | ReactNode | - |  |
| tabList | 탭 패널의 상단 목록 | [TabItemType](/components/tabs#tabitemtype)[] | - |  |
| tabProps | [탭](/components/tabs/#tabs) | - | - |  |
| title | 카드 제목 | ReactNode | - |  |
| type | 카드 스타일 유형을 `내부`로 설정하거나 설정하지 않을 수 있습니다. | string | - |  |
| classNames | 카드 내장 모듈의 className 구성 | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.14.0 |
| styles | 카드 내장 모듈의 스타일 구성 | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.14.0 |
| onTabChange | 탭이 전환될 때 호출되는 콜백 | (key) => void | - |  |

### Card.Grid

| Property  | Description                     | Type          | Default | Version |
| --------- | ------------------------------- | ------------- | ------- | ------- |
| className | The className of container      | string        | -       |         |
| hoverable | Lift up when hovering card grid | boolean       | true    |         |
| style     | The style object of container   | CSSProperties | -       |         |

### Card.Meta

| Property    | Description                   | Type          | Default | Version |
| ----------- | ----------------------------- | ------------- | ------- | ------- |
| avatar      | Avatar or icon                | ReactNode     | -       |         |
| className   | The className of container    | string        | -       |         |
| description | Description content           | ReactNode     | -       |         |
| style       | The style object of container | CSSProperties | -       |         |
| title       | Title content                 | ReactNode     | -       |         |

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## Design Token

<ComponentTokenTable component="Card"></ComponentTokenTable>
