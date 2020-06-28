<template>
  <v-container fluid fill-height>
    <v-row class="h-100">
      <v-col class="center">
        <div class="">
          <Form />
        </div>
      </v-col>
      <v-col class="base" :class="{ overlay: toggle }"> </v-col>
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

.base {
  background-color: var(--v-background-base);
  transition: all 0.1s ease-in;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
}

.overlay {
  background-color: var(--v-secondary-base);
  transition: all 0.4s ease-in;
}
</style>
