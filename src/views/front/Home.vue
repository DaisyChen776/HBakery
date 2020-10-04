<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <div class="index-banner">
      <div class="container">
        <section>
          <img src="@/assets/img/logo_w2.png" alt="" />
          <p>做出健康與美味的麵包是我們的使命</p>
        </section>
      </div>
      <div class="next" @click="scrollToContent">
        <div><i class="fas fa-chevron-down"></i></div>
        <div><i class="fas fa-chevron-down"></i></div>
        <div><i class="fas fa-chevron-down"></i></div>
      </div>
    </div>
    <div class="index-coupon">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="promotions">
              <h2 class="title">
                <span>週年慶特惠活動開始囉!!</span>
              </h2>
              這次週年慶活動為期整整兩個月<br/>
              快來參與「週年慶抽抽樂」活動<br/>
              祝您抽中最優惠的折扣!!
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4"
            v-for="(item, idx) in coupons" :key="`${idx}-${item.code}`">
            <div class="coupon-wrap" :class="animateCoupon ? 'slide' : ''">
              <div class="coupon" @click="playLottery(idx)">
                <div class="cover">
                  <div class="topic">
                    <span>優惠折扣</span>
                    <div class="icon">
                      <i class="fas fa-bread-slice"></i>
                      <i class="fas fa-cookie"></i>
                      <i class="fas fa-store"></i>
                    </div>
                  </div>
                  <div class="lucky">週年慶抽抽樂</div>
                </div>
                <div class="discount">
                  <p class="title">{{ item.title }}</p>
                  <p>請輸入以下序號</p>
                  <p class="code">{{ item.code }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <img class="img-fluid top" src="@/assets/img/about.jpg"
              :class="animateAbout ? 'slide' : ''" />
          </div>
          <div class="col-lg-3 col-md-3">
            <img class="img-fluid bottom" src="@/assets/img/about2.jpg"
              :class="animateAbout ? 'slide' : ''" />
          </div>
        </div>
      </div>
    </div>
    <div class="index-products">
      <div class="container">
        <h2 class="title">
          <span>精選商品</span>
        </h2>
        <div class="row">
          <div class="col-lg-12">
            <div class="products-box">
              <div class="box" v-for="item in hotProducts" :key="`hot${item.id}`">
                <div class="cover">
                  <img class="img-fluid" :src="item.imageUrl[0]" />
                </div>
                <div class="info">
                  <p>{{ item.title }}</p>
                  <div>
                    <i class="fas fa-spinner fa-spin" v-if="loadingPdtItem === item.id"></i>
                    <i class="fas fa-shopping-cart" title="放入購物車"
                      @click="addCart(item.id)" v-else></i>
                    <i class="fas fa-bookmark" title="加入收藏清單"></i>
                    <router-link :to="`/product/${item.id}`"
                      tag="i" class="fas fa-file-alt" title="查看詳細資訊">
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="contact">
              <h2 class="title">
                <span>聯絡我們</span>
              </h2>
              <p>電話：03-233111222</p>
              <p>地址：桃園市大園區新生路四段249號</p>
              <p>E-mail：hbakery@hbakery.com.tw</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.7720194012895!2d121.21121801494229!3d25.007861545492894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346821097b7d4749%3A0xe8fecc4695f413bb!2zMzIw5qGD5ZyS5biC5Lit5aOi5Y2A5paw55Sf6Lev5Zub5q61MjQ56Jmf!5e0!3m2!1szh-TW!2stw!4v1601792847367!5m2!1szh-TW!2stw" width="100%" height="80%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
/* global $  */

export default {
  name: 'Home',
  props: ['scrollTop'],
  data() {
    return {
      coupons: [
        {
          title: '週年慶全品項五折優惠',
          code: 'yearall50',
        },
        {
          title: '週年慶全品項八折優惠',
          code: 'yearall80',
        },
        {
          title: '週年慶全品項九折優惠',
          code: 'yearall90',
        },
        {
          title: '週年慶全品項九五折優惠',
          code: 'yearall95',
        },
      ],
      getCoupon: false,
      hotProducts: [],
      isLoading: false,
      loadingPdtItem: '',
    };
  },
  methods: {
    scrollToContent() {
      const y = document.querySelector('.index-banner').offsetHeight - document.querySelector('header').offsetHeight;
      $('html, body').animate({
        scrollTop: y,
      }, 1000);
    },
    randomCoupon() {
      this.coupons.sort(() => (Math.random() > 0.5 ? -1 : 1));
      this.coupons.splice(this.coupons.length - 1, 1);
    },
    playLottery(activeIdx) {
      if (this.getCoupon) return;
      document.querySelectorAll('.coupon-wrap').forEach((item, idx) => {
        item.parentElement.classList.add(
          activeIdx === idx ? 'active' : 'no-active',
        );
      });
      this.getCoupon = true;
    },
    getProducts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?page=1&paged=4`;
      this.$http.get(api).then((res) => {
        this.hotProducts = res.data.data;
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    addCart(id) {
      if (this.loadingPdtItem !== '') return;
      this.loadingPdtItem = id;
      this.$bus.$emit('add-to-cart', {
        id,
        quantity: 1,
      });
    },
  },
  computed: {
    animateCoupon() {
      let y = 0;
      if (document.querySelector('.index-coupon')) {
        y = document.querySelector('.index-coupon').offsetTop / 3;
      }
      return !!(this.scrollTop > y);
    },
    animateAbout() {
      let y = 0;
      if (document.querySelector('.index-about')) {
        y = document.querySelector('.index-about').offsetTop / 2;
      }
      return !!(this.scrollTop > y);
    },
  },
  created() {
    this.randomCoupon();
    this.getProducts();
    this.$bus.$on('clear-loading-pdt-item', () => {
      this.loadingPdtItem = '';
    });
  },
  mounted() {
    this.$bus.$emit('active-menu', -1);
    this.$bus.$emit('index-header-ctrl', true);
  },
};
</script>
