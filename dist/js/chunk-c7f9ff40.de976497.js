(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7f9ff40"],{"99af":function(t,i,a){"use strict";var e=a("23e7"),c=a("d039"),r=a("e8b5"),n=a("861d"),s=a("7b0b"),o=a("50c4"),d=a("8418"),l=a("65f0"),u=a("1dde"),f=a("b622"),p=a("2d00"),g=f("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",C=p>=51||!c((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=u("concat"),y=function(t){if(!n(t))return!1;var i=t[g];return void 0!==i?!!i:r(t)},_=!C||!b;e({target:"Array",proto:!0,forced:_},{concat:function(t){var i,a,e,c,r,n=s(this),u=l(n,0),f=0;for(i=-1,e=arguments.length;i<e;i++)if(r=-1===i?n:arguments[i],y(r)){if(c=o(r.length),f+c>v)throw TypeError(h);for(a=0;a<c;a++,f++)a in r&&d(u,f,r[a])}else{if(f>=v)throw TypeError(h);d(u,f++,r)}return u.length=f,u}})},c975:function(t,i,a){"use strict";var e=a("23e7"),c=a("4d64").indexOf,r=a("a640"),n=a("ae40"),s=[].indexOf,o=!!s&&1/[1].indexOf(1,-0)<0,d=r("indexOf"),l=n("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:o||!d||!l},{indexOf:function(t){return o?s.apply(this,arguments)||0:c(this,t,arguments.length>1?arguments[1]:void 0)}})},ed84:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"products"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(i){t.isLoading=i}}}),t._m(0),a("div",{staticClass:"container"},[a("div",{staticClass:"categorys mb-5"},[a("ul",[a("li",{staticClass:"active"},[a("a",{attrs:{href:"#"},on:{click:function(i){i.preventDefault(),t.activeCategory=""}}},[t._v("全部")])]),t._l(t.categorys,(function(i,e){return a("li",{key:e},[a("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.activeCategory=i}}},[t._v(t._s(i))])])}))],2)]),a("div",{staticClass:"row"},t._l(t.filterProducts,(function(i){return a("div",{key:i.id,staticClass:"col-lg-4 col-md-6 mb-5"},[a("router-link",{staticClass:"cover",attrs:{to:"/product/"+i.id,title:"查看 "+i.title+" 詳細資訊"}},[a("img",{staticClass:"img-fluid",attrs:{src:i.imageUrl[0]}}),a("div",{staticClass:"pdt-content",domProps:{innerHTML:t._s(i.content.replaceAll("，","<br>"))}})]),a("div",{staticClass:"info pt-2"},[a("h4",{staticClass:"text-primary font-weight-bold"},[t._v(t._s(i.title))]),a("div",{staticClass:"price-box"},[a("p",{staticClass:"origin"},[t._v("售價："+t._s(i.origin_price))]),a("p",{staticClass:"price"},[t._v("特價："+t._s(i.price))])]),a("div",{staticClass:"d-flex"},[a("button",{staticClass:"btn",attrs:{type:"button",title:i.title+" 放入購物車"},on:{click:function(a){return t.addCart(i.id)}}},[a("i",{staticClass:"fas fa-shopping-cart"}),t._v(" 放入購物車 ")]),a("router-link",{staticClass:"btn",attrs:{to:"/product/"+i.id,title:"查看 "+i.title+" 詳細資訊"}},[a("i",{staticClass:"fas fa-file-alt"}),t._v(" 詳細資訊 ")])],1)])],1)})),0)])],1)},c=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("h2",{staticClass:"title title-page"},[a("span",[t._v("產品")])])}],r=(a("99af"),a("4de4"),a("4160"),a("c975"),a("159b"),{data:function(){return{products:[],categorys:[],activeCategory:"",pagination:{},isLoading:!1}},methods:{getProducts:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("8213c3e3-1f7b-4c06-b649-6fa6b24c50ba","/ec/products?page=").concat(i,"&paged=9");this.$http.get(a).then((function(i){t.products=i.data.data,t.pagination=i.data.meta.pagination,t.products.forEach((function(i){t.categorys.indexOf(i.category)<0&&t.categorys.push(i.category)})),t.isLoading=!1})).catch((function(){t.isLoading=!1}))},addCart:function(t){this.$bus.$emit("add-to-cart",t)}},computed:{filterProducts:function(){var t=this;if(this.activeCategory){var i=[];return i=this.products.filter((function(i){return i.category===t.activeCategory})),i}return this.products}},created:function(){this.getProducts()},mounted:function(){this.$bus.$emit("index-header-ctrl",!1)}}),n=r,s=a("2877"),o=Object(s["a"])(n,e,c,!1,null,null,null);i["default"]=o.exports}}]);
//# sourceMappingURL=chunk-c7f9ff40.de976497.js.map