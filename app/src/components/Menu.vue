<template>
  <div class="menu">
    <button @click="openMenu">
      <img
        class="menu__hamburger"
        v-if="hamburger_showing"
        src="/assets/images/hamburger.svg"
        alt=""
      />
    </button>
    <div v-if="x_showing" class="menu__links">
      <button class="menu__links--x" @click="closeMenu" to="/">X</button>
      <RouterLink to="/works">Works</RouterLink> <br />
      <RouterLink to="/biography">Biography</RouterLink> <br />
      <RouterLink to="/exhibitions">Exhibitions</RouterLink> <br />
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x_showing: false,
      hamburger_showing: true,
    };
  },
  methods: {
    openMenu() {
      this.x_showing = true;
      this.hamburger_showing = false;
    },
    closeMenu() {
      this.x_showing = false;
      this.hamburger_showing = true;
    },
  },
};
</script>

<style>
.menu {
  position: relative;
  width: 15.938rem;
  height: 49.3rem;
  background: var(--white-transparent);
  left: 0;
  top: 0;
}

.menu__hamburger {
  position: absolute;
  width: 3.5rem;
  top: 3.8rem;
  left: 6.75rem;
}

.menu__links--x {
  display: flex;
  justify-content: center;
  padding: var(--sizing-medium);
  font-size: var(--font-big-desktop);
  color: black;
  text-decoration: none;
}

.menu__links a {
  display: flex;
  flex-direction: column;
  margin-left: var(--sizing-small);
  padding: var(--sizing-small);

  font-size: var(--font-small-desktop);
  color: black;
  letter-spacing: var(--letter-spazing-small);
  text-decoration: none;
}

.menu__links a:hover {
  margin-left: var(--sizing-medium);
}

/*   mobile   */
@media screen and (max-width: 600px) {
  .menu {
    position: relative;
    width: 9.875rem;
    height: 49.3rem;
    background: pink;
    left: 0;
    top: 0;
  }

  .menu__links--x {
    font-size: var(--font-big-mobile);
  }

  .menu__links a:nth-child(n + 2) {
    font-size: var(--font-small-mobile);
  }
}
</style>