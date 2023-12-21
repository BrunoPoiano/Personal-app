<template>
  <div class="input-text">
    <input class="input" type="number" step="0.01" v-model="weight" />
    <button class="button" @click="createWeight">OK</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weight: 0,
    };
  },
  methods: {
    createWeight() {
      this.axios.post("weight", { weight: this.weight })
      .then(() => {
        this.weight = 0
        this.$emit('refreshTable')
      });
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