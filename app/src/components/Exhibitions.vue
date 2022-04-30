<template>
  <div class="exhibitions">
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
.exhibitions {
  background: grey;
}
</style>