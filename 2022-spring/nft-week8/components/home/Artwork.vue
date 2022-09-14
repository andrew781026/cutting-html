<template>
  <div class="container">
    <MainTitle cht="最新藝術品" eng="Artwork"></MainTitle>
    <div class="container">
      <div class="masonry">
        <ArtworkCard
          v-for="artwork in artworks"
          :key="artwork.id"
          :artwork="artwork"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MainTitle from '@/components/home/MainTitle'
import ArtworkCard from '@/components/home/ArtworkCard'

export default {
  name: 'NuxtArtwork',
  components: {
    MainTitle,
    ArtworkCard,
  },
  data() {
    return {
      artworks: [
        {
          id: 1,
          img: 'imgs/art09.jpg',
          name: '區塊戀-他的私生活',
          desc: '唯一想擁有的人，唯一不可以擁有的',
          price: 300,
        },
        {
          id: 2,
          img: 'imgs/art10.jpg',
          name: '夏娃的醜聞',
          desc: '唯一想擁有的人，唯一不可以擁有的',
          price: 300,
        },
        {
          id: 3,
          img: 'imgs/art02.jpg',
          name: '藍色啤酒海',
          desc: '唯一想擁有的人，唯一不可以擁有的',
          price: 300,
        },
        {
          id: 4,
          img: 'imgs/art11.jpg',
          name: '沒有人愛我',
          desc: '唯一想擁有的人，唯一不可以擁有的',
          price: 300,
        },
        {
          id: 5,
          img: 'imgs/art12.jpg',
          name: '不哭不哭眼淚是珍珠',
          desc: '唯一想擁有的人，唯一不可以擁有的',
          price: 300,
        },
        {
          id: 6,
          img: 'imgs/art03.jpg',
          name: '十分鐘就到',
          desc: '唯一想擁有的人，唯一不可以擁有的',
          price: 300,
        },
        {
          id: 7,
          img: 'imgs/art04.jpg',
          name: '我這樣有美嗎',
          desc: '唯一想擁有的人，唯一不可以擁有的',
          price: 300,
        },
        {
          id: 8,
          img: 'imgs/art27.jpg',
          name: '我真的受傷了',
          desc: '唯一想擁有的人，唯一不可以擁有的',
          price: 300,
        },
      ],
    }
  },
  mounted() {
    // 改用 require 引入，避免 windows undefined 錯誤
    const Masonry = require('masonry-layout/dist/masonry.pkgd.min.js')
    const ImagesLoaded = require('imagesloaded/imagesloaded.pkgd.min.js')

    ImagesLoaded('.masonry', () => {
      // eslint-disable-next-line no-new
      new Masonry('.masonry', {
        // options...
        itemSelector: '.artwork-card',
        gutter: 24,
        fitWidth: true,
      })
    })
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_custom.scss';

.masonry {
  margin: 0 auto;
}
</style>
