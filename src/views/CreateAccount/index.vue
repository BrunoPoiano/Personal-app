<template>
  <div class="create-acount-wrapper">
    <AboutView />
    <div class="create-acount-form">
      <div class="card">
        <h3>Criar Conta</h3>
        <form @submit.prevent="handleLogin">
          <input
            class="input"
            placeholder="name"
            type="text"
            v-model="form.name"
          />
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
          <button type="submit" class="button">Criar Conta</button>
        </form>
        <RouterLink to="login">
          <button type="submit" class="button">login</button>
        </RouterLink>
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
        name: form.value.name,
        password: form.value.password,
      };

      axios.post("create-user", params).then(({ data }) => {
        // router.go("/login");
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
.create-acount-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
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