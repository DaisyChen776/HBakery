<template>
  <div>
    <div class="index-banner">
      <div class="container">
        <section>
          <img src="@/assets/img/logo_w2.png" alt="" />
          <p class="h2 pb-3 mb-4">做出健康與美味的麵包是我們的使命</p>
        </section>
      </div>
    </div>
    <div class="index-about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 d-flex align-items-center">
            <div class="about-text">
              <h2 class="title">
                <span>
                  Healthy Backery
                  <br>
                  健康與美味的麵包
                </span>
              </h2>
              <p class="h5">
                現在的食物充斥著各種添加物與香精<br>
                而我們的使命就是使用最好的原料<br>
                做出美味又健康的麵包與甜點
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-3">
            <img class="img-fluid top" src="@/assets/img/about.jpg" />
          </div>
          <div class="col-lg-3 col-md-3">
            <img class="img-fluid bottom" src="@/assets/img/about2.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="index-products">
      <div class="container">
        <h2 class="title">
          <span>熱門商品</span>
        </h2>
        <div class="row">
          <div class="col-lg-3 col-md-3">
            <div class="cover">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/qfW9GMpgVELTeMBaS8nDMMCr8GcUzX1NP1NNjL6bGPXmYNHUy3s5E4ZFKtdOGweGePunyzMFdyYJ5e3Lk7lgJpDqvgbZRiKC0YbgoEXO2eA6fCNJMG88ZjalsX1M6UzK.jpg" alt="">
              <!-- <button type="button" class="cart">
                <i class="fas fa-shopping-cart"></i>
              </button> -->
            </div>
          </div>
          <div class="col-lg-3 col-md-3">
            <div class="cover">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/iZGSZCvNaseYYphfPwTktKB0PCcxJbthLlhkuy6ccuwaTbxJZb1vKVJ0eOCWn4BtFEzmsfrs8S4DX0C9J6UoS3e4ILIfafFDnjIWxizNrd2CfinsyxdFgSYhnlnSAseV.jpg" alt="">
              <!-- <button type="button" class="cart">
                <i class="fas fa-shopping-cart"></i>
              </button> -->
            </div>
          </div>
          <div class="col-lg-3 col-md-3">
            <div class="cover">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/qfW9GMpgVELTeMBaS8nDMMCr8GcUzX1NP1NNjL6bGPXmYNHUy3s5E4ZFKtdOGweGePunyzMFdyYJ5e3Lk7lgJpDqvgbZRiKC0YbgoEXO2eA6fCNJMG88ZjalsX1M6UzK.jpg" alt="">
              <!-- <button type="button" class="cart">
                <i class="fas fa-shopping-cart"></i>
              </button> -->
            </div>
          </div>
          <div class="col-lg-3 col-md-3">
            <div class="cover">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/iZGSZCvNaseYYphfPwTktKB0PCcxJbthLlhkuy6ccuwaTbxJZb1vKVJ0eOCWn4BtFEzmsfrs8S4DX0C9J6UoS3e4ILIfafFDnjIWxizNrd2CfinsyxdFgSYhnlnSAseV.jpg" alt="">
              <!-- <button type="button" class="cart">
                <i class="fas fa-shopping-cart"></i>
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-contact">
      <div class="container">
        <h2 class="title">
          <span>聯絡我們</span>
        </h2>
        <div class="contact">
          <form>
            <div class="fill-form">
              <div class="fill">
                <label>姓名：</label>
                <input type="text" />
              </div>
              <div class="fill">
                <label>電話：</label>
                <input type="text" />
              </div>
              <div class="fill">
                <label>手機：</label>
                <input type="text" />
              </div>
              <div class="fill">
                <label>地址：</label>
                <input type="text" />
              </div>
              <div class="fill">
                <label>E-mail：</label>
                <input type="text" />
              </div>
            </div>
            <div class="fill-form">
              <div class="fill sentence">
                <label>想對我們說的話：</label>
                <textarea name=""></textarea>
              </div>
            </div>

            <button type="button">聯絡我們</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
  },
  created() {
  },
  mounted() {
    this.$bus.$emit('index-header-ctrl', true);
  },
};
</script>
