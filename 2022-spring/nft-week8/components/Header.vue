<template>
  <header>
    <nav class="navbar p-0">
      <div class="container flex-nowrap">
        <a class="navbar-brand" href="#">
          <img src="imgs/logo.svg" alt="logo" />
        </a>
        <div
          class="d-none d-md-flex border-end border-start border-dark flex-grow-1"
        >
          <input
            class="search"
            type="search"
            placeholder="搜尋作品名稱、藝術家名稱"
          />
        </div>
        <ul class="menu d-none d-md-flex">
          <li class="border-end border-dark">探索</li>
          <li class="border-end border-dark">市值</li>
          <li>
            <font-awesome-icon icon="fa-solid fa-wallet" />
          </li>
        </ul>
        <div class="d-flex align-items-center d-md-none">
          <button
            class="btn btn-primary"
            type="button"
            @click="active = !active"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
    <Collapsible class="d-flex d-md-none bg-white" :active="active">
      <div class="collapse__menus">
        <div class="collapse__menuitem">探索</div>
        <div class="collapse__menuitem">市值</div>
        <div class="collapse__menuitem">
          連結錢包
        </div>
      </div>
    </Collapsible>
  </header>
</template>

<script>
export default {
  name: "NuxtHeader",
  data() {
    return {
      active: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/_custom.scss';

header {
  border-bottom: 1px solid #000;
  position: sticky;
  top: 0;
  z-index: 10;
}

nav {
  background-color: #fff;
  z-index: 2;

  .container {
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0;

    > * {
      height: 100%;
    }
  }
}

.navbar-brand {
  margin: 0;
  flex-grow: 1;
  align-items: center;
  display: flex;

  img {
    width: auto;
    height: 40px;
    margin-left: 0;
  }
}

.collapse__menus {
  width: 100%;
  padding-bottom: 36px;
  padding-left: 36px;
  padding-right: 36px;
  z-index: 2;
  background-color: $white;

  .collapse__menuitem {
    padding: 24px;
    text-align: center;
    border-bottom: 1px solid #000;

    &:hover {
      background-color: $orange;
      color: $white;
      border: 1px solid #000;
    }
  }

}

.search {
  height: 100%;
  width: 100%;
  padding: 8px 32px;
  font-size: 24px;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    font-weight: bold;
    font-size: 20px;
    padding: 0 32px;
    white-space: nowrap;
    line-height: 1.5;
    display: flex;
    align-items: center;
  }
}
</style>
