<template>
  <div class="main-page">
    <div class="main-page__logo">MINO / OHNIM</div>
    <div class="main-page__background">
      <Menu />
    </div>
    <!-- <img src="/assets/images/background_desktop.jpg" alt="" /> -->
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
export default {
  data() {
    return {};
  },

  components: {
    Menu,
  },
};
</script>

<style>
.main-page__logo {
  position: absolute;
  top: 3.8rem;
  right: 6.75rem;
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
    right: 2.563rem;
    color: blue;
    font-size: var(--font-big-mobile);
    width: 9.9rem;
  }
}
</style>