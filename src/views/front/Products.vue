<template>
  <div class="products">
    <Loading :active.sync="isLoading"></Loading>
    <h2 class="title title-page">
      <span>商品列表</span>
    </h2>
    <div class="container">
      <div class="categorys">
        <ul>
          <li :class="activeCategory === '' ? 'active' : ''" >
            <a href="#" @click.prevent="activeCategory = ''">全部</a>
          </li>
          <li v-for="(category, idx) in categorys" :key="idx"
            :class="activeCategory === category ? 'active' : ''">
            <a href="#" @click.prevent="activeCategory = category">{{ category }}</a>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-5" v-for="item in filterProducts" :key="item.id">
          <router-link :to="`/product/${item.id}`" class="cover"
            :title="`查看 ${item.title} 詳細資訊`">
            <img class="img-fluid" :src="item.imageUrl[0]" :alt="item.content">
            <div class="pdt-content" v-html="item.content.replaceAll('，','<br>')"></div>
            <span class="favorite"
              :class="favoriteData.indexOf(item.id) > -1 ? 'added':''"
              :title="`${favoriteData.indexOf(item.id) > -1 ? '取消':'加入'}收藏清單`"
              @click.prevent="addFavorite(item.id, item.title)">
              <i class="fas fa-bookmark" v-if="favoriteData.indexOf(item.id) > -1"></i>
              <i class="far fa-bookmark" v-else></i>
            </span>
          </router-link>
          <div class="info pt-2">
            <h4 class="text-primary font-weight-bold">{{ item.title }}</h4>
            <div class="price-box">
              <p class="origin">原價：{{ item.origin_price | money }}</p>
              <p class="price">售價：{{ item.price | money }}</p>
            </div>
            <div class="d-flex">
              <button type="button" class="btn"
                :title="`${item.title} 放入購物車`"
                @click="addCart(item.id)">
                <i class="fas fa-spinner fa-spin" v-if="loadingPdtItem === item.id && isBuying"></i>
                <i class="fas fa-shopping-cart" v-else></i>
                放入購物車
              </button>
              <router-link :to="`/product/${item.id}`" class="btn"
                :title="`查看 ${item.title} 詳細資訊`">
                <i class="fas fa-file-alt"></i>
                詳細資訊
              </router-link>
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
      categorys: [],
      activeCategory: '',
      favoriteData: JSON.parse(localStorage.getItem('favoritePdt')) || [],
      pagination: {},
      isLoading: false,
      loadingPdtItem: '',
    };
  },
  props: ['isBuying'],
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?page=${page}&paged=9`;
      this.$http.get(api).then((res) => {
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination;
        this.products.forEach((item) => {
          if (this.categorys.indexOf(item.category) < 0) {
            this.categorys.push(item.category);
          }
        });
        this.isLoading = false;
      }).catch((err) => {
        this.isLoading = false;
        Swal.fire({
          title: err.response.data.errors,
          icon: 'warning',
        });
      });
    },
    addCart(id) {
      if (this.isBuying) return;
      this.loadingPdtItem = id;
      this.$emit('add-cart', id);
    },
    addFavorite(id, title) {
      const idx = this.favoriteData.indexOf(id);
      if (idx < 0) {
        this.favoriteData.push(id);
        Swal.fire({
          title: `「${title}」已加入收藏清單`,
          icon: 'success',
        });
      } else {
        this.favoriteData.splice(idx, 1);
        Swal.fire({
          title: `「${title}」已取消收藏清單`,
          icon: 'success',
        });
      }
      localStorage.setItem('favoritePdt', JSON.stringify(this.favoriteData));
    },
  },
  computed: {
    // 產品分類
    filterProducts() {
      if (this.activeCategory) {
        let filterCategory = [];
        filterCategory = this.products.filter((item) => item.category === this.activeCategory);
        return filterCategory;
      }
      return this.products;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
