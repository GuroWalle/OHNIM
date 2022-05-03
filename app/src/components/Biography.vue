<template>
  <div class="biography">
    <MenuOpen />
    <div v-if="loading">loading...</div>
    <div v-else>
      <div class="biography__background" v-for="biography in result">
        <h1 class="biography__header">{{ biography.title }}</h1>

        <div class="biography__description">
          {{ biography.description }}
        </div>
        <img class="biography__image" :src="biography.image.asset.url" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import query from "../groq/biography.groq?raw";
import viewMixin from "../mixins/viewMixins.js";
import MenuOpen from "../components/MenuOpen.vue";

export default {
  mixins: [viewMixin],

  async created() {
    await this.sanityFetch(query, {
      documentType: "project",
    });
  },

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

.biography__background {
  position: absolute;
  top: var(--sizing-mega);
  left: var(--sizing-huge);
  max-width: 70%;
  max-height: 35rem;

  overflow: scroll;
}

.biography__header {
  margin: 0 0 var(--sizing-small) 0;
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-medium);
}

.biography__description {
  margin: 0 var(--sizing-small);
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-small);
}

.biography__image {
  max-width: 20rem;
  max-height: 30rem;
}

@media screen and (max-width: 600px) {
  .biography__background {
    top: var(--sizing-bigger);
    left: var(--sizing-mega);
  }

  .biography__header {
    margin: var(--sizing-small);
    font-size: var(--font-medium-mobile);
    letter-spacing: var(--letter-spazing-small);
  }

  .biography__description {
    margin: var(--sizing-small) 0;
    font-size: var(--font-small-mobile);
    letter-spacing: var(--letter-spazing-small);
  }

  .biography__image {
    max-width: 14.4rem;
    max-height: 35rem;
  }
}
</style>