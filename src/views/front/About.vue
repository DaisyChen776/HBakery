<template>
  <div class="about">
    <h2 class="title title-page">
      <span>品牌介紹</span>
    </h2>
    <div class="container about-des">
      <div class="about-text">
        <h3>
          <span>Healthy Bakery</span>
        </h3>
        <p>
          顧名思義就是健康的麵包，現在這日漸發達的時代裡，
          我們所吃的食物卻添加了越來越多的添加物與香精，失去了食物該有的營養素，
          創立 Healthy Bakery 的目的，就是堅持使用最好的原物料，
          做出美味又健康的麵包與甜點，讓您安心的享受美食。
        </p>
      </div>
      <div class="about-img"></div>
    </div>

    <div class="container about-des reverse">
      <div class="about-text">
        <h3>
          <span>Material</span>
        </h3>
        <p>
          我們所使用的原料來自法國鐵塔奶油，天然的草飼牛提煉的奶油，
          富含豐富的好油脂與濃郁的香氣、只含植物性葉黃素的機能蛋、
          小農牧場的牛奶、日本德麥麵粉，所有的麵包與甜點減糖製作。
        </p>
      </div>
      <div class="about-img material"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      document.querySelectorAll('.about-des').forEach((item) => {
        item.classList.add('slide');
      });
    }, 200);
  },
};
</script>
