<template>
  <button data-toggle-modal @click="OpenModal()" class="button">
    Adicionar kms
  </button>
  <dialog data-modal>
    <h3>Nova Kilometragem</h3>
    <form v-on:submit.prevent="handleForm" id="kmLiterForm">
      <input
        required
        class="input"
        type="number"
        step="0.01"
        name="km"
        placeholder="Kms"
      />
      <input
        required
        class="input"
        type="number"
        step="0.01"
        placeholder="Litros"
        name="liters"
      />

      <div>
        <button class="button" type="submit">Salvar</button>
        <button
          class="button"
          data-type="danger"
          type="cancel"
          @click="cancelForm"
        >
          cancelar
        </button>
      </div>
    </form>
  </dialog>
</template>

<script setup>
import axios from "@/axios";
import { ref } from "vue";
const emits = defineEmits(["refreshTable"]);

const OpenModal = () => {
  const modal = document.querySelector("[data-modal]");
  modal.showModal();
};

const resetForm = () => {
  const formData = {
    km: null,
    liters: null,
  };

  const form = document.getElementById("kmLiterForm");

  for (const [key, value] of Object.entries(formData)) {
    const inputElement = form.querySelector(`[name="${key}"]`);
    if (inputElement) {
      inputElement.value = value;
    }
  }
};

const handleForm = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formObject = Object.fromEntries(formData);

  axios
    .post("moto/kms", formObject)
    .then(() => {
      resetForm();
    })
    .finally(() => {
      emits("refreshTable");
    });
};

const cancelForm = () => {
  resetForm();
  const modal = document.querySelector("[data-modal]");
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
