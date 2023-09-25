"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[187],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=l(r),m=a,f=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[g]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(4137));const o={},i="\ud83e\uddb8\u200d\u2642\ufe0f Repeating stages",p={unversionedId:"simple-queries/repeating-stages",id:"simple-queries/repeating-stages",title:"\ud83e\uddb8\u200d\u2642\ufe0f Repeating stages",description:"Extra activity, if you have extra time or are following at home",source:"@site/docs/30-simple-queries/7-repeating-stages.mdx",sourceDirName:"30-simple-queries",slug:"/simple-queries/repeating-stages",permalink:"/aggregation-workshop/docs/simple-queries/repeating-stages",draft:!1,editUrl:"https://github.com/mongodb-developer/aggregation-workshop/blob/main/docs/30-simple-queries/7-repeating-stages.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Writing long pipelines",permalink:"/aggregation-workshop/docs/simple-queries/writing-long-pipelines"},next:{title:"Counting and Sorting",permalink:"/aggregation-workshop/docs/category/counting-and-sorting"}},s={},l=[],c={toc:l},g="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-repeating-stages"},"\ud83e\uddb8\u200d\u2642\ufe0f Repeating stages"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Extra activity, if you have extra time or are following at home")),(0,a.kt)("p",null,"From the ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/#stages"},"Aggregation Pipelines manual"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"All stages except the $out, $merge, $geoNear, $changeStream, and $changeStreamSplitLargeEvent stages can appear multiple times in a pipeline.")),(0,a.kt)("p",null,"So we can repeat most stages, and do something like (although can make sense or not)"))}u.isMDXComponent=!0}}]);