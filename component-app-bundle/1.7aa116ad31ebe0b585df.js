(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{103:function(e,t,n){"use strict";var i=n(99);n.n(i).a},104:function(e,t,n){(t=n(100)(!1)).push([e.i,".atom-headline[data-v-6cbb25dd]{font-style:normal;font-weight:400}.atom-headline>*[data-v-6cbb25dd]{display:block}.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-family:sans-serif;font-size:3.2vw;font-weight:400}@media (--xs){.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-family:serif;font-size:9.6vw;font-weight:700}@media (--xs){.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-size:36px}}.atom-headline.headline--view-header[data-v-6cbb25dd]{padding:15px;font-family:sans-serif;font-size:20px;font-weight:400}",""]),e.exports=t},106:function(e,t,n){"use strict";var i={props:{tag:{type:String,required:!1,default:function(){return"h1"}},styleType:{type:String,default:function(){return null}},overline:{type:String,required:!1,default:function(){return"Lorem Overline"}},headline:{type:String,required:!1,default:function(){return"Lorem Headline"}},subline:{type:String,required:!1,default:function(){return"Lorem Subline"}}},computed:{styleClasses:function(){var e={};return e["headline--".concat(this.tag)]=!0,e["headline--".concat(this.styleType)]=this.styleType,e}}},l=(n(103),n(98)),a=Object(l.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?n("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"6cbb25dd",null);t.a=a.exports},128:function(e,t,n){var i=n(160);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(101).default)("244e7fbf",i,!0,{sourceMap:!1})},129:function(e,t,n){var i=n(162);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(101).default)("6902f04b",i,!0,{sourceMap:!1})},155:function(e,t,n){"use strict";var i,l=n(16),a=n(19).f,r=n(30),s=n(156),o=n(31),u=n(158),d=n(13),c="".startsWith,h=Math.min,f=u("startsWith");l({target:"String",proto:!0,forced:!!(d||f||(i=a(String.prototype,"startsWith"),!i||i.writable))&&!f},{startsWith:function(e){var t=String(o(this));s(e);var n=r(h(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return c?c.call(t,i,n):t.slice(n,n+i.length)===i}})},156:function(e,t,n){var i=n(157);e.exports=function(e){if(i(e))throw TypeError("The method doesn't accept regular expressions");return e}},157:function(e,t,n){var i=n(6),l=n(12),a=n(1)("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==l(e))}},158:function(e,t,n){var i=n(1)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,"/./"[e](t)}catch(e){}}return!1}},159:function(e,t,n){"use strict";var i=n(128);n.n(i).a},160:function(e,t,n){(t=n(100)(!1)).push([e.i,".molecule-link-list.type--view-header{display:flex;padding:0;margin:0;list-style:none}.molecule-link-list.type--view-header a{display:block;padding:10px 15px;font-family:sans-serif;color:#333;text-decoration:none}.molecule-link-list.type--view-header a.router-link-exact-active.router-link-active{font-weight:700}.molecule-link-list.type--view-header a.router-link-exact-active.router-link-active,.molecule-link-list.type--view-header a:hover{background:#eee}",""]),e.exports=t},161:function(e,t,n){"use strict";var i=n(129);n.n(i).a},162:function(e,t,n){(t=n(100)(!1)).push([e.i,".organisms-view-header nav{display:flex;line-height:1}.organisms-view-header nav>span{padding:10px 15px;font-family:sans-serif;color:#333}",""]),e.exports=t},174:function(e,t,n){"use strict";n.r(t);var i=n(106),l=(n(155),{props:{url:{type:String,required:!1,default:"http://example.com"},title:{type:String,required:!1,default:null},target:{type:String,required:!1,default:"_blank"}},computed:{isExternal:function(){return/^(http(s)?|ftp):\/\//.test(this.url)||this.url.startsWith("#")}}}),a=n(98),r={components:{AtomLinkTo:Object(a.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isExternal?n("a",{attrs:{href:e.url,target:e.target||"_blank",rel:"noopener",title:e.title}},[e._t("default",[e._v(e._s(e.title))])],2):e.isExternal?e._e():n("nuxt-link",{attrs:{to:e.url,title:e.title}},[e._t("default",[e._v(e._s(e.title))])],2)}),[],!1,null,null,null).exports},props:{type:{type:String,default:function(){return null}},list:{type:Array,default:function(){return[]}}},computed:{styleClasses:function(){var e={};return e["type--".concat(this.type)]=this.type,e}},methods:{getUrl:function(e){if(!("$i18n"in this))return e.url;this.localePath(e.url)}}},s=(n(159),Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"molecule-link-list",class:e.styleClasses},[e._t("default",e._l(e.list,(function(t){return n("li",{key:t.title},[n("atom-link-to",{attrs:{url:e.getUrl(t)}},[e._v("\n        "+e._s(t.title)+"\n      ")])],1)})))],2)}),[],!1,null,null,null).exports),o={components:{atomHeadline:i.a,MoleculeLinkList:s},props:{title:{type:String,default:function(){return"Header Title"}},navigation:{type:Array,default:function(){return[{title:"Link 1.",url:"#link-1",target:"_self"},{title:"Link 2.",url:"#link-2",target:"_self"},{title:"Link 3.",url:"#link-3",target:"_self"}]}}},computed:{headline:function(){return{overline:null,headline:this.title,subline:null}}}},u=(n(161),Object(a.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organisms-view-header"},[t("atom-headline",this._b({attrs:{tag:"div","style-type":"view-header"}},"atom-headline",this.headline,!1)),this._v(" "),t("nav",[t("span",[this._v("Views:")]),this._v(" "),t("molecule-link-list",{staticClass:"links",attrs:{type:"view-header",list:this.navigation}})],1)],1)}),[],!1,null,null,null));t.default=u.exports},99:function(e,t,n){var i=n(104);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(101).default)("2610b7a1",i,!0,{sourceMap:!1})}}]);