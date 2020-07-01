<template>
  <v-container fluid fill-height class="pa-5 pa-sm-10">
    <v-row class="d-flex flex-column flex-lg-row">
      <v-col class="center">
        <div class="subContainer">
          <v-row>
            <v-col >
              <div class="d-flex">
                <h1 class="primary--text mr-5">Hello.</h1>
                <h1 class="no-wrap">I am</h1>
              </div>
              <h1>Sebastian Whitlock.</h1>
              <h1>A Web Developer.</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0">
              <div class="overline grey--text ">&lt; Front End Software Engineer / Javascript Developer /&gt;</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn to="/contact" outlined color="primary">Contact Me</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col class="base center pt-15   pa-lg-15">
        <transition name="fade">
          <img
            @load="showImage = true"
            v-show="showImage"
            src="https://res.cloudinary.com/dorhsrqla/image/upload/v1593126064/New_Project_2_yg2tvk.png"
            alt="SW"
            class=" "
          />
        </transition>
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
      showImage: false,
    };
  },
  methods: {
    prepareToExit: function() {
      this.showImage = false;
    },
  },
};
</script>

<style lang="less" scoped>

img{
   max-width: 100%;
  height: auto;
}






</style>
