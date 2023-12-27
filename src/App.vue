<template>
  <div class="app-container main-grid full-width-content">
    <header class="full-width " v-if="isLogged">
      <div class="wrapper full-width-content">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
        <nav>
          <a class="logout" @click="handleLogOut">Logout</a>
        </nav>
      </div>
    </header>

    <div class="full-width-content app-content">
      <RouterView />
    </div>
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

  & header {
    padding: 2rem;
    background: var(--accent-color-80);
  }

  & .wrapper {
    display: flex;
    gap: 10px;
    justify-content: space-between;

    & nav {
      display: flex;
      place-items: center;
      gap: 10px;

      & a {
        font-size: var(--font-size-md);
        font-weight: 600;
      }

      & .logout {
        color: var(--attention-color-40);

        &:hover {
          color: var(--attention-color-10);
        }
      }
    }
  }

  & .app-content {
    padding: 20px;
  }
}
</style>
