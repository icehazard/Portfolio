<template>
  <v-app>
    <Navigation />
    <v-main>
      <transition :name="transitionName" mode="out-in">
        <router-view :key="$route.fullPath" />
      </transition>
    </v-main>
    <BottomNavigation />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import BottomNavigation from "./components/BottomNavigation";

export default {
  name: "App",
  components: {
    Navigation,
    BottomNavigation,
  },
  data() {
    return {
      transitionName: "slide-left",
    };
  },
  mounted() {


    console.log("mounted -> $vuetify.breakpoint.smAndDown", )
    
    this.$router.beforeEach((to, from, next) => {
      this.transitionName = "slide-left";
      if (to.name == "works" && from.name == "works") this.transitionName = "showcase";
      next();
    });
  },
};
</script>
