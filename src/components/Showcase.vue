<template>
  <v-container class="h-100">
    <v-row class="h-100">
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
          <div>
            <router-link class="ma-2" to="/works/bocachica">boca</router-link>
            <v-btn @click="b()">b</v-btn>
            <router-link class="ma-2" to="/works/tanknite">tank</router-link>
              <v-btn @click="t()">t</v-btn>
          </div>
        </section>
      </v-col>
      <v-col class="relative overflow ma-16 pa-0 center imageContainer">
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
    A;
  },
  methods: {
      b(){
          this.$router.push({ name: 'works', params: { id: 'bocachica' } });
      },
      t(){
      this.$router.push({ name: 'works', params: { id: 'tanknite' } });
  },
  },
  
  watch: {
    $route(to, from) {
    	console.log('watch $route is working too!');
    }
  },

  computed: {
    id() {
      return this.$route.params.id;
   
    },
  },
  watch: {
    data: {
      immediate: true,
      handler(val, oldval) {
        //
      },
    },
  },
  mounted() {
    // this.$route.params.id ? this.$route.params.id : "boca", this.$router.push('/works/boca')

    console.log(this.$route.params.id)

    setTimeout(() => {
      this.toggle = true;
    }, 200);
  },
};
</script>

<style lang="less" scoped>
// .container {
//   padding: 0;
// }

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
  width: 100%;
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
