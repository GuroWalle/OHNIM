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
  font-size: var(--font-big-desktop);
  letter-spacing: var(--letter-spazing-medium);
  color: dodgerblue;
}

@media screen and (max-width: 600px) {
  .logo {
    top: var(--sizing-medium);
    right: var(--sizing-medium);
    width: 9.9rem;
    font-size: var(--font-big-mobile);
  }
}
</style>