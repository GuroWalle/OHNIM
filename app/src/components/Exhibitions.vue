<template>
  <div class="exhibitions">
    <MenuOpen />
    <div v-if="loading">loading...</div>
    <div v-else>
      <div class="exhibitions__background" v-for="exhibitions in result">
        <div>
          <div class="exhibitions__title">{{ exhibitions.title }}</div>
          <div class="exhibitions__description">
            {{ exhibitions.description }}
          </div>
          <img
            class="exhibitions__image"
            :src="exhibitions.image.asset.url"
            :alt="exhibitions.caption"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import query from "../groq/exhibitions.groq?raw";
import viewMixin from "../mixins/viewMixins";
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
.exhibitions {
  background: grey;
}

.exhibitions__background {
  position: absolute;
  top: var(--sizing-mega);
  left: var(--sizing-huge);
  max-width: 74%;
  max-height: 35.5rem;

  overflow: scroll;
}

.exhibitions__title {
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-small);
  margin: 0 0 var(--sizing-small) 0;
  background: pink;
}

.exhibitions__description {
  font-size: var(--font-small-desktop);
  letter-spacing: var(--letter-spazing-small);
  margin: 0 0 var(--sizing-small) 0;
  background: paleturquoise;
}

.exhibitions__image {
  max-width: 20rem;
}

@media screen and (max-width: 600px) {
  .exhibitions__background {
    top: var(--sizing-mega);
    left: var(--sizing-mega);
    max-width: 55%;
  }

  .exhibitions__title {
    font-size: var(--font-medium-mobile);
    margin: 0 0 var(--sizing-medium) 0;
  }

  .exhibitions__description {
    font-size: var(--font-small-mobile);
  }
}
</style>