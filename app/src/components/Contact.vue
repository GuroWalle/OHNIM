<template>
  <div class="contact">
    <MenuOpen />
    <div v-if="loading">loading...</div>
    <div v-else>
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
.contact {
  background: grey;
}

.contact__background {
  position: absolute;
  top: var(--sizing-mega);
  left: 20rem;
  max-width: 70%;
  max-height: 35rem;
}

.contact__title {
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-small);
  margin: var(--sizing-small) 0 var(--sizing-medium) 0;
}

.contact__text {
  font-size: var(--font-small-desktop);
  letter-spacing: var(--letter-spazing-small);
}
</style>