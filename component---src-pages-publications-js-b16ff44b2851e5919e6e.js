"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[937],{9503:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),l=a(4854),r=a(2091),c=a(5725);const i=["Journal Publications","arXiv","Conference Presentations & Publications","Technical Reports","Book","Edited Books","Book Chapters"];var s=e=>{let{publicationData:t=[]}=e;const a=(e=>e.reduce(((e,t)=>{const a=t.PublishedDateYear,n=t.PublicationType;return e[a]||(e[a]={}),e[a][n]||(e[a][n]=[]),e[a][n].push(t),e}),{}))(t);return n.createElement("div",{className:"publications-class",id:"publications"},n.createElement("div",{className:"publication-container"},n.createElement("h4",{className:"header-subtitle"},"Publications"),n.createElement(c.ZP,{container:!0,direction:"column",spacing:2},Object.entries(a).sort(((e,t)=>{let[a]=e,[n]=t;return n-a})).map((e=>{let[t,a]=e;return n.createElement("div",{key:t,style:{marginBottom:"30px"}},n.createElement(c.ZP,{item:!0,className:"year-header"},n.createElement("h3",null,t)),i.filter((e=>a[e])).map((e=>n.createElement("div",{key:e},n.createElement("h4",{className:"type-header"},e),a[e].map((e=>n.createElement(c.ZP,{item:!0,key:e.Authors,style:{marginBottom:"15px"}},n.createElement("div",{className:"Card"},n.createElement("div",{className:"lower-container-pubs"},n.createElement("h3",null," ",e.Title," "),n.createElement("h4",null," ",e.Authors," "),n.createElement("h4",null,e.PDFLink&&"NULL"!==e.PDFLink&&n.createElement(n.Fragment,null," ",n.createElement("a",{href:e.PDFLink},"(pdf)"))))))))))))})))))};var u=e=>{let{children:t}=e;const a=(0,l.useStaticQuery)("1890529758");return n.createElement(r.Z,null,n.createElement(s,{id:"publications",publicationData:a.allPapersCsv.nodes}))}}}]);
//# sourceMappingURL=component---src-pages-publications-js-b16ff44b2851e5919e6e.js.map