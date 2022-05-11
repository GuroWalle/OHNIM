<template>
  <div class="main-page">
    <div class="main-page__background">
      <MenuClosed />
      <Logo />
      <Arrow />
    </div>
    <div>
      <GalleryAnimation />
      <Quote />
    </div>
  </div>
</template>

<script>
import MenuClosed from "../components/MenuClosed.vue";
import Logo from "../components/Logo.vue";
import Arrow from "../components/Arrow.vue";
import GalleryAnimation from "../components/GalleryAnimation.vue";
import Quote from "../components/Quote.vue";

export default {
  components: {
    MenuClosed,
    Logo,
    Arrow,
    GalleryAnimation,
    Quote,
  },
};
</script>

<style>

.main-page__background {
  background-image: url("/assets/images/collage_ha.jpg");
  width: 92%;
  height: 100%;
  object-fit: contain;
}

/*   mobile   */
@media screen and (max-width: 600px) {
  .main-page__background {
  background-image: url("/assets/images/collage_hoho.jpg");
  width: 100%;
}
}
</style>