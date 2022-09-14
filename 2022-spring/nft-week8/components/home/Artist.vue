<template>
  <div class="container">
    <MainTitle cht="熱門藝術家" eng="Artist"></MainTitle>
  </div>
</template>

<script>
import MainTitle from "@/components/home/MainTitle";

export default {
  name: "NuxtArtist",
  components: {
    MainTitle
  },
  data() {
    return {
      artists: [
        {
          id: 1,
          img: "imgs/artist01.jpg",
          name: "Sandro Botticelli",
          desc: "以其超凡脫俗的神話場景而聞名。"
        },
        {
          id: 2,
          img: "imgs/artist02.jpg",
          name: "Antony Wu",
          desc: "喜愛大自然，創作題材常見大山、大水、花草與樹木。"
        },
        {
          id: 3,
          img: "imgs/artist03.jpg",
          name: "LEONARDO DA VINCI",
          desc: "文藝復興時期的典型人物。他不僅留下了一系列充滿科學觀察和插圖的筆記本，而且還留下了跨越不同媒介的重要藝術遺產。從他的肖像畫《蒙娜麗莎》和《帶貂的女士》中可以看出他對暈染和明暗法等油畫技巧的掌握。前者仍然是世界上訪問量最大的藝術作品之一。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/_custom.scss';
</style>
