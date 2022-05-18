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
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--black-transparent);
  padding-top: var(--sizing-medium);
}
.menu__toggle a:nth-child(1) {
  font-size: var(--font-big-desktop);
  margin: 0 var(--sizing-medium);
  padding-left: 4.42rem;
}

@media screen and (max-width: 600px) {
  .menu__toggle a:nth-child(1) {
    font-size: var(--font-big-mobile);
    padding-left: 1.4rem;
  }

}
</style>