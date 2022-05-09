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
  animation: arrow 1s infinite alternate;
}

.arrow__animation {
  animation: arrow 1s infinite alternate;
}
.arrow__animation {
  animation: arrow 1s infinite alternate;
}

@keyframes arrow {
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
    animation: arrow 1s infinite alternate;
  }
}
</style>