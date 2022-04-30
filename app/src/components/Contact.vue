<template>
  <div class="contact">
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
.contact {
  background: grey;
}
</style>