<template>
  <div class="content" :style="contentStyle()" :class="[active && 'active']">
    <slot />
  </div>
</template>

<script>
// ref : https://www.w3schools.com/howto/howto_js_collapsible.asp
export default {
  name: 'NuxtCollapsible',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    contentStyle() {
      return {
        maxHeight:
          this.active && this.$el ? this.$el.scrollHeight + 'px' : '0px',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;

  &.active::after {
    content: '';
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
