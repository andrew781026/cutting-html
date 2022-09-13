<template>
  <div id="app">
    <Header />
    <Recommend />
    <Ranking />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Recommend from '@/components/home/Recommend'
import Ranking from '@/components/home/Ranking'

export default {
  name: 'IndexPage',
  components: {
    Recommend,
    Header,
    Ranking,
  },
}
</script>
