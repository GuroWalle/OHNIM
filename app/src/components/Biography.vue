<template>
  <div class="biography">
    <MenuOpen />
    <RouterLink to="/">
      <div class="main-page__logo">MINO / OHNIM</div>
    </RouterLink>

    <div class="biography__text">
      <h1 class="biography__text--header">Biography</h1>
      <div class="biography__text--description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          consectetur neque, architecto tenetur eum mollitia illum ab vel
          nostrum amet voluptatum libero odio tempore iusto voluptates? Itaque
          quasi necessitatibus quas!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          consectetur neque, architecto tenetur eum mollitia illum ab vel
          nostrum amet voluptatum libero odio tempore iusto voluptates? Itaque
          quasi necessitatibus quas!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          consectetur neque, architecto tenetur eum mollitia illum ab vel
          nostrum amet voluptatum libero odio tempore iusto voluptates? Itaque
          quasi necessitatibus quas!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MenuOpen from "../components/MenuOpen.vue";
export default {
  data() {
    return {};
  },

  components: {
    MenuOpen,
  },
};
</script>

<style>
.biography {
  background: grey;
}

.biography__text {
  position: absolute;
  top: var(--sizing-mega);
  left: 20rem;
  width: 70%;
}

.biography__text--header {
  margin: 0 0 var(--sizing-small) 0;
}

.biography__text--description {
  margin: 0 var(--sizing-small);
}
</style>