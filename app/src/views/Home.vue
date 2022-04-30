<template>
  <div class="main-page">
    <div class="main-page__logo">MINO / OHNIM</div>
    <div class="main-page__background">
      <MenuClosed />
    </div>
    <!-- <img src="/assets/images/background_desktop.jpg" alt="" /> -->
  </div>
</template>

<script>
import MenuClosed from "../components/MenuClosed.vue";
export default {
  data() {
    return {};
  },

  components: {
    MenuClosed,
  },
};
</script>

<style>
.main-page__logo {
  position: absolute;
  top: var(--sizing-big);
  right: var(--sizing-big);
  color: red;
  font-size: var(--font-big-desktop);
  letter-spacing: var(--letter-spazing-medium);
}

.main-page__background {
  background: grey;
  width: 100%;
  height: 100%;
}

/*   mobile   */
@media screen and (max-width: 600px) {
  .main-page__logo {
    right: var(--sizing-medium);
    top: var(--sizing-medium);
    color: blue;
    font-size: var(--font-big-mobile);
    width: 9.9rem;
  }
}
</style>