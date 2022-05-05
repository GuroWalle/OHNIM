<template>
  <div class="exhibitions">
    <MenuOpen />
    <div v-if="loading" class="loading">loading...</div>
    <div v-else>
      <div class="transparent__background">
        <div class="haha">
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
  background-image: url("/assets/images/background_desktop.jpg");
  height: 100%;
}

.exhibitions__background {
  position: relative;
  top: var(--sizing-mega);
  height: 35.5rem;
  margin-left: var(--percent-small);
  width: 75%;
  margin-bottom: 35%;
}

.haha {
  max-height: 100%;
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
  max-width: 30rem;
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