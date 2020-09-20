<template>
  <div class="cart">
    <Loading :active.sync="isLoading"></Loading>
    <h2 class="title title-page">
      <span>購物清單</span>
    </h2>
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-7">
          <div class="list">
            <table class="table mt-3">
              <thead>
                <tr>
                  <th>產品</th>
                  <th class="text-center d-none d-sm-table-cell">數量</th>
                  <th class="text-right">單價</th>
                  <th class="text-center">刪除</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart" :key="item.product.id + 1">
                  <td>{{ item.product.title }}</td>
                  <td class="text-center d-none d-sm-table-cell">{{ item.quantity }}</td>
                  <td class="text-right" v-html="`NT$ ${item.product.price}`"></td>
                  <td class="text-center">
                    <a :title="`刪除「${item.product.title}」`"
                      @click.prevent="deleteCartItem(item.product.id)">
                      <i class="fas fa-times"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="amout">
            <h4 class="text-center mb-3">訂單詳細內容</h4>
            <table class="table mt-3">
              <tbody>
                <tr v-for="item in cart" :key="item.product.id + 2">
                  <td>{{ item.product.title }}</td>
                  <td v-html="`${item.quantity} / ${item.product.unit}`"></td>
                  <td class="text-right" v-html="`NT$ ${item.product.price * item.quantity}`"></td>
                </tr>
              </tbody>
            </table>
            <div class="total text-right" v-html="`總計：NT$ ${countTotalPrice}`"></div>
          </div>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-lg-12 buyer-data">
          <div class="mask" v-show="!cart.length"></div>
          <h3 class="h4">訂購人資訊</h3>
          <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="createOrder">
              <div class="form-row">
                <validation-provider class="form-group col-md-6" rules="required" name="收件人姓名"
                  tag="div" v-slot="{ errors, classes }">
                  <label for="buyername">收件人姓名</label>
                  <input id="buyername" type="text" name="name"
                    v-model="buyerData.name" class="form-control" :class="classes" />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
                <validation-provider class="form-group col-md-6" name="電話" rules="required"
                  tag="div" v-slot="{ errors, classes }">
                  <label for="phone">電話</label>
                  <input id="phone" type="tel" name="tel"
                    v-model="buyerData.tel" class="form-control" :class="classes" />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <validation-provider class="form-group" name="email" rules="required|email"
                tag="div" v-slot="{ errors, classes }">
                <label for="email">Email</label>
                <input id="email" type="email" name="email"
                  v-model="buyerData.email" class="form-control" :class="classes" />
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider class="form-group" name="地址" rules="required" tag="div"
                v-slot="{ errors, classes }">
                <label for="address">地址</label>
                <input id="address" type="address" name="address"
                  v-model="buyerData.address" class="form-control" :class="classes" />
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
              <ValidationProvider class="form-group" name="付款方式" rules="required" tag="div"
                v-slot="{ errors, classes }">
                <label for="payment">付款方式</label>
                <select id="payment" class="form-control" name="payment"
                  v-model="buyerData.payment" :class="classes" required>
                  <option value="" disabled>請選擇付款方式</option>
                  <option value="WebATM">WebATM</option>
                  <option value="ATM">ATM</option>
                  <option value="Barcode">Barcode</option>
                  <option value="Credit">信用卡</option>
                  <option value="ApplePay">ApplePay</option>
                  <option value="GooglePay">GooglePay</option>
                </select>
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </ValidationProvider>
              <div class="form-group">
                <label for="message">留言</label>
                <textarea id="message" name="message"
                  v-model="buyerData.message" class="form-control"></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg"
                :disabled="invalid">送出訂單</button>
              </div>
            </form>
          </validation-observer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart'],
  data() {
    return {
      // cart: [],
      buyerData: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
      isLoading: false,
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      this.totalPrice = 0;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(api).then((res) => {
        this.cart = res.data.data;
        this.cart.forEach((item) => {
          this.totalPrice += item.product.price * item.quantity;
        });
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    deleteCartItem(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.$http.delete(api).then(() => {
        this.$bus.$emit('get-cart');
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    createOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders`;
      this.$http.post(api, this.buyerData).then(() => {
        this.$router.push('/home');
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },
  },
  computed: {
    countTotalPrice() {
      let totalPrice = 0;
      this.cart.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
      });
      return totalPrice;
    },
  },
  created() {
    // this.getCart();
  },
  mounted() {
    this.$bus.$emit('index-header-ctrl', false);
  },
};
</script>
