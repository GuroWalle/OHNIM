<template>
  <div class="main-page">
    <div class="background" aria-label="Background image contains two seperate artworks. The one on the left has a pink background. It includes dark clouds. On the clouds are some red people looking sad with their hand to their faces. The artwork on the right has a light blue background. This artwork also includes clouds. Here a pink person is lying on the cloud. It is really skinny and looks exhausted.">
      <MenuClosed />
    </div>
    <div>
      <GalleryAnimation />
      <Quote />
    </div>
  </div>
</template>

<script>
import MenuClosed from "../components/MenuClosed.vue";
import GalleryAnimation from "../components/GalleryAnimation.vue";
import Quote from "../components/Quote.vue";

export default {
  components: {
    MenuClosed,
    GalleryAnimation,
    Quote,
  },
};
</script>

<style>
/* Styles Home.vue, Biography.vue, Contact.vue, Exhibitions.vue & Works.vue */
.background {
  background-image: url("/images/collage.jpeg");
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media screen and (max-width: 600px) {
  .background {
  background-image: url("/images/collage_mobile.jpg");
  width: 100%;
}


}
</style>