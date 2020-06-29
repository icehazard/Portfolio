<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <Navigation />
    <v-main>
      <transition :name="transitionName" mode="out-in" @beforeLeave="beforeLeave" @enter="enter">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation,
  },
  data() {
    return {
      prevHeight: 0,
      transitionName: "slide-left",
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
    console.log("created -> next", to)
      this.transitionName = "slide-left";
      if (to.name == "works" && from.name == "works") this.transitionName = "fade";
      next();
    });
  },
  methods: {
    beforeLeave(element) {
      console.log("beforeLeave -> element", element)
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);
      element.style.height = this.prevHeight;
      setTimeout(() => {
        element.style.height = height;
      });
    },
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(10em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-10em, 0);
}
</style>
