import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import $ from 'jquery';
import Quill from 'quill';
import 'bootstrap';
import Pagination from '@/components/Pagination.vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue(); // event bus

Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.component('Pagination', Pagination);

window.$ = $;
window.Quill = Quill;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
