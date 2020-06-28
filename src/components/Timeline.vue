<template>
  <v-timeline>
    <v-timeline-item v-for="item in items" :key="item.idx" small>
      <span slot="opposite">{{ item.date }}</span>
      <v-card class="elevation-1">
        <v-card-title class="headline pb-0">{{ item.heading }}</v-card-title>
        <v-card-text>
          <div class="overline mt-0">{{ item.position }}</div>
          <div>{{ item.description }}</div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          date: "September 2019 - January 2020",
          heading: "Giaola",
          position: "Front-End Software Engineer",
          description:
            "Working with modern Web Technologies primarily in VueJs and other technologies which include ES6, Webpack, Ubuntu, SCSS, Django.",
        },
        {
          date: "Febuary 2019 - April 2019",
          heading: "Antony Kalogeropoulos",
          position: "Web Developer",
          description: "Development of a food delivery site 'Food at home' using Laravel (PHP). Developed a work flow using GIT source control",
        },
        {
          date: "June 2018 - September 2018",
          heading: "Tanknite",
          position: "Co-founder / Front end Developer",
          description:
            "Front end Developmer and co-founder of TankNite. Tanknite is a massively multiplayer online game. JS, Websockets, HTML, SCSS, VueJS, PixiJS, Node, Express, Mongo",
        },
        {
          date: "April 2018 - June 2018",
          heading: "CONFERIENCE LTD",
          position: "Android Developer",
          description:
            "Developed an app using Java within the Android Studio environment. The app would record the users steps taken and graphically display their walking history",
        },
      ],
    };
  },
};
</script>

<style></style>
