<!-- https://codemyui.com/dripping-down-arrow/ -->

<template>
<!--
<div class="arrow">
  <div class="arrow__chevron"></div>
  <div class="arrow__chevron"></div>
  <span class="arrow__arrow">Scroll</span>
  <a class="arrow__arrow" href="https://naegele.it"></a>
</div>
-->

  <div class="arrow__animation">
    <img src="/assets/images/arrow.svg" alt="" />
  </div>

</template>

<style>
/*
.arrow {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 41.5rem;
  right: 10rem;
}

.arrow__chevron {
  position: absolute;
  width: 50px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}

.arrow__chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.arrow__chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.arrow__chevron:before,
.arrow__chevron:after {
  content: ' ';
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: seagreen;
}

.arrow__chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.arrow__chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;

  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}

.arrow__arrow {
  display: block;
  margin-top: 75px;
  margin-left: -30px;
  font-size: var(--font-small-desktop);
  color: seagreen;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: .25;
  animation: pulse 2s linear alternate infinite;
}


@keyframes pulse {
  to {
    opacity: 1;
  }
}
*/




.arrow__animation {
  position: absolute;
  top: 42.5rem;
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