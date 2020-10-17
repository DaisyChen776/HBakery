<template>
  <div class="front" id="front">
    <Loading :active.sync="isLoading"></Loading>
    <Header :showTop="showHeaderTop" :cartLen="cartLen" />
    <router-view
      :cart="cart"
      :windowWidth="windowWidth"
      :scrollTop="scrollTop"
      :isBuying="isBuying"
      @add-cart="addCart"
      @get-cart="getCart">
    </router-view>
    <Footer />
  </div>
</template>

<script>
/* global Swal */
// @ is an alias to /src
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';

export default {
  data() {
    return {
      cart: [],
      cartLen: 0,
      windowWidth: window.innerWidth,
      scrollTop: 0,
      showHeaderTop: false,
      isIndex: false,
      isLoading: false,
      isBuying: false,
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    addCart(id, quantity = 1) {
      this.isBuying = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.$http.post(api, cart).then((res) => {
        const productTitle = res.data.data.product.title;
        this.getCart(true);
        this.isBuying = false;
        Swal.fire({
          title: `「${productTitle}」已加入購物車`,
          icon: 'success',
        });
      }).catch((err) => {
        this.isBuying = false;
        Swal.fire({
          title: err.response.data.errors,
          icon: 'warning',
        });
      });
    },
    getCart(isAddCart) {
      if (!isAddCart) {
        this.isLoading = true;
      }
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(api).then((res) => {
        this.cart = res.data.data;
        this.cartLen = res.data.data.length;
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    checkHeaderStatus() {
      this.showHeaderTop = this.isIndex && !this.scrollTop;
    },
  },
  watch: {
    $route(to) {
      window.scrollTo(0, 0);
      this.isIndex = to.fullPath === '/';
      this.checkHeaderStatus();
    },
  },
  created() {
    this.getCart();
    this.isIndex = this.$router.currentRoute.fullPath === '/';
    this.checkHeaderStatus();
    // 監聽 scoll 位置
    window.addEventListener('scroll', () => {
      this.scrollTop = window.pageYOffset;
      this.checkHeaderStatus();
    });

    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  },
};
</script>
