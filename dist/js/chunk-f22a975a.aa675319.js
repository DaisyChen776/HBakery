(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f22a975a"],{"25a9":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("h2",{staticClass:"h3 m-3 text-left"},[t._v("訂單細節")]),r("table",[r("tr",[r("th",[t._v("訂單編號")]),r("td",[t._v(t._s(t.order.id))])]),r("tr",[r("th",[t._v("下單日期")]),r("td",[t._v(t._s(t.order.created.datetime))])])])],1)},n=[],i=(r("99af"),{data:function(){return{order:{},tempOrder:{},isLoading:!1}},methods:{getOrder:function(){var t=this,e=this.$route.params.id,r="".concat("https://course-ec-api.hexschool.io/api","/").concat("8213c3e3-1f7b-4c06-b649-6fa6b24c50ba","/admin/ec/orders/").concat(e);this.isLoading=!0,this.$http.get(r).then((function(e){t.isLoading=!1,t.order=e.data.data})).catch((function(){t.isLoading=!1}))}},created:function(){this.getOrder()}}),o=i,c=r("2877"),d=Object(c["a"])(o,a,n,!1,null,null,null);e["default"]=d.exports},"99af":function(t,e,r){"use strict";var a=r("23e7"),n=r("d039"),i=r("e8b5"),o=r("861d"),c=r("7b0b"),d=r("50c4"),s=r("8418"),u=r("65f0"),f=r("1dde"),h=r("b622"),l=r("2d00"),p=h("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",b=l>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=f("concat"),w=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},_=!b||!m;a({target:"Array",proto:!0,forced:_},{concat:function(t){var e,r,a,n,i,o=c(this),f=u(o,0),h=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?o:arguments[e],w(i)){if(n=d(i.length),h+n>v)throw TypeError(g);for(r=0;r<n;r++,h++)r in i&&s(f,h,i[r])}else{if(h>=v)throw TypeError(g);s(f,h++,i)}return f.length=h,f}})}}]);
//# sourceMappingURL=chunk-f22a975a.aa675319.js.map