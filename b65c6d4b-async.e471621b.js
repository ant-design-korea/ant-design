(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["b65c6d4b"],{b65c6d4b:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return P;}});var n=a("777fffbe"),d=a("f19d2b93");a("959dc97e");var r=a("5b220c3d"),l=a("e22febe0"),s=a("a9d1a279"),i=n._(a("072ab8a9")),o=n._(a("738f1298")),c=n._(a("de3ef184"));i.default.extend(o.default);let{Panel:h}=s.Collapse,{TreeNode:x}=s.Tree,{TabPane:m}=s.Tabs,{Meta:u}=s.Card,{Link:p}=s.Anchor,{Text:j}=s.Typography,k=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,y=[];for(let e=0;e<20;e++)y.push({key:e.toString(),title:`content${e+1}`,description:`description of content${e+1}`,disabled:e%3<1});let f=y.filter(e=>+e.key%3>1).map(e=>e.key),b=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:32,address:"London No. 2 Lake Park"}],g=[{title:"Name",dataIndex:"name"},{title:"Borrow",dataIndex:"borrow"},{title:"Repayment",dataIndex:"repayment"}],C=[{key:"1",name:"John Brown",borrow:10,repayment:33},{key:"2",name:"Jim Green",borrow:100,repayment:0},{key:"3",name:"Joe Black",borrow:10,repayment:10},{key:"4",name:"Jim Red",borrow:75,repayment:45}],w=()=>{for(let e=0;e<3;++e)b.push({key:e,date:"2014-12-24 23:12:00",name:"This is production name",upgradeNum:"Upgraded: 56"});return(0,d.jsx)(s.Table,{columns:[{title:"Date",dataIndex:"date",key:"date"},{title:"Name",dataIndex:"name",key:"name"},{title:"Status",key:"state",render:()=>(0,d.jsxs)("span",{children:[(0,d.jsx)(s.Badge,{status:"success"}),"Finished"]})},{title:"Upgrade Status",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Action",dataIndex:"operation",key:"operation",render:()=>(0,d.jsxs)("span",{className:"table-operation",children:[(0,d.jsx)("a",{children:"Pause"}),(0,d.jsx)("a",{children:"Stop"}),(0,d.jsx)(s.Dropdown,{children:(0,d.jsxs)("a",{children:["More ",(0,d.jsx)(l.DownOutlined,{})]})})]})}],dataSource:[],pagination:!1});},T=[{title:"Name",dataIndex:"name",key:"name"},{title:"Platform",dataIndex:"platform",key:"platform"},{title:"Version",dataIndex:"version",key:"version"},{title:"Upgraded",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Creator",dataIndex:"creator",key:"creator"},{title:"Date",dataIndex:"createdAt",key:"createdAt"},{title:"Action",key:"operation",render:()=>(0,d.jsx)("a",{children:"Publish"})}],S=[];for(let e=0;e<3;++e)S.push({key:e,name:"Screem",platform:"iOS",version:"10.3.4.5654",upgradeNum:500,creator:"Jack",createdAt:"2014-12-24 23:12:00"});let I=[{title:"Full Name",width:100,dataIndex:"name",key:"name",fixed:"left"},{title:"Age",width:100,dataIndex:"age",key:"age",fixed:"left"},{title:"Column 1",dataIndex:"address",key:"1"},{title:"Column 2",dataIndex:"address",key:"2"},{title:"Column 3",dataIndex:"address",key:"3"},{title:"Column 4",dataIndex:"address",key:"4"},{title:"Column 5",dataIndex:"address",key:"5"},{title:"Column 6",dataIndex:"address",key:"6"},{title:"Column 7",dataIndex:"address",key:"7"},{title:"Column 8",dataIndex:"address",key:"8"},{title:"Action",key:"operation",fixed:"right",width:100,render:()=>(0,d.jsx)("a",{children:"action"})}],N=[{key:"1",name:"John Brown",age:32,address:"New York Park"},{key:"2",name:"Jim Green",age:40,address:"London Park"}],v=({leftColumns:e,rightColumns:t,...a})=>(0,d.jsx)(s.Transfer,{...a,showSelectAll:!1,children:({direction:a,filteredItems:n,onItemSelectAll:r,onItemSelect:l,selectedKeys:i,disabled:o})=>(0,d.jsx)(s.Table,{id:"components-transfer-table",rowSelection:{getCheckboxProps:e=>({disabled:o||e.disabled}),onSelectAll(e,t){let a=t.filter(e=>!e.disabled).map(({key:e})=>e),n=e?(0,c.default)(a,i):(0,c.default)(i,a);r(n,e);},onSelect({key:e},t){l(e,t);},selectedRowKeys:i},columns:"left"===a?e:t,dataSource:n,size:"small",style:{pointerEvents:o?"none":null},onRow:({key:e,disabled:t})=>({onClick:()=>{t||o||l(e,!i.includes(e));}})})});var P=()=>{let[e,t]=(0,r.useState)(!1),[a,n]=(0,r.useState)(f),[o,c]=(0,r.useState)([]),[P,A]=(0,r.useState)(!1),[B,J]=(0,r.useState)(!1),O=[{title:"Name",dataIndex:"name",key:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"}],filteredValue:null,onFilter:(e,t)=>t.name.includes(e),sorter:(e,t)=>e.name.length-t.name.length,sortOrder:!0,ellipsis:!0},{title:"Age",dataIndex:"age",key:"age",sorter:!1,sortOrder:!0,ellipsis:!0},{title:"Address",dataIndex:"address",key:"address",filters:[{text:"London",value:"London"},{text:"New York",value:"New York"}],filteredValue:null,onFilter:(e,t)=>t.address.includes(e),sorter:!1,sortOrder:!0,ellipsis:!0}];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Button,{type:"primary",onClick:()=>{t(!0);},children:"Open Modal"}),(0,d.jsxs)(s.Modal,{title:"Basic Modal",open:e,onOk:e=>{console.log(e),t(!1);},onCancel:e=>{console.log(e),t(!1);},children:[(0,d.jsx)(s.Switch,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:P,onChange:e=>{A(e);},style:{marginBottom:16}}),(0,d.jsxs)(s.Card,{title:"Card Title",children:[(0,d.jsx)(s.Card.Grid,{children:"Content"}),(0,d.jsx)(s.Card.Grid,{hoverable:!1,children:"Content"}),(0,d.jsx)(s.Card.Grid,{children:"Content"}),(0,d.jsx)(s.Card.Grid,{children:"Content"}),(0,d.jsx)(s.Card.Grid,{children:"Content"}),(0,d.jsx)(s.Card.Grid,{children:"Content"}),(0,d.jsx)(s.Card.Grid,{children:"Content"})]}),(0,d.jsxs)(s.Collapse,{children:[(0,d.jsx)(h,{header:"This is panel header 1",children:(0,d.jsx)(s.Collapse,{defaultActiveKey:"1",children:(0,d.jsx)(h,{header:"This is panel nest panel",children:(0,d.jsx)("p",{children:k})},"1")})},"1"),(0,d.jsx)(h,{header:"This is panel header 2",children:(0,d.jsx)("p",{children:k})},"2"),(0,d.jsx)(h,{header:"This is panel header 3",children:(0,d.jsx)("p",{children:k})},"3")]}),(0,d.jsx)(s.Transfer,{dataSource:y,titles:["Source","Target"],targetKeys:a,selectedKeys:o,onChange:e=>{n(e);},onSelectChange:(e,t)=>{c([...e,...t]);},render:e=>e.title,disabled:P}),(0,d.jsx)(v,{dataSource:y,targetKeys:a,disabled:P,showSearch:B,onChange:e=>{n(e);},filterOption:(e,t)=>{var a;return -1!==t.title.indexOf(e)||(null===(a=t.tag)||void 0===a?void 0:a.indexOf(e))!==-1;},leftColumns:[{dataIndex:"title",title:"Name"},{dataIndex:"description",title:"Description"}],rightColumns:[{dataIndex:"title",title:"Name"}]}),(0,d.jsx)(s.Switch,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:P,onChange:e=>{A(e);},style:{marginTop:16}}),(0,d.jsx)(s.Switch,{unCheckedChildren:"showSearch",checkedChildren:"showSearch",checked:B,onChange:e=>{J(e);},style:{marginTop:16}}),(0,d.jsxs)(s.Anchor,{children:[(0,d.jsx)(p,{href:"#anchor-demo-basic",title:"Basic demo"}),(0,d.jsx)(p,{href:"#anchor-demo-static",title:"Static demo"}),(0,d.jsx)(p,{href:"#anchor-demo-basic",title:"Basic demo with Target",target:"_blank"}),(0,d.jsxs)(p,{href:"#API",title:"API",children:[(0,d.jsx)(p,{href:"#Anchor-Props",title:"Anchor Props"}),(0,d.jsx)(p,{href:"#Link-Props",title:"Link Props"})]})]}),(0,d.jsxs)(s.Tabs,{type:"card",children:[(0,d.jsx)(m,{tab:"Tab 1",children:"Content of Tab Pane 1"},"1"),(0,d.jsx)(m,{tab:"Tab 2",children:"Content of Tab Pane 2"},"2"),(0,d.jsx)(m,{tab:"Tab 3",children:"Content of Tab Pane 3"},"3")]}),(0,d.jsxs)(s.Timeline,{children:[(0,d.jsx)(s.Timeline.Item,{children:"Create a services site 2015-09-01"}),(0,d.jsx)(s.Timeline.Item,{children:"Solve initial network problems 2015-09-01"}),(0,d.jsx)(s.Timeline.Item,{dot:(0,d.jsx)(l.ClockCircleOutlined,{style:{fontSize:"16px"}}),color:"red",children:"Technical testing 2015-09-01"}),(0,d.jsx)(s.Timeline.Item,{children:"Network problems being solved 2015-09-01"})]}),(0,d.jsx)(s.Calendar,{}),(0,d.jsx)(s.Tree,{showLine:!0,switcherIcon:(0,d.jsx)(l.DownOutlined,{}),defaultExpandedKeys:["0-0-0"],children:(0,d.jsxs)(x,{title:"parent 1",children:[(0,d.jsxs)(x,{title:"parent 1-0",children:[(0,d.jsx)(x,{title:"leaf"},"0-0-0-0"),(0,d.jsx)(x,{title:"leaf"},"0-0-0-1"),(0,d.jsx)(x,{title:"leaf"},"0-0-0-2")]},"0-0-0"),(0,d.jsx)(x,{title:"parent 1-1",children:(0,d.jsx)(x,{title:"leaf"},"0-0-1-0")},"0-0-1"),(0,d.jsxs)(x,{title:"parent 1-2",children:[(0,d.jsx)(x,{title:"leaf"},"0-0-2-0"),(0,d.jsx)(x,{title:"leaf"},"0-0-2-1")]},"0-0-2")]},"0-0")}),(0,d.jsx)(s.Table,{columns:O,dataSource:b,footer:()=>"Footer"}),(0,d.jsx)(s.Table,{columns:g,dataSource:C,pagination:!1,id:"table-demo-summary",bordered:!0,summary:e=>{let t=0,a=0;return e.forEach(({borrow:e,repayment:n})=>{t+=e,a+=n;}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Total"}),(0,d.jsx)("td",{children:(0,d.jsx)(j,{type:"danger",children:t})}),(0,d.jsx)("td",{children:(0,d.jsx)(j,{children:a})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Balance"}),(0,d.jsx)("td",{colSpan:2,children:(0,d.jsx)(j,{type:"danger",children:t-a})})]})]});}}),(0,d.jsx)("br",{}),(0,d.jsx)(s.Table,{columns:T,expandable:{expandedRowRender:w},dataSource:S}),(0,d.jsx)(s.Table,{columns:I,dataSource:N,scroll:{x:1300,y:100}}),(0,d.jsx)(s.Card,{hoverable:!0,style:{width:240},cover:(0,d.jsx)("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}),children:(0,d.jsx)(u,{title:"Europe Street beat",description:"www.instagram.com"})}),(0,d.jsx)(s.Slider,{defaultValue:30}),(0,d.jsx)(s.DatePicker,{defaultValue:(0,i.default)("2015/01/01","YYYY/MM/DD"),format:"YYYY/MM/DD"}),(0,d.jsx)(s.Badge,{count:5,children:(0,d.jsx)("a",{href:"#",className:"head-example"})})]})]});};}}]);
//# sourceMappingURL=b65c6d4b-async.e471621b.js.map