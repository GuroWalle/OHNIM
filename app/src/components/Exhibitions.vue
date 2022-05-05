<template>
  <div class="exhibitions">
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

.exhibitions__each-part {
  position: relative;
  margin-top: var(--sizing-mega);
  height: 35.5rem;
  margin-bottom: 35%;
  margin-left: var(--percent-small);
  width: 70%;
}

.exhibition__scroll {
  top: var(--sizing-mega);
  height: 100%;
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
}

@media screen and (max-width: 600px) {
  .exhibitions__each-part {
    top: var(--sizing-mega);
    left: var(--sizing-medium);
    margin-left: var(--percent-medium);
    width: 65%;
  }

  .exhibition__scroll {
    height: 40rem;
    overflow: scroll;
    background: pink;
  }

  .exhibitions__title {
    font-size: var(--font-medium-mobile);
  }

  .exhibitions__description {
    font-size: var(--font-small-mobile);
  }

  .exhibitions__image {
    width: 15rem;
  }
}
</style>