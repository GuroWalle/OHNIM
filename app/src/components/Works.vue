<template>
  <div class="works">
    <MenuOpen />
    <RouterLink to="/"> </RouterLink>
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