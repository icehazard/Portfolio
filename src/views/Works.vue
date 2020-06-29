<template>
<transition name="fade" mode="out-in">
    <router-view  :key="$route.params.id" > </router-view>
</transition>
</template>

// <script>
// export default {
//   components: {
//   },
//   data() {
//     return {};
//     A;
//   },
//   beforeRouteLeave(to, from, next) {
//     this.toggle = false;
//     setTimeout(() => {
//       next();
//     });
//   },
//   computed: {},
//   mounted() {
//     // this.$route.params.id ? this.$route.params.id : "boca", this.$router.push('/works/boca')
//   },
// };
// </script>

<style lang="less" scoped>

</style>
