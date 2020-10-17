<template>
  <div class="order">
    <Loading :active.sync="isLoading"></Loading>
    <h2 class="title title-page">
      <span>訂單詳細資訊</span>
    </h2>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="step">
            <div class="active">
              <span>1</span>
              <p>確認數量</p>
            </div>
            <div class="active">
              <span>2</span>
              <p>填寫購物資訊</p>
            </div>
            <div class="active">
              <span>3</span>
              <p>完成</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
          <table class="table mt-3">
            <thead>
              <tr>
                <th class="d-none d-sm-table-cell" width="130">商品圖</th>
                <th>商品名稱</th>
                <th class="text-center d-none d-sm-table-cell">數量</th>
                <th class="text-right">單價</th>
                <th class="text-right">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.product.id + 'order'">
                <td class="d-none d-sm-table-cell">
                  <img :src="item.product.imageUrl[0]" width="100">
                </td>
                <td>{{ item.product.title }}</td>
                <td class="text-center d-none d-sm-table-cell">{{ item.quantity }}</td>
                <td class="text-right">{{ item.product.price | money }}</td>
                <td class="text-right">{{ item.product.price * item.quantity | money }}</td>
              </tr>
            </tbody>
          </table>
          <div class="total">
            <div><span>小計</span> <p>{{ order.amount | money }}</p></div>
            <div><span>運費</span> <p>{{ shippingFee | money }}</p></div>
            <div class="text-success"><span>應付</span> <p>{{ totalPaid | money }}</p></div>
          </div>
          <h5 class="intro-title mt-4">訂單資訊</h5>
          <div class="intro-content">
            <p>訂單日期：{{ order.created.datetime }}</p>
            <p v-html="`訂單狀態：${order.paid ? '已付款' : '未付款'}`"></p>
            <p>付款方式：{{ order.payment }}</p>
          </div>
          <h5 class="intro-title mt-4">送貨資訊</h5>
          <div class="intro-content">
            <p>收件人姓名：{{ order.user.name }}</p>
            <p>E-mail：{{ order.user.email }}</p>
            <p>聯絡電話：{{ order.user.tel }}</p>
            <p>收件地址：{{ order.user.address }}</p>
          </div>
        </div>
        <div class="col-lg-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {},
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      this.isLoading = true;
      const { id } = this.$route.params;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${id}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.order = res.data.data;
      }).catch(() => {
        this.isLoading = false;
      });
    },
  },
  computed: {
    shippingFee() {
      const shippingCost = this.order.amount >= 1200 ? 0 : 100;
      return shippingCost;
    },
    totalPaid() {
      return this.order.amount + this.shippingFee;
    },
  },
  created() {
    this.getOrder();
  },
};
</script>
