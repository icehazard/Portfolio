<template>
  <v-container fluid fill-height>
    <v-row class="h-100">
      <v-col class="center">
        <div class="subContainer">
          <v-row>
            <v-col>
              <h1 class="heading primary--text">My Skills </h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>The main area of my expertise is front end development (client side of the web).</p>
              <p>
                HTML, CSS, JS (TypeScript), building small and medium web apps with Angular 2+, custom plugins, features, animations, and coding
                interactive layouts.
              </p>
              <p>I have also full-stack developer experience with open source CMS like (WordPress, Drupal, Magento, Keystone.js and other)</p>
              <p>
                Visit my <a href="https://www.linkedin.com/in/sebastianwhitlock/">LinkedIn </a>profile for more details or just
                <a @click="e.preventDefault()" to="/contact">contact </a>me.
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col class="base center">
        <transition name="fade">
          <Cloud v-if="toggle" />
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cloud from "../components/Cloud";
export default {
  components: {
    Cloud,
  },
  data() {
    return {
      toggle: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    this.toggle = false;
    setTimeout(() => {
      next();
    });
  },

  mounted() {
    setTimeout(() => {
      this.toggle = true;
    }, 200);
  },
};
</script>

<style lang="less" scoped>

</style>
