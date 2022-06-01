<template>
  <div class="footer__background">
    <img class="footer__sunflower" src="/images/sunflower.svg" alt="" />
    <footer>MINO / OHNIM</footer>
  </div>
</template>

<style>
.footer__background {
  width: 100%;
}

.footer__sunflower {
  width: 10rem;
  margin-top: var(--sizing-mega);
  margin-left: var(--sizing-huge);
}

footer {
  width: 100%;
  height: 20rem;
  padding: 5rem;
  font-size: var(--font-big-desktop);
  letter-spacing: var(--letter-spazing-medium);
  background: seagreen;
}

@media screen and (max-width: 600px) {
  .footer__sunflower {
    width: 6.5rem;
    margin-left: var(--sizing-bigger);
  }

  footer {
    height: 10rem;
    padding: 3rem;
    font-size: var(--font-big-mobile);
  }
}
</style>