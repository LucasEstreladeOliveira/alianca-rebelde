<template>
  <sui-card-group :items-per-row="1" class="group">
    <Menu :class="`menu-${$mq}`" />
    <Display :class="`display-${$mq}`" />
  </sui-card-group>
</template>
<script>
import Menu from "../components/Menu";
import Display from "../components/Display";

export default {
  name: "Home",
  components: {
    Menu,
    Display
  }
};
</script>
<style lang="postcss">
.group {
  position: relative;
  top: 7px;
}

.menu-mobile .menu-laptop {
  width: 100vw;
}

.menu-desktop {
  width: 20vw !important;
}

.display-mobile .display-laptop {
  width: 100vw !important;
}

.display-desktop {
  width: 77vw !important;
  max-width: 77vw !important;
}
</style>
