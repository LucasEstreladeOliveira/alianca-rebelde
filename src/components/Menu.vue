<template>
  <sui-card>
    <router-link to="/">
      <sui-icon
        name="columns"
        class="ui large"
        link
        bordered
        inverted
        circular
        color="grey"
      ></sui-icon>
    </router-link>
    <router-link to="/about">
      <sui-icon
        name="info"
        class="ui large"
        link
        bordered
        inverted
        circular
        color="grey"
      ></sui-icon>
    </router-link>
  </sui-card>
</template>
<script>
export default {
  name: "Menu"
};
</script>
