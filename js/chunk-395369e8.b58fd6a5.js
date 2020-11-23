(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-395369e8"],{"61bc":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("h2",{staticClass:"h3 m-3 text-left"},[t._v(" 產品列表 "),a("button",{staticClass:"btn btn-warning float-right",attrs:{type:"button"},on:{click:function(e){return t.openModal("new",{})}}},[t._v("新增產品")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.origin_price))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.price))]),a("td",{staticClass:"text-center"},[e.enabled?a("span",{staticClass:"text-danger"},[t._v("啟用")]):a("span",{staticClass:"text-success"},[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-info btn-sm",attrs:{type:"button"},on:{click:function(a){return t.openModal("edit",e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.openModal("delete",e)}}},[t._v("刪除")])])])])})),0)]),a("Pagination",{attrs:{pages:t.pagination},on:{"page-counting":t.getProducts}}),a("ProductModal",{ref:"modal",attrs:{execution:t.productFn,product:t.tempProduct},on:{"update-products":t.getProducts,"change-loading":t.changeLaodingStatus,"change-alert-status":t.changeAlertStatus,"ctrl-modal":t.ctrlModal}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isAjaxFail,expression:"isAjaxFail"}],staticClass:"alert alert-warning fade show position-fixed\n    fixed-bottom m-auto rounded-0 text-center",attrs:{role:"alert"}},[t._v(" 伺服器連線錯誤!! "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return e.preventDefault(),t.changeAlertStatus(!1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"bg-light"},[a("th",{attrs:{width:"150"}},[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{staticClass:"text-right",attrs:{width:"100"}},[t._v("原價")]),a("th",{staticClass:"text-right",attrs:{width:"100"}},[t._v("售價")]),a("th",{staticClass:"text-center",attrs:{width:"150"}},[t._v("是否啟用")]),a("th",{attrs:{width:"120"}},[t._v("操作")])])])}],r=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",class:"delete"!==t.execution?"modal-xl":""},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header",class:"delete"===t.execution?"bg-danger text-white":""},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},["new"===t.execution?a("span",[t._v("新增產品")]):"edit"===t.execution?a("span",[t._v("更新產品")]):"delete"===t.execution?a("span",[t._v("刪除產品")]):t._e()]),a("button",{staticClass:"close",class:"delete"===t.execution?"text-white":"",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.cleanData}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"delete"===t.execution,expression:"execution === 'delete'"}],staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.product.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:"delete"!==t.execution,expression:"execution !== 'delete'"}],staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"imageUrl1"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[0],expression:"tempProduct.imageUrl[0]"}],staticClass:"form-control",attrs:{type:"text",id:"imageUrl1",placeholder:"請輸入圖片網址"},domProps:{value:t.tempProduct.imageUrl[0]},on:{input:function(e){e.target.composing||t.$set(t.tempProduct.imageUrl,0,e.target.value)}}})]),a("img",{directives:[{name:"show",rawName:"v-show",value:!!t.tempProduct.imageUrl[0],expression:"!!tempProduct.imageUrl[0]"}],staticClass:"img-fluid mb-3",attrs:{alt:"",src:t.tempProduct.imageUrl[0]}}),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"imageUrl2"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[1],expression:"tempProduct.imageUrl[1]"}],staticClass:"form-control",attrs:{type:"text",id:"imageUrl2",placeholder:"請輸入圖片網址"},domProps:{value:t.tempProduct.imageUrl[1]},on:{input:function(e){e.target.composing||t.$set(t.tempProduct.imageUrl,1,e.target.value)}}})]),a("img",{directives:[{name:"show",rawName:"v-show",value:!!t.tempProduct.imageUrl[1],expression:"!!tempProduct.imageUrl[1]"}],staticClass:"img-fluid mb-3",attrs:{alt:"",src:t.tempProduct.imageUrl[1]}}),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"imageUrl3"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[2],expression:"tempProduct.imageUrl[2]"}],staticClass:"form-control",attrs:{type:"text",id:"imageUrl3",placeholder:"請輸入圖片網址"},domProps:{value:t.tempProduct.imageUrl[2]},on:{input:function(e){e.target.composing||t.$set(t.tempProduct.imageUrl,2,e.target.value)}}})]),a("img",{directives:[{name:"show",rawName:"v-show",value:!!t.tempProduct.imageUrl[2],expression:"!!tempProduct.imageUrl[2]"}],staticClass:"img-fluid mb-3",attrs:{alt:"",src:t.tempProduct.imageUrl[2]}}),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"imageUrl4"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[3],expression:"tempProduct.imageUrl[3]"}],staticClass:"form-control",attrs:{type:"text",id:"imageUrl4",placeholder:"請輸入圖片網址"},domProps:{value:t.tempProduct.imageUrl[3]},on:{input:function(e){e.target.composing||t.$set(t.tempProduct.imageUrl,3,e.target.value)}}})]),a("img",{directives:[{name:"show",rawName:"v-show",value:!!t.tempProduct.imageUrl[3],expression:"!!tempProduct.imageUrl[3]"}],staticClass:"img-fluid mb-3",attrs:{alt:"",src:t.tempProduct.imageUrl[3]}}),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"imageUrl5"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[4],expression:"tempProduct.imageUrl[4]"}],staticClass:"form-control",attrs:{type:"text",id:"imageUrl5",placeholder:"請輸入圖片網址"},domProps:{value:t.tempProduct.imageUrl[4]},on:{input:function(e){e.target.composing||t.$set(t.tempProduct.imageUrl,4,e.target.value)}}})]),a("img",{directives:[{name:"show",rawName:"v-show",value:!!t.tempProduct.imageUrl[4],expression:"!!tempProduct.imageUrl[4]"}],staticClass:"img-fluid mb-3",attrs:{alt:"",src:t.tempProduct.imageUrl[4]}}),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customerFile"}},[t._v("上傳圖片")]),a("input",{staticClass:"form-control",attrs:{type:"file",id:"customerFile"}}),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-warning mt-2",attrs:{type:"button"},on:{click:t.uploadFile}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isUploadingFile,expression:"isUploadingFile"}],staticClass:"spinner-border spinner-border-sm text-dark",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])]),t._v(" 上傳圖片 ")])])])]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"unit"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"text",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"text",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{id:"content",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("hr"),t._m(0),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.enabled,expression:"tempProduct.enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",name:"inlineRadioOptions",id:"enabled"},domProps:{checked:Array.isArray(t.tempProduct.enabled)?t._i(t.tempProduct.enabled,null)>-1:t.tempProduct.enabled},on:{change:function(e){var a=t.tempProduct.enabled,i=e.target,o=!!i.checked;if(Array.isArray(a)){var r=null,s=t._i(a,r);i.checked?s<0&&t.$set(t.tempProduct,"enabled",a.concat([r])):s>-1&&t.$set(t.tempProduct,"enabled",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.tempProduct,"enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"enabled"}},[t._v("是否啟用")])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.cleanData}},[t._v("取消")]),"delete"===t.execution?a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.delProduct}},[t._v("確定刪除")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},["new"===t.execution?a("span",[t._v("確定新增")]):"edit"===t.execution?a("span",[t._v("確定更新")]):t._e()])])])])])}),s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品說明")]),a("div",{attrs:{id:"description"}})])}],c=(a("a4d3"),a("e01a"),{data:function(){return{tempProduct:{imageUrl:[]},quill:null,quillToolbarOptions:[[{size:["small",!1,"large","huge"]},"bold","italic","underline","strike"],[{color:[!1,"#333","#ddd"]},{background:[!1,"#ccc"]}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}]],isUploadingFile:!1}},props:["execution","product"],methods:{getProduct:function(t){var e=this,a=this,i="".concat("https://course-ec-api.hexschool.io/api","/").concat("8213c3e3-1f7b-4c06-b649-6fa6b24c50ba","/admin/ec/product/").concat(t);this.$emit("change-loading",!0),this.$http.get(i).then((function(t){e.tempProduct=JSON.parse(JSON.stringify(t.data.data)),e.quill.setContents(JSON.parse(a.tempProduct.description)),e.$emit("change-loading",!1),e.$emit("ctrl-modal",!0)})).catch((function(){e.$emit("change-loading",!1),e.$emit("change-alert-status",!0)}))},updateProduct:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api","/").concat("8213c3e3-1f7b-4c06-b649-6fa6b24c50ba","/admin/ec/product"),a="post";"edit"===this.execution&&(e+="/".concat(this.tempProduct.id),a="patch"),this.tempProduct.description=JSON.stringify(this.quill.getContents()),this.$emit("change-loading",!0),this.$emit("ctrl-modal",!1),this.$http[a](e,this.tempProduct).then((function(){t.$emit("update-products"),t.cleanData()})).catch((function(){t.$emit("change-loading",!1),t.$emit("change-alert-status",!0),t.cleanData()}))},delProduct:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api","/").concat("8213c3e3-1f7b-4c06-b649-6fa6b24c50ba","/admin/ec/product/").concat(this.product.id);this.$emit("ctrl-modal",!1),this.$emit("change-loading",!0),this.$http.delete(e).then((function(){t.$emit("update-products")})).catch((function(){t.$emit("change-loading",!0)}))},uploadFile:function(){var t=this;this.isUploadingFile=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("8213c3e3-1f7b-4c06-b649-6fa6b24c50ba","/admin/storage"),a=document.querySelector("#customerFile").files[0],i=new FormData;i.append("file",a),this.$http.post(e,i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var a=t.tempProduct.imageUrl.length;a<5&&(t.tempProduct.imageUrl[a]=e.data.data.path),t.isUploadingFile=!1})).catch((function(){t.isAjaxFail=!0}))},cleanData:function(){this.tempProduct=JSON.parse(JSON.stringify({imageUrl:[]}))}},mounted:function(){var t=this,e=this,a=document.getElementById("description");this.quill=new Quill(a,{theme:"snow",placeholder:"請輸入產品說明",modules:{toolbar:e.quillToolbarOptions}}),this.$bus.$on("empty-quill-content",(function(){$(".ql-editor").empty()})),this.$bus.$on("get-product-id",(function(e){t.getProduct(e)}))},beforeDestroy:function(){this.$bus.$off("empty-quill-content"),this.$bus.$off("get-product-id")}}),n=c,l=a("2877"),d=Object(l["a"])(n,r,s,!1,null,null,null),u=d.exports,m={data:function(){return{products:[],tempProduct:{imageUrl:[]},pagination:{},isLoading:!1,productFn:"",isAjaxFail:!1}},components:{ProductModal:u},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("8213c3e3-1f7b-4c06-b649-6fa6b24c50ba","/admin/ec/products?page=").concat(e,"&paged=5");this.$http.get(a).then((function(e){t.isLoading=!1,t.products=e.data.data,t.pagination=e.data.meta.pagination})).catch((function(){t.isAjaxFail=!0,t.isLoading=!1}))},openModal:function(t,e){this.productFn=t,"edit"===t?this.$bus.$emit("get-product-id",e.id):(this.tempProduct=JSON.parse(JSON.stringify(e)),this.$bus.$emit("empty-quill-content"),$(this.$refs.modal.$el).modal("show"))},changeAlertStatus:function(t){this.isAjaxFail=t},changeLaodingStatus:function(t){this.isLoading=t},ctrlModal:function(t){$(this.$refs.modal.$el).modal(t?"show":"hide")}},created:function(){this.getProducts()}},p=m,g=Object(l["a"])(p,i,o,!1,null,null,null);e["default"]=g.exports},"99af":function(t,e,a){"use strict";var i=a("23e7"),o=a("d039"),r=a("e8b5"),s=a("861d"),c=a("7b0b"),n=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),m=a("b622"),p=a("2d00"),g=m("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",f=p>=51||!o((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=u("concat"),P=function(t){if(!s(t))return!1;var e=t[g];return void 0!==e?!!e:r(t)},x=!f||!b;i({target:"Array",proto:!0,forced:x},{concat:function(t){var e,a,i,o,r,s=c(this),u=d(s,0),m=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?s:arguments[e],P(r)){if(o=n(r.length),m+o>v)throw TypeError(h);for(a=0;a<o;a++,m++)a in r&&l(u,m,r[a])}else{if(m>=v)throw TypeError(h);l(u,m++,r)}return u.length=m,u}})},e01a:function(t,e,a){"use strict";var i=a("23e7"),o=a("83ab"),r=a("da84"),s=a("5135"),c=a("861d"),n=a("9bf2").f,l=a("e893"),d=r.Symbol;if(o&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};l(m,d);var p=m.prototype=d.prototype;p.constructor=m;var g=p.toString,v="Symbol(test)"==String(d("test")),h=/^Symbol\((.*)\)[^)]+$/;n(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=g.call(t);if(s(u,t))return"";var a=v?e.slice(7,-1):e.replace(h,"$1");return""===a?void 0:a}}),i({global:!0,forced:!0},{Symbol:m})}}}]);
//# sourceMappingURL=chunk-395369e8.b58fd6a5.js.map