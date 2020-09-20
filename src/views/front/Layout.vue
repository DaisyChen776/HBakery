<template>
  <div class="front" id="front">
    <Loading :active.sync="isLoading"></Loading>
    <header :class="(isIndex && !scrollTop) ? 'index-header-top' : ''">
      <div class="container">
        <h1>
          <router-link class="header-logo" to="/home">
            <img class="logo" src="@/assets/img/logo.png" alt="Healthy bakery logo" />
          </router-link>
        </h1>
        <nav>
          <div>
            <ul class="menu-list">
              <li>
                <router-link to="/home" class="nav-link">首頁</router-link>
              </li>
              <li>
                <router-link to="/about" class="nav-link">品牌介紹</router-link>
              </li>
              <li>
                <router-link to="/products" class="nav-link">產品列表</router-link>
              </li>
            </ul>
            <ul class="icon">
              <li class="menu-toogle">
                <a href="#" class="nav-link"
                  @click.prevent="toogleMenu"><i class="fas fa-bars"></i></a>
              </li>
              <li>
                <router-link to="/cart" class="nav-link">
                  <i class="fas fa-shopping-basket"></i>
                  <span class="cart-items" v-show="!!cartLen">{{ cartLen }}</span>
                </router-link>
              </li>
              <li>
                <router-link to="/login" class="nav-link">
                  <i class="fas fa-user"></i>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <router-view :cart="cart"></router-view>
    <footer class="p-3">
      <p class="text-center m-auto">ⓒ 2020 HBakery by Daisy 此網站圖片皆為為練習使用，不具有商業行為</p>
    </footer>
  </div>
</template>

<script>
/* global $  */
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  data() {
    return {
      cart: [],
      cartLen: 0,
      scrollTop: 0,
      isIndex: false,
      isLoading: false,
    };
  },
  components: {
  },
  methods: {
    toogleMenu() {
      $('.menu-list').slideToggle();
    },
    addCart(id, quantity = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.$http.post(api, cart).then(() => {
        this.getCart();
      }).catch(() => {
        this.isLoading = false;
      });
    },
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(api).then((res) => {
        this.cart = res.data.data;
        this.cartLen = res.data.data.length;
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },
  },
  created() {
    this.getCart();
    // 監聽 scoll 位置
    window.addEventListener('scroll', () => {
      // console.log(document.body.scrollTop);
      this.scrollTop = window.pageYOffset;
    });

    this.$bus.$on('index-header-ctrl', (isHome) => {
      this.isIndex = isHome;
    });

    this.$bus.$on('get-cart', () => {
      this.getCart();
    });

    this.$bus.$on('add-to-cart', (id) => {
      this.addCart(id);
    });
  },
};
</script>
