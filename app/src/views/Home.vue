<template>
  <div class="main-page">
    <div class="main-page__background">
      <MenuClosed />
    </div>
    <div class="main-page">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, possimus
      provident, eaque modi quam quidem harum earum ullam necessitatibus porro
      quis dolores temporibus perspiciatis repellat repellendus voluptatibus sed
      deserunt illum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Neque fuga praesentium sapiente adipisci consequatur a, modi est assumenda
      non, nulla vero ex maxime suscipit et necessitatibus deleniti temporibus
      eum possimus!
    </div>
  </div>
</template>

<script>
import MenuClosed from "../components/MenuClosed.vue";
export default {
  data() {
    return {};
  },
  components: {
    MenuClosed,
  },
};
</script>

<style>
.main-page {
  background-image: url("/assets/images/background_ny.jpg");
}

.main-page__background {
  background-image: url("/assets/images/background_ny.jpg");
  width: 100%;
  height: 100%;
}

/*   mobile   */
@media screen and (max-width: 600px) {
}
</style>