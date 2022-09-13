<template>
  <div class="container">
    <div class="row g-0">
      <div class="col-12 first-box flex-column flex-lg-row">
        <div class="recommend-block d-none d-lg-flex">
          <h2>Recommend</h2>
          <p>推薦系列</p>
        </div>
        <img src="imgs/art01.jpg" alt="logo"/>
        <div class="card">
          <div class="name">Kemus Wu</div>
          <div class="title">瞳孔:流動的脈絡</div>
          <div class="desc">
            眼睛，總是吸引著我們的注意力，看、被看，也許眼睛裡有著從另一個世界看我們的世界。
          </div>
          <button class="btn btn-orange">MORE</button>
        </div>
      </div>
    </div>
    <div class="row g-0">
      <div class="col-12 col-lg-6">
        <div class="flex-column-reverse flex-lg-row other-box">
          <div class="card">
            <div class="name">Joanne</div>
            <div class="title">海洋波度</div>
            <div class="desc">
              海洋的奧秘向我們揭示了深不可測的一面，它的深度——反映了我們的恐懼、同時也吸引著我們。
            </div>
            <button class="btn btn-orange">MORE</button>
          </div>
          <img src="imgs/art02.jpg" alt="logo"/>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="flex-column-reverse flex-lg-row other-box">
          <div class="card">
            <div class="name">Michael</div>
            <div class="title">我家窗前的鳥</div>
            <div class="desc">
              家門前每天都有不同的小鳥，大多數的小鳥都有特殊能力，特殊能力是什麼我就不說了，希望大家能從作品感受到小鳥的快樂。
            </div>
            <button class="btn btn-orange">MORE</button>
          </div>
          <img src="imgs/art21.jpg" alt="logo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtRecommend',
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_custom.scss';

img {
  width: auto;
  height: 100%;
  margin: 0;
}

.other-box {
  display: flex;
  border: 1px solid $black;

  img {
    max-height: 340px;
  }
}

.card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: none;
  border-radius: 0;

  .name {
    font-size: 18px;
  }

  .title {
    font-size: 48px;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  .desc {
    font-size: 16px;
    flex-grow: 1;
    margin-bottom: 24px;
  }

  button {
    align-self: flex-end;
  }
}

.first-box {
  display: flex;
  border: 1px solid $black;

  img {
    max-height: 500px;
  }

  .recommend-block {
    padding: 24px;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;

    h2 {
      // https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
      font-size: 48px;
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }

    p {
      font-size: 20px;
      word-wrap: break-word;
      width: 24px;
      // writing-mode: vertical-rl;
      // text-orientation: upright;
    }
  }
}
</style>
