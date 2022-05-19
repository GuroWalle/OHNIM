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
        <figcaption class="slideshow__captions">
          <p> Title: {{currentSlide.title}}</p>
          <p> {{currentSlide.extra}}</p>
        </figcaption>
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
          file: "/images/en.jpg",
          title: " Unknown ",
        },
        {
          file: "/images/to.jpg",
          title: " Unknown ",
        },
        {
          file: "/images/tre.jpg",
          title: " Unknown ",
        },
        {
          file: "/images/syv.jpg",
          title: " ' Hiding 2 ', 2020 ",
          extra: "Acrylic on canvas, 145.5 x 112cm"
        },
        {
          file: "/images/fire.jpg",
          title: " ' Hiding 3 ', 2020 ",
          extra: "Acrylic on canvas, 162 x 130.3cm"
        },
        {
          file: "/images/fem.jpg",
          title: " Unknown ",
        },
        {
          file: "/images/seks.jpg",
          title: " Unknown ",
        },
        {
          file: "/images/åtte.jpg",
          title: "  ' Despair ', 2020 ",
          extra: "Acrylic on canvas, 150 x 150cm"
        },
        {
          file: "/images/ni.jpg",
          title: " Unknown ",
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
  background-image: url("/images/collage_desktop.jpg");
  width: 92%;
  height: 100%;
  object-fit: contain;
}

.works__slideshow {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: var(--percent-tiny);
  width: 80%;
  height: 100%;
}

.slideshow__buttons {
  position: absolute;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.slideshow__button {
  padding: 0.5em;
  text-transform: uppercase;
  color: white;
  font-size: var(--font-big-desktop);
}

.slideshow__image {
  max-height: 37rem;
  margin-top: var(--sizing-big);
}

.slideshow__captions {
  letter-spacing: var(--letter-spazing-small);
}

.slideshow__captions p:nth-child(1) {
  font-size: var(--font-small-desktop);
}

.slideshow__captions p:nth-child(2) {
  font-size: var(--font-tiny-desktop);
}


@media screen and (max-width: 600px) {
  .works {
    background-image: url("/images/collage_mobile.jpg");
    width: 100%;
  }

  .works__slideshow {
    margin-left: 25%;
    height: 80%;
  }

  .slideshow__buttons {
    top: 40%;
  }

  .slideshow__button {
    padding: 0;
  }

  .slideshow__image {
    max-height: 20rem; 
    max-width: 15rem;
  }

  .slideshow__captions {
    letter-spacing: var(--letter-spazing-small);
  }

  .slideshow__captions p:nth-child(1) {
    font-size: var(--font-small-mobile);
  }

  .slideshow__captions p:nth-child(2) {
  font-size: var(--font-tiny-mobile);
}

}
</style>