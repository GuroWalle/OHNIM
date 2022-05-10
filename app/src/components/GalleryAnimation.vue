<template>
  <div class="gallery">
    <h1 class="gallery__title">Featured Works</h1>
      <div class="gallery__background">
          <div class="background__container">
            <div class="container__wrap">
              <div class="wrap__image"></div>
              <div class="wrap__image"></div>
              <div class="wrap__image"></div>
              <div class="wrap__image"></div>
              <div class="wrap__image"></div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.gallery {
  width: 100%;
  height: 90%;
}

.gallery__title {
  background: var(--blue-background);
  padding: var(--sizing-medium) 0 0 0;
  text-align: center;
  font-size: var(--font-medium-desktop);
  letter-spacing: var(--letter-spazing-small);
}

.gallery__background {
  text-align: center;
  background: var(--blue-background);
  display: flex;
  justify-content: center;
  align-items: center;
}

.background__container {
  padding: var(--sizing-medium) 0;
  width: 760px;
}

.container__wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80vh;
}

.wrap__image {
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: none;
  transition: all 0.5s ease;
}
      
.wrap__image:hover {
  flex: 7;
}
    
.wrap__image:first-of-type {
  background-image: url("/assets/images/to.jpg");
}

.wrap__image:nth-of-type(2) {
  background-image: url("/assets/images/fire.jpg");
}

.wrap__image:nth-of-type(3) {
  background-image: url("/assets/images/tre.jpg");
}

.wrap__image:nth-of-type(4) {
  background-image: url("/assets/images/fem.jpg");
}

.wrap__image:last-of-type {
  background-image: url("/assets/images/en.jpg");
}
</style>