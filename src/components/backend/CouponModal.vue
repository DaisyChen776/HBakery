<template>
  <div class="modal fade" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" :class="execution === 'delete' ? 'bg-danger text-white' : ''">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="execution === 'new'">新增優惠劵</span>
            <span v-else-if="execution === 'edit'">更新優惠劵</span>
            <span v-else-if="execution === 'delete'">刪除優惠劵</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"
            :class="execution === 'delete' ? 'text-white' : ''"
            @click="cleanData">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- 刪除優惠劵彈出視窗 元件 -->
        <div class="modal-body" v-if="execution === 'delete'">
          是否刪除 <strong class="text-danger">{{ coupon.title }}</strong> 優惠劵(刪除後將無法恢復)。
        </div>
        <!-- 新增/更新 優惠劵 彈出視窗 元件 -->
        <div class="modal-body" v-else>
          <div class="form-group">
            <label for="title">名稱</label>
            <input type="text" class="form-control" id="title"
              placeholder="請輸入名稱" v-model="tempCoupon.title" />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="code">序號</label>
              <input type="text" class="form-control" id="code"
                placeholder="請輸入序號" v-model="tempCoupon.code" />
            </div>
            <div class="form-group col-md-6">
              <label for="percent">折扣百分比</label>
              <input type="text" class="form-control" id="percent"
                placeholder="請輸入百分比" v-model="tempCoupon.percent" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="date">到期日</label>
              <input type="date" class="form-control" id="date"
                placeholder="請輸入到時日期" v-model="couponDate" />
            </div>
            <div class="form-group col-md-6">
              <label for="time">到時間</label>
              <input type="time" class="form-control" id="time" step="1"
                placeholder="請輸入到期時間" v-model="couponTime" />
            </div>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="enabled" id="enabled"
              v-model="tempCoupon.enabled" />
            <label class="form-check-label" for="enabled">是否啟用</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            @click="cleanData">取消</button>
          <button type="button" class="btn btn-primary"
            @click="delCoupon"
            v-if="execution === 'delete'">確定刪除</button>
          <button type="button" class="btn btn-primary" @click="updateCoupon" v-else>
            <span v-if="execution === 'new'">確定新增</span>
            <span v-else-if="execution === 'edit'">確定更新</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tempCoupon: {
        title: '',
        code: '',
        percent: '',
        enabled: false,
        deadline_at: '',
      },
      couponDate: '', // 暫存 deadline_at 日期
      couponTime: '', // 暫存 deadline_at 時間
    };
  },
  props: ['execution', 'coupon'],
  methods: {
    getCoupon(id) {
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon/${id}`;
      this.$emit('change-loading', true);
      this.$http.get(api).then((res) => {
        this.tempCoupon = JSON.parse(JSON.stringify(res.data.data));
        this.$set(this.tempCoupon, 'id', id);
        [this.couponDate, this.couponTime] = this.tempCoupon.deadline.datetime.split(' ');
        this.$emit('change-loading', false);
        this.$emit('ctrl-modal', true);
      }).catch(() => {
        this.$emit('change-loading', false);
      });
    },
    updateCoupon() {
      let api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon`; // new
      let httpMethod = 'post';
      if (this.execution === 'edit') { // edit
        api += `/${this.tempCoupon.id}`;
        httpMethod = 'patch';
      }
      this.tempCoupon.deadline_at = `${this.couponDate} ${this.couponTime}`;
      this.$emit('change-loading', true);
      this.$emit('ctrl-modal', false);
      this.$http[httpMethod](api, this.tempCoupon).then(() => {
        this.$emit('update-coupons');
        this.cleanData();
      }).catch(() => {
        this.$emit('change-loading', false);
        this.cleanData();
      });
    },
    delCoupon() {
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.coupon.id}`;
      this.$emit('ctrl-modal', false);
      this.$emit('change-loading', true);
      this.$http.delete(api).then(() => {
        this.$emit('update-coupons');
      }).catch(() => {
        this.$emit('change-loading', true);
      });
    },
    cleanData() {
      this.tempCoupon = JSON.parse(JSON.stringify(
        {
          title: '',
          code: '',
          percent: '',
          enabled: false,
          deadline_at: '',
        },
      ));
      this.couponDate = '';
      this.couponTime = '';
    },
  },
  mounted() {
    // 接收 bus 傳來的資料
    this.$bus.$on('get-coupon-id', (id) => {
      this.getCoupon(id);
    });
  },
  beforeDestroy() {
    this.$bus.$off('get-coupon-id');
  },
};
</script>
