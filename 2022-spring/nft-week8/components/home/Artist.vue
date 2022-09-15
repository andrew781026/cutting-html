<template>
  <div class="container">
    <MainTitle cht="熱門藝術家" eng="Artist"></MainTitle>
    <div class="swiper">
      <ul class="swiper-wrapper list-unstyled">
        <li v-for="artist in artists" :key="artist.id" class="swiper-slide">
          <div
            class="artist"
            :style="`background-image:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(&quot;${artist.img}&quot;)`"
          >
            <h3>{{ artist.name }}</h3>
            <div class="content">
              <p>
                {{ artist.desc }}
              </p>
              <OrangeButton>MORE</OrangeButton>
            </div>
          </div>
          <p class="mt-4 p-6 bg-white d-lg-none">
            擁有個⼈獨樹⼀格的創作風格，作品觸及靈魂深處、探索未知宇宙，透過與大自然的溝通，探討著存在的本質。
          </p>
        </li>
      </ul>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import MainTitle from '@/components/home/MainTitle'

export default {
  name: 'NuxtArtist',
  components: {
    MainTitle,
  },
  data() {
    return {
      artists: [
        {
          id: 1,
          img: 'imgs/artist01.jpg',
          name: 'Michael',
          desc: '以其超凡脫俗的神話場景而聞名。',
        },
        {
          id: 2,
          img: 'imgs/artist02.jpg',
          name: 'Antony Wu',
          desc: '喜愛大自然，創作題材常見大山、大水、花草與樹木。',
        },
        {
          id: 3,
          img: 'imgs/artist03.jpg',
          name: 'Tim Brisko',
          desc: '喜愛大自然，創作題材常見大山、大水、花草與樹木。',
        },
        {
          id: 4,
          img: 'imgs/artist04.jpg',
          name: 'Alexandra',
          desc: '喜愛大自然，創作題材常見大山、大水、花草與樹木。',
        },
        {
          id: 5,
          img: 'imgs/artist05.jpg',
          name: 'Dizard',
          desc: '喜愛大自然，創作題材常見大山、大水、花草與樹木。',
        },
      ],
    }
  },
  mounted() {
    // init Swiper:
    this.swiper = new window.Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      initialSlide: 1,
      spaceBetween: 0,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        depth: 200,
        scale: 0.7,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  },
}
</script>

<style lang="scss">
@import '~assets/scss/_custom.scss';

// import customized Swiper css
@import '~assets/scss/swiper.scss';
</style>
