(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1d748c0"],{"4ffd":function(t,a,e){t.exports=e.p+"img/logo.f09bf6dd.png"},7138:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"front",attrs:{id:"front"}},[n("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),n("header",{class:t.isIndex&&!t.scrollTop?"index-header-top":""},[n("div",{staticClass:"container"},[n("h1",[n("router-link",{staticClass:"header-logo",attrs:{to:"/home"}},[n("img",{staticClass:"logo",attrs:{src:e("4ffd"),alt:"Healthy bakery logo"}})])],1),n("nav",[n("div",[n("ul",{staticClass:"menu-list"},[n("li",[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("品牌介紹")])],1),n("li",[n("router-link",{staticClass:"nav-link",attrs:{to:"/products"}},[t._v("商品列表")])],1)]),n("ul",{staticClass:"icon"},[n("li",{staticClass:"menu-toogle"},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.toogleMenu(a)}}},[n("i",{staticClass:"fas fa-bars"})])]),n("li",[n("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[n("i",{staticClass:"fas fa-shopping-basket"}),n("span",{directives:[{name:"show",rawName:"v-show",value:!!t.cartLen,expression:"!!cartLen"}],staticClass:"cart-items"},[t._v(t._s(t.cartLen))])])],1),n("li",[n("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[n("i",{staticClass:"fas fa-user"})])],1)])])])])]),n("router-view",{attrs:{cart:t.cart,scrollTop:t.scrollTop}}),t._m(0)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"p-3"},[e("p",{staticClass:"text-center m-auto"},[t._v("ⓒ 2020 HBakery by Daisy 此網站圖片與文案皆為為練習使用，不具有商業行為")])])}],s=(e("99af"),e("4160"),e("159b"),{data:function(){return{cart:[],cartLen:0,scrollTop:0,isIndex:!1,isLoading:!1}},components:{},methods:{toogleMenu:function(){$(".menu-list").slideToggle()},activeMenu:function(t){var a=document.querySelector(".menu-list");a.querySelectorAll("li").forEach((function(a,e){a.classList.remove("active"),e===t&&a.classList.add("active")}))},addCart:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat("https://course-ec-api.hexschool.io/api","/").concat("8213c3e3-1f7b-4c06-b649-6fa6b24c50ba","/ec/shopping"),i={product:t,quantity:e};this.$http.post(n,i).then((function(t){var e=t.data.data.product.title;a.getCart(),a.$bus.$emit("clear-loading-pdt-item"),Swal.fire({title:"「".concat(e,"」已加入購物車"),icon:"success"})})).catch((function(t){a.$bus.$emit("clear-loading-pdt-item"),Swal.fire({title:t.response.data.errors,icon:"warning"})}))},getCart:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io/api","/").concat("8213c3e3-1f7b-4c06-b649-6fa6b24c50ba","/ec/shopping");this.$http.get(a).then((function(a){t.cart=a.data.data,t.cartLen=a.data.data.length,t.isLoading=!1})).catch((function(){}))}},created:function(){var t=this;this.getCart(),window.addEventListener("scroll",(function(){t.scrollTop=window.pageYOffset})),this.$bus.$on("active-menu",(function(a){t.activeMenu(a)})),this.$bus.$on("index-header-ctrl",(function(a){t.isIndex=a})),this.$bus.$on("get-cart",(function(){t.getCart()})),this.$bus.$on("add-to-cart",(function(a){t.addCart(a.id,a.quantity)}))}}),o=s,c=e("2877"),r=Object(c["a"])(o,n,i,!1,null,null,null);a["default"]=r.exports},"99af":function(t,a,e){"use strict";var n=e("23e7"),i=e("d039"),s=e("e8b5"),o=e("861d"),c=e("7b0b"),r=e("50c4"),l=e("8418"),u=e("65f0"),d=e("1dde"),f=e("b622"),h=e("2d00"),p=f("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",b=h>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=d("concat"),C=function(t){if(!o(t))return!1;var a=t[p];return void 0!==a?!!a:s(t)},w=!b||!m;n({target:"Array",proto:!0,forced:w},{concat:function(t){var a,e,n,i,s,o=c(this),d=u(o,0),f=0;for(a=-1,n=arguments.length;a<n;a++)if(s=-1===a?o:arguments[a],C(s)){if(i=r(s.length),f+i>v)throw TypeError(g);for(e=0;e<i;e++,f++)e in s&&l(d,f,s[e])}else{if(f>=v)throw TypeError(g);l(d,f++,s)}return d.length=f,d}})}}]);
//# sourceMappingURL=chunk-a1d748c0.7736a678.js.map