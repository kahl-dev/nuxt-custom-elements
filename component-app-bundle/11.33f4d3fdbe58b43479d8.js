(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,t,n){var a=n(149);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(11).default)("316aa054",a,!0,{sourceMap:!1})},148:function(e,t,n){"use strict";n(100)},149:function(e,t,n){(t=n(10)(!1)).push([e.i,".custom-element-app-hash[data-v-0bb6c3aa]{padding:15px;background:#eee;border:1px solid #eee}.custom-element-app-hash .header[data-v-0bb6c3aa],.custom-element-app-hash .router-view[data-v-0bb6c3aa]{background:#fff;border:1px solid #eee}.custom-element-app-hash .router-view[data-v-0bb6c3aa]{min-height:160px;padding:0 15px;margin-top:20px}",""]),e.exports=t},173:function(e,t,n){"use strict";n.r(t);var a=n(44),r=n(25),i={components:{OrganismViewHeader:()=>n.e(1).then(n.bind(null,170))},extends:a.a,router:Object(r.a)("hash"),data:()=>({views:["index","view-1","view-2","view-3"]}),computed:{content:()=>({header:{title:'App with router mode "hash"',linksTitle:"Views:",navigation:[{title:"Home",url:"/"},{title:"View 1",url:"/view-1"},{title:"View 2",url:"/view-2"},{title:"View 3",url:"/view-3"}]}}),header(){return this.content.header}}},o=(n(148),n(9)),s=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"custom-element-app-hash"},[t("organism-view-header",this._b({staticClass:"header"},"organism-view-header",this.header,!1)),this._v(" "),t("custom-element-router-view",{staticClass:"router-view"})],1)}),[],!1,null,"0bb6c3aa",null);t.default=s.exports},24:function(e,t,n){var a=n(42);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(11).default)("35d1fe7e",a,!0,{sourceMap:!1})},25:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(0),r=n(73);function i(e){return e.map(e=>({path:"/".concat(e).replace(/index$/,""),component:()=>function(e){return n(43)("./"+e)}(e)}))}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"abstract",n=new r.a({mode:t,base:e.CUSTOM_ELEMENT_ROUTER_BASE||e.location.pathname});return"abstract"===t&&n.replace("/"),n}a.a.use(r.a)}).call(this,n(1))},29:function(e,t,n){var a={"./base.js":30};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=29},30:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return a})),n.d(t,"mutations",(function(){return r})),n.d(t,"getters",(function(){return i})),n.d(t,"actions",(function(){return o}));var a=()=>({value:!0}),r={value(e,t){e.value=Boolean(t)}},i={value:e=>e.value},o={setValue(e,t){e.commit("value",t)}}},31:function(e,t,n){"use strict";n(45),n(48),n(51),n(52),n(53),n(54),n(55),n(56);var a=n(0),r=n(57);a.a.use(r.a);a.a.component("NuxtLink",{extends:a.a.component("RouterLink")});var i,o={store:new r.a.Store({modules:(i=n(29),i.keys().reduce((e,t)=>{var n=t.replace(/\.\/(.*)\.js/,"$1");return e[String(n)]=Object.assign({namespaced:!0},i(t)),e},{}))}),props:{basePath:{type:String,default:()=>"/"}}},s=n(9),u=Object(s.a)(o,void 0,void 0,!1,null,null,null);t.a=u.exports},41:function(e,t,n){"use strict";n(24)},42:function(e,t,n){(t=n(10)(!1)).push([e.i,"div[data-v-02921181]{position:relative}.router-view-change-enter-active[data-v-02921181],.router-view-change-leave-active[data-v-02921181]{transition:opacity 0s linear .15s}.router-view-change-enter[data-v-02921181],.router-view-change-leave-to[data-v-02921181]{position:absolute;width:100%;opacity:0;transition:opacity .15s linear .15s}",""]),e.exports=t},43:function(e,t,n){var a={"./":[20,2],"./index":[20,2],"./index.vue":[20,2],"./view-1":[34,4],"./view-1.vue":[34,4],"./view-2":[35,5],"./view-2.vue":[35,5],"./view-3":[36,6],"./view-3.vue":[36,6]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=43,e.exports=r},44:function(e,t,n){"use strict";var a={name:"CustomElementRouterView"},r=(n(41),n(9)),i=Object(r.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("transition",{attrs:{name:"router-view-change"}},[t("keep-alive",[this.$router?t("router-view"):this._e()],1)],1)],1)}),[],!1,null,"02921181",null).exports,o=n(25),s={components:{CustomElementRouterView:i},extends:n(31).a,props:{mode:{type:String,default:()=>"history"}},data:()=>({views:["index"]}),created(){this.$router&&this.$router.addRoutes(Object(o.b)(this.views))}},u=Object(r.a)(s,void 0,void 0,!1,null,null,null);t.a=u.exports}}]);