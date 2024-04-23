"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[571],{4031:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(4848),r=t(8453);const s={},i="\ud83d\udc50 Searching inside Objects in arrays",o={id:"using-arrays/search-inside-objects-in-arrays",title:"\ud83d\udc50 Searching inside Objects in arrays",description:"In our books we're using the Attribute Pattern to have different attributes in our documents. As we can see in the sample doc we have an attributes array, containing several objects, each with the same structure:",source:"@site/docs/40-using-arrays/2-search-inside-objects-in-arrays.mdx",sourceDirName:"40-using-arrays",slug:"/using-arrays/search-inside-objects-in-arrays",permalink:"/aggregation-pipeline-lab/docs/using-arrays/search-inside-objects-in-arrays",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/40-using-arrays/2-search-inside-objects-in-arrays.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Simple Array queries",permalink:"/aggregation-pipeline-lab/docs/using-arrays/simple-match-array"},next:{title:"Counting and Sorting",permalink:"/aggregation-pipeline-lab/docs/category/counting-and-sorting"}},c={},d=[];function h(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"-searching-inside-objects-in-arrays",children:"\ud83d\udc50 Searching inside Objects in arrays"}),"\n",(0,a.jsxs)(n.p,{children:["In our books we're using the ",(0,a.jsx)(n.a,{href:"https://www.mongodb.com/developer/products/mongodb/attribute-pattern/",children:"Attribute Pattern"})," to have different attributes in our documents. As we can see in the ",(0,a.jsx)(n.a,{href:"/docs/simple-queries/project",children:"sample doc"})," we have an ",(0,a.jsx)(n.code,{children:"attributes"})," array, containing several objects, each with the same structure:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"attributes: [\n    {\n      key: 'edition',\n      value: '1st'\n    },\n    {\n      key: 'dimensions',\n      value: 'Height: 1.111 Inches, Length: 1.111 Inches, Weight: 0.2 Pounds, Width: 1.111 Inches'\n    },\n    {\n      key: 'isbn13',\n      value: '9780765342508'\n    },\n    {\n      key: 'msrp',\n      value: 6.99\n    },\n    {\n      key: 'isbn',\n      value: '0765342502'\n    },\n    {\n      key: 'isbn10',\n      value: '0765342502'\n    }\n  ],\n"})}),"\n",(0,a.jsxs)(n.p,{children:["How do we search for all the books that have an msrp of 9.99? We want books that, inside ",(0,a.jsx)(n.code,{children:"attributes"})," has an object with key ",(0,a.jsx)(n.code,{children:"msrp"})," and value ",(0,a.jsx)(n.code,{children:"9.99"}),". We can get it to work with this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n    { $unwind : "$attributes" },\n    {$match: {"attributes.key": "msrp", "attributes.value": 9.99} },\n   {$project: {title: 1, attributes: 1}}\n]);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Here we're getting a copy of each book for each object inside the ",(0,a.jsx)(n.code,{children:"$attributes"}),' array. This "flattens" the array and returns many copies of the same documents, one for each different attribute that we have which will be different for each of these generated docs.']}),"\n",(0,a.jsxs)(n.p,{children:["\ud83d\udc50 To better understand ",(0,a.jsx)(n.code,{children:"$unwind"}),", run this aggregation"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n  { $match: {_id: "0395623650"} },\n  { $unwind : "$attributes" },\n]);\n'})}),"\n",(0,a.jsx)(n.p,{children:"You should get one document per attribute of the original book."}),"\n",(0,a.jsx)(n.p,{children:"But you can actually match documents in an array in a more straightforward fashion:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'let nineNinetyNine = {$match: {"attributes.key": "msrp", "attributes.value": 9.99}};\nlet showOnlyTheseFields = {$project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1, "attributes": 1}};\n\ndb.books.aggregate([\n    nineNinetyNine,\n    showOnlyTheseFields,\n]);\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(6540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);