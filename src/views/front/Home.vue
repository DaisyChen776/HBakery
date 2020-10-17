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
    <div class="index-products hot">
      <div class="container">
        <h2 class="title">
          <span>精選商品</span>
        </h2>
        <div class="row">
          <div class="col-lg-12">
            <div class="products-box"
              :class="animateHotProduct ? 'slide' : ''"
              v-for="item in hotProducts" :key="`hot${item.id}`">
              <div class="cover">
                <img class="img-fluid" :src="item.imageUrl[0]" />
              </div>
              <div class="info">
                <p>
                  <span class="title">{{ item.title }}</span>
                </p>
                <div class="content" v-html="item.content.replaceAll('，','<br>')"></div>
                <div class="btn-box">
                  <button type="button" class="btn" title="放入購物車" @click="addCart(item.id)">
                    <i class="fas fa-spinner fa-spin"
                      v-if="loadingPdtItem === item.id && isBuying"></i>
                    <i class="fas fa-shopping-cart" v-else></i>
                    放入購物車
                  </button>
                  <router-link :to="`/product/${item.id}`"
                    class="btn" title="查看詳細資訊">
                    <i class="fas fa-file-alt"></i>
                    詳細資訊
                  </router-link>
                  <button type="button" class="btn"
                    :title="`${favoriteData.indexOf(item.id) > -1 ? '取消':'加入'}收藏清單`"
                    @click.prevent="addFavorite(item.id, item.title)">
                    <span v-if="favoriteData.indexOf(item.id) > -1">
                      <i class="fas fa-bookmark"></i> 取消收藏
                    </span>
                    <span v-else>
                      <i class="far fa-bookmark"></i> 加入收藏
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-products new">
      <div class="container">
        <h2 class="title">
          <span>新進商品</span>
        </h2>
        <div class="row">
          <div class="col-lg-6 col-md-6" v-for="item in newProducts" :key="`new${item.id}`">
            <div class="products-box" :class="animateNewProduct ? 'slide' : ''">
              <div class="cover">
                <img class="img-fluid" :src="item.imageUrl[0]" />
              </div>
              <div class="info">
                <p>
                  <span class="title">{{ item.title }}</span>
                </p>
                <div class="content" v-html="item.content.replaceAll('，','<br>')"></div>
                <div class="btn-box">
                  <button type="button" class="btn" title="放入購物車" @click="addCart(item.id)">
                    <i class="fas fa-spinner fa-spin"
                      v-if="loadingPdtItem === item.id && isBuying"></i>
                    <i class="fas fa-shopping-cart" v-else></i>
                    放入購物車
                  </button>
                  <router-link :to="`/product/${item.id}`"
                    class="btn" title="查看詳細資訊">
                    <i class="fas fa-file-alt"></i>
                    詳細資訊
                  </router-link>
                  <button type="button" class="btn"
                    :title="`${favoriteData.indexOf(item.id) > -1 ? '取消':'加入'}收藏清單`"
                    @click.prevent="addFavorite(item.id, item.title)">
                    <span v-if="favoriteData.indexOf(item.id) > -1">
                      <i class="fas fa-bookmark"></i> 取消收藏
                    </span>
                    <span v-else>
                      <i class="far fa-bookmark"></i> 加入收藏
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $, Swal */

export default {
  name: 'Home',
  props: ['scrollTop', 'isBuying'],
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
      newProducts: [],
      favoriteData: JSON.parse(localStorage.getItem('favoritePdt')) || [],
      isLoading: false,
      loadingPdtItem: '',
    };
  },
  methods: {
    scrollToContent() {
      const y = document.querySelector('.index-banner').offsetHeight - document.querySelector('header').offsetHeight;
      $('html, body').animate({
        scrollTop: y,
      }, 800);
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
        const products = res.data.data;
        products.forEach((item, idx) => {
          this[idx < 2 ? 'hotProducts' : 'newProducts'].push(item);
        });
        this.isLoading = false;
      }).catch((err) => {
        this.isLoading = false;
        Swal.fire({
          title: err.response.data.errors,
          icon: 'warning',
        });
      });
    },
    addCart(id) {
      if (this.isBuying) return;
      this.loadingPdtItem = id;
      this.$emit('add-cart', id);
    },
    addFavorite(id, title) {
      const idx = this.favoriteData.indexOf(id);
      if (idx < 0) {
        this.favoriteData.push(id);
        Swal.fire({
          title: `「${title}」已加入收藏清單`,
          icon: 'success',
        });
      } else {
        this.favoriteData.splice(this, 1);
        Swal.fire({
          title: `「${title}」已取消收藏清單`,
          icon: 'success',
        });
      }
      localStorage.setItem('favoritePdt', JSON.stringify(this.favoriteData));
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
    animateHotProduct() {
      let y = 0;
      if (document.querySelector('.index-products.hot')) {
        y = document.querySelector('.index-products.hot').offsetTop / 1.5;
      }
      return !!(this.scrollTop > y);
    },
    animateNewProduct() {
      let y = 0;
      if (document.querySelector('.index-products.new')) {
        y = document.querySelector('.index-products.new').offsetTop / 1.3;
      }
      return !!(this.scrollTop > y);
    },
  },
  created() {
    this.randomCoupon();
    this.getProducts();
  },
};
</script>
