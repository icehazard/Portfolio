<template>
    <Hello ref="hello"/>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'

export default {
  name: 'Home',
  components: {
    Hello
  },
  beforeRouteLeave(to, from, next) {
    this.$refs.hello.prepareToExit();
    setTimeout(() => {next();});
  },
}
</script>
