"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[9882],{7232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(4848),a=n(8453);const i={},r="\ud83e\uddb8 Saving to a Collection",l={id:"exporting-data/saving-to-collection",title:"\ud83e\uddb8 Saving to a Collection",description:"You can export the result of an aggregation pipeline to a different DB/collection. To do that, just add a last aggregation stage to your pipeline:",source:"@site/docs/90-exporting-data/saving-to-collection.mdx",sourceDirName:"90-exporting-data",slug:"/exporting-data/saving-to-collection",permalink:"/aggregation-pipeline-lab/docs/exporting-data/saving-to-collection",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/90-exporting-data/saving-to-collection.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exporting Data",permalink:"/aggregation-pipeline-lab/docs/category/exporting-data"},next:{title:"\ud83d\udcd8 Lecture material",permalink:"/aggregation-pipeline-lab/docs/lecture-material"}},s={},c=[];function d(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"-saving-to-a-collection",children:"\ud83e\uddb8 Saving to a Collection"})}),"\n",(0,o.jsx)(t.p,{children:"You can export the result of an aggregation pipeline to a different DB/collection. To do that, just add a last aggregation stage to your pipeline:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'{ $out: { db: "<output-db>", coll: "<output-collection>" } }\n'})}),"\n",(0,o.jsxs)(t.p,{children:["You can omit the ",(0,o.jsx)(t.code,{children:"db"})," attribute, and the new collection will be created in the current DB."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'{ $out: "<output-collection>" }\n'})}),"\n",(0,o.jsxs)(t.p,{children:["\ud83d\udc50 Create a copy of the books with exactly 100 pages and output as a new collection named ",(0,o.jsx)(t.code,{children:"OneHundredPagesBooks"}),"."]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Answer"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'let oneHundredPagesBooks = {$match: {pages: 100}};\nlet saveToNewCollection = {$out: "OneHundredPagesBooks"}\n\ndb.books.aggregate([\n    oneHundredPagesBooks,\n    saveToNewCollection\n]);\n'})}),(0,o.jsx)(t.p,{children:"After running this, we should see a new collection with:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"show collections\n"})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var o=n(6540);const a={},i=o.createContext(a);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);