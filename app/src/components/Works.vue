<template>
  <div class="works">
    <MenuOpen />
    <RouterLink to="/">
      <div class="main-page__logo">MINO / OHNIM</div>
    </RouterLink>
  </div>
</template>

<script>
import MenuOpen from "../components/MenuOpen.vue";
export default {
  data() {
    return {};
  },

  components: {
    MenuOpen,
  },
};
</script>

<style>
.works {
  background: grey;
}
</style>