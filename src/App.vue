<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <nav>
    <router-link to='/'>Home</router-link>
    <RouterLink to="/register">Đăng ký doanh nghiệp</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>

/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  /* width: 100%; */
  font-size: 12px;
  /* text-align: center; */
  margin-top: 2rem;
  margin: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  cursor: default;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  width: 15em;
  /* padding: 0 1rem; */
  /* border-left: 1px solid var(--color-border); */
  text-align: center;
  padding: 14px 16px;
    cursor: pointer;
}

/* nav a:first-of-type {
  border: 0;
} */

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
