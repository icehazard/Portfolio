<template>
  <v-container fluid fill-height>
    <v-row class="h-100">
      <v-col class="center">
        <section class="subContainer">
          <h1 class="primary--text">
            Bocachica.io
          </h1>
          
          <p>
            Trading Platform for Bitcoin, Ethereum, Iota, and other cryptocurrencies on Binance. Trade safer with your extended toolset. Trading
            Platform for Bitcoin, Ethereum, Iota, and other cryptocurrencies on Binance. Trade safer with your extended toolset.
          </p>
          <p><v-icon>mdi-access-point</v-icon> View Website</p>
          <p><v-icon>mdi-github</v-icon> View Code</p>
          <p class="ml-n1">
            <v-chip v-for="item in items" :key="item.idx" class="ma-1" color="primary" outlined>
              {{ item.tag }}
            </v-chip>
          </p>
        </section>
      </v-col>
      <v-col class="relative overflow ma-16 pa-0 center imageContainer">
        <transition name="fade">
          <img v-show="toggle" src="https://res.cloudinary.com/dorhsrqla/image/upload/v1593249054/boca2_bfyc1u.png" alt="" class="elevation-4" />
        </transition>
        <a class="middle">
          <v-icon color="primary">mdi-access-point</v-icon> 
          View Website
          </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Form from "../components/Form";
export default {
  components: {
    Form,
  },
  data() {
    return {
      toggle: false,
      items: [{ tag: "VueJS" }, { tag: "D3.js" }, { tag: "SocketIO" }, { tag: "NodeJS" }, { tag: "MongoDB" }],
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
.container {
  padding: 0;
}

.middle {
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: all 0.2s ease-in;
}

.imageContainer:hover .middle {
  opacity: 1;
}

img {
  position: absolute;
  left: 0;
  height: 100%;
  border-radius: 6px;
  transition: all 0.2s ease-in;
  backface-visibility: hidden;
}

img:hover {
  opacity: 60%;
  box-shadow: 1px 1px var(--v-primary-base), 2px 2px var(--v-primary-base), 3px 3px var(--v-primary-base);
  -webkit-transform: translateX(3px);
  transform: translateY(-3px);
  border-radius: 6px;
}
</style>
