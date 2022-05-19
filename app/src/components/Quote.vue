<template>
    <div class="quote">
       <div class="quote__data" v-for="quote in result">
          <h1>{{ quote.quote }}</h1>
          <h2>- {{ quote.author }}</h2>
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
  margin-top: var(--sizing-bigger);
  background: white;
}

.quote__data {
  padding-top: var(--sizing-bigger);
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-family: 'Handwritten Font';
}

.quote__data h1 {
  width: 50%;
  font-size: var(--font-big-desktop);
  letter-spacing: var(--letter-spazing-small);
  color: teal;
}

.quote__data h2 {
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-small);
  color: teal;
}

@media screen and (max-width: 600px) {
  .quote {
    width: 100%;
    margin-top: var(--sizing-mega);
  }

  .quote__data h1 {
    width: 80%;
    font-size: var(--font-big-mobile);
  }

  .quote__data h2 {
    font-size: var(--font-medium-mobile);
    margin-left: 10rem;
  }
}
</style>