(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["13abed98"],{"13abed98":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return a;}});var l=n("f19d2b93");n("b7d39d86");var o=n("5b220c3d"),i=n("a9d1a279"),a=()=>{let[e,t]=(0,o.useState)([]),[n,a]=(0,o.useState)([]),s=()=>{let e=[],n=[];for(let t=0;t<20;t++){let l={key:t.toString(),title:`content${t+1}`,description:`description of content${t+1}`,chosen:t%2==0};l.chosen&&e.push(l.key),n.push(l);}t(n),a(e);};return(0,o.useEffect)(()=>{s();},[]),(0,l.jsx)(i.Transfer,{dataSource:e,showSearch:!0,listStyle:{width:250,height:300},operations:["to right","to left"],targetKeys:n,onChange:e=>{a(e);},render:e=>`${e.title}-${e.description}`,footer:(e,t)=>(null==t?void 0:t.direction)==="left"?(0,l.jsx)(i.Button,{size:"small",style:{display:"flex",margin:8,marginInlineEnd:"auto"},onClick:s,children:"Left button reload"}):(0,l.jsx)(i.Button,{size:"small",style:{display:"flex",margin:8,marginInlineStart:"auto"},onClick:s,children:"Right button reload"})});};}}]);
//# sourceMappingURL=13abed98-async.d34efce9.js.map