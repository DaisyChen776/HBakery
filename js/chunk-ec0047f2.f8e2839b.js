(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec0047f2"],{"99af":function(t,s,e){"use strict";var a=e("23e7"),i=e("d039"),r=e("e8b5"),n=e("861d"),c=e("7b0b"),o=e("50c4"),d=e("8418"),l=e("65f0"),v=e("1dde"),_=e("b622"),u=e("2d00"),p=_("isConcatSpreadable"),h=9007199254740991,f="Maximum allowed index exceeded",m=u>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=v("concat"),C=function(t){if(!n(t))return!1;var s=t[p];return void 0!==s?!!s:r(t)},b=!m||!g;a({target:"Array",proto:!0,forced:b},{concat:function(t){var s,e,a,i,r,n=c(this),v=l(n,0),_=0;for(s=-1,a=arguments.length;s<a;s++)if(r=-1===s?n:arguments[s],C(r)){if(i=o(r.length),_+i>h)throw TypeError(f);for(e=0;e<i;e++,_++)e in r&&d(v,_,r[e])}else{if(_>=h)throw TypeError(f);d(v,_++,r)}return v.length=_,v}})},b84e:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"order"},[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),t._m(0),e("div",{staticClass:"container"},[t._m(1),e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-lg-2"}),e("div",{staticClass:"col-lg-8"},[e("table",{staticClass:"table mt-3"},[t._m(2),e("tbody",t._l(t.order.products,(function(s){return e("tr",{key:s.product.id+"order"},[e("td",{staticClass:"d-none d-sm-table-cell"},[e("img",{attrs:{src:s.product.imageUrl[0],width:"100"}})]),e("td",[t._v(t._s(s.product.title))]),e("td",{staticClass:"text-center d-none d-sm-table-cell"},[t._v(t._s(s.quantity))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("money")(s.product.price)))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("money")(s.product.price*s.quantity)))])])})),0)]),e("div",{staticClass:"total"},[e("div",[e("span",[t._v("小計")]),t._v(" "),e("p",[t._v(t._s(t._f("money")(t.order.amount)))])]),e("div",[e("span",[t._v("運費")]),t._v(" "),e("p",[t._v(t._s(t._f("money")(t.shippingFee)))])]),e("div",{staticClass:"text-success"},[e("span",[t._v("應付")]),t._v(" "),e("p",[t._v(t._s(t._f("money")(t.totalPaid)))])])]),e("h5",{staticClass:"intro-title mt-4"},[t._v("訂單資訊")]),e("div",{staticClass:"intro-content"},[e("p",[t._v("訂單日期："+t._s(t.order.created.datetime))]),e("p",{domProps:{innerHTML:t._s("訂單狀態："+(t.order.paid?"已付款":"未付款"))}}),e("p",[t._v("付款方式："+t._s(t.order.payment))])]),e("h5",{staticClass:"intro-title mt-4"},[t._v("送貨資訊")]),e("div",{staticClass:"intro-content"},[e("p",[t._v("收件人姓名："+t._s(t.order.user.name))]),e("p",[t._v("E-mail："+t._s(t.order.user.email))]),e("p",[t._v("聯絡電話："+t._s(t.order.user.tel))]),e("p",[t._v("收件地址："+t._s(t.order.user.address))])])]),e("div",{staticClass:"col-lg-2"})])])],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h2",{staticClass:"title title-page"},[e("span",[t._v("訂單詳細資訊")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"step"},[e("div",{staticClass:"active"},[e("span",[t._v("1")]),e("p",[t._v("確認數量")])]),e("div",{staticClass:"active"},[e("span",[t._v("2")]),e("p",[t._v("填寫購物資訊")])]),e("div",{staticClass:"active"},[e("span",[t._v("3")]),e("p",[t._v("完成")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{staticClass:"d-none d-sm-table-cell",attrs:{width:"130"}},[t._v("商品圖")]),e("th",[t._v("商品名稱")]),e("th",{staticClass:"text-center d-none d-sm-table-cell"},[t._v("數量")]),e("th",{staticClass:"text-right"},[t._v("單價")]),e("th",{staticClass:"text-right"},[t._v("小計")])])])}],r=(e("99af"),{data:function(){return{order:{},isLoading:!1}},methods:{getOrder:function(){var t=this;this.isLoading=!0;var s=this.$route.params.id,e="".concat("https://course-ec-api.hexschool.io/api","/").concat("8213c3e3-1f7b-4c06-b649-6fa6b24c50ba","/ec/orders/").concat(s);this.isLoading=!0,this.$http.get(e).then((function(s){t.isLoading=!1,t.order=s.data.data})).catch((function(){t.isLoading=!1}))}},computed:{shippingFee:function(){var t=this.order.amount>=1200?0:100;return t},totalPaid:function(){return this.order.amount+this.shippingFee}},created:function(){this.getOrder()}}),n=r,c=e("2877"),o=Object(c["a"])(n,a,i,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-ec0047f2.f8e2839b.js.map