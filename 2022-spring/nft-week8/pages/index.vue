<template>
  <div id="app">
    <Header />
    <Recommend />
    <Ranking />
    <Artist />
    <Artwork />
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
