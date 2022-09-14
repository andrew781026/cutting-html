<template>
  <div class="container-fluid">
    <div class="title">Join Us</div>
    <div class="subtitle">創建並出售你的藝術品</div>
    <div class="feature-wrap">
      <div class="container">
        <div class="row">
          <div class="feature col-12 col-md-3" v-for="feature in features" :key="feature.id">
            <font-awesome-icon class="icon" :icon="feature.icon" />
            <div class="feature__title">{{ feature.title }}</div>
            <div class="feature__desc">
              <p>{{ feature.desc_1 }}</p>
              <p>{{ feature.desc_2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "JoinUs",
  data() {
    return {
      features: [
        {
          id: 1,
          icon: "fa-solid fa-wallet",
          title: "設置你的錢包",
          desc_1: "設置好您選擇的錢包後 ",
          desc_2: "點擊右上角的錢包圖標進行連接"
        },
        {
          id: 2,
          icon: "fa-solid fa-pen-ruler",
          title: "創建您的主頁",
          desc_1: "註冊成為會員，編輯您的資料",
          desc_2: "讓大家了解你"
        },
        {
          id: 3,
          icon: "fa-solid fa-icons",
          title: "添加你的 NFT",
          desc_1: "上傳你的作品",
          desc_2: "添加標題和描述"
        },
        {
          id: 4,
          icon: "fa-solid fa-tags",
          title: "列出它們出售",
          desc_1: "選擇出售 NFT 的方式",
          desc_2: "並設定價格，等待有緣人"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/_custom.scss';

.title {
  font-size: 48px;
}

.subtitle {
  font-size: 20px;
  font-weight: bold;
  margin: 16px;
}

.feature-wrap {
  border-top: 4px solid black;
  border-bottom: 4px solid black;

  &::before {
    content: '';
    display: flex;
    margin-top: 4px;
    width: 100%;
    height: 1px;
    background-color: black;
  }

  &::after {
    content: '';
    display: flex;
    margin-bottom: 4px;
    width: 100%;
    height: 1px;
    background-color: black;
  }
}

.feature {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  .icon {
    font-size: 48px;
    color: $orange;
  }

  .feature__title {
    font-size: 18px;
    font-weight: bold;
  }

  .feature__desc {
    font-size: 16px;
    text-align: center;

    p {
      margin: 0;
    }
  }
}
</style>
