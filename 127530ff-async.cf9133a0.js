(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["127530ff"],{"127530ff":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=a("f19d2b93");a("88746497");var n=a("5b220c3d"),o=a("e22febe0"),i=a("a9d1a279");let s=({value:e,onChange:l})=>{let[a,s]=(0,n.useState)(),d=()=>({dir:"user-dir/",expire:"1577811661",host:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",accessId:"c2hhb2RhaG9uZw==",policy:"eGl4aWhhaGFrdWt1ZGFkYQ==",signature:"ZGFob25nc2hhbw=="}),r=async()=>{try{let e=await d();s(e);}catch(e){i.message.error(e);}};(0,n.useEffect)(()=>{r();},[]);let u=async e=>{if(!a)return!1;let l=1e3*Number(a.expire);l<Date.now()&&await r();let t=e.name.slice(e.name.lastIndexOf(".")),n=Date.now()+t;return e.url=a.dir+n,e;},c={name:"file",fileList:e,action:null==a?void 0:a.host,onChange:({fileList:e})=>{console.log("Aliyun OSS:",e),null==l||l([...e]);},onRemove:a=>{let t=(e||[]).filter(e=>e.url!==a.url);l&&l(t);},data:e=>({key:e.url,OSSAccessKeyId:null==a?void 0:a.accessId,policy:null==a?void 0:a.policy,Signature:null==a?void 0:a.signature}),beforeUpload:u};return(0,t.jsx)(i.Upload,{...c,children:(0,t.jsx)(i.Button,{icon:(0,t.jsx)(o.UploadOutlined,{}),children:"Click to Upload"})});};var d=()=>(0,t.jsx)(i.Form,{labelCol:{span:4},children:(0,t.jsx)(i.Form.Item,{label:"Photos",name:"photos",children:(0,t.jsx)(s,{})})});}}]);
//# sourceMappingURL=127530ff-async.cf9133a0.js.map