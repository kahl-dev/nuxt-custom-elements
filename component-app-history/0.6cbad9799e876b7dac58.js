(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(28),i={computed:{storeValue(){return this.$store.getters["base/value"]}},methods:{onClick(){this.$store.dispatch("base/setValue",!this.storeValue)}}},s=(a(40),a(1)),l=Object(s.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organism-shared-store"},[t("p",[this._v("\n    Store Value: "+this._s(this.storeValue)+" -\n    "),t("button",{on:{click:this.onClick}},[this._v("\n      Change Value\n    ")])])])}),[],!1,null,null,null).exports,o={components:{AtomHeadline:n.a,OrganismSharedStore:l},data:()=>({headline:{overline:null,headline:"Custom-Element Example",subline:null}})},d=(a(42),Object(s.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"view-index"},[t("atom-headline",this._b({attrs:{"style-type":"view"}},"atom-headline",this.headline,!1)),this._v(" "),t("organism-shared-store")],1)}),[],!1,null,null,null));t.default=d.exports},25:function(e,t,a){var n=a(27);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(9).default)("69e03bb1",n,!0,{sourceMap:!1})},26:function(e,t,a){"use strict";var n=a(25);a.n(n).a},27:function(e,t,a){(t=a(8)(!1)).push([e.i,".atom-headline[data-v-6cbb25dd]{font-style:normal;font-weight:400}.atom-headline>*[data-v-6cbb25dd]{display:block}.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-family:sans-serif;font-size:3.2vw;font-weight:400}@media (--xs){.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-family:serif;font-size:9.6vw;font-weight:700}@media (--xs){.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-size:36px}}.atom-headline.headline--view-header[data-v-6cbb25dd]{padding:15px;font-family:sans-serif;font-size:20px;font-weight:400}",""]),e.exports=t},28:function(e,t,a){"use strict";var n={props:{tag:{type:String,required:!1,default:()=>"h1"},styleType:{type:String,default:()=>null},overline:{type:String,required:!1,default:()=>"Lorem Overline"},headline:{type:String,required:!1,default:()=>"Lorem Headline"},subline:{type:String,required:!1,default:()=>"Lorem Subline"}},computed:{styleClasses(){var e={};return e["headline--".concat(this.tag)]=!0,e["headline--".concat(this.styleType)]=this.styleType,e}}},i=(a(26),a(1)),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?a("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?a("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?a("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"6cbb25dd",null);t.a=s.exports},31:function(e,t,a){var n=a(41);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(9).default)("03cee6da",n,!0,{sourceMap:!1})},32:function(e,t,a){var n=a(43);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(9).default)("845faf56",n,!0,{sourceMap:!1})},40:function(e,t,a){"use strict";var n=a(31);a.n(n).a},41:function(e,t,a){(t=a(8)(!1)).push([e.i,"",""]),e.exports=t},42:function(e,t,a){"use strict";var n=a(32);a.n(n).a},43:function(e,t,a){(t=a(8)(!1)).push([e.i,"",""]),e.exports=t}}]);