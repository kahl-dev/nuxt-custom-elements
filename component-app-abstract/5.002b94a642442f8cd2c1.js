(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{25:function(e,t,l){var i=l(27);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,l(9).default)("69e03bb1",i,!0,{sourceMap:!1})},26:function(e,t,l){"use strict";var i=l(25);l.n(i).a},27:function(e,t,l){(t=l(8)(!1)).push([e.i,".atom-headline[data-v-6cbb25dd]{font-style:normal;font-weight:400}.atom-headline>*[data-v-6cbb25dd]{display:block}.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-family:sans-serif;font-size:3.2vw;font-weight:400}@media (--xs){.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-family:serif;font-size:9.6vw;font-weight:700}@media (--xs){.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-size:36px}}.atom-headline.headline--view-header[data-v-6cbb25dd]{padding:15px;font-family:sans-serif;font-size:20px;font-weight:400}",""]),e.exports=t},28:function(e,t,l){"use strict";var i={props:{tag:{type:String,required:!1,default:()=>"h1"},styleType:{type:String,default:()=>null},overline:{type:String,required:!1,default:()=>"Lorem Overline"},headline:{type:String,required:!1,default:()=>"Lorem Headline"},subline:{type:String,required:!1,default:()=>"Lorem Subline"}},computed:{styleClasses(){var e={};return e["headline--".concat(this.tag)]=!0,e["headline--".concat(this.styleType)]=this.styleType,e}}},a=(l(26),l(1)),n=Object(a.a)(i,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?l("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?l("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?l("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"6cbb25dd",null);t.a=n.exports},29:function(e,t,l){var i=l(37);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,l(9).default)("675cabcf",i,!0,{sourceMap:!1})},30:function(e,t,l){var i=l(39);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,l(9).default)("3c06d74a",i,!0,{sourceMap:!1})},36:function(e,t,l){"use strict";var i=l(29);l.n(i).a},37:function(e,t,l){(t=l(8)(!1)).push([e.i,".molecule-link-list.type--view-header{display:flex;padding:0;margin:0;list-style:none}.molecule-link-list.type--view-header a{display:block;padding:10px 15px;font-family:sans-serif;color:#333;text-decoration:none}.molecule-link-list.type--view-header a.router-link-exact-active.router-link-active{font-weight:700}.molecule-link-list.type--view-header a.router-link-exact-active.router-link-active,.molecule-link-list.type--view-header a:hover{background:#eee}",""]),e.exports=t},38:function(e,t,l){"use strict";var i=l(30);l.n(i).a},39:function(e,t,l){(t=l(8)(!1)).push([e.i,".organisms-view-header nav{display:flex;line-height:1}.organisms-view-header nav>span{padding:10px 15px;font-family:sans-serif;color:#333}",""]),e.exports=t},51:function(e,t,l){"use strict";l.r(t);var i=l(28),a={props:{url:{type:String,required:!1,default:"http://example.com"},title:{type:String,required:!1,default:null},target:{type:String,required:!1,default:"_blank"}},computed:{isExternal(){return/^(http(s)?|ftp):\/\//.test(this.url)||this.url.startsWith("#")}}},n=l(1),s={components:{AtomLinkTo:Object(n.a)(a,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return e.isExternal?l("a",{attrs:{href:e.url,target:e.target||"_blank",rel:"noopener",title:e.title}},[e._t("default",[e._v(e._s(e.title))])],2):e.isExternal?e._e():l("nuxt-link",{attrs:{to:e.url,title:e.title}},[e._t("default",[e._v(e._s(e.title))])],2)}),[],!1,null,null,null).exports},props:{type:{type:String,default:()=>null},list:{type:Array,default:()=>[]}},computed:{styleClasses(){var e={};return e["type--".concat(this.type)]=this.type,e}},methods:{getUrl(e){if(!("$i18n"in this))return e.url;this.localePath(e.url)}}},r=(l(36),Object(n.a)(s,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticClass:"molecule-link-list",class:e.styleClasses},[e._t("default",e._l(e.list,(function(t){return l("li",{key:t.title},[l("atom-link-to",{attrs:{url:e.getUrl(t)}},[e._v("\n        "+e._s(t.title)+"\n      ")])],1)})))],2)}),[],!1,null,null,null).exports),o={components:{atomHeadline:i.a,MoleculeLinkList:r},props:{title:{type:String,default:()=>"Header Title"},navigation:{type:Array,default:()=>[{title:"Link 1.",url:"#link-1",target:"_self"},{title:"Link 2.",url:"#link-2",target:"_self"},{title:"Link 3.",url:"#link-3",target:"_self"}]}},computed:{headline(){return{overline:null,headline:this.title,subline:null}}}},d=(l(38),Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organisms-view-header"},[t("atom-headline",this._b({attrs:{tag:"div","style-type":"view-header"}},"atom-headline",this.headline,!1)),this._v(" "),t("nav",[t("span",[this._v("Views:")]),this._v(" "),t("molecule-link-list",{staticClass:"links",attrs:{type:"view-header",list:this.navigation}})],1)],1)}),[],!1,null,null,null));t.default=d.exports}}]);