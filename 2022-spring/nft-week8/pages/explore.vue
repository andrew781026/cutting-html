<template>
  <div id="app">
    <Header />
    <Artwork />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Artwork from '@/components/home/Artwork'

export default {
  name: 'ExplorePage',
  components: {
    Header,
    Artwork,
    Footer,
  },
}
</script>
