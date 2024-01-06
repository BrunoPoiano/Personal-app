<template>
  <div v-for="(info, name, index) in infos" :key="index" class="card">
    <h4>
      {{ name }}
    </h4>
    <span>
      {{ parseFloat(info).toFixed(2) }}

      <span v-if="name == 'average'">
        Km per Liter
      </span>
    </span>
  </div>
</template>

<script setup>
import axios from "@/axios";
import { onMounted, ref } from "vue";

const infos = ref({});

const getKmInfo = () => {
  axios.get("moto/kms/info").then(({ data }) => [(infos.value = data)]);
};

onMounted(() => {
  getKmInfo();
});
</script>

<style scoped>
.card {
  width: 100%;

  display: grid;
  place-items: center;
  gap: 5px;
  
  padding: 1rem;

  border-radius: var(--border-radius);
  border: 1px solid var(--accent-color-50);

  & h4 {
    text-transform: capitalize;
  }
}
</style>