(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["4875973b"],{"4875973b":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=n("f19d2b93");n("7bcbb822");var r=n("a9d1a279");let{Option:a}=r.Select,o={labelCol:{span:8},wrapperCol:{span:16}},s={wrapperCol:{offset:8,span:16}};var d=()=>{let[e]=r.Form.useForm();return(0,t.jsxs)(r.Form,{...o,form:e,name:"control-hooks",onFinish:e=>{console.log(e);},style:{maxWidth:600},children:[(0,t.jsx)(r.Form.Item,{name:"note",label:"Note",rules:[{required:!0}],children:(0,t.jsx)(r.Input,{})}),(0,t.jsx)(r.Form.Item,{name:"gender",label:"Gender",rules:[{required:!0}],children:(0,t.jsxs)(r.Select,{placeholder:"Select a option and change input text above",onChange:l=>{switch(l){case"male":e.setFieldsValue({note:"Hi, man!"});break;case"female":e.setFieldsValue({note:"Hi, lady!"});break;case"other":e.setFieldsValue({note:"Hi there!"});}},allowClear:!0,children:[(0,t.jsx)(a,{value:"male",children:"male"}),(0,t.jsx)(a,{value:"female",children:"female"}),(0,t.jsx)(a,{value:"other",children:"other"})]})}),(0,t.jsx)(r.Form.Item,{noStyle:!0,shouldUpdate:(e,l)=>e.gender!==l.gender,children:({getFieldValue:e})=>"other"===e("gender")?(0,t.jsx)(r.Form.Item,{name:"customizeGender",label:"Customize Gender",rules:[{required:!0}],children:(0,t.jsx)(r.Input,{})}):null}),(0,t.jsx)(r.Form.Item,{...s,children:(0,t.jsxs)(r.Space,{children:[(0,t.jsx)(r.Button,{type:"primary",htmlType:"submit",children:"Submit"}),(0,t.jsx)(r.Button,{htmlType:"button",onClick:()=>{e.resetFields();},children:"Reset"}),(0,t.jsx)(r.Button,{type:"link",htmlType:"button",onClick:()=>{e.setFieldsValue({note:"Hello world!",gender:"male"});},children:"Fill form"})]})})]});};}}]);
//# sourceMappingURL=4875973b-async.63ba2fc5.js.map