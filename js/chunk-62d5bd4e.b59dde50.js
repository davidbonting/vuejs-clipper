(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62d5bd4e"],{"3bdd":function(t,e,x){"use strict";x.r(e);var n=function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",{staticClass:"list-content content"},[x("div",{staticClass:"area"},[x("h2",[t._v("Transparent Background")]),x("p",[t._v("To get an image with a transparent background,")]),x("p",[t._v("upload a png which has a transparent background,")]),x("p",[t._v('set clipper component\'s "bgColor" to transparent color.')]),x("clipper-fixed",{ref:"clipper",staticClass:"sample",attrs:{src:t.src,bgColor:"rgba(255,255,255,0)"}}),x("button",{on:{click:function(e){return t.clipToURL("image/png")}}},[t._v("clip to see the result.")]),x("p",[t._v("clip result will be put above here, you can see this is a transparent image.")]),x("div",{staticClass:"imgCon"},[t._m(0),x("img",{staticClass:"imgResult",attrs:{src:t.clipResult}})])],1)])},i=[function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",{staticClass:"text"},[x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")])])}],r=x("ab2a"),a={extends:{mixins:[r["a"]]},data:function(){return{src:"icon/smile.png",clipResult:""}},methods:{}},s=a,c=(x("9111"),x("2877")),o=Object(c["a"])(s,n,i,!1,null,"7d2bf1d6",null);e["default"]=o.exports},"6a83":function(t,e,x){},"857a":function(t,e,x){var n=x("1d80"),i=/"/g;t.exports=function(t,e,x,r){var a=String(n(t)),s="<"+e;return""!==x&&(s+=" "+x+'="'+String(r).replace(i,"&quot;")+'"'),s+">"+a+"</"+e+">"}},9111:function(t,e,x){"use strict";var n=x("6a83"),i=x.n(n);i.a},9911:function(t,e,x){"use strict";var n=x("23e7"),i=x("857a"),r=x("af03");n({target:"String",proto:!0,forced:r("link")},{link:function(t){return i(this,"a","href",t)}})},ab2a:function(t,e,x){"use strict";x("e260"),x("d3b7"),x("3ca3"),x("9911"),x("ddb0"),x("2b3d");e["a"]={methods:{clipToURL:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"image/jpeg",x=1;return new Promise((function(n,i){var r=t.$refs.clipper.clip({maxWPixel:1920});r.toBlob?r.toBlob((function(e){t.clipResult&&URL.revokeObjectURL(t.clipResult),t.clipResult=URL.createObjectURL(e),t.link=t.clipResult,t.resultDone(),n()}),e,x):(t.clipResult=r.toDataURL(e,x),t.link=t.clipResult,t.resultDone(),n())}))},resultDone:function(){this.done=!0}}}},af03:function(t,e,x){var n=x("d039");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}}}]);
//# sourceMappingURL=chunk-62d5bd4e.b59dde50.js.map