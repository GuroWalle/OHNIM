<template>
  <img class="footer__sunflower" src="/images/sunflower.svg" alt="" />
  <footer>MINO / OHNIM</footer>
</template>

<style>
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