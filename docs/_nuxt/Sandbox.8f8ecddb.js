import v from"./TabsHeader.23f06eba.js";import{a as x,an as g,r as n,f as h,o as r,i as l,c as S,u as c,l as y,x as k}from"./entry.6777b2a3.js";const $={class:"sandbox"},w=["src"],B={key:2},C=x({__name:"Sandbox",props:{src:{type:String,default:""},repo:{type:String,default:""},branch:{type:String,default:""},dir:{type:String,default:""},file:{type:String,default:"app.vue"}},setup(i){const e=i,u=g(),o={CodeSandBox:()=>`https://codesandbox.io/embed/github/${e.repo}/tree/${e.branch}/${e.dir}?hidenavigation=1&theme=${u.value}`,StackBlitz:()=>`https://stackblitz.com/github/${e.repo}/tree/${e.branch}/${e.dir}?embed=1&file=${e.file}&theme=${u.value}`},p=Object.keys(o).map(t=>({label:t})),d=n(-1),_=n(),s=n(""),a=n(""),b=t=>{a.value=t,s.value=e.src||o[a.value](),localStorage.setItem("docus_sandbox",t)},f=t=>{d.value=t,b(p[t].label)};return h(()=>{a.value=window.localStorage.getItem("docus_sandbox")||"CodeSandBox",s.value=e.src||o[a.value](),d.value=Object.keys(o).indexOf(a.value)}),(t,I)=>{const m=v;return r(),l("div",$,[i.src?y("",!0):(r(),S(m,{key:0,ref_key:"tabs",ref:_,"active-tab-index":c(d),tabs:c(p),"onUpdate:activeTabIndex":f},null,8,["active-tab-index","tabs"])),c(s)?(r(),l("iframe",{key:1,src:c(s),title:"Sandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,8,w)):(r(),l("span",B,"Loading Sandbox..."))])}}});const O=k(C,[["__scopeId","data-v-fecef2a9"]]);export{O as default};
