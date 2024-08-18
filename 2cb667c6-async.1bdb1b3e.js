(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["2cb667c6"],{"2cb667c6":function(e,a,d){"use strict";d.d(a,"__esModule",{value:!0}),d.d(a,"texts",{enumerable:!0,get:function(){return t;}}),d("0ce36eb1");let t=[{value:"Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The ",paraId:0,tocIndex:0},{value:"Tree",paraId:0,tocIndex:0},{value:" component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a ",paraId:0,tocIndex:0},{value:"Tree",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:"Common props ref\uFF1A",paraId:1,tocIndex:17},{value:"Common props",paraId:2,tocIndex:17},{value:"Property",paraId:3,tocIndex:18},{value:"Description",paraId:3,tocIndex:18},{value:"Type",paraId:3,tocIndex:18},{value:"Default",paraId:3,tocIndex:18},{value:"Version",paraId:3,tocIndex:18},{value:"allowDrop",paraId:3,tocIndex:18},{value:"Whether to allow dropping on the node",paraId:3,tocIndex:18},{value:"({ dropNode, dropPosition }) => boolean",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"autoExpandParent",paraId:3,tocIndex:18},{value:"Whether to automatically expand a parent treeNode",paraId:3,tocIndex:18},{value:"boolean",paraId:3,tocIndex:18},{value:"false",paraId:3,tocIndex:18},{value:"blockNode",paraId:3,tocIndex:18},{value:"Whether treeNode fill remaining horizontal space",paraId:3,tocIndex:18},{value:"boolean",paraId:3,tocIndex:18},{value:"false",paraId:3,tocIndex:18},{value:"checkable",paraId:3,tocIndex:18},{value:"Add a Checkbox before the treeNodes",paraId:3,tocIndex:18},{value:"boolean",paraId:3,tocIndex:18},{value:"false",paraId:3,tocIndex:18},{value:"checkedKeys",paraId:3,tocIndex:18},{value:"(Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When ",paraId:3,tocIndex:18},{value:"checkable",paraId:3,tocIndex:18},{value:" and ",paraId:3,tocIndex:18},{value:"checkStrictly",paraId:3,tocIndex:18},{value:" is true, its object has ",paraId:3,tocIndex:18},{value:"checked",paraId:3,tocIndex:18},{value:" and ",paraId:3,tocIndex:18},{value:"halfChecked",paraId:3,tocIndex:18},{value:" property. Regardless of whether the child or parent treeNode is checked, they won't impact each other",paraId:3,tocIndex:18},{value:"string[] | {checked: string[], halfChecked: string[]}",paraId:3,tocIndex:18},{value:"[]",paraId:3,tocIndex:18},{value:"checkStrictly",paraId:3,tocIndex:18},{value:"Check treeNode precisely; parent treeNode and children treeNodes are not associated",paraId:3,tocIndex:18},{value:"boolean",paraId:3,tocIndex:18},{value:"false",paraId:3,tocIndex:18},{value:"defaultCheckedKeys",paraId:3,tocIndex:18},{value:"Specifies the keys of the default checked treeNodes",paraId:3,tocIndex:18},{value:"string[]",paraId:3,tocIndex:18},{value:"[]",paraId:3,tocIndex:18},{value:"defaultExpandAll",paraId:3,tocIndex:18},{value:"Whether to expand all treeNodes by default",paraId:3,tocIndex:18},{value:"boolean",paraId:3,tocIndex:18},{value:"false",paraId:3,tocIndex:18},{value:"defaultExpandedKeys",paraId:3,tocIndex:18},{value:"Specify the keys of the default expanded treeNodes",paraId:3,tocIndex:18},{value:"string[]",paraId:3,tocIndex:18},{value:"[]",paraId:3,tocIndex:18},{value:"defaultExpandParent",paraId:3,tocIndex:18},{value:"If auto expand parent treeNodes when init",paraId:3,tocIndex:18},{value:"boolean",paraId:3,tocIndex:18},{value:"true",paraId:3,tocIndex:18},{value:"defaultSelectedKeys",paraId:3,tocIndex:18},{value:"Specifies the keys of the default selected treeNodes",paraId:3,tocIndex:18},{value:"string[]",paraId:3,tocIndex:18},{value:"[]",paraId:3,tocIndex:18},{value:"disabled",paraId:3,tocIndex:18},{value:"Whether disabled the tree",paraId:3,tocIndex:18},{value:"boolean",paraId:3,tocIndex:18},{value:"false",paraId:3,tocIndex:18},{value:"draggable",paraId:3,tocIndex:18},{value:"Specifies whether this Tree or the node is draggable. Use ",paraId:3,tocIndex:18},{value:"icon: false",paraId:3,tocIndex:18},{value:" to disable drag handler icon",paraId:3,tocIndex:18},{value:"boolean | ((node: DataNode) => boolean) | { icon?: React.ReactNode | false, nodeDraggable?: (node: DataNode) => boolean }",paraId:3,tocIndex:18},{value:"false",paraId:3,tocIndex:18},{value:"config",paraId:3,tocIndex:18},{value:": 4.17.0",paraId:3,tocIndex:18},{value:"expandedKeys",paraId:3,tocIndex:18},{value:"(Controlled) Specifies the keys of the expanded treeNodes",paraId:3,tocIndex:18},{value:"string[]",paraId:3,tocIndex:18},{value:"[]",paraId:3,tocIndex:18},{value:"fieldNames",paraId:3,tocIndex:18},{value:"Customize node title, key, children field name",paraId:3,tocIndex:18},{value:"object",paraId:3,tocIndex:18},{value:"{ title: ",paraId:3,tocIndex:18},{value:"title",paraId:3,tocIndex:18},{value:", key: ",paraId:3,tocIndex:18},{value:"key",paraId:3,tocIndex:18},{value:", children: ",paraId:3,tocIndex:18},{value:"children",paraId:3,tocIndex:18},{value:" }",paraId:3,tocIndex:18},{value:"4.17.0",paraId:3,tocIndex:18},{value:"filterTreeNode",paraId:3,tocIndex:18},{value:"Defines a function to filter (highlight) treeNodes. When the function returns ",paraId:3,tocIndex:18},{value:"true",paraId:3,tocIndex:18},{value:", the corresponding treeNode will be highlighted",paraId:3,tocIndex:18},{value:"function(node)",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"height",paraId:3,tocIndex:18},{value:"Config virtual scroll height. Will not support horizontal scroll when enable this",paraId:3,tocIndex:18},{value:"number",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"icon",paraId:3,tocIndex:18},{value:"Insert a custom icon before the title. Need to set ",paraId:3,tocIndex:18},{value:"showIcon",paraId:3,tocIndex:18},{value:" to true",paraId:3,tocIndex:18},{value:"ReactNode | (props) => ReactNode",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"loadData",paraId:3,tocIndex:18},{value:"Load data asynchronously",paraId:3,tocIndex:18},{value:"function(node)",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"loadedKeys",paraId:3,tocIndex:18},{value:"(Controlled) Set loaded tree nodes. Need work with ",paraId:3,tocIndex:18},{value:"loadData",paraId:3,tocIndex:18},{value:"string[]",paraId:3,tocIndex:18},{value:"[]",paraId:3,tocIndex:18},{value:"multiple",paraId:3,tocIndex:18},{value:"Allows selecting multiple treeNodes",paraId:3,tocIndex:18},{value:"boolean",paraId:3,tocIndex:18},{value:"false",paraId:3,tocIndex:18},{value:"rootStyle",paraId:3,tocIndex:18},{value:"Style on the root element",paraId:3,tocIndex:18},{value:"CSSProperties",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"4.20.0",paraId:3,tocIndex:18},{value:"selectable",paraId:3,tocIndex:18},{value:"Whether can be selected",paraId:3,tocIndex:18},{value:"boolean",paraId:3,tocIndex:18},{value:"true",paraId:3,tocIndex:18},{value:"selectedKeys",paraId:3,tocIndex:18},{value:"(Controlled) Specifies the keys of the selected treeNodes, multiple selection needs to set ",paraId:3,tocIndex:18},{value:"multiple",paraId:3,tocIndex:18},{value:" to true",paraId:3,tocIndex:18},{value:"string[]",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"showIcon",paraId:3,tocIndex:18},{value:"Controls whether to display the ",paraId:3,tocIndex:18},{value:"icon",paraId:3,tocIndex:18},{value:" node, no default style",paraId:3,tocIndex:18},{value:"boolean",paraId:3,tocIndex:18},{value:"false",paraId:3,tocIndex:18},{value:"showLine",paraId:3,tocIndex:18},{value:"Shows a connecting line",paraId:3,tocIndex:18},{value:"boolean | {showLeafIcon: ReactNode | ((props: AntTreeNodeProps) => ReactNode)}",paraId:3,tocIndex:18},{value:"false",paraId:3,tocIndex:18},{value:"switcherIcon",paraId:3,tocIndex:18},{value:"Customize expand/collapse icons for tree nodes (With default rotate angular style)",paraId:3,tocIndex:18},{value:"ReactNode | ((props: AntTreeNodeProps) => ReactNode)",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"renderProps: 4.20.0",paraId:3,tocIndex:18},{value:"switcherLoadingIcon",paraId:3,tocIndex:18},{value:"Customize loading icons for tree nodes",paraId:3,tocIndex:18},{value:"ReactNode",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"5.20.0",paraId:3,tocIndex:18},{value:"titleRender",paraId:3,tocIndex:18},{value:"Customize tree node title render",paraId:3,tocIndex:18},{value:"(nodeData) => ReactNode",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"4.5.0",paraId:3,tocIndex:18},{value:"treeData",paraId:3,tocIndex:18},{value:"The treeNodes data Array, if set it then you need not to construct children TreeNode. (key should be unique across the whole array)",paraId:3,tocIndex:18},{value:"array<{ key, title, children, [disabled, selectable] }>",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"virtual",paraId:3,tocIndex:18},{value:"Disable virtual scroll when set to false",paraId:3,tocIndex:18},{value:"boolean",paraId:3,tocIndex:18},{value:"true",paraId:3,tocIndex:18},{value:"4.1.0",paraId:3,tocIndex:18},{value:"onCheck",paraId:3,tocIndex:18},{value:"Callback function for when the onCheck event occurs",paraId:3,tocIndex:18},{value:"function(checkedKeys, e:{checked: boolean, checkedNodes, node, event, halfCheckedKeys})",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"onDragEnd",paraId:3,tocIndex:18},{value:"Callback function for when the onDragEnd event occurs",paraId:3,tocIndex:18},{value:"function({event, node})",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"onDragEnter",paraId:3,tocIndex:18},{value:"Callback function for when the onDragEnter event occurs",paraId:3,tocIndex:18},{value:"function({event, node, expandedKeys})",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"onDragLeave",paraId:3,tocIndex:18},{value:"Callback function for when the onDragLeave event occurs",paraId:3,tocIndex:18},{value:"function({event, node})",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"onDragOver",paraId:3,tocIndex:18},{value:"Callback function for when the onDragOver event occurs",paraId:3,tocIndex:18},{value:"function({event, node})",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"onDragStart",paraId:3,tocIndex:18},{value:"Callback function for when the onDragStart event occurs",paraId:3,tocIndex:18},{value:"function({event, node})",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"onDrop",paraId:3,tocIndex:18},{value:"Callback function for when the onDrop event occurs",paraId:3,tocIndex:18},{value:"function({event, node, dragNode, dragNodesKeys})",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"onExpand",paraId:3,tocIndex:18},{value:"Callback function for when a treeNode is expanded or collapsed",paraId:3,tocIndex:18},{value:"function(expandedKeys, {expanded: boolean, node})",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"onLoad",paraId:3,tocIndex:18},{value:"Callback function for when a treeNode is loaded",paraId:3,tocIndex:18},{value:"function(loadedKeys, {event, node})",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"onRightClick",paraId:3,tocIndex:18},{value:"Callback function for when the user right clicks a treeNode",paraId:3,tocIndex:18},{value:"function({event, node})",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"onSelect",paraId:3,tocIndex:18},{value:"Callback function for when the user clicks a treeNode",paraId:3,tocIndex:18},{value:"function(selectedKeys, e:{selected: boolean, selectedNodes, node, event})",paraId:3,tocIndex:18},{value:"-",paraId:3,tocIndex:18},{value:"Property",paraId:4,tocIndex:19},{value:"Description",paraId:4,tocIndex:19},{value:"Type",paraId:4,tocIndex:19},{value:"Default",paraId:4,tocIndex:19},{value:"checkable",paraId:4,tocIndex:19},{value:"When Tree is checkable, set TreeNode display Checkbox or not",paraId:4,tocIndex:19},{value:"boolean",paraId:4,tocIndex:19},{value:"-",paraId:4,tocIndex:19},{value:"disableCheckbox",paraId:4,tocIndex:19},{value:"Disables the checkbox of the treeNode",paraId:4,tocIndex:19},{value:"boolean",paraId:4,tocIndex:19},{value:"false",paraId:4,tocIndex:19},{value:"disabled",paraId:4,tocIndex:19},{value:"Disables the treeNode",paraId:4,tocIndex:19},{value:"boolean",paraId:4,tocIndex:19},{value:"false",paraId:4,tocIndex:19},{value:"icon",paraId:4,tocIndex:19},{value:"Customize icon. When you pass component, whose render will receive full TreeNode props as component props",paraId:4,tocIndex:19},{value:"ReactNode | (props) => ReactNode",paraId:4,tocIndex:19},{value:"-",paraId:4,tocIndex:19},{value:"isLeaf",paraId:4,tocIndex:19},{value:"Determines if this is a leaf node(effective when ",paraId:4,tocIndex:19},{value:"loadData",paraId:4,tocIndex:19},{value:" is specified). ",paraId:4,tocIndex:19},{value:"false",paraId:4,tocIndex:19},{value:" will force trade TreeNode as a parent node",paraId:4,tocIndex:19},{value:"boolean",paraId:4,tocIndex:19},{value:"-",paraId:4,tocIndex:19},{value:"key",paraId:4,tocIndex:19},{value:"Used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. P.S.: It must be unique in all of treeNodes of the tree",paraId:4,tocIndex:19},{value:"string",paraId:4,tocIndex:19},{value:"(internal calculated position of treeNode)",paraId:4,tocIndex:19},{value:"selectable",paraId:4,tocIndex:19},{value:"Set whether the treeNode can be selected",paraId:4,tocIndex:19},{value:"boolean",paraId:4,tocIndex:19},{value:"true",paraId:4,tocIndex:19},{value:"title",paraId:4,tocIndex:19},{value:"Title",paraId:4,tocIndex:19},{value:"ReactNode",paraId:4,tocIndex:19},{value:"---",paraId:4,tocIndex:19},{value:"Property",paraId:5,tocIndex:20},{value:"Description",paraId:5,tocIndex:20},{value:"Type",paraId:5,tocIndex:20},{value:"Default",paraId:5,tocIndex:20},{value:"expandAction",paraId:5,tocIndex:20},{value:"Directory open logic, optional: false | ",paraId:5,tocIndex:20},{value:"click",paraId:5,tocIndex:20},{value:" | ",paraId:5,tocIndex:20},{value:"doubleClick",paraId:5,tocIndex:20},{value:"string | boolean",paraId:5,tocIndex:20},{value:"click",paraId:5,tocIndex:20},{value:"Before ",paraId:6,tocIndex:21},{value:"3.4.0",paraId:6,tocIndex:21},{value:": The number of treeNodes can be very large, but when ",paraId:6,tocIndex:21},{value:"checkable=true",paraId:6,tocIndex:21},{value:", it will increase the compute time. So, we cache some calculations (e.g. ",paraId:6,tocIndex:21},{value:"this.treeNodesStates",paraId:6,tocIndex:21},{value:") to avoid double computing. But, this brings some restrictions. ",paraId:6,tocIndex:21},{value:"When you load treeNodes asynchronously, you should render tree like this",paraId:6,tocIndex:21},{value:":",paraId:6,tocIndex:21},{value:"{\n  this.state.treeData.length ? (\n    <Tree>\n      {this.state.treeData.map((data) => (\n        <TreeNode />\n      ))}\n    </Tree>\n  ) : (\n    'loading tree'\n  );\n}\n",paraId:7,tocIndex:21},{value:"Name",paraId:8,tocIndex:22},{value:"Description",paraId:8,tocIndex:22},{value:"scrollTo({ key: string | number; align?: 'top' | 'bottom' | 'auto'; offset?: number })",paraId:8,tocIndex:22},{value:"Scroll to key item in virtual scroll",paraId:8,tocIndex:22},{value:"default",paraId:9,tocIndex:25},{value:" prefix prop only works when initializing. So ",paraId:9,tocIndex:25},{value:"defaultExpandAll",paraId:9,tocIndex:25},{value:" has already executed when ajax load data. You can control ",paraId:9,tocIndex:25},{value:"expandedKeys",paraId:9,tocIndex:25},{value:" or render Tree when data loaded to realize expanded all.",paraId:9,tocIndex:25},{value:"Virtual scroll only render items in visible region. Thus not support auto width (like long ",paraId:10,tocIndex:26},{value:"title",paraId:10,tocIndex:26},{value:" with horizontal scroll).",paraId:10,tocIndex:26},{value:"disabled",paraId:11},{value:"Tree change its data by conduction. Includes checked or auto expanded, it will conduction state to parent / children node until current node is ",paraId:12,tocIndex:27},{value:"disabled",paraId:12,tocIndex:27},{value:". So if a controlled node is ",paraId:12,tocIndex:27},{value:"disabled",paraId:12,tocIndex:27},{value:", it will only modify self state and not affect other nodes. For example, a parent node contains 3 child nodes and one of them is ",paraId:12,tocIndex:27},{value:"disabled",paraId:12,tocIndex:27},{value:". When check the parent node, it will only check rest 2 child nodes. As the same, when check these 2 child node, parent will be checked whatever checked state the ",paraId:12,tocIndex:27},{value:"disabled",paraId:12,tocIndex:27},{value:" one is.",paraId:12,tocIndex:27},{value:"This conduction logic prevent that modify ",paraId:13,tocIndex:27},{value:"disabled",paraId:13,tocIndex:27},{value:" parent checked state by check children node and user can not modify directly with click parent which makes the interactive conflict. If you want to modify this conduction logic, you can customize it with ",paraId:13,tocIndex:27},{value:"checkStrictly",paraId:13,tocIndex:27},{value:" prop.",paraId:13,tocIndex:27}];}}]);
//# sourceMappingURL=2cb667c6-async.1bdb1b3e.js.map