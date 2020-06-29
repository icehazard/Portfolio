<template>
  <v-container >
    <v-row class="h-100">
      <v-col class="center">
        <div class="subContainer">
          <v-row>
            <v-col>
              <h1 class="heading primary--text">About me</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>Technology Enthusiast. Passionate in evolution of the internet.</p>
              <p>
                My interest lays with the developement of the internet. I specialise in front end developement and have built back end solutions to my
                projects using NodeJS.
              </p>
              <p>
                I also like to tinker around with the decentralized web. This site is hosted and accessed from the IPFS network. I'm also interested
                in cryptocurrencies and trading.
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col class="base center">
        <transition name="fade">
          <Timeline v-if="toggle" />
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Timeline from "../components/Timeline";
export default {
  components: {
    Timeline,
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
