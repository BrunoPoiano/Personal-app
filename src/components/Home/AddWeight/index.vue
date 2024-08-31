<template>
  <form v-on:submit.prevent="createWeight" class="input-text" id="weighForm">
    <input required class="input" name="weight" type="number" step="0.01" />
    <button class="button" type="submit">OK</button>
  </form>
</template>

<script>
export default {
  methods: {
    createWeight(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formObject = Object.fromEntries(formData);
      this.axios.post("weight", formObject).then(() => {
        this.cleanForm({ weight: null });
        this.$emit("refreshTable");
      });
    },

    cleanForm(formData) {
      const form = document.getElementById("weighForm");
      for (const [key, value] of Object.entries(formData)) {
        const inputElement = form.querySelector(`[name="${key}"]`);
        if (inputElement) {
          inputElement.value = null;
        }
      }
    },
  },
};
</script>

<style scoped>
.input-text {
  max-width: 80ch;
  margin-inline: auto;
  margin-bottom: 1.5em;

  display: flex;
  justify-content: center;
  place-items: center;
  gap: 10px;

  & input {
    flex-grow: 1;
  }
}
</style>
