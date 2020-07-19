<template>
  <div class="gif-display" :class="$mq">
    <div
      class="ui raised very padded text container segment"
      style="max-width:1100px !important;"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.gif-display {
  margin: 14px !important;
}

.desktop {
  margin-right: 28px !important;
}
</style>
