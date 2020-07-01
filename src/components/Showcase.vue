<template>
  <div class="center-h h-100">
    <div class="ma-5 center-h grey--text pointer" @click="navigate(-1)">
      <v-icon large class="grey--text">mdi-arrow-left</v-icon>
    </div>
    <v-container class="">
      <v-row class="">
        <v-col class="center">
          <section class="subContainer">
            <h1 class="primary--text">{{ data[id].title }}</h1>
            <p>{{ data[id].description }}</p>
            <p>
              <a :href="data[id].website" target="_blank"><v-icon>mdi-access-point</v-icon> View Website</a>
            </p>
            <p>
              <a :href="data[id].repo" target="_blank"><v-icon>mdi-github</v-icon> View Code</a>
            </p>
            <p class="ml-n1">
              <v-chip v-for="item in data[id].tags" :key="item.idx" class="ma-1" color="primary" outlined>
                {{ item.tag }}
              </v-chip>
            </p>
          </section>
        </v-col>
        <v-col class="relative overflow-hidden mt-4 pa-0 center imageContainer">
          <transition name="fade">
            <img v-show="toggle" :src="data[id].img" :alt="data[id].title" />
          </transition>
          <a :href="data[id].website" target="_blank" class="middle">
            <v-icon color="primary">mdi-access-point</v-icon>
            View Website
          </a>
        </v-col>
      </v-row>
    </v-container>
    <div @click="navigate(1)" class="center-h ma-5 grey--text">
      <v-icon large color="grey">mdi-arrow-right</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: true,
      data: {
        bocachica: {
          title: "Bocachica.io",
          img: "https://res.cloudinary.com/dorhsrqla/image/upload/v1593383908/shotsnapp-1593383790_jcejcs.png",
          website: "http://www.bocachica.io",
          repo: "https://github.com/icehazard/Capstone",
          tags: [{ tag: "VueJS" }, { tag: "D3.js" }, { tag: "Webpack" }, { tag: "SocketIO" }, { tag: "NodeJS" }, { tag: "MongoDB" }],
          description:
            " Trading Platform for Bitcoin, Ethereum, Iota, and other cryptocurrencies on Binance. Trade safer with your extended toolset. Trade safer with your extended toolset.  Trade safer with your extended toolset.  Trade safer with your extended toolset. Trading Platform for Bitcoin, Ethereum, Iota, and other cryptocurrencies on Binance. Trade safer with your extended toolset.",
        },
        tanknite: {
          title: "tanknite.io",
          img: "https://res.cloudinary.com/dorhsrqla/image/upload/v1593385435/shotsnapp-1593385347_zmfqk5.png",
          repo: "https://github.com/icehazard/Tank",
          website: "https://www.tanknite.io",
          tags: [{ tag: "VueJS" }, { tag: "pixie.js" }, { tag: "SocketIO" }, { tag: "NodeJS" }, { tag: "MongoDB" }],
          description:
            "Tanknite is a massively multiplayer online game. As well as integration of payment systems.Developed both front-end and back-end of a website, developed the game & match-making server, client movement interpolation and prediction, ansible for server configuration,  setting up service workers and making progressive web app available on any device.",
        },
      },
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    getCurrentIndex() {
      let index = 0;
      let count = 0;
      for (var item in this.data) {
        if (item == this.id) index = count;
        count++;
      }
      return index;
    },
    findNextIndex(nextIndex, currentIndex) {
      const totalIndex = currentIndex + nextIndex;
      const objectLength = Object.keys(this.data).length;
      if (totalIndex < 0) return objectLength - 1;
      if (totalIndex >= objectLength) return 0;
      return totalIndex;
    },
    navigate(direction) {
      let currentIndex = this.getCurrentIndex();
      let nextIndex = this.findNextIndex(direction, currentIndex);
      let route = Object.keys(this.data)[nextIndex];
      this.$router.push(route);
    },
  },
  mounted() {
    setTimeout(() => {
      this.toggle = true;
    }, 200);
  },
};
</script>

<style lang="less" scoped>
a {
  color: var(--v-text-base);
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
  max-width: 600px;
  height: 100%;
  border-radius: 6px;
  transition: all 0.2s ease-in;
  backface-visibility: hidden;
  transform: translate();
}

img:hover,
.imageContainer:hover img {
  opacity: 60%;
  transform: scale(1.005, 1.005);
  border-radius: 6px;
}
</style>
