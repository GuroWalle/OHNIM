<template>
  <div class="contact">
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
  background-image: url("/assets/images/background_desktop.jpg");
  height: 100%;
}

.contact__background {
  position: relative;
  top: var(--sizing-mega);
  height: 35.5rem;
  overflow: scroll;
  margin-left: var(--percent-small);
  width: 70%;
}

.contact__title {
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-small);
  margin: 0 0 var(--sizing-small) 0;
}

.contact__text {
  font-size: var(--font-small-desktop);
  letter-spacing: var(--letter-spazing-small);
  margin: 0 0 var(--sizing-big) 0;
}

@media screen and (max-width: 600px) {
  .contact__background {
    top: var(--sizing-mega);
    left: var(--sizing-medium);
    margin-left: var(--percent-medium);
    max-width: 65%;
  }

  .contact__title {
    font-size: var(--font-medium-mobile);
    letter-spacing: var(--letter-spazing-small);
    margin: var(--sizing-small) 0;
  }

  .contact__text {
    font-size: var(--font-small-mobile);
    letter-spacing: var(--letter-spazing-small);
    margin: 0 0 var(--sizing-big) 0;
  }
}
</style>