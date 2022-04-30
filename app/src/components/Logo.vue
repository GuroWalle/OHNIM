<template>
  <div class="logo">MINO / OHNIM</div>
</template>

<style>
.logo {
  position: absolute;
  top: var(--sizing-medium);
  right: var(--sizing-big);
  color: white;
  font-size: var(--font-big-desktop);
  letter-spacing: var(--letter-spazing-medium);
}

/*   mobile   */
@media screen and (max-width: 600px) {
  .logo {
    right: var(--sizing-medium);
    top: var(--sizing-medium);
    color: white;
    font-size: var(--font-big-mobile);
    width: 9.9rem;
  }
}
</style>