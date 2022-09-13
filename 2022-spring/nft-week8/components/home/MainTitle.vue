<template>
  <div class="main-title">
    <span class="eng">{{ eng }}</span>
    <span class="cht">{{ cht }}</span>
    <div class="flex-grow-1"></div>
    <div class="more">
      MORE
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainTitle',
  props: {
    eng: {
      type: String,
      required: true,
    },
    cht: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_custom.scss';

.main-title {
  position: relative;
  display: flex;
  gap: 16px;
  align-items: flex-end;
  border-bottom: 1px solid #000;

  .cht {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .eng {
    font-size: 48px;
  }

  .more {
    font-size: 16px;
    padding: 8px 48px;

    // 三角形產生器 : http://apps.eky.hk/css-triangle-generator/zh-hant
    &::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 16px 16px;
      border-color: transparent transparent $orange transparent;
      transition: all 0.3s;
    }
  }
}
</style>
