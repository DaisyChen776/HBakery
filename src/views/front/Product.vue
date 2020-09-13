<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <h2>{{ product.title }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [],
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    const { id } = this.$route.params;
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.product = res.data.data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
      });
  },
};
</script>
