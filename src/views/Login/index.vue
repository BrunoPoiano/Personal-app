<template>
  <div class="full-width">
    <div class="left-full login-wrapper">
      <AboutView />
    </div>
    <div class="right-full login-wrapper">
      <div class="card">
        <h3>Login</h3>
        <form @submit.prevent="handleLogin">
          <input
            class="input"
            placeholder="email"
            type="text"
            v-model="form.email"
          />
          <input
            class="input"
            placeholder="password"
            type="password"
            v-model="form.password"
          />
          <button type="submit" class="button">Logar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AboutView from "../AboutView.vue";
import axios from "@/axios";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  components: { AboutView },
  setup() {
    const router = useRouter();
    const form = ref({});

    const handleLogin = (e) => {
      const params = {
        email: form.value.email,
        password: form.value.password,
      };

      axios.post("login", params).then(({ data }) => {
        localStorage.setItem("EXER_TOKEN", data.token);
        localStorage.setItem("EXER_USER", JSON.stringify(data.user));

        router.go("/");
      });
    };

    return {
      handleLogin,
      form,
    };
  },
};
</script>

<style scoped>
.login-wrapper {
  height: calc(100vh - 2rem);

  display: grid;
  place-items: center;

  & .card {
    max-width: 400px;
    width: 100%;
    padding: 15px;

    border: 1px solid black;
    border-radius: var(--border-radius);

    display: grid;
    gap: 10px;

    & form {
      display: grid;
      gap: 10px;
    }
  }
}
</style>