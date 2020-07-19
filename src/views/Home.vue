<template>
  <div :class="$mq">
    <Menu />
    <Display :class="`display-${$mq}`" />
  </div>
</template>

<script>
// @ is an alias to /src
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
.mobile {
  display: grid;
}
.desktop {
  display: flex;
}

.display-mobile {
  height: 69vh;
}

.display-desktop {
  height: 96vh;
}
</style>
