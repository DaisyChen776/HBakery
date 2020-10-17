<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <h2 class="h3 m-3 text-left">訂單列表</h2>
    <table class="table mt-4">
      <thead>
        <tr class="bg-light">
          <th class="text-center" width="175">訂單日期</th>
          <th>購買產品</th>
          <th class="text-center">訂單總額</th>
          <th>訂單付款方式</th>
          <th>使用優惠</th>
          <th class="text-center">付款狀態</th>
          <th width="130">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td class="text-center align-middle">{{ item.created.datetime }}</td>
          <td class="align-middle">
            <span v-for="(pdt, idx) in item.products" :key="idx">
              {{ pdt.product.title }}
              <font v-if="idx < (item.products.length - 1)">,</font>
            </span>
          </td>
          <td class="text-center align-middle"
            v-html="item.amount < 1200 ? item.amount+100 : item.amount">
          </td>
          <td class="align-middle">{{ item.payment }}</td>
          <td class="align-middle">
            <span class="text-secondary" v-if="item.coupon === null">未使用</span>
            <span v-else>{{ item.coupon.title }}</span>
          </td>
          <td class="text-center align-middle">
            <span class="text-success" v-if="item.paid">已付款</span>
            <span class="text-danger" v-else>未付款</span>
          </td>
          <td class="align-middle">
              <button type="button" class="btn btn-outline-danger btn-sm btn-block" v-if="item.paid"
                @click="changePaidStatus(false, item.id)">更新為未付款</button>
              <button type="button" class="btn btn-outline-success btn-sm btn-block" v-else
                @click="changePaidStatus(true, item.id)">更新為已付款 </button>
              <!-- <router-link :to="`/admin/order/${item.id}`"
                class="btn btn-outline-info btn-sm btn-block">詳細內容</router-link> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getOrders(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders?page=${page}&paged=5`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.orders = res.data.data;
        this.pagination = res.data.meta.pagination;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    changePaidStatus(paid, id) {
      let api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${id}`;
      api += paid ? '/paid' : '/unpaid';
      this.isLoading = true;
      this.$http.patch(api).then(() => {
        this.getOrders(this.pagination.paged);
      }).catch(() => {
        this.isLoading = false;
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
