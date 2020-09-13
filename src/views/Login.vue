<template>
  <div class="login">
    <div class="container">
      <Loading :active.sync="isLoading"></Loading>
      <h1 class="h3 mb-3 text-center">
        <img src="@/assets/img/logo.png" alt="Healthy bakery logo" />
      </h1>
      <form class="login-form">
        <div class="form-group">
          <label for="inputEmail" class="sr-only">E-mail address</label>
          <input type="email"
            class="form-control"
            id="inputEmail"
            placeholder="E-mail address"
            v-model="user.email" />
        </div>
        <div class="form-group">
          <label for="inputPwd" class="sr-only">Passowrd</label>
          <input type="password"
            class="form-control"
            id="inputPwd"
            placeholder="Passowrd"
            v-model="user.password" />
        </div>

        <button type="button" class="btn btn-primary btn-block" @click="signIn">登入</button>
        <router-link to="/" class="btn btn-light btn-block">取消</router-link>

        <p class="text-white bg-danger rounded-pill p-2 mt-4" v-show="isFail">{{ loginFailMsg }}</p>
      </form>
    </div>

    <footer>
      <p class="text-white m-auto text-center">
        後台管理系統 © 2020 Healthy Backery All Rights Reserved.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      loginFailMsg: '',
      isFail: false,
      isLoading: false,
    };
  },
  methods: {
    signIn() {
      this.isLoading = true;
      this.loginFailMsg = '';
      this.isFail = false;
      const api = `${process.env.VUE_APP_APIPATH}/auth/login`;
      this.$http.post(api, this.user).then((res) => {
        const { token, expired } = res.data;
        document.cookie = `hBakeryToken=${token}; expires=${new Date(expired * 1000)}; path=/`;
        this.$router.push('/admin/products');
      }).catch((error) => {
        this.loginFailMsg = error.response.data.message;
        this.isFail = true;
        this.user.email = '';
        this.user.password = '';
        this.isLoading = false;
      });
    },
  },
};
</script>

<style lang="scss">
  .login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5ebeb;
    position: relative;

    .container {
      width: 350px;
      margin-top: -80px;
    }

    footer {
      width: 100%;
      height: 35px;
      line-height: 35px;
      font-size: 0.9rem;
      background-color: #795548;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
</style>
