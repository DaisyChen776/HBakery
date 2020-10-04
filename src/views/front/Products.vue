<template>
  <div class="products">
    <Loading :active.sync="isLoading"></Loading>
    <h2 class="title title-page">
      <span>產品</span>
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
              <img class="img-fluid" :src="item.imageUrl[0]">
              <div class="pdt-content" v-html="item.content.replaceAll('，','<br>')"></div>
          </router-link>
          <div class="info pt-2">
            <h4 class="text-primary font-weight-bold">{{ item.title }}</h4>
            <div class="price-box">
              <p class="origin">NT$：{{ item.origin_price }}</p>
              <p class="price">NT$：{{ item.price }}</p>
            </div>
            <div class="d-flex">
              <button type="button" class="btn"
                :title="`${item.title} 放入購物車`"
                @click="addCart(item.id)">
                <i class="fas fa-spinner fa-spin" v-if="loadingPdtItem === item.id"></i>
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
export default {
  data() {
    return {
      products: [],
      categorys: [],
      activeCategory: '',
      pagination: {},
      isLoading: false,
      loadingPdtItem: '',
    };
  },
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
      }).catch(() => {
        this.isLoading = false;
      });
    },
    addCart(id) {
      if (this.loadingPdtItem !== '') return;
      this.loadingPdtItem = id;
      this.$bus.$emit('add-to-cart', {
        id,
        quantity: 1,
      });
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
    this.$bus.$on('clear-loading-pdt-item', () => {
      this.loadingPdtItem = '';
    });
  },
  mounted() {
    this.$bus.$emit('active-menu', 1);
    this.$bus.$emit('index-header-ctrl', false);
  },
};
</script>
