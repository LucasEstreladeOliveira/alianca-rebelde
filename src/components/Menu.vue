<template>
  <sui-card class="card-background">
    <div style="padding-top: 20px">
      <sui-image
        src="https://avatars2.githubusercontent.com/u/48110280?s=400&v=4"
        size="tiny"
        circular
        centered
      />
    </div>
    <h3 class="id">
      {{ id }}
    </h3>
    <div :class="`menu-buttom-group-${$mq}`">
      <router-link to="/" :class="`menu-buttom-${$mq}`">
        <sui-icon
          name="columns"
          class="ui large icon-buttom"
          link
          bordered
          inverted
          circular
          color="yellow"
          floated="left"
        ></sui-icon>
        <sui-label color="yellow" size="large" v-if="$mq === 'desktop'" tag
          >Dashboard</sui-label
        >
      </router-link>
      <router-link to="/about" :class="`menu-buttom-${$mq}`">
        <sui-icon
          name="info"
          class="ui large"
          link
          bordered
          inverted
          circular
          color="yellow"
          floated="left"
        ></sui-icon>
        <sui-label
          color="yellow"
          size="large"
          v-if="$mq === 'desktop'"
          tag
          style="color:black"
          >About</sui-label
        >
      </router-link>
    </div>
  </sui-card>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Menu",
  computed: {
    ...mapState({
      id: state => state.id,
      password: state => state.password
    })
  }
};
</script>
<style scoped lang="postcss">
.menu-buttom-desktop {
  text-align: left;
  padding-left: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
}
.menu-buttom-mobile {
  padding-left: 5px;
  padding-right: 5px;
}
.menu-buttom-laptop {
  padding-left: 5px;
  padding-right: 5px;
}
.menu-buttom-group-desktop {
  display: contents;
}
.menu-buttom-group-laptop {
  padding-bottom: 2vh;
}
.menu-buttom-group-mobile {
  padding-bottom: 2vh;
}

.ui.tag.label:after {
  background-color: #132b41 !important;
}

.ui.yellow.label {
  color: #132b41 !important;
}

i.inverted.bordered.yellow.icon,
i.inverted.circular.yellow.icon {
  color: #132b41 !important;
}

.card-background {
  background-color: #132b41 !important;
  box-shadow: none !important;
}

.id {
  color: #fbbd06;
}
</style>
