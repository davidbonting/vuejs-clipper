(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a851c130","chunk-18b97499"],{"0a49":function(e,a,t){var r=t("9b43"),i=t("626a"),o=t("4bf8"),n=t("9def"),s=t("cd1c");e.exports=function(e,a){var t=1==e,l=2==e,c=3==e,d=4==e,u=6==e,p=5==e||u,v=a||s;return function(a,s,m){for(var g,f,b=o(a),h=i(b),w=r(s,m,3),C=n(h.length),y=0,_=t?v(a,C):l?v(a,0):void 0;C>y;y++)if((p||y in h)&&(g=h[y],f=w(g,y,b),e))if(t)_[y]=f;else if(f)switch(e){case 3:return!0;case 5:return g;case 6:return y;case 2:_.push(g)}else if(d)return!1;return u?-1:c||d?d:_}}},"1c8d":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=this,t=a.$createElement,r=a._self._c||t;return r("div",[a.popup?r("div",{staticClass:"popup"},[r("div",{staticClass:"popup-content"},[r("div",{staticClass:"flow"},[r("loader",{attrs:{done:a.done}},[a._v("Converting")]),r("img",{staticClass:"img",attrs:{src:a.clipResult}}),r("div",{staticClass:"flex-center"},[r("div",{staticClass:"flex-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:a.filename,expression:"filename"}],attrs:{type:"text"},domProps:{value:a.filename},on:{input:function(e){e.target.composing||(a.filename=e.target.value)}}}),r("span",[a._v(".jpeg")])])]),r("div",{staticClass:"flex-center"},[r("button",{staticClass:"btn g"},[r("a",{attrs:{href:a.link,download:a.filename}},[a._v("download")])]),r("button",{staticClass:"btn r",on:{click:function(){e.popup=!1}}},[a._v("close")])])],1),r("img",{staticClass:"close",attrs:{src:"icon/cancel.png",alt:""},on:{click:function(){e.popup=!1}}})])]):a._e(),r("div",{staticClass:"content"},[r("h2",[a._v("clipper-fixed")]),a._m(0),r("h4",[a._v("gallary")]),r("gallary",{attrs:{gallary:a.gallary},model:{value:a.imgUrl,callback:function(e){a.imgUrl=e},expression:"imgUrl"}}),r("div",{staticClass:"flex-center"},[r("div",[r("h4",[a._v("demo")]),r("clipper-fixed",{ref:"clipper",staticClass:"fixed-sample",attrs:{src:a.imgUrl,border:a.border,ratio:a.ratio,rotate:a.rotate,grid:a.grid,bgColor:a.bgColor,shadow:a.shadow,round:a.round,preview:"preview"},on:{load:a.imgLoad}})],1),r("div",{staticClass:"settings"},[r("h4",[a._v("settings")]),r("button",{staticClass:"btn",on:{click:a.clip}},[a._v("clip image")]),r("label",{staticClass:"btn",attrs:{for:"upload"}},[a._v("upload image")]),r("input",{attrs:{id:"upload",type:"file"},on:{change:function(e){a.upload(e)}}}),r("div",{staticClass:"flex"},[r("div",{staticClass:"flex"},[r("span",{staticClass:"label"},[a._v("border: ")]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model.number",value:a.border,expression:"border",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:a.border},on:{input:function(e){e.target.composing||(a.border=a._n(e.target.value))},blur:function(e){a.$forceUpdate()}}})])])]),r("div",{staticClass:"flex"},[r("span",{staticClass:"label"},[a._v("layout: ")]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:a.grid,expression:"grid"}],attrs:{type:"checkbox",name:"grid"},domProps:{checked:Array.isArray(a.grid)?a._i(a.grid,null)>-1:a.grid},on:{change:function(e){var t=a.grid,r=e.target,i=!!r.checked;if(Array.isArray(t)){var o=null,n=a._i(t,o);r.checked?n<0&&(a.grid=t.concat([o])):n>-1&&(a.grid=t.slice(0,n).concat(t.slice(n+1)))}else a.grid=i}}}),a._v("grid")]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:a.round,expression:"round"}],attrs:{type:"checkbox",name:"round"},domProps:{checked:Array.isArray(a.round)?a._i(a.round,null)>-1:a.round},on:{change:function(e){var t=a.round,r=e.target,i=!!r.checked;if(Array.isArray(t)){var o=null,n=a._i(t,o);r.checked?n<0&&(a.round=t.concat([o])):n>-1&&(a.round=t.slice(0,n).concat(t.slice(n+1)))}else a.round=i}}}),a._v("round")])]),r("div",{staticClass:"flex"},[r("span",{staticClass:"label"},[a._v("ratio: ")]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model.number",value:a.ratio,expression:"ratio",modifiers:{number:!0}}],attrs:{type:"radio",name:"ratio"},domProps:{value:1,checked:a._q(a.ratio,a._n(1))},on:{change:function(e){a.ratio=a._n(1)}}}),a._v("1:1")]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model.number",value:a.ratio,expression:"ratio",modifiers:{number:!0}}],attrs:{type:"radio",name:"ratio"},domProps:{value:4/3,checked:a._q(a.ratio,a._n(4/3))},on:{change:function(e){a.ratio=a._n(4/3)}}}),a._v("4:3")]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model.number",value:a.ratio,expression:"ratio",modifiers:{number:!0}}],attrs:{type:"radio",name:"ratio"},domProps:{value:16/9,checked:a._q(a.ratio,a._n(16/9))},on:{change:function(e){a.ratio=a._n(16/9)}}}),a._v("16:9")])]),r("div",{staticClass:"flex"},[r("span",{staticClass:"label"},[a._v("bgColor: ")]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:a.bgColor,expression:"bgColor"}],attrs:{type:"radio",name:"bgColor",value:"#000000"},domProps:{checked:a._q(a.bgColor,"#000000")},on:{change:function(e){a.bgColor="#000000"}}}),r("span",{staticClass:"color-tick",staticStyle:{"background-color":"#000000"}})]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:a.bgColor,expression:"bgColor"}],attrs:{type:"radio",name:"bgColor",value:"pink"},domProps:{checked:a._q(a.bgColor,"pink")},on:{change:function(e){a.bgColor="pink"}}}),r("span",{staticClass:"color-tick",staticStyle:{"background-color":"pink"}})]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:a.bgColor,expression:"bgColor"}],attrs:{type:"radio",name:"bgColor",value:"#a1cfea"},domProps:{checked:a._q(a.bgColor,"#a1cfea")},on:{change:function(e){a.bgColor="#a1cfea"}}}),r("span",{staticClass:"color-tick",staticStyle:{"background-color":"#a1cfea"}})]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:a.bgColor,expression:"bgColor"}],attrs:{type:"radio",name:"bgColor",value:"#bc1229"},domProps:{checked:a._q(a.bgColor,"#bc1229")},on:{change:function(e){a.bgColor="#bc1229"}}}),r("span",{staticClass:"color-tick",staticStyle:{"background-color":"#bc1229"}})])]),r("div",{staticClass:"flex"},[r("span",{staticClass:"label"},[a._v("shadow: ")]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:a.shadow,expression:"shadow"}],attrs:{type:"radio",name:"shadow",value:"rgba(0,0,0,0.4)"},domProps:{checked:a._q(a.shadow,"rgba(0,0,0,0.4)")},on:{change:function(e){a.shadow="rgba(0,0,0,0.4)"}}}),r("span",{staticClass:"shadow-tick",staticStyle:{"background-color":"rgba(0,0,0,0.4)"}})]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:a.shadow,expression:"shadow"}],attrs:{type:"radio",name:"shadow",value:"rgba(0,0,0,0.8)"},domProps:{checked:a._q(a.shadow,"rgba(0,0,0,0.8)")},on:{change:function(e){a.shadow="rgba(0,0,0,0.8)"}}}),r("span",{staticClass:"shadow-tick",staticStyle:{"background-color":"rgba(0,0,0,0.8)"}})]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:a.shadow,expression:"shadow"}],attrs:{type:"radio",name:"shadow",value:"rgba(255,255,255,0.2)"},domProps:{checked:a._q(a.shadow,"rgba(255,255,255,0.2)")},on:{change:function(e){a.shadow="rgba(255,255,255,0.2)"}}}),r("span",{staticClass:"shadow-tick",staticStyle:{"background-color":"rgba(255,255,255,0.2)"}})]),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:a.shadow,expression:"shadow"}],attrs:{type:"radio",name:"shadow",value:"rgb(27, 170, 232,0.5)"},domProps:{checked:a._q(a.shadow,"rgb(27, 170, 232,0.5)")},on:{change:function(e){a.shadow="rgb(27, 170, 232,0.5)"}}}),r("span",{staticClass:"shadow-tick",staticStyle:{"background-color":"rgb(27, 170, 232,0.5)"}})])]),r("div",{staticClass:"flex"},[r("span",{staticClass:"w80 label"},[a._v("rotate: ")]),r("clipper-range",{staticClass:"range",attrs:{min:-180,max:180},model:{value:a.rotate,callback:function(e){a.rotate=e},expression:"rotate"}})],1)])]),r("div",{staticClass:"flex"},[r("clipper-preview",{staticClass:"preview preview-lg",attrs:{name:"preview"}}),r("clipper-preview",{staticClass:"preview preview-md",attrs:{name:"preview"}}),r("clipper-preview",{staticClass:"preview preview-sm",attrs:{name:"preview"}})],1)],1)])},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"area"},[t("ul",[t("li",[e._v("Drag and scale image to clip.")]),t("li",[e._v("It is recommended to use it to clip image in a fixed ratio, as the profile picture.")]),t("li",[e._v("Scale and ratio are default features, and also support rotate.")]),t("li",[e._v("Its height is auto adjust by ratio, you can only set the width of this component.")]),t("li",{staticStyle:{color:"blue"}},[e._v("This demo using normal input to upload files so it won't transform EXIF image.")])])])}],o=(t("7514"),t("ab2a")),n=t("555f"),s=t("e4fd"),l={extends:{mixins:[o["a"]]},components:{Loader:n["default"],Gallary:s["default"]},data:function(){return{imgUrl:"tanya.jpg",border:1,ratio:1,rotate:0,grid:!0,bgColor:"#000000",shadow:"rgba(0,0,0,0.4)",round:!1,popup:!1,done:!1,clipResult:null,link:null,filename:"clip",gallary:["tanya.jpg","lily.jpg","long.jpg","ex3.jpg"]}},methods:{upload:function(e){0!==e.target.files.length&&(this.imgUrl=window.URL.createObjectURL(e.target.files[0]))},clip:function(){this.popup=!0,this.done=!1,this.clipResult=null,this.clipToURL()},imgLoad:function(){var e=this;this.gallary.find(function(a){return a===e.imgUrl})||this.gallary.push(this.imgUrl)}}},c=l,d=(t("8ce0a"),t("2877")),u=Object(d["a"])(c,r,i,!1,null,"511bfab5",null);a["default"]=u.exports},"386b":function(e,a,t){var r=t("5ca1"),i=t("79e5"),o=t("be13"),n=/"/g,s=function(e,a,t,r){var i=String(o(e)),s="<"+a;return""!==t&&(s+=" "+t+'="'+String(r).replace(n,"&quot;")+'"'),s+">"+i+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(s),r(r.P+r.F*i(function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",t)}},"521b":function(e,a,t){},"5c78":function(e,a,t){},7514:function(e,a,t){"use strict";var r=t("5ca1"),i=t("0a49")(5),o="find",n=!0;o in[]&&Array(1)[o](function(){n=!1}),r(r.P+r.F*n,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),t("9c6c")(o)},"8ce0a":function(e,a,t){"use strict";var r=t("5c78"),i=t.n(r);i.a},"965c":function(e,a,t){"use strict";var r=t("521b"),i=t.n(r);i.a},ab2a:function(e,a,t){"use strict";t("b54a");var r=t("795b"),i=t.n(r);a["a"]={methods:{clipToURL:function(){var e=this,a="image/jpeg",t=1;return new i.a(function(r,i){var o=e.$refs.clipper.clip({maxWPixel:1920});o.toBlob?o.toBlob(function(a){e.clipResult&&URL.revokeObjectURL(e.clipResult),e.clipResult=URL.createObjectURL(a),e.link=e.clipResult,e.resultDone(),r()},a,t):(e.clipResult=o.toDataURL(a,t),e.link=e.clipResult,e.resultDone(),r())})},resultDone:function(){this.done=!0}}}},b54a:function(e,a,t){"use strict";t("386b")("link",function(e){return function(a){return e(this,"a","href",a)}})},cd1c:function(e,a,t){var r=t("e853");e.exports=function(e,a){return new(r(e))(a)}},e4fd:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"gallary"},e._l(e.gallary,function(a,r){return t("div",{key:a,staticClass:"wrap",class:{select:e.selectedGallary[r]},on:{click:function(a){e.switchGallary(r)}}},[t("img",{attrs:{src:a}})])}))},i=[],o={props:{gallary:Array,value:String},methods:{switchGallary:function(e){this.$emit("input",this.gallary[e])}},computed:{selectedGallary:function(){var e=this;return this.gallary.map(function(a){return a===e.value})}}},n=o,s=(t("965c"),t("2877")),l=Object(s["a"])(n,r,i,!1,null,"b34e18ae",null);a["default"]=l.exports},e853:function(e,a,t){var r=t("d3f4"),i=t("1169"),o=t("2b4c")("species");e.exports=function(e){var a;return i(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)||(a=void 0),r(a)&&(a=a[o],null===a&&(a=void 0))),void 0===a?Array:a}}}]);
//# sourceMappingURL=chunk-a851c130.36c0ef6e.js.map