<template>
  <div class="main-page">
    <div class="main-page__logo">MINO / OHNIM</div>
    <div class="main-page__background"></div>
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
  background: black;
  width: 100%;
  height: 100%;
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