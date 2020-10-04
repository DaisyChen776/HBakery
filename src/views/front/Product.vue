<template>
  <div class="product">
    <Loading :active.sync="isLoading"></Loading>
    <div class="container">
      <div class="row">
        <!-- <div class="col-lg-12">
          首頁 &gt; 全部商品 &gt; {{ product.title }}
        </div> -->
        <div class="col-md-6">
          <img class="img-fluid" :src="product.imageUrl[0]" />
        </div>
        <div class="col-md-6 info">
          <h2>{{ product.title }}</h2>
          <div class="d-flex align-items-center">
            <div class="price-box">
              <span class="category">{{ product.category }}</span>
              <p class="origin">NT$：{{ product.origin_price }}</p>
              <p class="price">NT$：{{ product.price }}</p>
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
              <button class="btn btn-primary btn-lg btn-block rounded-0"
                @click="addCart(product.id, selectQuantity)">
                <i class="fas fa-spinner fa-spin" v-if="isBuying"></i>
                <i class="fas fa-shopping-cart" v-else></i>
                加入購物車
              </button>
            </div>
          </div>
          <h6>
            <span>產品介紹</span>
          </h6>
          <div class="description"></div>
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
            <swiper :options="swiperOptions" ref="pdtSwiperRef">
              <swiper-slide v-for="item in likeProducts" :key="`like${item.id}`">
                <div class="cover">
                  <router-link :to="`/product/${item.id}`" title="查看詳細資訊">
                    <img  class="img-fluid" :src="item.imageUrl[0]" alt="" />
                  </router-link>
                </div>
                <div class="title">{{ item.title }}</div>
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
/* global Quill  */

export default {
  data() {
    return {
      product: {
        imageUrl: [],
      },
      likeProducts: [],
      selectQuantity: 1,
      quill: null,
      isLoading: false,
      isBuying: false,
      swiperOptions: {
        // pagination: {
        //   el: '.swiper-pagination',
        // },
        slidesPerView: 3,
        spaceBetween: 55,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
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
      // const vm = this;
      const { id } = this.$route.params;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.$http.get(api).then((res) => {
        this.product = res.data.data;
        this.quill.setContents(JSON.parse(this.product.description));
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    updateQuantity(id, quantity = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.$http.patch(api, cart).then(() => {
        this.getCart();
      }).catch(() => {
        this.isLoading = false;
      });
    },
    addCart(id, quantity) {
      if (this.isBuying) return;
      this.$bus.$emit('add-to-cart', {
        id,
        quantity,
      });
      this.isBuying = true;
    },
    productSwiper(direction) {
      this.$refs.pdtSwiperRef.$swiper[direction]();
    },
  },
  created() {
    this.getProducts();
    this.getProduct();
    this.$bus.$on('clear-loading-pdt-item', () => {
      this.isBuying = false;
    });
  },
  mounted() {
    this.$bus.$emit('active-menu', -1);
    this.$bus.$emit('index-header-ctrl', false);

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
