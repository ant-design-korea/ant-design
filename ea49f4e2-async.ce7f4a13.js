(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["ea49f4e2"],{ea49f4e2:function(e,l,i){"use strict";i.d(l,"__esModule",{value:!0}),i.d(l,"default",{enumerable:!0,get:function(){return d;}});var r=i("f19d2b93");i("1d97c650");var o=i("5b220c3d"),a=i("e22febe0"),t=i("a9d1a279");let n=(e,{required:l})=>(0,r.jsxs)(r.Fragment,{children:[l?(0,r.jsx)(t.Tag,{color:"error",children:"Required"}):(0,r.jsx)(t.Tag,{color:"warning",children:"optional"}),e]});var d=()=>{let[e]=t.Form.useForm(),[l,i]=(0,o.useState)("optional");return(0,r.jsxs)(t.Form,{form:e,layout:"vertical",initialValues:{requiredMarkValue:l},onValuesChange:({requiredMarkValue:e})=>{i(e);},requiredMark:"customize"===l?n:l,children:[(0,r.jsx)(t.Form.Item,{label:"Required Mark",name:"requiredMarkValue",children:(0,r.jsxs)(t.Radio.Group,{children:[(0,r.jsx)(t.Radio.Button,{value:!0,children:"Default"}),(0,r.jsx)(t.Radio.Button,{value:"optional",children:"Optional"}),(0,r.jsx)(t.Radio.Button,{value:!1,children:"Hidden"}),(0,r.jsx)(t.Radio.Button,{value:"customize",children:"Customize"})]})}),(0,r.jsx)(t.Form.Item,{label:"Field A",required:!0,tooltip:"This is a required field",children:(0,r.jsx)(t.Input,{placeholder:"input placeholder"})}),(0,r.jsx)(t.Form.Item,{label:"Field B",tooltip:{title:"Tooltip with customize icon",icon:(0,r.jsx)(a.InfoCircleOutlined,{})},children:(0,r.jsx)(t.Input,{placeholder:"input placeholder"})}),(0,r.jsx)(t.Form.Item,{children:(0,r.jsx)(t.Button,{type:"primary",children:"Submit"})})]});};}}]);
//# sourceMappingURL=ea49f4e2-async.ce7f4a13.js.map