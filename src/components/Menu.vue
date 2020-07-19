<template>
  <div class="menu-tile" :class="$mq">
    <div
      class="ui raised very padded text container segment"
      style="padding-right:14px; padding-left:14px;"
    >
      <router-link to="/" class="icon">
        <sui-icon
          name="columns"
          class="ui large"
          link
          bordered
          inverted
          color="grey"
        ></sui-icon>
      </router-link>
      <router-link to="/about" class="icon">
        <sui-icon
          name="info"
          class="ui large"
          link
          bordered
          inverted
          color="grey"
        ></sui-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.menu-tile {
  margin: 14px !important;
}

.desktop {
  width: 200px !important;
}

.icon {
  padding: 8px;
}
</style>
