<template>
  <div class="exhibitions">
      <div class="background" aria-label="Background image contains two seperate artworks. The one on the left has a pink background. It includes dark clouds. On the clouds are some red people looking sad with their hand to their faces. The artwork on the right has a light blue background. This artwork also includes clouds. Here a pink person is lying on the cloud. It is really skinny and looks exhausted.">
      <MenuOpen />
      <div v-if="loading" class="loading">loading...</div>
      <div v-else>
        <div class="transparent__background">
          <div class="exhibition__scroll">
            <div class="exhibitions__each-part" v-for="exhibitions in result">
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
.exhibitions__each-part {
  position: relative;
  margin-bottom: 5rem;
  margin-left: var(--sizing-bigger);
  width: 70%;
}

.exhibition__scroll {
  position: absolute;
  top: var(--sizing-mega);
  left: var(--sizing-mega);
  height: 100%;
  height: 85%;
  overflow: scroll;
}

.exhibitions__title {
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-small);
  margin: 0 0 var(--sizing-small) 0;
}

.exhibitions__description {
  font-size: var(--font-small-desktop);
  letter-spacing: var(--letter-spazing-small);
  margin: 0 0 var(--sizing-small) 0;
}

.exhibitions__image {
  width: 30rem;
  margin-left: var(--sizing-bigger);
}

@media screen and (max-width: 600px) {
  .exhibitions__each-part {
    margin-left: 0;
    width: 90%;
    margin-bottom: 3rem;
  }

  .exhibition__scroll {
    height: 30rem;
    left: var(--sizing-bigger);
  }

  .exhibitions__title {
    font-size: var(--font-medium-mobile);
  }

  .exhibitions__description {
    font-size: var(--font-small-mobile);
  }

  .exhibitions__image {
    width: 15rem;
    margin-left: 0;
  }
}
</style>