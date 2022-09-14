<template>
  <footer>© ART NFT. All Rights Reserved</footer>
</template>

<script>
export default {
  name: 'NuxtFooter',
  data() {
    return {
      active: false,
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  padding: 24px;
  text-align: center;
  font-family: 'Noto Sans TC', sans-serif;
  position: relative;
  border-top: 1px solid black;

  &::before {
    position: absolute;
    top:4px;
    left: 0;
    content: '';
    display: flex;
    width: 100%;
    height: 4px;
    background-color: black;
  }
}
</style>
