<template>
  <v-navigation-drawer color="navigation" mini-variant permanent app v-if="!$vuetify.breakpoint.xs">
    <v-container fill-height class=" d-flex flex-column pa-0">
      <v-list class="black w-100">
        <v-list-item class="pa-0">
          <v-list-item-content>
            <v-list-item-title class="title">
              <div class="text-center teal--text text--accent-3">SW</div>
              <div class="text-center small white--text mt-1">Whitlock</div>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list class=" flex-grow-1 d-flex align-center">
        <div>
          <v-list-item v-for="item in items" :key="item.title" :to="item.route" class="py-2" color='grey'>
            <v-list-item-content>
              <v-icon color="grey">{{ item.icon }}</v-icon>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
      <div class="d-flex flex-column mb-5">
        <a v-for="item in social" :key="item.idx" :href="item.href" target="_blank">
          <v-icon color="grey" class="ma-2" small>
            {{ item.icon }}
          </v-icon>
        </a>
        <v-icon @click="toggleTheme" color="grey" class="ma-2" small>{{bulb}}</v-icon>
      </div>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-outline", route: "/" },
        { title: "About", icon: "mdi-account-outline", route: "/about" },
        { title: "Skills", icon: "mdi-hammer-wrench", route: "/skills" },
        { title: "My Work", icon: "mdi-eye-outline", route: "/works" },
        { title: "Contact", icon: "mdi-email-outline", route: "/contact" },
      ],
      social: [
        // { href: "https://www.facebook.com/whitlock/", icon: "mdi-facebook" },
        { href: "https://github.com/icehazard", icon: "mdi-github", route: "/account" },
        { href: "https://www.linkedin.com/in/sebastianwhitlock/", icon: "mdi-linkedin" },
        { href: "https://www.instagram.com/icehazard_/", icon: "mdi-instagram" },
      ],
      right: null,
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  computed: {
    bulb() {
      return this.$vuetify.theme.dark ? "mdi-lightbulb" : "mdi-lightbulb-on";
    },
  },
};
</script>

<style scoped>

.small {
  font-size: 11px;
  font-weight: 400;
}

.theme--light.v-list-item--active::before {
    opacity: 0.24;
}

.theme--dark.v-list-item--active::before {
    opacity: 0.24;
}
</style>
