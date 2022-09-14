<template>
  <div class="main-title">
    <span class="eng">{{ eng }}</span>
    <span class="cht d-none d-sm-inline">{{ cht }}</span>
    <div class="flex-grow-1"></div>
    <OrangeButton>MORE</OrangeButton>
  </div>
</template>

<script>
export default {
  name: "MainTitle",
  props: {
    eng: {
      type: String,
      required: true
    },
    cht: {
      type: String,
      required: true
    }
  }
};
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

  .btn.btn-orange {
    border-width: 1px 1px 0 1px;
    border-color: transparent;
    background-color: transparent;

    &:hover {
      border-color: $black;
      background-color: $orange;
    }
  }
}
</style>
