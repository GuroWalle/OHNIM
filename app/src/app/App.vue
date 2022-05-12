<template>
  <Logo />
  <RouterView />
  <Footer />
</template>

<script>
import Logo from "../components/Logo.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    Logo,
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
