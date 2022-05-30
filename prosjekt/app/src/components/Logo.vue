<template>
  <RouterLink to="/">
    <div aria-label="Logo takes you back to the main page." class="logo">MINO / OHNIM</div>
  </RouterLink>
</template>

<style>
.logo {
  position: absolute;
  z-index: 1;
  top: var(--sizing-medium);
  right: var(--sizing-big);
  color: dodgerblue;
  font-size: var(--font-big-desktop);
  letter-spacing: var(--letter-spazing-medium);
}

@media screen and (max-width: 600px) {
  .logo {
    right: var(--sizing-medium);
    top: var(--sizing-medium);
    width: 9.9rem;
    font-size: var(--font-big-mobile);
  }
}
</style>