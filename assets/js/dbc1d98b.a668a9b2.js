"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[54],{2384:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var t=a(4848),s=a(8453),r=a(9489),l=a(7227);const o={},i="\ud83d\udc50 $match",c={id:"simple-queries/match",title:"\ud83d\udc50 $match",description:"The $match operator is used in conjunction with the aggregation framework to filter documents in a collection. It takes a document as input and returns a new document containing only the documents that match the specified criteria. The syntax for the $match operator is as follows:",source:"@site/docs/30-simple-queries/2-match.mdx",sourceDirName:"30-simple-queries",slug:"/simple-queries/match",permalink:"/aggregation-pipeline-lab/docs/simple-queries/match",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/30-simple-queries/2-match.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Empty aggregation pipeline",permalink:"/aggregation-pipeline-lab/docs/simple-queries/empty-aggregation"},next:{title:"\ud83d\udc50 $project",permalink:"/aggregation-pipeline-lab/docs/simple-queries/project"}},d={},h=[{value:"Expressions",id:"expressions",level:2},{value:"Matching book documents",id:"matching-book-documents",level:2},{value:"AND",id:"and",level:2},{value:"Shorthand AND",id:"shorthand-and",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:a,Screenshot:o}=n;return a||p("Details",!0),o||p("Screenshot",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-match",children:"\ud83d\udc50 $match"}),"\n",(0,t.jsx)(n.p,{children:"The $match operator is used in conjunction with the aggregation framework to filter documents in a collection. It takes a document as input and returns a new document containing only the documents that match the specified criteria. The syntax for the $match operator is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"{ $match: { <expression>: <value> } }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"expressions",children:"Expressions"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"<expression>"})," portion of the $match operator can be any valid MongoDB expression. This includes :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Comparison operators: ",(0,t.jsx)(n.code,{children:"eq"}),", ",(0,t.jsx)(n.code,{children:"neq"}),", ",(0,t.jsx)(n.code,{children:"gte"}),", ",(0,t.jsx)(n.code,{children:"lte"}),", ",(0,t.jsx)(n.code,{children:"gt"}),", ",(0,t.jsx)(n.code,{children:"lt"}),", ",(0,t.jsx)(n.code,{children:"in"}),", ",(0,t.jsx)(n.code,{children:"nin"}),", ",(0,t.jsx)(n.code,{children:"exists"})]}),"\n",(0,t.jsx)(n.li,{children:"Regular expressions: regex"}),"\n",(0,t.jsx)(n.li,{children:"Logical operators: and, or, not"}),"\n",(0,t.jsxs)(n.li,{children:["Subdocuments and arrays: ",(0,t.jsx)(n.code,{children:"{ field: <value> }, [ <item>, <item>, ... ]"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"matching-book-documents",children:"Matching book documents"}),"\n",(0,t.jsxs)(r.A,{groupId:"aggregations",children:[(0,t.jsxs)(l.A,{value:"atlas",label:"Atlas UI",children:[(0,t.jsxs)(n.p,{children:["First, make sure you select the ",(0,t.jsx)(n.code,{children:"books"})," collection in the Atlas UI."]}),(0,t.jsx)(o,{src:"/img/30-simple-queries/select-books-collection.png",url:"http://cloud.mongodb.com/",alt:"Atlas UI database deployment with the books collection highlighted."}),(0,t.jsxs)(n.p,{children:["Then, navigate to the ",(0,t.jsx)(n.code,{children:"Aggregation"})," tab and click ",(0,t.jsx)(n.code,{children:"</> TEXT"}),"."]}),(0,t.jsx)(o,{src:"/img/30-simple-queries/new-aggregation.png",url:"http://cloud.mongodb.com/",alt:"Atlas UI database deployment with aggregation tab highlighted."}),(0,t.jsxs)(n.p,{children:["Say we want all the books from the year 2010. We can add a ",(0,t.jsx)(n.code,{children:"$match"})," stage to filter the documents from the books collection:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"[\n    {\n        $match: { year: 2010 }\n    }\n]\n"})}),(0,t.jsx)(o,{src:"/img/30-simple-queries/match-screenshot.png",url:"http://cloud.mongodb.com/",alt:"Atlas AI $match aggregation."})]}),(0,t.jsxs)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:[(0,t.jsx)(n.p,{children:"Say we want all the books from 2010. We'll write:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {year: 2010}}])\n"})})]})]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udc50 Return all the ",(0,t.jsx)(n.code,{children:"books"})," that have exactly 100 pages."]}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsxs)(r.A,{groupId:"aggregations",children:[(0,t.jsx)(l.A,{value:"atlas",label:"Atlas UI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"[\n    {\n        $match: { pages: 100 }\n    }\n]\n"})})}),(0,t.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {pages: 100}}])\n"})})})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"and",children:"AND"}),"\n",(0,t.jsxs)(n.p,{children:["If we need to add more conditions using AND, we can do it with the ",(0,t.jsx)(n.code,{children:"$and"})," operator."]}),"\n",(0,t.jsxs)(n.p,{children:["If we want all the books with 100 pages with exactly ",(0,t.jsx)(n.code,{children:"totalInventory"})," 2 we can use an ",(0,t.jsx)(n.code,{children:"$and"})," operator. This takes an array of documents with all the conditions that should be true for the AND to succeed:"]}),"\n",(0,t.jsxs)(r.A,{groupId:"aggregations",children:[(0,t.jsx)(l.A,{value:"atlas",label:"Atlas UI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"[\n    {\n        $match: {\n            $and: [\n                { pages: 100 },\n                { totalInventory: 2 }\n            ]\n        }\n    }\n]\n"})})}),(0,t.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {$and: [{pages: 100}, {totalInventory: 2}]}}])\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"The pseudo-code for this would be something like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"IF pages == 100 AND totalInventory == 2 {\n    return matching docs\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udc50 Return all the ",(0,t.jsx)(n.code,{children:"books"})," from 2015 that have exactly 100 pages."]}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsxs)(r.A,{groupId:"aggregations",children:[(0,t.jsx)(l.A,{value:"atlas",label:"Atlas UI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"[\n    {\n        $match: {\n            $and: [\n                { pages: 100 },\n                { year: 2015 }\n            ]\n        }\n    }\n]\n"})})}),(0,t.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {$and: [{pages: 100}, {year: 2015}]}}])\n"})})})]})})]}),"\n",(0,t.jsx)(n.p,{children:"\ud83d\udc50 How many are they?"}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsxs)(r.A,{groupId:"aggregations",children:[(0,t.jsx)(l.A,{value:"atlas",label:"Atlas UI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'[\n    {\n        $match: {\n            $and: [\n                { pages: 100 },\n                { year: 2015 }\n            ]\n        }\n    },\n    {\n        $count: "books_count"\n    }\n]\n'})})}),(0,t.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {$and: [{pages: 100}, {year: 2015}]}}]).itcount()\n"})})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"shorthand-and",children:"Shorthand AND"}),"\n",(0,t.jsx)(n.p,{children:"We can do an implicit AND just passing a document with all the conditions (instead of an array of documents):"}),"\n",(0,t.jsxs)(r.A,{groupId:"aggregations",children:[(0,t.jsx)(l.A,{value:"atlas",label:"Atlas UI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"[\n    {\n        $match: {pages: 100, totalInventory: 2}\n    }\n]\n"})})}),(0,t.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {pages: 100, totalInventory: 2}}])\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udc50 Return all the ",(0,t.jsx)(n.code,{children:"books"})," from 2015 that have exactly 100 pages, using the simple $and notation"]}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsxs)(r.A,{groupId:"aggregations",children:[(0,t.jsx)(l.A,{value:"atlas",label:"Atlas UI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"[\n    {\n        $match: {pages: 100, year: 2015}\n    }\n]\n"})})}),(0,t.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {pages: 100, year: 2015}}])\n"})})})]})})]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7227:(e,n,a)=>{a.d(n,{A:()=>l});a(6540);var t=a(8215);const s={tabItem:"tabItem_Ymn6"};var r=a(4848);function l(e){let{children:n,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:a,children:n})}},9489:(e,n,a)=>{a.d(n,{A:()=>A});var t=a(6540),s=a(8215),r=a(4245),l=a(6347),o=a(6494),i=a(2814),c=a(5167),d=a(1269);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function g(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const s=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,r=u(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,h]=p({queryString:a,groupId:s}),[m,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(a);return[s,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),j=(()=>{const e=c??m;return g({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),x(e)}),[h,x,r]),tabValues:r}}var x=a(1062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(4848);function f(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,a=i.indexOf(n),s=o[a].value;s!==t&&(c(n),l(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(f,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function A(e){const n=(0,x.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>o});var t=a(6540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);