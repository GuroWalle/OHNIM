<template>
    <div class="quote">
       <div class="quote__data" v-for="quote in result">
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
.quote {
  width: 100%;
  margin-top: var(--sizing-big);
}


.quote__data {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.quote__data h1 {
  width: 50%;
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-small);
    color: black;
}

.quote__data h2 {
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-small);
    color: black;
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