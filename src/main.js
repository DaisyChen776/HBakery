import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import {
  ValidationProvider, ValidationObserver, extend, localize, configure,
} from 'vee-validate';
import { email, required } from 'vee-validate/dist/rules';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import $ from 'jquery';
import Quill from 'quill';
import 'bootstrap';
import Swal from 'sweetalert2';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import Pagination from '@/components/Pagination.vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue(); // event bus

// axios 設定
Vue.use(VueAxios, axios);

// Loading 設定
Vue.component('Loading', Loading);

// vee-validate 表單驗證設定
localize('zh_TW', TW);
extend('email', email);
extend('required', {
  ...required,
  message: '{_field_} 欄位不能空白',
});
configure({
  classes: {
    valid: '', // is-valid
    invalid: 'is-invalid',
  },
});
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// sweetalert2 設定
window.Swal = Swal.mixin({
  toast: true,
  showConfirmButton: false,
  timer: 2000,
  padding: '1em',
  position: 'center',
});

// Swiper 輪播外掛
Vue.component('Swiper', Swiper);
Vue.component('SwiperSlide', SwiperSlide);

// 頁碼區塊設定
Vue.component('Pagination', Pagination);

// jQuery
window.$ = $;

// Quill 文字編輯器
window.Quill = Quill;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
