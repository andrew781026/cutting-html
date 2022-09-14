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
          img: "https://swiperjs.com/demos/images/artist01.jpg",
          name: "Sandro Botticelli",
          desc: "以其超凡脫俗的神話場景而聞名。"
        },
        {
          id: 2,
          img: "https://swiperjs.com/demos/images/artist02.jpg",
          name: "Antony Wu",
          desc: "喜愛大自然，創作題材常見大山、大水、花草與樹木。"
        },
        {
          id: 3,
          img: "https://swiperjs.com/demos/images/artist03.jpg",
          name: "LEONARDO DA VINCI",
          desc: "文藝復興時期的典型人物。他不僅留下了一系列充滿科學觀察和插圖的筆記本，而且還留下了跨越不同媒介的重要藝術遺產。從他的肖像畫《蒙娜麗莎》和《帶貂的女士》中可以看出他對暈染和明暗法等油畫技巧的掌握。前者仍然是世界上訪問量最大的藝術作品之一。"
        },
        {
          id: 4,
          img: "https://swiperjs.com/demos/images/artist04.jpg",
          name: "MICHELANGELO",
          desc: "米開朗基羅·博納羅蒂是繪畫、雕塑和建築大師，是意大利文藝復興時期最傑出的人物之一。他的綽號 Il Divino（“神聖的人”）證明了他是多麼受人喜愛。此外，在大多數藝術家在世時沒有享受財富或名譽的時代，他令人難以置信的成功意義重大。事實上，米開朗基羅是第一位在其有生之年出版傳記的西方藝術家。"
        },
        {
          id: 5,
          img: "https://swiperjs.com/demos/images/artist05.jpg",
          name: "MARY CASSATT",
          desc: "美國藝術家瑪麗·卡薩特（Mary Cassatt，1844-1936 年）將成為法國男性主導運動的關鍵人物。 卡薩特以她對在她的藝術中表現女性和女孩的興趣而聞名，這主要表現為安靜的母女描繪。 然而，她的一些作品，比如她著名的藍色扶手椅上的小女孩，描繪了處於孤獨思考狀態的婦女和女孩。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/_custom.scss';
</style>
