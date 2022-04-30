<template>
  <Logo />
  <RouterView />
</template>

<script>
import Logo from "../components/Logo.vue";

export default {
  data() {
    return {};
  },
  components: {
    Logo,
  },
};
</script>

<style>
@import "../style/reset.css";
@import "../style/variables.css";
@import "../style/fonts.css";
@import "../style/style.css";
</style>
