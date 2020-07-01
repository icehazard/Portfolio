<template>
  <v-bottom-navigation  grow  background-color="navigation"  fixed app :value="activeBtn" v-if="$vuetify.breakpoint.xs">
    <v-btn v-for="item in items" :key="item.title" :to="item.route">
      <span>{{item.title}}</span>
      <v-icon small>{{item.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1,
      items: [
        { title: "Home", icon: "mdi-home-outline", route: "/" },
        { title: "About", icon: "mdi-account-outline", route: "/about" },
        { title: "Skills", icon: "mdi-hammer-wrench", route: "/skills" },
        { title: "My Work", icon: "mdi-eye-outline", route: "/works" },
        { title: "Contact", icon: "mdi-email-outline", route: "/contact" },
      ],
    };
  },
};
</script>

<style scoped>
.v-btn:not(.v-btn--round).v-size--default {
  height: 56px !important;
}
</style>
