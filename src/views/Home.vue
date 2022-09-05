<template>
  <div class="home">
    <Hea></Hea>
    <TopVue> </TopVue>
    <Items/>
    <Footer></Footer>
  </div>
</template>
<!-- javaScript: -->
<script>

import Items from "@/views/Items.vue"
import TopVue from './Top.vue'
import Footer from '../views/Footer.vue'
import Hea from "./Hea.vue";
export default {
  name: 'Home',
  components: {
    TopVue,
    Hea,
    Footer,
    Items
  },
}
</script>

<style scoped>
</style>
