<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <nav id="backend-menu" class="navbar navbar-expand-lg navbar-light" v-if="checkSuccess">
      <div class="container">
        <a class="navbar-brand" href="#">Healthy Backery 後台管理</a>
        <button type="button" class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/admin/products" class="nav-link">產品列表</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/orders" class="nav-link">訂單列表</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/coupons" class="nav-link">優惠卷</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/images" class="nav-link">圖片列表</router-link>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-primary btn-sm mt-1 ml-2"
                @click="signOut">
                登出
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view v-if="checkSuccess" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      checkSuccess: false,
      isLoading: false,
    };
  },
  methods: {
    checkLogin() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/auth/check`;
      this.$http.post(api, { api_token: this.token }).then(() => {
        this.checkSuccess = true;
        this.isLoading = false;
        this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      }).catch(() => {
        this.checkSuccess = false;
        this.$router.push('/login');
      });
    },
    signOut() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/auth/logout`;
      this.$http.post(api, { api_token: this.token }).then(() => {
        this.token = '';
        document.cookie = 'hBakeryToken=; expires=; path=/';
        this.$router.push('/login');
      }).catch(() => {

      });
    },
  },
  created() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hBakeryToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.checkLogin();
  },
};
</script>

<style lang="scss">
  #backend-menu {
    background-color: #f5ebeb;
    .navbar-brand {
      color: #9c5a2a
    }
  }
</style>
