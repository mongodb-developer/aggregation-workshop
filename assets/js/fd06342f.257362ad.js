"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[386],{9574:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=i(4848),s=i(8453);const o={},a="\ud83e\uddb8 Missing Data",r={id:"modifying-results/missing-data",title:"\ud83e\uddb8 Missing Data",description:"Sometimes, we're missing a field we're looking for (it's not there, as documents in a collection can be polymorphic, so this field is null). For these cases, we can check if something is there using $ifNull and add a default value.",source:"@site/docs/80-modifying-results/missing-data.mdx",sourceDirName:"80-modifying-results",slug:"/modifying-results/missing-data",permalink:"/aggregation-pipeline-lab/docs/modifying-results/missing-data",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/80-modifying-results/missing-data.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Adding New Fields to Results",permalink:"/aggregation-pipeline-lab/docs/modifying-results/adding-fields"},next:{title:"Exporting Data",permalink:"/aggregation-pipeline-lab/docs/category/exporting-data"}},l={},d=[];function c(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-missing-data",children:"\ud83e\uddb8 Missing Data"}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes, we're missing a field we're looking for (it's not there, as documents in a collection can be polymorphic, so this field is ",(0,t.jsx)(n.code,{children:"null"}),"). For these cases, we can check if something is there using ",(0,t.jsx)(n.code,{children:"$ifNull"})," and add a default value."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'let getAuthorsWithBooks = {\n    $project: {\n        name: 1,\n        books: { $ifNull: ["$books", []]},\n    }\n}\n\ndb.authors.aggregate([\n    getAuthorsWithBooks,\n])\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);