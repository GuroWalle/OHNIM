<template>
  <div class="arrow__animation">
    <img src="/assets/images/arrow.svg" alt="" />
  </div>
</template>

<style>
.arrow__animation {
  position: absolute;
  top: 41.5rem;
  right: 10rem;
  color: white;
  animation: mover 1s infinite alternate;
}

.arrow__animation {
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
}
.arrow__animation {
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
}

@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

@media screen and (max-width: 600px) {
  .arrow__animation {
    position: absolute;
    top: 38rem;
    right: 3.5rem;
    animation: mover 1s infinite alternate;
  }
}
</style>