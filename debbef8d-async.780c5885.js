(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["debbef8d"],{debbef8d:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return d;}});var s=a("777fffbe"),n=a("f19d2b93");a("b4643e1b");var l=a("5b220c3d"),i=a("a9d1a279"),r=s._(a("2fa25a63")),d=()=>{let[e,t]=(0,l.useState)([]),a=()=>{fetch("https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo").then(e=>e.json()).then(a=>{t(e.concat(a.results)),i.message.success(`${a.results.length} more items loaded!`);});};return(0,l.useEffect)(()=>{a();},[]),(0,n.jsx)(i.List,{children:(0,n.jsx)(r.default,{data:e,height:400,itemHeight:47,itemKey:"email",onScroll:e=>{1>=Math.abs(e.currentTarget.scrollHeight-e.currentTarget.scrollTop-400)&&a();},children:e=>(0,n.jsxs)(i.List.Item,{children:[(0,n.jsx)(i.List.Item.Meta,{avatar:(0,n.jsx)(i.Avatar,{src:e.picture.large}),title:(0,n.jsx)("a",{href:"https://ant.design",children:e.name.last}),description:e.email}),(0,n.jsx)("div",{children:"Content"})]},e.email)})});};}}]);
//# sourceMappingURL=debbef8d-async.780c5885.js.map