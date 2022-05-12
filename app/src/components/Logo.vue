<template>
  <RouterLink to="/">
    <div aria-label="Logo takes you back to the main page." class="logo">MINO / OHNIM</div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    color: String,
  },
};
</script>

<style>
.logo {
  position: absolute;
  top: var(--sizing-medium);
  right: var(--sizing-big);
  color: dodgerblue;
  font-size: var(--font-big-desktop);
  letter-spacing: var(--letter-spazing-medium);
  z-index: 1;
}

/*   mobile   */
@media screen and (max-width: 600px) {
  .logo {
    right: var(--sizing-medium);
    top: var(--sizing-medium);
    font-size: var(--font-big-mobile);
    width: 9.9rem;
  }
}
</style>