<template>
  <div :class="$mq">
    <Menu />
    <Display />
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
  display: block;
}
.desktop {
  display: flex;
}
</style>
