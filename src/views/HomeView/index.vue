
<template>
  <div class="full-width ">
    <div class="card content left-full">teste teste teste</div>
    <div class="card content left-start">teste teste teste</div>
    <div class="card content left-end">teste teste teste</div>
    <table-weight />
  </div>
</template>

<script>
import TableWeight from "./component/TableWeight.vue";

export default {
  components: { TableWeight },
};
</script>


<style scoped>
.card {
  padding: 20px;
  border: 1px solid red;

  border-radius: var(--border-radius);
}
</style>