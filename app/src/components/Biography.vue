<template>
  <div class="biography">
    <MenuOpen />
    <div v-if="loading" class="loading">loading...</div>
    <div v-else>
      <div class="transparent__background">
        <div class="biography__background" v-for="biography in result">
          <h1 class="biography__header">{{ biography.title }}</h1>

          <div class="biography__flex">
            <div class="biography__description">
              {{ biography.description }}
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
  background-image: url("/assets/images/background_desktop.jpg");
  height: 100%;
}

.biography__background {
  position: relative;
  top: var(--sizing-mega);
  margin-left: var(--percent-small);
  width: 70%;
}

.biography__header {
  margin: 0 0 var(--sizing-small) 0;
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-medium);
}

.biography__flex {
  display: flex;
  flex-direction: row;
  gap: var(--sizing-small);
}

.biography__description {
  font-size: var(--font-small-desktop);
  letter-spacing: var(--letter-spazing-small);
}

.biography__image {
  max-width: 20rem;
  max-height: 30rem;
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