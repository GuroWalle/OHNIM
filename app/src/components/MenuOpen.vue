<template>
  <div class="menu">
    <button @click="openMenu">
      <img
        class="menu__hamburger"
        v-if="hamburger_showing"
        src="/assets/images/hamburger.svg"
        alt=""
      />
    </button>
    <div v-if="x_showing" class="menu__toggle">
      <RouterLink to="/">X</RouterLink>
      <RouterLink to="/works">Works</RouterLink>
      <RouterLink to="/biography">Biography</RouterLink>
      <RouterLink to="/exhibitions">Exhibitions</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x_showing: true,
      hamburger_showing: false,
    };
  },
  methods: {
    openMenu() {
      this.x_showing = false;
      this.hamburger_showing = true;
    },
    closeMenu() {
      this.x_showing = true;
      this.hamburger_showing = false;
    },
  },
};
</script>

<style scoped>
.menu__toggle a:nth-child(1) {
  font-size: var(--font-big-desktop);
  margin: 0 var(--sizing-medium);
  padding-left: 4.465rem;
}

@media screen and (max-width: 600px) {
  .menu__toggle a:nth-child(1) {
    font-size: var(--font-big-mobile);
    margin: 0 0;
  }
}
</style>