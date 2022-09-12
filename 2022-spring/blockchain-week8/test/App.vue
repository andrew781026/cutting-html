<template>
  <button @click="count++">{{ count }}</button>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      count: 0,
    };
  },
}
</script>

<style scoped>

</style>
