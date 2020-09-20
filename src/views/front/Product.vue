<template>
  <div class="product mb-5">
    <Loading :active.sync="isLoading"></Loading>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img class="img-fluid" :src="product.imageUrl[0]" />
        </div>
        <div class="col-md-6">
          <h2>{{ product.title }}</h2>
          <div class="d-flex align-items-center mb-4">
            <span class="category">{{ product.category }}</span>
            <div class="price-box">
              <p class="origin">售價：{{ product.origin_price }}</p>
              <p class="price">特價：{{ product.price }}</p>
            </div>
          </div>

          <div class="d-flex align-items-center mb-4">
            <!-- <div class="input-group">
              <div class="input-group-append">
                <button type="button" class="btn btn-outline-primary"
                  :disabled="quantity === 1"
                  @click="updateQuantity(product.id, quantity - 1)">-</button>
              </div>
              <input type="number" min="1" max="10" class="form-control text-center"
                readonly :value="quantity" />
              <div class="input-group-prepend">
                <button type="button" class="btn btn-outline-primary"
                  @click="updateQuantity(product.id, quantity + 1)">+</button>
              </div>
            </div> -->

            <div class="add-cart">
              <button class="btn btn-primary btn-lg" @click="addCart(product.id)">
                <i class="fas fa-shopping-cart"></i>
                加入購物車
              </button>
            </div>
          </div>
          <h5>
            <span>產品介紹</span>
          </h5>
          <div class="description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global Quill  */

export default {
  data() {
    return {
      product: {
        imageUrl: [],
      },
      quantity: 1,
      quill: null,
      isLoading: false,
    };
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      // const vm = this;
      const { id } = this.$route.params;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.$http.get(api).then((res) => {
        this.product = res.data.data;
        this.quill.setContents(JSON.parse(this.product.description));
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    updateQuantity(id, quantity = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.$http.patch(api, cart).then(() => {
        this.getCart();
      }).catch(() => {
        this.isLoading = false;
      });
    },
    addCart(id) {
      this.$bus.$emit('add-to-cart', id);
    },
  },
  created() {
    this.getProduct();
  },
  mounted() {
    this.$bus.$emit('index-header-ctrl', false);

    // Quill 文字編輯器初始化
    const editor = document.querySelector('.description');
    this.quill = new Quill(editor, {
      theme: 'snow',
      modules: {
        toolbar: null,
      },
    });
  },
};
</script>
