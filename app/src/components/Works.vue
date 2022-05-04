<template>
  <div class="works">
    <MenuOpen />

    <div class="works__slideshow">
      <div class="slideshow__buttons">
        <button @click="previousImage" class="slideshow__button">&lt;</button>
        <button @click="nextImage" class="slideshow__button">&gt;</button>
      </div>

      <figure>
        <img class="slideshow__image" :src="currentSlide.file" alt="" />
      </figure>
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
    return {
      index: 0,
      showCaption: false,
      slides: [
        {
          title: "One",
          file: "/assets/images/en.jpg",
        },
        {
          title: "Two",
          file: "/assets/images/to.jpg",
        },
        {
          title: "three",
          file: "/assets/images/tre.jpg",
        },
        {
          title: "four",
          file: "/assets/images/fire.jpg",
        },
        {
          title: "five",
          file: "/assets/images/fem.jpg",
        },
        {
          title: "six",
          file: "/assets/images/seks.jpg",
        },
        {
          title: "seven",
          file: "/assets/images/syv.jpg",
        },
        {
          title: "eight",
          file: "/assets/images/åtte.jpg",
        },
        {
          title: "nine",
          file: "/assets/images/ni.jpg",
        },
      ],
    };
  },

  components: {
    MenuOpen,
  },

  computed: {
    currentSlide() {
      return this.slides[this.index];
    },
  },

  methods: {
    previousImage() {
      this.index = this.index === 0 ? this.slides.length - 1 : this.index - 1;
    },

    nextImage() {
      this.index = this.index === this.slides.length - 1 ? 0 : this.index + 1;
    },
  },
};
</script>

<style>
.works {
  background: grey;
  height: 100%;
}

.works__slideshow {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: var(--sizing-mega);
  margin-left: 25%;
  background: var(--white-transparent);
  width: 70%;
  height: 37rem;
}

.slideshow__buttons {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
}

.slideshow__button {
  padding: 0.5em;
  text-transform: uppercase;
  color: black;
  font-size: var(--font-big-desktop);
}

.slideshow__image {
  height: 34rem;
}

/*
.works__background {
  position: relative;
  top: var(--sizing-mega);
  margin-left: 25%;
  width: 70%;
  max-height: 35.5rem;
}

.works__grid {
  background: palegoldenrod;
}

.works__image {
  width: 40rem;
  margin: var(--sizing-small) var(--sizing-medium);
}
*/
</style>