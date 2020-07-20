<template>
  <div>
    <h2
      style="color:#fbbd06
        padding-bottom: 100px"
    >
      Busque algo
    </h2>
    <sui-image :src="background" centered />
  </div>
</template>

<script>
import bb8 from "../assets/bb8.webp";
export default {
  data() {
    return {
      background: bb8
    };
  }
};
</script>

<style lang="scss" scoped></style>
