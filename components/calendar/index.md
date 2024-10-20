---
category: Components
group: Data Display
title: Calendar
description: 달력 형태로 데이터를 표시하는 컨테이너.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*nF6_To7pDSAAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-p-wQLik200AAAAAAAAAAAAADrJ8AQ/original
---

## 언제 사용하나요?

스케줄, 시간표, 가격 캘린더, 음력 달력과 같은 날짜 형태의 데이터가 있는 경우 사용합니다. 또한 `Calendar` 컴포넌트는 연/월 전환을 지원합니다.

## 예시

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" clientOnly>Basic</code>
<code src="./demo/notice-calendar.tsx" clientOnly>Notice Calendar</code>
<code src="./demo/card.tsx" clientOnly>Card</code>
<code src="./demo/select.tsx" clientOnly>Selectable Calendar</code>
<code src="./demo/lunar.tsx" clientOnly>Lunar Calendar</code>
<code src="./demo/customize-header.tsx" clientOnly>Customize Header</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>

## API

공통 props 참조：[공통 props](/docs/react/common-props)

**참고:** 캘린더의 일부 locale은 `value`에서 읽혀집니다. 따라서, `dayjs`의 locale을 올바르게 설정해주세요.

```jsx
// 기본 locale은 en-US 입니다. 다른 locale을 사용하고 싶다면, 전역적으로 entry file 에서 locale을 설정하세요.
// import dayjs from 'dayjs';
// import 'dayjs/locale/zh-cn';
// dayjs.locale('zh-cn');

<Calendar cellRender={cellRender} onPanelChange={onPanelChange} onSelect={onSelect} />
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| cellRender | 셀 내용 커스텀 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| dateFullCellRender | 날짜 셀의 외형를 커스텀하여 셀을 덮어씁니다. | function(date: Dayjs): ReactNode | - |  |
| fullCellRender | 셀 내용 커스텀 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| defaultValue | 기본으로 선택된 날짜 | [dayjs](https://day.js.org/) | - |  |
| disabledDate | 선택할 수 없는 날짜를 지정하는 함수, `currentDate`는 `value` 속성과 동일한 dayjs 객체입니다 (이 객체를 변형해서는 안 됩니다)](https://github.com/ant-design/ant-design/issues/30987) | (currentDate: Dayjs) => boolean | - |  |
| fullscreen | 전체 화면으로 표시 여부 | boolean | true |  |
| headerRender | 패널에 사용자 정의 헤더 렌더링 | function(object:{value: Dayjs, type: string, onChange: f(), onTypeChange: f()}) | - |  |
| locale | 달력의 locale | object | [(default)](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  |
| mode | 달력의 표시 모드 | `month` \| `year` | `month` |  |
| validRange | 유효 범위 설정 | \[[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | - |  |
| value | 현재 선택된 날짜 | [dayjs](https://day.js.org/) | - |  |
| onChange | 날짜 변경 시 콜백 | function(date: Dayjs) | - |  |
| onPanelChange | 패널 변경 시 콜백 | function(date: Dayjs, mode: string) | - |  |
| onSelect | source info 를 포함하는 날짜를 선택할 시 콜백 | function(date: Dayjs, info: { source: 'year' \| 'month' \| 'date' \| 'customize' }) | - | `info`: 5.6.0 |

## Design Token

<ComponentTokenTable component="Calendar"></ComponentTokenTable>

## FAQ

### 어떻게 커스텀 날짜 라이브러리로 `Calendar`를 사용하나요?

[커스텀 날짜 라이브러리 사용하기](/docs/react/use-custom-date-library#calendar)를 참조하세요.

### 어떻게 날짜 관련 컴포넌트의 locale을 설정하나요?

[날짜 관련 컴포넌트의 로케일 설정 방법](/components/date-picker/#localization)을 참조하세요.

### 날짜 관련 컴포넌트의 로케일이 작동하지 않나요?

자주 묻는 질문 [날짜 관련 컴포넌트의 로케일이 작동하지 않나요?](/docs/react/faq#date-related-components-locale-is-not-working)을 참조하세요.

### 패널 클릭으로 날짜를 어떻게 얻나요?

`onSelect`는 이를 위해 `info.source`를 제공합니다.

```tsx
<Calendar
  onSelect={(date, { source }) => {
    if (source === 'date') {
      console.log('Panel Select:', source);
    }
  }}
/>
```
