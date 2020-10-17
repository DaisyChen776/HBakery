<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <h2 class="h3 m-3 text-left">優惠劵列表
      <button type="button" class="btn btn-warning float-right"
        @click="openModal('new', {})">新增優惠劵</button>
    </h2>
    <table class="table mt-4">
      <thead>
        <tr class="bg-light">
          <th>優惠名稱</th>
          <th class="text-center" width="150">序號</th>
          <th class="text-center" width="150">優惠折扣(%)</th>
          <th class="text-center" width="100">是否開放</th>
          <th class="text-center" width="200">到期日</th>
          <th width="120">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td class="text-center">{{ item.code }}</td>
          <td class="text-center">{{ item.percent }} %</td>
          <td class="text-center">
            <span class="text-success" v-if="item.enabled">開放</span>
            <span class="text-danger" v-else>未開放</span>
          </td>
          <td class="text-center">{{ item.deadline.datetime }}</td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-info btn-sm"
                @click="openModal('edit', item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pages="pagination" @page-counting="getCoupons" />
    <CouponModal ref="modal" :execution="couponFn" :coupon="tempCoupon"
      @update-coupons="getCoupons"
      @change-loading="changeLaodingStatus"
      @ctrl-modal="ctrlModal" />
  </div>
</template>

<script>
/* global $  */
import CouponModal from '@/components/backend/CouponModal.vue';

export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {},
      pagination: {},
      isLoading: false,
      couponFn: '',
    };
  },
  components: {
    CouponModal,
  },
  methods: {
    getCoupons(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupons?page=${page}&paged=10`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.coupons = res.data.data;
        this.pagination = res.data.meta.pagination;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    openModal(status, coupon) {
      this.couponFn = status;
      if (status === 'edit') {
        this.$bus.$emit('get-coupon-id', coupon.id);
      } else {
        this.tempCoupon = JSON.parse(JSON.stringify(coupon));
        $(this.$refs.modal.$el).modal('show');
      }
    },
    changeLaodingStatus(status) {
      this.isLoading = status;
    },
    ctrlModal(isOpen) {
      $(this.$refs.modal.$el).modal(isOpen ? 'show' : 'hide');
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
