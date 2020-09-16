<template>
  <div class="front">
    <header>
      <div class="container">
        <h1>
          <router-link class="logo" to="/home">
            <img src="@/assets/img/logo.png" alt="Healthy bakery logo" />
          </router-link>
        </h1>
        <nav>
          <div>
            <ul>
              <li>
                <router-link to="/products" class="nav-link">產品列表</router-link>
              </li>
              <li>
                <router-link to="/cart" class="nav-link">購物車</router-link>
              </li>
              <li>
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
