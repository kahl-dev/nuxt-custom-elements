(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,n){var a=n(139);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(46).default)("2610b7a1",a,!0,{sourceMap:!1})},138:function(e,t,n){"use strict";var a=n(137);n.n(a).a},139:function(e,t,n){(t=n(45)(!1)).push([e.i,".atom-headline[data-v-6cbb25dd]{font-style:normal;font-weight:400}.atom-headline>*[data-v-6cbb25dd]{display:block}.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-family:sans-serif;font-size:3.2vw;font-weight:400}@media (--xs){.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-family:serif;font-size:9.6vw;font-weight:700}@media (--xs){.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-size:36px}}.atom-headline.headline--view-header[data-v-6cbb25dd]{padding:15px;font-family:sans-serif;font-size:20px;font-weight:400}",""]),e.exports=t},140:function(e,t,n){"use strict";var a={props:{tag:{type:String,required:!1,default:function(){return"h1"}},styleType:{type:String,default:function(){return null}},overline:{type:String,required:!1,default:function(){return"Lorem Overline"}},headline:{type:String,required:!1,default:function(){return"Lorem Headline"}},subline:{type:String,required:!1,default:function(){return"Lorem Subline"}}},computed:{styleClasses:function(){var e={};return e["headline--".concat(this.tag)]=!0,e["headline--".concat(this.styleType)]=this.styleType,e}}},i=(n(138),n(12)),s=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?n("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"6cbb25dd",null);t.a=s.exports},143:function(e,t,n){var a=n(157);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(46).default)("4610a6fa",a,!0,{sourceMap:!1})},144:function(e,t,n){var a=n(159);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(46).default)("148673c8",a,!0,{sourceMap:!1})},156:function(e,t,n){"use strict";var a=n(143);n.n(a).a},157:function(e,t,n){(t=n(45)(!1)).push([e.i,"",""]),e.exports=t},158:function(e,t,n){"use strict";var a=n(144);n.n(a).a},159:function(e,t,n){(t=n(45)(!1)).push([e.i,"",""]),e.exports=t},47:function(e,t,n){"use strict";n.r(t);var a=n(140),i={computed:{storeValue:function(){return this.$store.getters["base/value"]}},methods:{onClick:function(){this.$store.dispatch("base/setValue",!this.storeValue)}}},s=(n(156),n(12)),l=Object(s.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organism-shared-store"},[t("p",[this._v("\n    Store Value: "+this._s(this.storeValue)+" -\n    "),t("button",{on:{click:this.onClick}},[this._v("\n      Change Value\n    ")])])])}),[],!1,null,null,null).exports,o={components:{AtomHeadline:a.a,OrganismSharedStore:l},data:function(){return{headline:{overline:null,headline:"Custom-Element Example",subline:null}}}},r=(n(158),Object(s.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"view-index"},[t("atom-headline",this._b({attrs:{"style-type":"view"}},"atom-headline",this.headline,!1)),this._v(" "),t("organism-shared-store")],1)}),[],!1,null,null,null));t.default=r.exports}}]);