<template>
  <div class="favorite-products">
    <Loading :active.sync="isLoading"></Loading>
    <h2 class="title title-page">
      <span>我的收藏</span>
    </h2>
    <div class="container">
      <div class="row" v-if="favoriteData.length < 1">
        <div class="col-lg-12">
          <div class="empty">
            <i class="far fa-bookmark"></i>
            <p>目前沒有收藏的商品喔，趕快把喜愛的商品加入收藏清單吧!!</p>
            <router-link to="/products"
              class="btn btn-primary btn-lg rounded-0 mt-2">逛逛商品</router-link>
          </div>
        </div>
      </div>
      <div class="row list" v-else
        :class="favoriteProducts.length < favoriteLen ? 'justify-content-center' : ''">
        <div class="col-lg-3 col-md-4 mb-4"
          v-for="item in favoriteProducts" :key="`favorite${item.id}`">
          <div class="box">
            <router-link :to="`/product/${item.id}`" class="cover"
              :title="`查看 ${item.title} 詳細資訊`">
              <img class="img-fluid" :src="item.imageUrl[0]" :alt="item.content">
              <span class="icon favorite"
                title="取消收藏清單"
                @click.prevent="deleteFavorite(item.id, item.title)">
                <i class="fas fa-bookmark"></i>
              </span>
              <span class="icon cart"
                :title="`${item.title} 放入購物車`"
                @click.prevent="addCart(item.id)">
                <i class="fas fa-spinner fa-spin" v-if="loadingPdtItem === item.id && isBuying"></i>
                <i class="fas fa-shopping-cart" v-else></i>
              </span>
            </router-link>
            <div class="info">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global Swal */

export default {
  data() {
    return {
      products: [],
      favoriteData: JSON.parse(localStorage.getItem('favoritePdt')) || [],
      loadingPdtItem: '',
      isLoading: false,
    };
  },
  props: ['windowWidth', 'isBuying'],
  methods: {
    getProducts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?page=1&paged=10`;
      this.$http.get(api).then((res) => {
        this.products = res.data.data;
        this.isLoading = false;
      }).catch((err) => {
        this.isLoading = false;
        Swal.fire({
          title: err.response.data.errors,
          icon: 'warning',
        });
      });
    },
    deleteFavorite(id, title) {
      const idx = this.favoriteData.indexOf(id);
      if (idx >= 0) {
        this.favoriteData.splice(idx, 1);
        Swal.fire({
          title: `「${title}」已取消收藏清單`,
          icon: 'success',
        });
      }
      localStorage.setItem('favoritePdt', JSON.stringify(this.favoriteData));
    },
    addCart(id) {
      if (this.isBuying) return;
      this.loadingPdtItem = id;
      this.$emit('add-cart', id);
    },
  },
  computed: {
    favoriteProducts() {
      const products = this.products.filter(
        (item) => this.favoriteData.indexOf(item.id) > -1,
      );

      return products;
    },
    favoriteLen() {
      return this.windowWidth > 768 ? 5 : 4;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
