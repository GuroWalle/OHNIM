<template>
  <div class="biography">
    <div class="background" aria-label="Background image contains two seperate artworks. The one on the left has a pink background. It includes dark clouds. On the clouds are some red people looking sad with their hand to their faces. The artwork on the right has a light blue background. This artwork also includes clouds. Here a pink person is lying on the cloud. It is really skinny and looks exhausted.">
      <MenuOpen />
      <div v-if="loading" class="loading">loading...</div>
      <div v-else>
        <div class="transparent__background">
          <div class="biography__background" v-for="biography in result">
            <h1 class="biography__header">{{ biography.title }}</h1>

            <div class="biography__flex">
              <div class="biography__description">
                <div>
                  {{ biography.description }}
                </div>
                <div>
                  {{ biography.quote }}
                </div>
              </div>
              <img
                class="biography__image"
                :src="biography.image.asset.url"
                :alt="biography.caption"
              />
            </div>
          </div>
        </div>
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
.biography__background {
  position: relative;
  top: var(--sizing-mega);
  margin-left: var(--percent-small);
  width: 90%;
  height: 75%;
}

.biography__header {
  margin: 0 0 var(--sizing-small) 0;
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-medium);
}

.biography__flex {
  display: flex;
  flex-direction: row;
  gap: var(--sizing-medium);
}

.biography__description {
  font-size: var(--font-small-desktop);
  letter-spacing: var(--letter-spazing-small);
  width: 50%;
}

.biography__description div:nth-child(2) {
  margin: var(--sizing-small) 0;
}

.biography__image {
  max-width: 22rem;
  max-height: 25rem;
}

/* Styles Biography.vue, Contact.vue and Exhibitions.vue */
.loading {
  position: relative;
  font-size: var(--font-small-desktop);
  margin-left: 17.7%;
  width: 87, 7%;
  height: 100%;
  padding: var(--sizing-mega);
}

@media screen and (max-width: 600px) {
  .biography__background {
    top: var(--sizing-mega);
    left: var(--sizing-medium);
    margin-left: var(--percent-medium);
    width: 65%;
    height: 30rem;
    overflow: scroll;
  }

  .biography__header {
    font-size: var(--font-medium-mobile);
    letter-spacing: var(--letter-spazing-small);
  }

  .biography__flex {
    flex-direction: column;
  }

  .biography__description {
    font-size: var(--font-small-mobile);
    letter-spacing: var(--letter-spazing-small);
    width: 85%;
  }

  .biography__image {
    max-width: 14.4rem;
    max-height: 35rem;
  }

  /* Styles Biography.vue, Contact.vue and Exhibitions.vue */
  .loading {
    position: relative;
    font-size: var(--font-small-mobile);
    margin-left: var(--percent-medium);
    padding: var(--sizing-mega);
  }
}
</style>