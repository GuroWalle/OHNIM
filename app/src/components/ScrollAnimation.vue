<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="container-general">
            <div class="gallery-wrap">
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
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
.swiper-container {
  width: 100%;
  height: 90%;
}

.swiper-slide {
  text-align: center;
  background: rgb(78, 78, 125);
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Image Accordions General */
.container-general {
  padding: 75px 0;
  margin: 0 auto;
  width: 1000px;
}

.gallery-wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 85vh;
}

.item {
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: none;
  transition: all 0.8s ease;
}
      
.item:hover {
  flex: 7;
}
    
.item:first-of-type {
  background-image: url("/assets/images/to.jpg");
}

.item:nth-of-type(2) {
  background-image: url("/assets/images/fire.jpg");
}

.item:nth-of-type(3) {
  background-image: url("/assets/images/tre.jpg");
}

.item:nth-of-type(4) {
  background-image: url("/assets/images/fem.jpg");
}

.item:last-of-type {
  background-image: url("/assets/images/en.jpg");
}
</style>