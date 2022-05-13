<template>
  <div class="gallery">
    <h1 class="gallery__title">Featured Works</h1>
    <p class="gallery__description-desktop">- Hover over the images -</p>
    <p class="gallery__description-mobile">- Click the images -</p>
      <div class="gallery__background">
          <div class="background__container">
            <div class="container__wrap" aria-label="An image collage with five featured works.">
              <div class="wrap__image" aria-label="First artwork. This painting could be a self-portrait. The person has a red face. The face is being squished by a blue hand from the bottom of the face. The squishing has made the face move from being in the center of the frame to be moved up the canvas. Even though the person is being squished it still somehow looks comfortable with a smile. "></div>
              <div class="wrap__image" aria-label="Second artwork. A person right face is painted, with its eye in especially in focus. The person has a blue and, and this hand is using the thumb- and index-finger to spread the eye wide open. Almost like a wakeup call."></div>
              <div class="wrap__image" aria-label="Third artwork. In front of an orange background is half a yellow face (from top of the skull to right under the nose) located. Two blue hands is placed Munch's 'Scream' style to the face. The two eyes are located between the two hands pinky- and ring-finger. The person looks a little scared."></div>
              <div class="wrap__image" aria-label="Fourth artwork. A person with a black robe is standing in front of a pink background. The background is also filled with four colorful balloons. The person is wearing a yellow half circle has a hat. The background is fun, but the person looks sad and grey. Maybe a depiction of life in the public eye?"></div>
              <div class="wrap__image" aria-label="Fifth artwork. A yellow person with crazy purple hair is holding their hands up to their face, Munch's Scream style. The person looks like a crazy scientist."></div>
            </div>
          </div>
      </div>
  </div>
</template>

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

.gallery__description-desktop {
  background: var(--blue-background);
  padding: var(--sizing-small) 0 0 0;
  text-align: center;
  font-size: var(--font-small-desktop);
  letter-spacing: var(--letter-spazing-small);
}

.gallery__description-mobile {
  display: none;
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
  background-image: url("/images/to.jpg");
}

.wrap__image:nth-of-type(2) {
  background-image: url("/images/fire.jpg");
}

.wrap__image:nth-of-type(3) {
  background-image: url("/images/tre.jpg");
}

.wrap__image:nth-of-type(4) {
  background-image: url("/images/fem.jpg");
}

.wrap__image:last-of-type {
  background-image: url("/images/en.jpg");
}

@media screen and (max-width: 600px) {
  .gallery__title {
    padding: var(--sizing-medium) 0 0 0;
    font-size: var(--font-medium-mobile);
  }

  .gallery__description-mobile {
    display: block;
    background: var(--blue-background);
    padding: var(--sizing-small) 0 0 0;
    text-align: center;
    font-size: var(--font-small-mobile);
    letter-spacing: var(--letter-spazing-small);
  }

  .gallery__description-desktop {
    display: none;
  }
}
</style>