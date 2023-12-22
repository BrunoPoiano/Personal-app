<template>
  <div class="app-container main-grid">
    <header class="center middle">
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

      <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.app-container {
  > * {
    width: 100%;
  }

  & .wrapper {
    margin-block: 2rem;

    & nav {
      display: flex;
      place-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
}
</style>
