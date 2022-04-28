<template>
  <div class="main-page">
    <div class="main-page__logo">MINO / OHNIM</div>
    <div class="main-page__background">
      <div class="main-page__menu">
        <RouterLink to="/works">Works</RouterLink> <br />
        <RouterLink to="/biography">Biography</RouterLink> <br />
        <RouterLink to="/exhibitions">Exhibitions</RouterLink> <br />
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
    </div>
    <!-- <img src="/assets/images/background_desktop.jpg" alt="" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.main-page__logo {
  position: absolute;
  right: 6.75rem;
  color: red;
  font-size: 3.125rem;
  letter-spacing: 0.313rem;
}

.main-page__background {
  background: grey;
  width: 100%;
  height: 100%;
}

.main-page__menu {
  color: white;
  font-size: 25px;
}

/*   mobile   */
@media screen and (max-width: 600px) {
  .main-page__logo {
    right: 3.563rem;
    color: blue;
    font-size: 1.875rem;
  }
}
</style>