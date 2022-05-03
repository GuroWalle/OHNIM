<template>
  <div class="main-page">
    <div class="main-page__background">
      <MenuClosed />
      <Arrow />
    </div>
  </div>
</template>

<script>
import MenuClosed from "../components/MenuClosed.vue";
import Arrow from "../components/Arrow.vue";
export default {
  data() {
    return {};
  },
  components: {
    MenuClosed,
    Arrow,
  },
};
</script>

<style>
.main-page__background {
  background-image: url("/assets/images/background_ny.jpg");
  width: 100%;
  height: 100%;
}

/*   mobile   */
@media screen and (max-width: 600px) {
}
</style>