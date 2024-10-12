---
category: Components
group: Data Entry
title: Select
description: 선택 항목을 표시하는 드롭다운 메뉴.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*qGSbQJ0POEsAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*a6ggRInInJ4AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## 사용 시기

- 선택 항목을 표시하는 드롭다운 메뉴 - 기본 `<select>` 태그의 세련된 대안
- 선택지가 5개 미만일 때 [Radio](/components/radio/) 컴포넌트가 권장 됩니다.
- 입력이 가능하면서 선택할 수도 있는 입력 상자를 원한다면 [AutoComplete](/components/auto-complete/)가 필요할 수 있습니다.

### 버전 5.11.0 이후 사용 방식 업그레이드

<!-- prettier-ignore -->
:::info{title="업그레이드 팁"}
5.11.0 버전 이후, 더 향상된 성능과 간소화된 코드 스타일을 만들 수 있는 `<Select options={[... ]}>` 을 제공합니다. 동시에 이전 버전은 더 이상 브라우저 콘솔에서 제공되지 않을 것이며, antd 6.0 버전에서 제거될 예정입니다.

:::

```jsx
// works when >=5.11.0, recommended ✅
return <Select options={[{ value: 'sample', label: <span>sample</span> }]} />;

// works when <5.11.0, deprecated when >=5.11.0 🙅🏻‍♀️
return (
  <Select onChange={onChange}>
    <Select.Option value="sample">Sample</Select.Option>
  </Select>
);
```

## 사용 예시

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">기본 사용법</code>
<code src="./demo/search.tsx">검색 필드가 포함된 Select</code>
<code src="./demo/search-filter-option.tsx">사용자 정의 검색</code>
<code src="./demo/multiple.tsx">다중 선택</code>
<code src="./demo/size.tsx">크기</code>
<code src="./demo/option-render.tsx">사용자 정의 드롭다운 항목</code>
<code src="./demo/search-sort.tsx">정렬 검색</code>
<code src="./demo/tags.tsx">Tags</code>
<code src="./demo/optgroup.tsx">그룹 항목</code>
<code src="./demo/coordinate.tsx">조정</code>
<code src="./demo/search-box.tsx">검색 상자</code>
<code src="./demo/label-in-value.tsx">선택된 항목의 값 가져오기
</code>
<code src="./demo/automatic-tokenization.tsx">자동 토큰화</code>
<code src="./demo/select-users.tsx">검색 및 유저 선택</code>
<code src="./demo/suffix.tsx" debug>접미사</code>
<code src="./demo/custom-dropdown-menu.tsx">사용자 정의 드롭다운</code>
<code src="./demo/hide-selected.tsx">선택 항목 숨기기</code>
<code src="./demo/variant.tsx" version="5.13.0">다형성</code>
<code src="./demo/filled-debug.tsx" debug>디버그 항목 표시</code>
<code src="./demo/custom-tag-render.tsx">사용자 정의 태그 렌더링</code>
<code src="./demo/custom-label-render.tsx">사용자 정의 선택된 레이블 렌더링</code>
<code src="./demo/responsive.tsx">반응형 Tags 갯수</code>
<code src="./demo/big-data.tsx">빅데이터</code>
<code src="./demo/status.tsx">상태</code>
<code src="./demo/placement.tsx">배치</code>
<code src="./demo/placement-debug.tsx" debug>동적 높이 설정</code>
<code src="./demo/debug.tsx" debug>4.0 디버그</code>
<code src="./demo/render-panel.tsx" debug>내부 패널(사용하지 마십시오, 그렇지 않으면 해고 될 수 있습니다)
</code>
<code src="./demo/option-label-center.tsx" debug>옵션 레이블 중앙 정렬</code>
<code src="./demo/debug-flip-shift.tsx" iframe="200" debug>Flip + Shift</code>
<code src="./demo/component-token.tsx" debug>컴포넌트 Token</code>
<code src="./demo/maxCount.tsx" version="5.13.0">최대 갯수</code>

## API

Common props ref：[Common props](/docs/react/common-props)

### Select props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | Customize clear icon | boolean \| { clearIcon?: ReactNode } | false | 5.8.0: Support object type |
| autoClearSearchValue | Whether the current search will be cleared on selecting an item. Only applies when `mode` is set to `multiple` or `tags` | boolean | true |  |
| autoFocus | Get focus by default | boolean | false |  |
| defaultActiveFirstOption | Whether active first option by default | boolean | true |  |
| defaultOpen | Initial open state of dropdown | boolean | - |  |
| defaultValue | Initial selected option | string \| string\[] \| <br />number \| number\[] \| <br />LabeledValue \| LabeledValue\[] | - |  |
| disabled | Whether disabled select | boolean | false |  |
| popupClassName | The className of dropdown menu | string | - | 4.23.0 |
| popupMatchSelectWidth | Determine whether the popup menu and the select input are the same width. Default set `min-width` same as input. Will ignore when value less than select width. `false` will disable virtual scroll | boolean \| number | true | 5.5.0 |
| dropdownRender | Customize dropdown content | (originNode: ReactNode) => ReactNode | - |  |
| dropdownStyle | The style of dropdown menu | CSSProperties | - |  |
| fieldNames | Customize node label, value, options，groupLabel field name | object | { label: `label`, value: `value`, options: `options`, groupLabel: `label` } | 4.17.0 (`groupLabel` added in 5.6.0) |
| filterOption | If true, filter options by input, if function, filter options against it. The function will receive two arguments, `inputValue` and `option`, if the function returns `true`, the option will be included in the filtered set; Otherwise, it will be excluded | boolean \| function(inputValue, option) | true |  |
| filterSort | Sort function for search options sorting, see [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)'s compareFunction | (optionA: Option, optionB: Option, info: { searchValue: string }) => number | - | `searchValue`: 5.19.0 |
| getPopupContainer | Parent Node which the selector should be rendered to. Default to `body`. When position issues happen, try to modify it into scrollable content and position it relative. [Example](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode) | () => document.body |  |
| labelInValue | Whether to embed label in value, turn the format of value from `string` to { value: string, label: ReactNode } | boolean | false |  |
| listHeight | Config popup height | number | 256 |  |
| loading | Indicate loading state | boolean | false |  |
| maxCount | The max number of items can be selected, only applies when `mode` is `multiple` or `tags` | number | - | 5.13.0 |
| maxTagCount | Max tag count to show. `responsive` will cost render performance | number \| `responsive` | - | responsive: 4.10 |
| maxTagPlaceholder | Placeholder for not showing tags | ReactNode \| function(omittedValues) | - |  |
| maxTagTextLength | Max tag text length to show | number | - |  |
| menuItemSelectedIcon | The custom menuItemSelected icon with multiple options | ReactNode | - |  |
| mode | Set mode of Select | `multiple` \| `tags` | - |  |
| notFoundContent | Specify content to show when no result matches | ReactNode | `Not Found` |  |
| open | Controlled open state of dropdown | boolean | - |  |
| optionFilterProp | Which prop value of option will be used for filter if filterOption is true. If `options` is set, it should be set to `label` | string | `value` |  |
| optionLabelProp | Which prop value of option will render as content of select. [Example](https://codesandbox.io/s/antd-reproduction-template-tk678) | string | `children` |  |
| options | Select options. Will get better perf than jsx definition | { label, value }\[] | - |  |
| optionRender | Customize the rendering dropdown options | (option: FlattenOptionData\<BaseOptionType\> , info: { index: number }) => React.ReactNode | - | 5.11.0 |
| placeholder | Placeholder of select | ReactNode | - |  |
| placement | The position where the selection box pops up | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |  |
| removeIcon | The custom remove icon | ReactNode | - |  |
| searchValue | The current input "search" text | string | - |  |
| showSearch | Whether select is searchable | boolean | single: false, multiple: true |  |
| size | Size of Select input | `large` \| `middle` \| `small` | `middle` |  |
| status | Set validation status | 'error' \| 'warning' | - | 4.19.0 |
| suffixIcon | The custom suffix icon. Customize icon will not response click open to avoid icon designed to do other interactive. You can use `pointer-events: none` style to bypass | ReactNode | `<DownOutlined />` |  |
| tagRender | Customize tag render, only applies when `mode` is set to `multiple` or `tags` | (props) => ReactNode | - |  |
| labelRender | Customize selected label render (LabelInValueType definition see [LabelInValueType](https://github.com/react-component/select/blob/b39c28aa2a94e7754ebc570f200ab5fd33bd31e7/src/Select.tsx#L70)) | (props: LabelInValueType) => ReactNode | - | 5.15.0 |
| tokenSeparators | Separator used to tokenize, only applies when `mode="tags"` | string\[] | - |  |
| value | Current selected option (considered as a immutable array) | string \| string\[] \| <br />number \| number\[] \| <br />LabeledValue \| LabeledValue\[] | - |  |
| variant | Variants of selector | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| virtual | Disable virtual scroll when set to false | boolean | true | 4.1.0 |
| onBlur | Called when blur | function | - |  |
| onChange | Called when select an option or input value change | function(value, option:Option \| Array&lt;Option>) | - |  |
| onClear | Called when clear | function | - | 4.6.0 |
| onDeselect | Called when an option is deselected, param is the selected option's value. Only called for `multiple` or `tags`, effective in multiple or tags mode only | function(value: string \| number \| LabeledValue) | - |  |
| onDropdownVisibleChange | Called when dropdown open | (open: boolean) => void | - |  |
| onFocus | Called when focus | (event: FocusEvent) => void | - |  |
| onInputKeyDown | Called when key pressed | (event: KeyboardEvent) => void | - |  |
| onPopupScroll | Called when dropdown scrolls | (event: UIEvent) => void | - |  |
| onSearch | Callback function that is fired when input changed | function(value: string) | - |  |
| onSelect | Called when an option is selected, the params are option's value (or key) and option instance | function(value: string \| number \| LabeledValue, option: Option) | - |  |

> Note, if you find that the drop-down menu scrolls with the page, or you need to trigger Select in other popup layers, please try to use `getPopupContainer={triggerNode => triggerNode.parentElement}` to fix the drop-down popup rendering node in the parent element of the trigger .

### Select Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | Remove focus |         |
| focus() | Get focus    |         |

### Option props

| Property  | Description                          | Type             | Default | Version |
| --------- | ------------------------------------ | ---------------- | ------- | ------- |
| className | The additional class to option       | string           | -       |         |
| disabled  | Disable this option                  | boolean          | false   |         |
| title     | `title` attribute of Select Option   | string           | -       |         |
| value     | Default to filter with this property | string \| number | -       |         |

### OptGroup props

| Property  | Description                        | Type            | Default | Version |
| --------- | ---------------------------------- | --------------- | ------- | ------- |
| key       | Group key                          | string          | -       |         |
| label     | Group label                        | React.ReactNode | -       |         |
| className | The additional class to option     | string          | -       |         |
| title     | `title` attribute of Select Option | string          | -       |         |

## Design Token

<ComponentTokenTable component="Select"></ComponentTokenTable>

## FAQ

### Why sometime search will show 2 same option when in `tags` mode?

It's caused by option with different `label` and `value`. You can use `optionFilterProp="label"` to change filter logic instead.

### When I click elements in dropdownRender, the select dropdown will not be closed?

You can control it by `open` prop: [codesandbox](https://codesandbox.io/s/ji-ben-shi-yong-antd-4-21-7-forked-gnp4cy?file=/demo.js).

### I don't want dropdown close when click inside `dropdownRender`?

Select will close when it lose focus. You can prevent event to handle this:

```tsx
<Select
  dropdownRender={() => (
    <div
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      Some Content
    </div>
  )}
/>
```

### Why sometime customize Option cause scroll break?

Virtual scroll internal set item height as `24px`. You need to adjust `listItemHeight` when your option height is less and `listHeight` config list container height:

```tsx
<Select listItemHeight={10} listHeight={250} />
```

Note: `listItemHeight` and `listHeight` are internal props. Please only modify when necessary.

### Why a11y test report missing `aria-` props?

Select only create a11y auxiliary node when operating on. Please open Select and retry. For `aria-label` & `aria-labelledby` miss warning, please add related prop to Select with your own requirement.

Default virtual scrolling will create a mock element to simulate an accessible binding. If a screen reader needs to fully access the entire list, you can set `virtual={false}` to disable virtual scrolling and the accessibility option will be bound to the actual element.
