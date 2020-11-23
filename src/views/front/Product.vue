<template>
  <div class="product">
    <Loading :active.sync="isLoading"></Loading>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="path">
            <router-link to="/home">首頁</router-link>
            &gt;
            <router-link to="/products">全部商品</router-link>
            &gt; {{ product.title }}
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <img class="img-fluid cover" :src="product.imageUrl[0]" :alt="product.content" />
        </div>
        <div class="col-lg-6 col-md-12 info">
          <h3>
            {{ product.title }}
            <span class="favorite text-primary"
              :class="favoriteData.indexOf(product.id) > -1 ? 'added':''"
              :title="`${favoriteData.indexOf(product.id) > -1 ? '取消':'加入'}收藏清單`"
              @click.prevent="addFavorite(product.id)">
              <i class="fas fa-bookmark" v-if="favoriteData.indexOf(product.id) > -1"></i>
              <i class="far fa-bookmark" v-else></i>
            </span>
          </h3>
          <div class="px-2 mb-3">{{ product.content }}</div>
          <div class="d-flex align-items-center">
            <div class="price-box">
              <span class="category">{{ product.category }}</span>
              <p class="origin">原價：{{ product.origin_price | money }}</p>
              <p class="price">售價：{{ product.price | money }}</p>
            </div>
            <div class="add-cart">
              <div class="count">
                數量：
                <select v-model="selectQuantity">
                  <option v-for="i in 10" :key="`add-${i}-count`">
                    {{ i }}
                  </option>
                </select>
                {{ product.unit }}
              </div>
              <button type="button" class="btn btn-primary btn-lg btn-block rounded-0"
                @click="addCart(product.id, selectQuantity)">
                <i class="fas fa-spinner fa-spin" v-if="isBuying"></i>
                <i class="fas fa-shopping-cart" v-else></i>
                加入購物車
              </button>
            </div>
          </div>
          <div class="total">
            小計：
            <span>{{ countTotalPrice | money }}</span>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12">
          <h5 class="intro-title">商品介紹</h5>
          <div class="intro-content description"></div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <h5 class="intro-title">購物須知</h5>
          <div class="intro-content">
            <ul>
              <li>為確保食物新鮮，我們只寄送台灣、澎湖、金門與馬祖，其餘國家與地區皆不寄送。</li>
              <li>收到款項後，三到七天工作日後寄出商品，若有任何問題請致電告知，謝謝。</li>
              <li>運費：台灣本島與離島皆為台幣 $100 元。</li>
              <li>單筆訂單滿台幣 $1,200 元免運費寄送。</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <h5 class="intro-title">退換貨說明</h5>
          <div class="intro-content">
            <ul>
              <li>收到商品三日後不可進行退貨。</li>
              <li>因麵包蛋糕為消耗性商品，不是用於七天鑑賞期，除非商品本身有過期、不新鮮問題或運送中有嚴重損壞才可進行退貨，</li>
              <li>若運送中有嚴重損壞請消費者照相存證告知。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="like-products">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="title">
              <span>可能會喜歡的商品</span>
            </h2>
            <swiper class="swiper" :options="swiperOptions" ref="pdtSwiperRef">
              <swiper-slide v-for="item in likeProducts" :key="`like${item.id}`">
                <router-link :to="`/product/${item.id}`" title="查看詳細資訊">
                  <img  class="img-fluid" :src="item.imageUrl[0]" :alt="item.content" />
                  <div class="title">{{ item.title }}</div>
                </router-link>
              </swiper-slide>
              <div class="swiper-button-prev swiper-button-custom" slot="button-prev"
                @click="productSwiper('slidePrev')"></div>
              <div class="swiper-button-next swiper-button-custom" slot="button-next"
                @click="productSwiper('slideNext')"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global Quill, Swal */
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      product: {
        imageUrl: [],
      },
      likeProducts: [],
      selectQuantity: 1,
      favoriteData: JSON.parse(localStorage.getItem('favoritePdt')) || [],
      quill: null,
      isLoading: false,
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 55,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 55,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 55,
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 55,
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ['isBuying'],
  methods: {
    getProducts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?page=1&paged=6`;
      this.$http.get(api).then((res) => {
        this.likeProducts = res.data.data;
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.$http.get(api).then((res) => {
        this.product = res.data.data;
        this.quill.setContents(JSON.parse(this.product.description));
        this.isLoading = false;
      }).catch((err) => {
        this.isLoading = false;
        Swal.fire({
          title: err.response.data.errors,
          icon: 'warning',
        });
      });
    },
    addCart(id, quantity) {
      if (this.isBuying) return;
      this.$emit('add-cart', id, quantity);
    },
    addFavorite(id) {
      const idx = this.favoriteData.indexOf(id);
      if (idx < 0) {
        this.favoriteData.push(id);
        Swal.fire({
          title: '已加入收藏清單',
          icon: 'success',
        });
      } else {
        this.favoriteData.splice(idx, 1);
        Swal.fire({
          title: '已取消收藏清單',
          icon: 'success',
        });
      }
      localStorage.setItem('favoritePdt', JSON.stringify(this.favoriteData));
    },
    productSwiper(direction) {
      this.$refs.pdtSwiperRef.$swiper[direction]();
    },
  },
  computed: {
    countTotalPrice() {
      return this.product.price * this.selectQuantity;
    },
  },
  watch: {
    // 監聽單一產品頁面 router 發生變化時執行 getProduct 方法
    $route: 'getProduct',
  },
  created() {
    this.getProducts();
    this.getProduct();
  },
  mounted() {
    // Quill 文字編輯器初始化
    const editor = document.querySelector('.description');
    this.quill = new Quill(editor, {
      theme: 'snow',
      modules: {
        toolbar: null,
      },
    });
  },
};
</script>
