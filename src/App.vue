<template>
  <div class="app-container main-grid">
    <header class="center middle" v-if="isLogged">
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <a @click="handleLogOut">Logout</a>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

let isLogged = ref(false);
const router = useRouter();

function handleLogOut() {
  localStorage.removeItem("EXER_TOKEN");
  localStorage.removeItem("EXER_USER");
  router.go("/");
}

onMounted(() => {
  if (localStorage.getItem("EXER_TOKEN")) {
    isLogged.value = true;
  }
});
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
