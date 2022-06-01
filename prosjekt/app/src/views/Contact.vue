<template>
  <div class="contact">
    <div class="background" aria-label="Background image contains two seperate artworks. The one on the left has a pink background. It includes dark clouds. On the clouds are some red people looking sad with their hand to their faces. The artwork on the right has a light blue background. This artwork also includes clouds. Here a pink person is lying on the cloud. It is really skinny and looks exhausted.">
      <MenuOpen />
      <div v-if="loading" class="loading">loading...</div>
      <div v-else>
        <div class="transparent__background">
          <div class="contact__background" v-for="contact in result">
            <h1 class="contact__title">{{ contact.title }}</h1>
            <div class="contact__text">
              <p>{{ contact.number }}</p>
              <p>{{ contact.email }}</p>
              <p>{{ contact.address }}</p>
            </div>
            <h2 class="contact__title">{{ contact.name }}</h2>
            <a
              class="contact__text"
              href="https://www.instagram.com/realllllmino/"
              target="_blank"
              >@realllllmino</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import query from "../groq/contact.groq?raw";
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
.contact__background {
  position: relative;
  top: var(--sizing-bigger);
  width: 70%;
  height: 35.5rem;
  overflow: scroll;
  margin-left: var(--percent-small);
}

.contact__title {
  margin: 0 0 var(--sizing-small) 0;
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-small);
}

.contact__text {
  margin: 0 0 var(--sizing-big) 0;
  font-size: var(--font-small-desktop);
  letter-spacing: var(--letter-spazing-small);
}

@media screen and (max-width: 600px) {
  .contact__background {
    top: var(--sizing-mega);
    left: var(--sizing-medium);
    max-width: 65%;
    margin-left: var(--percent-medium);
  }

  .contact__title {
    margin: var(--sizing-small) 0;
    font-size: var(--font-medium-mobile);
    letter-spacing: var(--letter-spazing-small);
  }

  .contact__text {
    margin: 0 0 var(--sizing-big) 0;
    font-size: var(--font-small-mobile);
    letter-spacing: var(--letter-spazing-small);
  }
}
</style>