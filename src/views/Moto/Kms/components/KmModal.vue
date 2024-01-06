<template>
  <button data-toggle-modal @click="OpenModal()" class="button">Adicionar kms</button>
  <dialog data-modal>
    <h3>Nova Kilometragem</h3>
    <form @submit.prevent>
      <input
        class="input"
        type="number"
        step="0.01"
        placeholder="Kms"
        v-model="form.km"
      />
      <input
        class="input"
        type="number"
        step="0.01"
        placeholder="Litros"
        v-model="form.liters"
      />

      <div>
        <button class="button" @click="handleForm">Salvar</button>
        <button class="button" data-type="danger"  @click="cancelForm">cancelar</button>
      </div>
    </form>
  </dialog>
</template>

<script setup>
import axios from "@/axios";
import { ref } from "vue";
const emits = defineEmits(['refreshTable'])

const form = ref({
  km: "",
  liters: "",
});

const OpenModal = () => {
  const modal = document.querySelector("[data-modal]");
  modal.showModal();
};

const resetForm = () => {
  form.value = {
    km: "",
    liters: "",
  };
};

const handleForm = () => {
  axios
    .post("moto/kms", {
      ...form.value,
    })
    .then(() => {
      resetForm();
    })
    .finally(() => {
      emits('refreshTable')
    })
};

const cancelForm = () => {
  const modal = document.querySelector("[data-modal]");
  resetForm();
  modal.close();
};
</script>

<style scoped>
dialog {
  padding: 20px;
  border-radius: var(--border-radius);
  border: none;

  max-width: 30rem;
  width: 100%;

  & form {
    display: grid;
    gap: 10px;

    & div {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      gap: 10px;
    }
  }
}
</style>