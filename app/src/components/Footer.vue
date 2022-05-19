<template>
  <div class="footer__background">
    <img class="footer__sunflower" src="/images/sunflower.svg" alt="" />
    <footer>MINO / OHNIM</footer>
  </div>
</template>

<style>
.footer__background {
  width: 100%;
  background: white;
}

.footer__sunflower {
  width: 10rem;
  margin-left: var(--sizing-huge);
  margin-top: var(--sizing-mega);
}

footer {
  width: 100%;
  height: 20rem;
  background: seagreen;
  padding: 5rem;
  font-size: var(--font-big-desktop);
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