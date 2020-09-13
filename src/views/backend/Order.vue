<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <h2 class="h3 m-3 text-left">訂單細節</h2>
    <table>
      <tr>
        <th>訂單編號</th>
        <td>{{ order.id }}</td>
      </tr>
      <tr>
        <th>下單日期</th>
        <td>{{ order.created.datetime }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {},
      tempOrder: {},
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const { id } = this.$route.params;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${id}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.order = res.data.data;
        console.log(this.order);
      }).catch(() => {
        this.isLoading = false;
      });
    },
  },
  created() {
    this.getOrder();
  },
};
</script>
