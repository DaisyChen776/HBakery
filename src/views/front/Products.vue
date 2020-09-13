<template>
  <div class="products">
    <Loading :active.sync="isLoading"></Loading>
    <h2>前台產品列表頁面</h2>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td><router-link :to="`/product/${item.id}`">連結</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  props: ['token'],
  created() {
    this.isLoading = true;
    // axios plugin get api
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
      });
  },
};
</script>
