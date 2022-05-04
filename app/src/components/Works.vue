<template>
  <div class="works">
    <MenuOpen />
    <div v-if="loading" class="loading">loading...</div>
    <div v-else>
      <div class="works__background" v-for="works in result">
        <div class="works__grid">
          <img
            class="works__image"
            :src="works.painting.asset.url"
            :alt="works.caption"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import query from "../groq/works.groq?raw";
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
.works {
  background: grey;
  height: 100%;
}

.works__background {
  position: relative;
  top: var(--sizing-mega);
  margin-left: 25%;
  width: 70%;
  max-height: 35.5rem;
  overflow: scroll;
  background: pink;
}

.works__image {
  width: 20rem;
  position: relative;
  margin: 5rem;
}
</style>