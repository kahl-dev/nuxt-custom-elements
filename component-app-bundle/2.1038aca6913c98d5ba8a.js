(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{120:function(e,t,n){var i=n(187);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(42).default)("4610a6fa",i,!0,{sourceMap:!1})},121:function(e,t,n){var i=n(189);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(42).default)("148673c8",i,!0,{sourceMap:!1})},185:function(e,t,n){e.exports=n.p+"img/image.aa044df.png"},186:function(e,t,n){"use strict";n(120)},187:function(e,t,n){(t=n(41)(!1)).push([e.i,"",""]),e.exports=t},188:function(e,t,n){"use strict";n(121)},189:function(e,t,n){(t=n(41)(!1)).push([e.i,".view-index img{height:32px}",""]),e.exports=t},44:function(e,t,n){var i=n(46);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(42).default)("2610b7a1",i,!0,{sourceMap:!1})},45:function(e,t,n){"use strict";n(44)},46:function(e,t,n){(t=n(41)(!1)).push([e.i,".atom-headline[data-v-6cbb25dd]{font-style:normal;font-weight:400}.atom-headline>*[data-v-6cbb25dd]{display:block}.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-family:sans-serif;font-size:3.2vw;font-weight:400}@media (--xs){.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-family:serif;font-size:9.6vw;font-weight:700}@media (--xs){.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-size:36px}}.atom-headline.headline--view-header[data-v-6cbb25dd]{padding:15px;font-family:sans-serif;font-size:20px;font-weight:400}",""]),e.exports=t},47:function(e,t,n){"use strict";n.r(t);n(16);var i=n(48),a={computed:{storeValue:function(){return this.$store.getters["base/value"]}},methods:{onClick:function(){this.$store.dispatch("base/setValue",!this.storeValue)}}},s=(n(186),n(40)),l=Object(s.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organism-shared-store"},[t("p",[this._v("\n    Store Value: "+this._s(this.storeValue)+" -\n    "),t("button",{on:{click:this.onClick}},[this._v("\n      Change Value\n    ")])])])}),[],!1,null,null,null).exports,o={components:{AtomHeadline:i.a,OrganismSharedStore:l},data:function(){return{headline:{overline:null,headline:"Custom-Element Example",subline:null}}},mounted:function(){n.e(6).then(n.bind(null,198))}},r=(n(188),Object(s.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"view-index"},[t("atom-headline",this._b({attrs:{"style-type":"view"}},"atom-headline",this.headline,!1)),this._v(" "),t("img",{attrs:{src:n(185)}}),this._v(" "),t("organism-shared-store")],1)}),[],!1,null,null,null));t.default=r.exports},48:function(e,t,n){"use strict";var i={props:{tag:{type:String,required:!1,default:function(){return"h1"}},styleType:{type:String,default:function(){return null}},overline:{type:String,required:!1,default:function(){return"Lorem Overline"}},headline:{type:String,required:!1,default:function(){return"Lorem Headline"}},subline:{type:String,required:!1,default:function(){return"Lorem Subline"}}},computed:{styleClasses:function(){var e={};return e["headline--".concat(this.tag)]=!0,e["headline--".concat(this.styleType)]=this.styleType,e}}},a=(n(45),n(40)),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?n("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"6cbb25dd",null);t.a=s.exports}}]);