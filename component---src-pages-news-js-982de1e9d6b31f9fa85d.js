"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[3],{6684:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(7294),r=n(4854),l=n(2091),i=n(5785);var s=e=>{let{newsTiles:t}=e;const n=t.sort(((e,t)=>{const n=new Date(t.date)-new Date(e.date);return 0!==n?n:t.name.localeCompare(e.name)})),{0:l,1:s}=(0,a.useState)(1),m=20*l,o=m-20,c=n.slice(o,m);return a.createElement("div",{className:"publications-class",id:"news",style:{background:"white",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"left"}},a.createElement("div",{style:{margin:"0 auto",maxWidth:1050,paddingBottom:"1.45rem",marginLeft:"1.25rem",marginRight:"1.25rem",width:"100%"}},a.createElement("h1",{className:"header-subtitle",style:{color:"#333f48",fontSize:"1.5rem",fontWeight:"700",margin:"auto",textAlign:"center",paddingBottom:"1.0rem",paddingTop:"2.0rem",marginBottom:"1rem"}},"News"),a.createElement("div",null,c.map((e=>{const t=new Date(e.date),n=t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear();return a.createElement("div",{key:e.name,style:{display:"flex",marginBottom:"1.5rem"}},a.createElement("div",{className:"lower-container-pubs",style:{width:"120px",textAlign:"right"}},a.createElement("h3",null,n)),a.createElement("div",{style:{flexBasis:"80%"}},a.createElement(r.Link,{style:{color:"#333f48",textDecoration:"none",fontSize:".73rem"},to:e.link},a.createElement("div",{className:"lower-container-pubs"},a.createElement("h3",null,e.name),e.description&&a.createElement("h4",null,e.description)))))}))),a.createElement("div",{style:{textAlign:"center",marginTop:"2rem"}},(0,i.Z)(Array(Math.ceil(n.length/20)).keys()).map((e=>a.createElement("button",{key:e+1,onClick:()=>(e=>s(e))(e+1),style:{backgroundColor:l===e+1?"#333f48":"transparent",color:l===e+1?"#fff":"#333f48",border:"1px solid #333f48",padding:"0.5rem",margin:"0.5rem",cursor:"pointer"}},e+1))))))};var m=e=>{let{children:t}=e;const n=(0,r.useStaticQuery)("3010967570");return a.createElement(l.Z,null,a.createElement(s,{id:"news",newsTiles:n.site.siteMetadata.newsTiles}))}}}]);
//# sourceMappingURL=component---src-pages-news-js-982de1e9d6b31f9fa85d.js.map