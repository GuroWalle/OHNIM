<template>
  <div class="works">
    <div class="background" aria-label="Background image contains two seperate artworks. The one on the left has a pink background. It includes dark clouds. On the clouds are some red people looking sad with their hand to their faces. The artwork on the right has a light blue background. This artwork also includes clouds. Here a pink person is lying on the cloud. It is really skinny and looks exhausted.">
      <MenuOpen />
      <div v-if="loading" class="loading">loading...</div>
      <div v-else>
        <div class="transparent__background">
          <div class="works__scroll">
            <div class="works__each-part" v-for="works in result">
              <div class="works__details">
                <div class="works__title">Title: {{ works.title }}</div>
                <img
                  class="works__image"
                  :src="works.painting.asset.url"
                  :alt="works.caption"
                />
                <p>size: {{works.size}}</p>
                <p>Year: {{works.year}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import query from "../groq/works.groq?raw";
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
.works__scroll {
  position: absolute;
  top: var(--sizing-bigger);
  left: var(--sizing-mega);
  width: 70%;
  height: 79%;
  overflow: scroll;
  margin-left: var(--sizing-mega);
}

.works__each-part {
  width: 80%;
  position: relative;
  margin-bottom: 5rem;
}

.works__details p {
  margin: var(--sizing-small) var(--sizing-bigger);
  font-size: var(--font-small-desktop);
  letter-spacing: var(--letter-spazing-small);
}

.works__title {
  margin: 0 var(--sizing-big) var(--sizing-small);
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-small);
}

.works__image {
  width: 30rem;
  margin-left: var(--sizing-bigger);
}

@media screen and (max-width: 600px) {
  .works__scroll {
    width: 60%;
    height: 30rem;
    left: var(--sizing-small);
    margin-left: var(--sizing-bigger);
  }

  .works__each-part {
    width: 100%;
    margin: 0 0 2rem;
  }

  .works__title {
    margin: var(--sizing-small) 0;
    font-size: var(--font-medium-mobile);
  }

  .works__details p {
    margin: var(--sizing-small) 0;
    font-size: var(--font-small-mobile);
  }

  .works__image {
    width: 15rem;
    margin-left: 0;
  }
}
</style>