(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["24c1ffe2"],{"24c1ffe2":function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return o;}});var n=t("f19d2b93");t("f19ccb9a");var s=t("5b220c3d"),a=t("e22febe0"),u=t("a9d1a279");let r={width:64,height:22,marginInlineEnd:8,verticalAlign:"top"};var o=()=>{let{token:e}=u.theme.useToken(),[l,t]=(0,s.useState)(["Unremovable","Tag 2","Tag 3"]),[o,i]=(0,s.useState)(!1),[c,f]=(0,s.useState)(""),[d,g]=(0,s.useState)(-1),[h,v]=(0,s.useState)(""),b=(0,s.useRef)(null),p=(0,s.useRef)(null);(0,s.useEffect)(()=>{if(o){var e;null===(e=b.current)||void 0===e||e.focus();}},[o]),(0,s.useEffect)(()=>{var e;null===(e=p.current)||void 0===e||e.focus();},[h]);let x=e=>{let n=l.filter(l=>l!==e);console.log(n),t(n);},T=()=>{c&&!l.includes(c)&&t([...l,c]),i(!1),f("");},m=e=>{v(e.target.value);},j=()=>{let e=[...l];e[d]=h,t(e),g(-1),v("");},k={height:22,background:e.colorBgContainer,borderStyle:"dashed"};return(0,n.jsxs)(u.Flex,{gap:"4px 0",wrap:!0,children:[l.map((e,l)=>{if(d===l)return(0,n.jsx)(u.Input,{ref:p,size:"small",style:r,value:h,onChange:m,onBlur:j,onPressEnter:j},e);let t=e.length>20,s=(0,n.jsx)(u.Tag,{closable:0!==l,style:{userSelect:"none"},onClose:()=>x(e),children:(0,n.jsx)("span",{onDoubleClick:t=>{0!==l&&(g(l),v(e),t.preventDefault());},children:t?`${e.slice(0,20)}...`:e})},e);return t?(0,n.jsx)(u.Tooltip,{title:e,children:s},e):s;}),o?(0,n.jsx)(u.Input,{ref:b,type:"text",size:"small",style:r,value:c,onChange:e=>{f(e.target.value);},onBlur:T,onPressEnter:T}):(0,n.jsx)(u.Tag,{style:k,icon:(0,n.jsx)(a.PlusOutlined,{}),onClick:()=>{i(!0);},children:"New Tag"})]});};}}]);
//# sourceMappingURL=24c1ffe2-async.8a53fd99.js.map