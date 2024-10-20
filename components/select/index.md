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

공통 props 레퍼런스 [Common props](/docs/react/common-props)

### Select props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | 사용자 정의 초기화 아이콘을 설정 가능하게 해줍니다. | boolean \| { clearIcon?: ReactNode } | false | 5.8.0: Support object type |
| autoClearSearchValue | 항목을 선택할 때 현재 검색어가 지워질 지 여부를 설정할 수 있습니다. 이 옵션은 `mode`가 `multiple` 또는 `tags` 로 설정된 경우에만 적용됩니다. | boolean | true |  |
| autoFocus | 기본으로 포커스가 설정됩니다. | boolean | false |  |
| defaultActiveFirstOption | 기본적으로 첫 번째 옵션을 활성화 할 지 여부를 설정할 수 있습니다. | boolean | true |  |
| defaultOpen | 드롭다운을 열었을 때 초기 상태 설정 여부를 설정할 수 있습니다. | boolean | - |  |
| defaultValue | 초기 선택 옵션 | string \| string\[] \| <br />number \| number\[] \| <br />LabeledValue \| LabeledValue\[] | - |  |
| disabled | 비활성화 여부를 선택할 수 있습니다. | boolean | false |  |
| popupClassName | 드롭다운 메뉴의 `className`을 설정할 수 있습니다. | string | - | 4.23.0 |
| popupMatchSelectWidth | 팝업 메뉴와 선택 입력이 같은 width 값인지 확인합니다. 기본값은 `min-width` 입력과 동일하게 설정됩니다. 값이 선택 width 보다 작으면 무시합니다. `false` 가상 스크롤을 비활성화 합니다. | boolean \| number | true | 5.5.0 |
| dropdownRender | 사용자 정의 드롭다운 콘텐츠를 만들 수 있습니다. | (originNode: ReactNode) => ReactNode | - |  |
| dropdownStyle | 드롭다운 메뉴의 스타일을 정의할 수 있습니다. | CSSProperties | - |  |
| fieldNames | 사용자 정의 노드 레이블, 값 , 옵션, 그룹 레이블 필드 이름을 만들 수 있습니다. | object | { label: `label`, value: `value`, options: `options`, groupLabel: `label` } | 4.17.0 (`groupLabel` added in 5.6.0) |
| filterOption | true일 경우, 입력 값으로 옵션을 필터링하며, 함수일 경우 해당 함수로 옵션을 필터링합니다. 함수는 두 가지 인자(`inputValue`와 `option`)를 받고, 함수가 `true`를 반환하면 해당 옵션은 필터링된 세트에 포함되며, 그렇지 않으면 제외됩니다. | boolean \| function(inputValue, option) | true |  |
| filterSort | 검색 옵션을 정렬하기 위한 정렬 함수. [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)'s compareFunction을 참조하세요. | (optionA: Option, optionB: Option, info: { searchValue: string }) => number | - | `searchValue`: 5.19.0 |
| getPopupContainer | 선택기(selector)가 렌더링될 상위 노드를 지정합니다. 기본값은 `body`입니다. 위치 문제가 발생하면 스크롤 가능한 콘텐츠로 수정하고 상대적으로 위치를 지정해보세요. [예시](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode) | () => document.body |  |
| labelInValue | label을 value에 포함할 지 여부를 설정합니다. 이 경우 value의 형식이 문자열에서 { value: string, label: ReactNode }로 변경됩니다. | boolean | false |  |
| listHeight | 팝업 높이를 설정합니다. | number | 256 |  |
| loading | 로딩 상태를 나타냅니다. | boolean | false |  |
| maxCount | 선택할 수 있는 항목의 최대 개수를 설정합니다. 이 속성은 `mode`가 `multiple` 또는 `tags`일 때만 적용됩니다. | number | - | 5.13.0 |
| maxTagCount | 표시할 최대 tag 수를 설정합니다. `responsive` 모드는 렌더링 성능에 영향을 줄 수 있습니다. | number \| `responsive` | - | responsive: 4.10 |
| maxTagPlaceholder | tag를 표시하지 않을 때의 플레이스홀더입니다. | ReactNode \| function(omittedValues) | - |  |
| maxTagTextLength | 표시할 tag 텍스트의 최대 길이를 설정합니다. | number | - |  |
| menuItemSelectedIcon | 다중 선택 옵션에서 선택된 메뉴 아이템의 사용자 정의 아이콘을 설정합니다. | ReactNode | - |  |
| mode | Select의 모드를 설정합니다. | `multiple` \| `tags` | - |  |
| notFoundContent | 결과가 일치하지 않을 때 표시할 내용을 지정합니다. | ReactNode | `Not Found` |  |
| open | 드롭다운의 열림 상태를 제어합니다. | boolean | - |  |
| optionFilterProp | `filterOption`이 `true`일 때 필터링에 사용할 옵션 속성의 값을 지정합니다. `options`가 설정되면 `label`로 설정되어야 합니다. | string | `value` |  |
| optionLabelProp | 옵션의 어떤 속성이 Select의 내용으로 렌더링 될 지를 지정합니다. [예시](https://codesandbox.io/s/antd-reproduction-template-tk678) | string | `children` |  |
| options | 옵션을 선택합니다. jsx 정의보다 성능이 더 좋습니다. | { label, value }\[] | - |  |
| optionRender | 드롭다운 옵션을 사용자 정의 하여 렌더링합니다. | (option: FlattenOptionData\<BaseOptionType\> , info: { index: number }) => React.ReactNode | - | 5.11.0 |
| placeholder | Select의 플레이스홀더입니다. | ReactNode | - |  |
| placement | 선택 상자가 팝업되는 위치를 설정합니다. | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |  |
| removeIcon | 사용자 정의 제거 아이콘입니다. | ReactNode | - |  |
| searchValue | 현재 입력된 "검색" 텍스트입니다. | string | - |  |
| showSearch | 선택이 가능한지 여부를 설정합니다. | boolean | single: false, multiple: true |  |
| size | Select 입력의 크기를 설정합니다. | `large` \| `middle` \| `small` | `middle` |  |
| status | 유효성 상태를 설정합니다. | 'error' \| 'warning' | - | 4.19.0 |
| suffixIcon | 사용자 정의 접미사 아이콘입니다. 사용자 정의된 아이콘은 상호작용을 위해 클릭을 허용하지 않으며, `pointer-events: none` 스타일을 사용하여 이를 우회할 수 있습니다. | ReactNode | `<DownOutlined />` |  |
| tagRender | 태그 렌더링을 사용자 정의할 수 있습니다. 이 속성은 `mode` 가 `multiple` 또는 `tags` 일 때만 적용됩니다. | (props) => ReactNode | - |  |
| labelRender | 선택된 레이블 렌더링을 사용자 정의할 수 있습니다. (LabelInValueType 정의는 [LabelInValueType](https://github.com/react-component/select/blob/b39c28aa2a94e7754ebc570f200ab5fd33bd31e7/src/Select.tsx#L70)참조) | (props: LabelInValueType) => ReactNode | - | 5.15.0 |
| tokenSeparators | 구분자로 사용되는 기호를 지정합니다. 이 속성은 `mode="tags"` 일 때만 적용됩니다. | string\[] | - |  |
| value | 현재 선택된 옵션(변경할 수 없는 배열로 간주됨)입니다. | string \| string\[] \| <br />number \| number\[] \| <br />LabeledValue \| LabeledValue\[] | - |  |
| variant | 선택기(selector)의 다양한 변형을 제공합니다. | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| virtual | false로 설정하면 가상 스크롤을 비활성화합니다. | boolean | true | 4.1.0 |
| onBlur | Blur 시 호출됩니다. | function | - |  |
| onChange | 옵션을 선택하거나 입력 값이 변경될 때 호출됩니다. | function(value, option:Option \| Array&lt;Option>) | - |  |
| onClear | 초기화될 때 호출됩니다. | function | - | 4.6.0 |
| onDeselect | 선택이 해제될 때 호출됩니다. 매개변수는 선택된 옵션의 값입니다. `multiple` 또는 `tags` 모드에서만 호출되며, 해당 모드에서만 유효합니다. | function(value: string \| number \| LabeledValue) | - |  |
| onDropdownVisibleChange | 드롭다운이 열릴 때 호출됩니다. | (open: boolean) => void | - |  |
| onFocus | 포커스가 잡힐 때 호출됩니다. | (event: FocusEvent) => void | - |  |
| onInputKeyDown | 키가 눌렸을 때 호출됩니다. | (event: KeyboardEvent) => void | - |  |
| onPopupScroll | 드롭다운이 스크롤 될 때 호출됩니다. | (event: UIEvent) => void | - |  |
| onSearch | 입력 값이 변경되면 호출되는 콜백 함수입니다. | function(value: string) | - |  |
| onSelect | 옵션이 선택되었을 때 호출됩니다. 매개변수는 옵션의 값(또는 키)과 옵션 인스턴스입니다. | function(value: string \| number \| LabeledValue, option: Option) | - |  |

> 참고 : 드롭다운 메뉴가 페이지와 함께 스크롤되거나 다른 팝업 레이어에서 Select를 트리거해야 할 경우, `getPopupContainer={triggerNode => triggerNode.parentElement}`를 사용하여 드롭다운 팝업의 렌더링 노드를 트리거 요소의 부모 요소로 고정하는 방법을 시도해보세요.

### Select Methods

| Name    | Description | Version |
| ------- | ----------- | ------- |
| blur()  | 포커스 제거 |         |
| focus() | 포커스 얻기 |         |

### Option props

| Property  | Description                        | Type             | Default | Version |
| --------- | ---------------------------------- | ---------------- | ------- | ------- |
| className | 옵션에 추가되는 클래스             | string           | -       |         |
| disabled  | 이 옵션을 비활성화                 | boolean          | false   |         |
| title     | Select 옵션의 `title` 속성         | string           | -       |         |
| value     | 기본적으로 이 속성을 사용해 필터링 | string \| number | -       |         |

### OptGroup props

| Property  | Description                | Type            | Default | Version |
| --------- | -------------------------- | --------------- | ------- | ------- |
| key       | 그룹 키                    | string          | -       |         |
| label     | 그룹 레이블                | React.ReactNode | -       |         |
| className | 옵션에 추가되는 클래스     | string          | -       |         |
| title     | Select 옵션의 `title` 속성 | string          | -       |         |

## Design Token

<ComponentTokenTable component="Select"></ComponentTokenTable>

## FAQ

### 왜 `tags` 모드에서 검색 시 동일합 옵션이 2개씩 나타날 때가 있나요?

이것은 옵션의 `label`과 `value`가 다를 때 발생합니다. 필터링 로직을 변경하기 위해 `optionFilterProp="label"`을 사용할 수 있습니다.

### `dropdownRender`에서 요소를 클릭했을 때 드롭다운이 닫히지 않는 이유는 무엇인가요?

`open` 속성을 사용하여 드롭다운의 열림 상태를 제어할 수 있습니다. `open` prop: [codesandbox](https://codesandbox.io/s/ji-ben-shi-yong-antd-4-21-7-forked-gnp4cy?file=/demo.js).

### `dropdownRender`안에서 클릭해도 드롭다운이 닫히지 않도록 하려면 어떻게 하나요?

Select 컴포넌트는 포커스를 잃으면 닫힙니다. 이벤트를 수동으로 처리하여 이 동작을 방지할 수 있습니다.:

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

### 왜 커스텀(사용자 정의) 옵션을 사용할 때 스크롤이 깨질 때가 있나요?

가상 스크롤을 각 항목의 높이를 기본적으로 `24px`로 설정합니다. 옵션의 높이가 다를 경우, `listItemHeight`와 `listHeight`를 조정하여 리스트 컨테이너의 높이를 설정해야 합니다.:

```tsx
<Select listItemHeight={10} listHeight={250} />
```

참고: `listItemHeight`와 `listHeight`는 내부 속성입니다. 꼭 필요할 때만 수정하세요.

### 왜 a11y 테스트 보고서에서 `aria-` 속성이 누락되나요?

Select는 조작 중일 때만 접근성을 위한 보조 노드를 생성합니다. Select를 열고 다시 시도해보세요. `aria-label` 및 `aria-labelledby` 경고가 발생할 경우, 필요한 속성을 사용자의 요구에 맞게 Select에 추가하세요.

기본 가상 스크롤링은 접근성 바인딩을 시뮬레이션하기 위한 모의 요소를 생성합니다. 스크린 리더가 전체 목록에 완전히 접근해야 할 경우, `virtual={false}`로 설정하여 가상 스크롤링을 비활성화하면 접근성 옵션이 실제 요소에 바인딩됩니다.
