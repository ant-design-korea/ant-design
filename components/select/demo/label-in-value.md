## zh-CN

默认情况下 `onChange` 里只能拿到 `value`，如果需要拿到选中的节点文本 `label`，可以使用 `labelInValue` 属性。

选中项的 `label` 会被包装到 `value` 中传递给 `onChange` 等函数，此时 `value` 是一个对象。

## en-US

As a default behavior, the `onChange` callback can only get the `value` of the selected item. The `labelInValue` prop can be used to get the `label` property of the selected item.

The `label` of the selected item will be packed as an object for passing to the `onChange` callback.

## ko-KR

기본 동작으로 `onChange` 콜백은 선택된 항목의 `value`만 가져올 수 있습니다. 선택된 항목의 `label` 속성을 가져오기 위해 `labelInValue` 속성을 사용할 수 있습니다. 선택된 항목의 `label`은 `onChange` 콜백에 전달되기 위해 객체로 포장됩니다.
