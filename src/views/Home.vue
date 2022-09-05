<template>
  <div class="home">
    <TopVue> </TopVue>
    <Footer />
  </div>
</template>
<!-- javaScript: -->
<script>
import TopVue from './Top.vue'
import Footer from '../views/Footer.vue'
export default {
  name: 'Home',
  components: {
    TopVue,
    Footer,
  },
}
</script>

<style scoped>
</style>
