<template>
  <RouterView />
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    Footer,
  },
};
</script>

<style>
@import "../style/reset.css";
@import "../style/variables.css";
@import "../style/fonts.css";
@import "../style/style.css";
</style>
