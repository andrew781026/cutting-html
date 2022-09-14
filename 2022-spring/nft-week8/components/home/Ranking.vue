<template>
  <div class="container">
    <MainTitle cht="市價排行榜" eng="Ranking"></MainTitle>
    <div class="row g-4 mt-5">
      <div
        v-for="item in rankings"
        :key="item.id"
        class="col-12 col-md-6 col-lg-4"
      >
        <div class="my-box" :class="[item.isMin && 'is-min']">
          <div class="number">{{ item.id }}</div>
          <div class="img-box">
            <div class="more">MORE</div>
            <div class="number">{{ item.id }}</div>
            <OrangeButton class="orange-button">MORE</OrangeButton>
            <img :src="item.img" alt="NFT" />
          </div>
          <div class="flex-grow-1">
            <div class="title">{{ item.title }}</div>
            <div class="desc">
              <div class="author">{{ item.author }}</div>
              <div class="price">
                <font-awesome-icon icon="fa-brands fa-ethereum" />
                {{ item.price }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainTitle from '@/components/home/MainTitle'

export default {
  name: 'NuxtRanking',
  components: {
    MainTitle,
  },
  data() {
    return {
      rankings: [
        {
          id: 1,
          title: '散步遇到的女人',
          author: 'Zoe Jiang',
          price: 300,
          img: 'imgs/art04.jpg',
        },
        {
          id: 2,
          title: '爆炸頭的母親',
          author: 'Yui',
          price: 300,
          img: 'imgs/art05.jpg',
        },
        {
          id: 3,
          title: '夏天的時候',
          author: 'Bug Lin',
          price: 300,
          img: 'imgs/art06.jpg',
        },
        {
          id: 4,
          title: '追求者送我的花',
          author: 'Michael',
          price: 300,
          img: 'imgs/art13.jpg',
          isMin: true,
        },
        {
          id: 5,
          title: '今天釣到的魚',
          author: 'Wei JJ',
          price: 300,
          img: 'imgs/art07.jpg',
          isMin: true,
        },
        {
          id: 6,
          title: '人生中的貓咪們',
          author: 'Even Lai',
          price: 300,
          img: 'imgs/art08.jpg',
          isMin: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_custom.scss';

@mixin small_box {
  display: flex;

  > .number {
    display: flex;
    align-items: center;
    font-size: 24px;
    padding: 24px 16px;
  }

  .img-box {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-left: 1px solid $black;
    border-right: 1px solid $black;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }

    .number {
      display: none;
    }

    .more {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      color: $white;
      font-size: 18px;
      justify-content: center;
      align-items: center;

      // 三角形產生器 : http://apps.eky.hk/css-triangle-generator/zh-hant
      &::before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 16px 16px;
        border-color: transparent transparent $orange transparent;
        transition: all 0.3s;
      }
    }

    &:hover {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
      }

      .more {
        display: flex;
        position: absolute;
      }

      .orange-button {
        display: none;
      }
    }
  }
}

@mixin big_box {
  > .number {
    display: none;
  }

  .img-box {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid $black;

    .more {
      display: none;
    }

    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
    }

    .number {
      position: absolute;
      top: 0;
      left: 0;
      height: 64px;
      width: 64px;
      font-size: 32px;
      line-height: 64px;
      text-align: center;
      z-index: 2;
      background-color: $white;
      border-right: 1px solid $black;
      border-bottom: 1px solid $black;
    }

    .orange-button {
      position: absolute;
      bottom: -1px;
      right: -1px;
      transform: translateY(100%);
      transition: all 0.3s;
    }

    &:hover {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }

      .orange-button {
        transform: translateY(0);
      }
    }
  }
}

.my-box {
  border: 1px solid $black;

  .title {
    padding: 16px;
    font-size: 18px;
    border-bottom: 1px solid $black;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .desc {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    font-size: 16px;
  }

  @include big_box;
}

.my-box.is-min {
  @include small_box;
}

@media (max-width: 768px) {
  .my-box {
    @include small_box;
  }
}
</style>
