<template>
  <div id="app">
    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <Header />
    <Recommend />
    <Ranking />
    <client-only>
      <Artist />
      <Artwork />
    </client-only>
    <JoinUs />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Recommend from '@/components/home/Recommend'
import Ranking from '@/components/home/Ranking'
import Artist from '@/components/home/Artist'
import Artwork from '@/components/home/Artwork'
import JoinUs from '@/components/home/JoinUs'

export default {
  name: 'IndexPage',
  components: {
    Recommend,
    Header,
    Ranking,
    Artist,
    Artwork,
    JoinUs,
    Footer,
  },
}
</script>
