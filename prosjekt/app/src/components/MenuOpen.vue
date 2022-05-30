<template>
  <div class="menu">
    <div v-if="x_showing" class="menu__toggle">
      <RouterLink to="/">X</RouterLink>
      <RouterLink to="/works">Works</RouterLink>
      <RouterLink to="/exhibitions">Exhibitions</RouterLink>
      <RouterLink to="/biography">Biography</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x_showing: true,
    };
  },
};
</script>

<style scoped>
.menu__toggle {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: var(--sizing-medium);
  background: var(--black-transparent);
}
.menu__toggle a:nth-child(1) {
  padding-left: 4.42rem;
  margin: 0 var(--sizing-medium);
  font-size: var(--font-big-desktop);
}

@media screen and (max-width: 600px) {
  .menu__toggle a:nth-child(1) {
    padding-left: 1.4rem;
    font-size: var(--font-big-mobile);
  }
}
</style>