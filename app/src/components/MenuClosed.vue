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
    <div v-if="x_showing" class="menu__toggle">
      <button class="toggle_x" @click="closeMenu">X</button>
      <RouterLink to="/works">Works</RouterLink>
      <RouterLink to="/biography">Biography</RouterLink>
      <RouterLink to="/exhibitions">Exhibitions</RouterLink>
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
  position: absolute;
  width: 100%;
  height: 100%;
  margin-right: 10rem;
}

.menu__hamburger {
  width: 3rem;
  margin: 3.15rem 6.5rem;
}

.menu__toggle {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 15.938rem;
  height: 49.3rem;
  background: var(--white-transparent);
  padding-top: var(--sizing-medium);
}

.toggle_x {
  font-size: var(--font-big-desktop);
}

.menu__toggle a {
  font-size: var(--font-small-desktop);
  margin: var(--sizing-medium);
  color: black;
  letter-spacing: var(--letter-spazing-small);
  text-decoration: none;
}

.menu__toggle a:nth-child(n + 2):hover {
  margin-left: var(--sizing-big);
}

/*   mobile   */
@media screen and (max-width: 600px) {
  .menu {
    width: 9rem;
    height: 43.78rem;
  }

  .menu__hamburger {
    width: 2rem;
    margin: 3rem 3.5rem;
  }

  .menu__toggle {
    width: 9rem;
    height: 43.78rem;
  }

  .toggle_x {
    margin: 0 4rem;
    font-size: var(--font-big-mobile);
  }

  .menu__toggle a {
    font-size: var(--font-small-mobile);
    margin: var(--sizing-medium) var(--sizing-small);
  }

  .menu__toggle a:nth-child(n + 2):hover {
    margin-left: 0;
  }
}
</style>