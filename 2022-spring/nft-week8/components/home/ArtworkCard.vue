<template>
  <div class="artwork-card">
    <div class="artwork-card__img">
      <div class="hover-wrap">
        <div class="hover-wrap__inner">
          <span>{{ artwork.desc }}</span>
          <div class="flex-grow-1">
            <font-awesome-icon icon="fa-brands fa-ethereum" />
            {{ artwork.price }}
          </div>
          <OrangeButton class="align-self-end">MORE</OrangeButton>
        </div>
      </div>
      <img :src="artwork.img" alt="" />
    </div>
    <div class="artwork-card__info">
      {{ artwork.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtworkCard',
  props: {
    artwork: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_custom.scss';

.artwork-card {
  width: 300px;
  margin-bottom: 24px;

  .artwork-card__img {
    width: 100%;
    margin-bottom: 16px;
    padding: 24px;
    background-color: $white;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hover-wrap__inner {
      display: flex;
      flex-direction: column;
      padding: 16px;
      margin: 16px;
      border: 1px solid $white;
      color: $white;
      gap: 8px;
    }

    .hover-wrap {
      display: none;
      position: absolute;
      z-index: 7;
      width: calc(100% - 24px * 2);
      height: calc(100% - 24px * 2);
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  &:hover {
    .artwork-card__img .hover-wrap {
      display: flex;
    }
  }

  .artwork-card__info {
    font-weight: bold;
    padding-bottom: 16px;
    border-bottom: 1px solid $black;
  }
}
</style>
