<template>
  <div>
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light px-4">
          <router-link class="navbar-brand" to="/home">
            <img src="@/assets/img/logo.png" alt="Healthy bakery logo" />
          </router-link>
          <button class="navbar-toggler" type="button"
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
                <router-link to="/about" class="nav-link">關於我們</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link">產品列表</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/cart" class="nav-link">購物車</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link">後台</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  data() {
    return {
      isRouterShow: false,
    };
  },
  components: {
  },
};
</script>
