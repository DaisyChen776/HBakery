<template>
  <div class="cart">
    <Loading :active.sync="isLoading"></Loading>
    <h2 class="title title-page">
      <span>購物清單</span>
    </h2>
    <div class="container" v-if="cart.length < 1">
      <div class="row mb-5">
        <div class="col-lg-12">
          <div class="empty">
            <p>您的購物車現在沒有商品喔，快去購物吧!!</p>
            <router-link to="/products"
              class="btn btn-primary btn-lg rounded-0 mt-2">逛逛商品</router-link>
            <div class="cart"><i class="fas fa-shopping-cart"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <div class="row">
        <div class="col-lg-12">
          <div class="step">
            <div class="active">
              <span>1</span>
              <p>確認數量</p>
            </div>
            <div :class="checkCartPdt ? 'active' : ''">
              <span>2</span>
              <p>填寫購物資訊</p>
            </div>
            <div>
              <span>3</span>
              <p>完成</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-5" v-show="!checkCartPdt">
        <div class="col-lg-7" >
          <div class="list">
            <table class="table mt-3">
              <thead>
                <tr>
                  <th>商品</th>
                  <th class="text-center d-none d-sm-table-cell">數量</th>
                  <th class="text-right">單價</th>
                  <th class="text-center">刪除</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart" :key="item.product.id + 1">
                  <td>{{ item.product.title }}</td>
                  <td class="text-center d-none d-sm-table-cell">
                    <!-- {{ item.quantity }} -->
                    <div class="quantity">
                      <button type="button" title="減少數量"
                        :class="item.quantity === 1 ? 'disabled' : ''"
                        @click.prevent="updateQuantity(item.product.id, item.quantity - 1)">
                        <i class="fas fa-minus-circle"></i>
                      </button>
                      <input type="number" :value="item.quantity"
                        @change="changeQuantity(item.product.id, $event.target.value)" />
                      <button type="button" title="增加數量"
                      :class="item.quantity === 10 ? 'disabled' : ''"
                        @click.prevent="updateQuantity(item.product.id, item.quantity + 1)">
                        <i class="fas fa-plus-circle"></i>
                      </button>
                    </div>
                  </td>
                  <td class="text-right">{{ item.product.price | money }}</td>
                  <td class="text-center">
                    <a class="delete" :title="`刪除「${item.product.title}」`"
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
            <table class="table mt-3 mb-2">
              <tbody>
                <tr v-for="item in cart" :key="item.product.id + 2">
                  <td>{{ item.product.title }}</td>
                  <td v-html="`${item.quantity} / ${item.product.unit}`"></td>
                  <td class="text-right">{{ item.product.price * item.quantity | money }}</td>
                </tr>
              </tbody>
            </table>
            <div class="total">
              <div><span>小計</span> <p>{{ countTotalPrice | money }}</p></div>
              <div><span>運費</span> <p>{{ shippingFee | money }}</p></div>
              <div class="text-success"><span>應付</span> <p>{{ totalPaid | money }}</p></div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="btn-box">
            <router-link to="/products"
              class="btn btn-secondary rounded-0">繼續購物</router-link>
            <button type="button"
              class="btn btn-primary rounded-0 ml-3"
              @click="checkCartPdt = true">下一步</button>
          </div>
        </div>
      </div>
      <div class="row mb-5" v-show="checkCartPdt">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 buyer-data">
          <h3 class="h4">購物資訊</h3>
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
              <div class="btn-box">
                <button type="button"
                  class="btn btn-secondary rounded-0"
                  @click="checkCartPdt = false">上一步</button>
                <button type="submit"
                  class="btn btn-primary rounded-0 ml-3"
                  :disabled="invalid">確認付款</button>
              </div>
            </form>
          </validation-observer>
        </div>
        <div class="col-lg-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* global Swal */

export default {
  props: ['cart'],
  data() {
    return {
      buyerData: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
      checkCartPdt: false,
      isLoading: false,
    };
  },
  methods: {
    deleteCartItem(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.$http.delete(api).then(() => {
        this.$emit('get-cart');
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    updateQuantity(id, quantity = 1) {
      if (quantity > 10 || quantity < 1) return;
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.$http.patch(api, cart).then(() => {
        this.$emit('get-cart');
        this.isLoading = false;
      }).catch((err) => {
        this.isLoading = false;
        Swal.fire({
          title: err.response.data.errors,
          icon: 'warning',
        });
      });
    },
    changeQuantity(id, quantity = 1) {
      const updateQuantity = Number(quantity);
      if (updateQuantity > 0 && updateQuantity < 11) {
        this.updateQuantity(id, Math.floor(quantity));
      }
    },
    createOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders`;
      this.$http.post(api, this.buyerData).then((res) => {
        this.$router.push(`/order/${res.data.data.id}`);
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
    shippingFee() {
      const shippingCost = this.countTotalPrice >= 1200 ? 0 : 100;
      return shippingCost;
    },
    totalPaid() {
      return this.countTotalPrice + this.shippingFee;
    },
  },
};
</script>
