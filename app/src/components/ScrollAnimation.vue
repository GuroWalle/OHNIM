<template>
  <div class="scroll">
    <div class="scroll_lol">
      <div class="scroll__images">
        <img class="image__1" src="/assets/images/to.jpg" alt="" />
        <img class="image__2" src="/assets/images/tre.jpg" alt="" />
        <img class="image__3" src="/assets/images/fem.jpg" alt="" />
        <img class="image__4" src="/assets/images/en.jpg" alt="" />
        <img class="image__5" src="/assets/images/fire.jpg" alt="" />
      </div>
    </div>

    <div class="scroll__quote" v-for="quote in result">
      <h1>{{ quote.quote }}</h1>
      <h2>- {{ quote.author }}</h2>
      <img class="quote__sunflower" src="/assets/images/sunflower.svg" alt="" />
    </div>
  </div>
</template>

<script>
import query from "../groq/quotes.groq?raw";
import viewMixin from "../mixins/viewMixins";

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
};
</script>

<style>
.scroll {
  width: 100%;
  margin-top: var(--sizing-big);
}

.scroll__images {
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 4rem;
  height: 100%;
  overflow-x: scroll;
  padding: 3rem;
  background: rgb(119, 115, 137);
}

.image__1 {
  object-fit: contain;
}

.image__2 {
  object-fit: contain;
}

.image__3 {
  object-fit: contain;
}

.image__4 {
  object-fit: contain;
}

.image__5 {
  object-fit: contain;
}

.scroll__quote {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.scroll__quote h1 {
  width: 50%;
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-small);
}

.scroll__quote h2 {
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-small);
}

.quote__sunflower {
  width: 10rem;

  animation-name: flower;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
}

@keyframes flower {
  from {
    transform: translate(1000px);
  }

  to {
    transform: translate(0px);
  }
}
</style>