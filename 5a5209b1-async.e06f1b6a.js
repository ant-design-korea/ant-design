(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["5a5209b1"],{"5a5209b1":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"texts",{enumerable:!0,get:function(){return n;}}),t("bdb6feba");let n=[{value:"In v4, we added a custom ",paraId:0,tocIndex:0},{value:"components",paraId:0,tocIndex:0},{value:" example for Table, which replaces the default ",paraId:0,tocIndex:0},{value:"<tbody>",paraId:0,tocIndex:0},{value:" with ",paraId:0,tocIndex:0},{value:"components.body",paraId:0,tocIndex:0},{value:" to achieve virtual scrolling. But many developers feedback that the virtual table in the Demo has many functions that cannot be implemented. For example, fixed columns, merged rows and columns, expandable rows, etc.",paraId:0,tocIndex:0},{value:"So we proposed ",paraId:1,tocIndex:0},{value:"[RFC] StaticTable for fast perf & virtual scroll support",paraId:1,tocIndex:0},{value:" in v5. The RFC expects to provide a high-performance Table.StaticTable, which will support virtual scrolling by default. But as the development progressed, we eventually decided to implement StaticTable on the underlying ",paraId:1,tocIndex:0},{value:"rc-table",paraId:1,tocIndex:0},{value:", and on the antd side, we only need to enable it with ",paraId:1,tocIndex:0},{value:"<Table virtual />",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"Table supports virtual scrolling by setting the ",paraId:2,tocIndex:1},{value:"virtual",paraId:2,tocIndex:1},{value:" prop. At the same time, the original Table's functions can be used normally:",paraId:2,tocIndex:1},{value:"<Table virtual scroll={{ x: 2000, y: 500 }} {...otherProps} />\n",paraId:3,tocIndex:1},{value:"You can visit the ",paraId:4,tocIndex:4},{value:"virtual list",paraId:5,tocIndex:4},{value:" example to experience it.",paraId:4,tocIndex:4},{value:"Table in antd internally uses the ",paraId:6,tocIndex:5},{value:"rc-table",paraId:6,tocIndex:5},{value:" component. Our virtual scrolling feature also reuses the ",paraId:6,tocIndex:5},{value:"components",paraId:6,tocIndex:5},{value:" property mentioned above. Replace the middle ",paraId:6,tocIndex:5},{value:"<tbody>",paraId:6,tocIndex:5},{value:" with ",paraId:6,tocIndex:5},{value:"rc-virtual-list",paraId:6,tocIndex:5},{value:", which is widely used in various virtual scrolling scenarios of antd like Select and Tree. ",paraId:6,tocIndex:5},{value:"rc-virtual-list",paraId:6,tocIndex:5},{value:" itself does not support horizontal scrolling, so we also added horizontal scrolling support for it in this refactoring.",paraId:6,tocIndex:5},{value:"In v4, we refactored the fixed columns of Table into ",paraId:7,tocIndex:6},{value:"position: sticky",paraId:7,tocIndex:6},{value:". This CSS allows you to fix an element at a certain position when scrolling. So as to avoid the need to render an extra Table in v3 to achieve the fixed position effect:",paraId:7,tocIndex:6},{value:"For overlapping fixed columns, you only need to configure different offsets:",paraId:8,tocIndex:6},{value:"We can also use this feature in virtual scrolling. Just reuse the ",paraId:9,tocIndex:6},{value:"sticky",paraId:9,tocIndex:6},{value:" style to achieve the effect of fixed columns. ",paraId:9,tocIndex:6},{value:"rc-virtual-list",paraId:9,tocIndex:6},{value:" only needs to provide horizontal scrolling, and does not need to care about the implementation of fixed columns.",paraId:9,tocIndex:6},{value:"We will flatten the tree structure of ",paraId:10,tocIndex:7},{value:"dataSource",paraId:10,tocIndex:7},{value:" through ",paraId:10,tocIndex:7},{value:"useFlattenRecords",paraId:10,tocIndex:7},{value:" in ",paraId:10,tocIndex:7},{value:"rc-table",paraId:10,tocIndex:7},{value:", so as to support developers' custom virtual scrolling capabilities. Thanks to ",paraId:10,tocIndex:7},{value:"@crawler-django",paraId:10,tocIndex:7},{value:" for his contribution at that time, so we don't need to implement the flattening logic again.",paraId:10,tocIndex:7},{value:"But in testing, we found a strange phenomenon. When the table is rendered for the first time or re-render, there will be a very large lag. When debugging, it comes from the ",paraId:11,tocIndex:7},{value:"useFlattenRecords",paraId:11,tocIndex:7},{value:" hook. It's strange that test code itself does not use the expandable tree function. It was found that there were a lot of GC operations in ",paraId:11,tocIndex:7},{value:"useFlattenRecords",paraId:11,tocIndex:7},{value:". And these operations are caused by a piece of inconspicuous code:",paraId:11,tocIndex:7},{value:"// Fake code. Not used in real word\nfunction flatten<T extends { children?: T[] }>(data: T[] = []) {\n  let tmpList: T[] = [];\n\n  for (let i = 0; i < data.length; i += 1) {\n    const record = data[i];\n    tmpList = [...tmpList, record, ...flatten(record.children)];\n  }\n\n  return tmpList;\n}\n",paraId:12,tocIndex:7},{value:"When traversing, although ",paraId:13,tocIndex:7},{value:"children",paraId:13,tocIndex:7},{value:" is empty and only enters recursion once. But when looping through each Record, a temporary empty array will be created. But when ",paraId:13,tocIndex:7},{value:"dataSource",paraId:13,tocIndex:7},{value:" data is huge, they will continue to trigger GC to clean up these temporary arrays. So we added logic to avoid unnecessary consumption:",paraId:13,tocIndex:7},{value:"// Fake code. Not used in real word\nfunction flatten<T extends { children?: T[] }>(data: T[] = [], list: T[] = []) {\n  for (let i = 0; i < data.length; i += 1) {\n    const record = data[i];\n    list.push(record);\n    flatten(record.children, list);\n  }\n\n  return list;\n}\n",paraId:14,tocIndex:7},{value:"If you are familiar with the implementation of Table, you will know that row and column merging is achieved through ",paraId:15,tocIndex:8},{value:"rowSpan",paraId:15,tocIndex:8},{value:" and ",paraId:15,tocIndex:8},{value:"colSpan",paraId:15,tocIndex:8},{value:". In virtual scrolling, since not all nodes are rendered, there will be cases where the rows and columns to be rendered do not exist:",paraId:15,tocIndex:8},{value:"To render this content, we need to calculate the ",paraId:16,tocIndex:8},{value:"rowSpan",paraId:16,tocIndex:8},{value:" and ",paraId:16,tocIndex:8},{value:"colSpan",paraId:16,tocIndex:8},{value:" of all Records in the current visible area. And this calculation process is very complicated. We need to traverse all Records and calculate the ",paraId:16,tocIndex:8},{value:"rowSpan",paraId:16,tocIndex:8},{value:" and ",paraId:16,tocIndex:8},{value:"colSpan",paraId:16,tocIndex:8},{value:" of each Record. Obviously, this is a very time-consuming operation, and when the ",paraId:16,tocIndex:8},{value:"rowSpan",paraId:16,tocIndex:8},{value:" data is too far away from the visible area, the amount of content it needs to render will also be very large:",paraId:16,tocIndex:8},{value:"Maybe you will think of whether we can calculate the ",paraId:17,tocIndex:8},{value:"rowSpan",paraId:17,tocIndex:8},{value:" in advance and then get these data when scrolling. This is actually not possible. The row and column data is provided by ",paraId:17,tocIndex:8},{value:"onCell",paraId:17,tocIndex:8},{value:", and calculating ",paraId:17,tocIndex:8},{value:"onCell",paraId:17,tocIndex:8},{value:" every time when rendering the parent node will cause huge performance loss:",paraId:17,tocIndex:8},{value:"const Demo = () => {\n  const [spanCount, setSpanCount] = useState(3);\n\n  const columns = [\n    {\n      dataIndex: 'group',\n      onCell: (_, index) => ({\n        rowSpan: index % spanCount === 0 ? spanCount : 0,\n      }),\n    },\n  ];\n\n  // WOW!\n  React.useEffect(() => {\n    setSpanCount(5);\n  }, []);\n\n  return <Table columns={columns} {...props} />;\n};\n",paraId:18,tocIndex:8},{value:"Thus, even if we count the ",paraId:19,tocIndex:8},{value:"rowSpan",paraId:19,tocIndex:8},{value:" data and render the rows outside the screen, it is still not enough. It may appear that ",paraId:19,tocIndex:8},{value:"rowSpan",paraId:19,tocIndex:8},{value:" alternates:",paraId:19,tocIndex:8},{value:"And for the worst case, all rows have ",paraId:20,tocIndex:8},{value:"rowSpan",paraId:20,tocIndex:8},{value:" with other rows, then the amount of content we need to render will be the entire ",paraId:20,tocIndex:8},{value:"dataSource",paraId:20,tocIndex:8},{value:". That is, virtual scrolling is no longer virtual. Therefore, we need to clip it to render only the ",paraId:20,tocIndex:8},{value:"rowSpan",paraId:20,tocIndex:8},{value:" in the visible area, and remove the irrelevant parts outside the screen:",paraId:20,tocIndex:8},{value:"So, think backwards. We only need to start from the visible area. Then get the Records affected by ",paraId:21,tocIndex:8},{value:"rowSpan",paraId:21,tocIndex:8},{value:" up and down. Then only render the ",paraId:21,tocIndex:8},{value:"cell",paraId:21,tocIndex:8},{value:" that provides ",paraId:21,tocIndex:8},{value:"rowSpan",paraId:21,tocIndex:8},{value:":",paraId:21,tocIndex:8},{value:"rc-virtual-list",paraId:22,tocIndex:8},{value:" provides the ",paraId:22,tocIndex:8},{value:"extraRender",paraId:22,tocIndex:8},{value:" method, which will provide the row number currently rendered in virtual scrolling. We only need to execute ",paraId:22,tocIndex:8},{value:"onCell",paraId:22,tocIndex:8},{value:" on each Record in this range to get the ",paraId:22,tocIndex:8},{value:"rowSpan",paraId:22,tocIndex:8},{value:" and ",paraId:22,tocIndex:8},{value:"colSpan",paraId:22,tocIndex:8},{value:" information of each ",paraId:22,tocIndex:8},{value:"cell",paraId:22,tocIndex:8},{value:". So we can know whether the current row has ",paraId:22,tocIndex:8},{value:"rowSpan",paraId:22,tocIndex:8},{value:":",paraId:22,tocIndex:8},{value:"// Fake code. Not used in real word\nconst extraRender = ({ start, end }) => {\n  // Start record\n  const startRecord = flattenData[start];\n  columns.forEach((col) => {\n    // `rowSpan` === 0 means upper record has `rowSpan`\n    const { rowSpan } = col.onCell(startRecord, start);\n  });\n\n  // End record\n  const endRecord = flattenData[end];\n  columns.forEach((col) => {\n    // `rowSpan` > 1 means it should extend to next records\n    const { rowSpan } = col.onCell(endRecord, end);\n  });\n};\n",paraId:23,tocIndex:8},{value:"You should note that, in the actual collection process, we will record all ",paraId:24,tocIndex:8},{value:"cell",paraId:24,tocIndex:8},{value:" with ",paraId:24,tocIndex:8},{value:"rowSpan",paraId:24,tocIndex:8},{value:" in the range instead of just the head and tail Record. Then render these ",paraId:24,tocIndex:8},{value:"cell",paraId:24,tocIndex:8},{value:" through the ",paraId:24,tocIndex:8},{value:"extraRender",paraId:24,tocIndex:8},{value:" method (and skip rendering for ",paraId:24,tocIndex:8},{value:"cell",paraId:24,tocIndex:8},{value:" affected by ",paraId:24,tocIndex:8},{value:"rowSpan",paraId:24,tocIndex:8},{value:" in the original Record). This ensures the correctness of ",paraId:24,tocIndex:8},{value:"rowSpan",paraId:24,tocIndex:8},{value:".",paraId:24,tocIndex:8},{value:"Of course, this implementation is based on the assumption that ",paraId:25,tocIndex:8},{value:"rowSpan > 1",paraId:25,tocIndex:8},{value:" and ",paraId:25,tocIndex:8},{value:"rowSpan = 0",paraId:25,tocIndex:8},{value:" will appear. It does not support the case where ",paraId:25,tocIndex:8},{value:"rowSpan",paraId:25,tocIndex:8},{value:" is used to squeeze to the lower level, but for data tables, this is enough.",paraId:25,tocIndex:8},{value:"Virtual scrolling is a very complex feature, and there are many factors to consider. But we believe that it is worth spending this effort, and developers no longer need to choose between functionality and performance. Instead, you can have both.",paraId:26,tocIndex:9},{value:"That's all.",paraId:27,tocIndex:9}];}}]);
//# sourceMappingURL=5a5209b1-async.e06f1b6a.js.map