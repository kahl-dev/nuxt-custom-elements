import{u}from"./asyncData.d5b7d69b.js";import{a as n,X as o,V as f}from"./entry.6777b2a3.js";import{u as c}from"./useGithub.b56c3dbf.js";const m=n({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(t){const{fetchReleases:r}=c(),{data:s,refresh:e,pending:a}=await u(`github-releases-${o(t.query)}`,()=>r(t.query));return{releases:s,refresh:e,pending:a}},render({releases:t,refresh:r,pending:s}){var a;const e=f();return(a=e==null?void 0:e.default)==null?void 0:a.call(e,{releases:t,refresh:r,pending:s})}});export{m as default};
