<template>
  <div class="home">
    <Hea></Hea>
    <TopVue> </TopVue>
    <Footer></Footer>
  </div>
</template>
<!-- javaScript: -->
<script>
import TopVue from './Top.vue'
import Footer from '../views/Footer.vue'
import Hea from "./Hea.vue";
export default {
  name: 'Home',
  components: {
    TopVue,
    Hea,
    Footer,
  },
}
</script>

<style scoped>
</style>
