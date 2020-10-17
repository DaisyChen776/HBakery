<template>
  <header :class="showTop ? 'index-header-top' : ''">
    <div class="container">
      <h1>
        <router-link class="header-logo" to="/home">
          <img class="logo" src="@/assets/img/logo.png" alt="Healthy bakery logo" />
        </router-link>
      </h1>
      <nav>
        <div>
          <ul class="menu-list">
            <li @click="closeMenu">
              <router-link to="/about" class="nav-link">品牌介紹</router-link>
            </li>
            <li @click="closeMenu">
              <router-link to="/products" class="nav-link">商品列表</router-link>
            </li>
            <li @click="closeMenu">
              <router-link to="/favorite" class="nav-link">我的收藏</router-link>
            </li>
          </ul>
          <ul class="icon">
            <li class="menu-toogle">
              <a href="#" class="nav-link"
                @click.prevent="toogleMenu">
                <i class="fas fa-bars"></i>
              </a>
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
</template>

<script>
/* global $ */

export default {
  props: ['showTop', 'cartLen'],
  methods: {
    toogleMenu() {
      $('.menu-list').slideToggle();
    },
    closeMenu() {
      if ($(window).width() < 768) {
        $('.menu-list').css('display', 'none');
      }
    },
  },
};
</script>
