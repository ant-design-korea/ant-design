---
category: Components
title: Divider
description: 구분선은 서로 다른 콘텐츠를 구분해줍니다.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7sMiTbzvaDoAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KPSEQ74PLg4AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: Layout
  order: 2
---

## 언제 사용하나요?

- 문서의 섹션을 구분합니다.
- 테이블의 작업 열처럼 인라인 텍스트와 링크를 구분합니다.

## 예시

<!-- prettier-ignore -->
<code src="./demo/horizontal.tsx">수평구분선</code>
<code src="./demo/with-text.tsx">제목이 포함된 구분선</code>
<code src="./demo/plain.tsx">헤딩 스타일이 없는 텍스트</code>
<code src="./demo/vertical.tsx">수직구분선</code>
<code src="./demo/customize-style.tsx" debug>스타일 사용자 지정</code>
<code src="./demo/component-token.tsx" debug>컴포넌트 토큰</code>
<code src="./demo/variant.tsx">변형</code>

## API

공통 props 참조：[공통 props](/docs/react/common-props)

| 속성 | 설명 | 타입 | 기본값 | 버전 |
| --- | --- | --- | --- | --- |
| children | 랩핑된 제목 | ReactNode | - |  |
| className | 컨테이너의 스타일 클래스 | string | - |  |
| dashed | 구분선의 점선 여부 | boolean | false |  |
| variant | 구분선의 점선, 점선과 실선의 혼합, 실선 여부 | `dashed` \| `dotted` \| `solid` | solid | 5.20.0 |
| orientation | 구분선 내 제목의 위치 | `left` \| `right` \| `center` | `center` |  |
| orientationMargin | 제목과 가장 가까운 경계 사이의 왼쪽/오른쪽 여백은 `orientation`이 `left` 또는 `right`일 때 적용됩니다. 문자열 형식의 숫자 값이 단위 없이 제공되면, 기본적으로 픽셀(px)로 간주 | string \| number | - |  |
| plain | 구분선 텍스트가 일반 스타일로 표시 | boolean | true | 4.2.0 |
| style | 컨테이너의 스타일 객체 | CSSProperties | - |  |
| type | 구분선의 방향 타입 | `horizontal` \| `vertical` | `horizontal` |  |

## Design Token

<ComponentTokenTable component="Divider"></ComponentTokenTable>
