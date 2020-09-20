<template>
  <div class="about">
    <h2 class="title title-page">
      <span>品牌介紹</span>
    </h2>
    <div class="container mb-5">
      <article>
        <p>
          Healthy Bakery 顧名思義就是健康的麵包，而現在這日漸發達的時代裡，
          我們所吃的食物卻添加了越來越多的添加物與香精，失去了食物該有的營養素，
          創立 Healthy Bakery 的目的，就是堅持使用最好的原物料，
          做出美味又健康的麵包與甜點，讓您安心的享受美食。
        </p>
        <p>
          我們所使用的原料來自，法國鐵塔奶油、只含植物性葉黃素的機能但、
          小農牧場的牛奶、日本德麥麵粉。所有的麵包與甜點也是減糖版本。
        </p>
        <img class="img-fluid" src="@/assets/img/banner.jpg" alt="" />
      </article>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
    this.$bus.$emit('index-header-ctrl', false);
  },
};
</script>
