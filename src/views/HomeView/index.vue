<template>
  <h2>Table Weight</h2>
  <main class="home-content">
    <table-weight />
  </main>
</template>

<script>
import TableWeight from "./component/TableWeight.vue";

export default {
  components: { TableWeight },
};
</script>

<style scoped>
.home-content {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;

  @media screen and (width < 860px) {
    flex-wrap: wrap;
  }

  > div {
    width: 100%;
  }

  & .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, max(200px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
    & .card {
      padding: 20px;
      border: 1px solid red;
      border-radius: var(--border-radius);
      width: 100%;
    }

    & .two-columns {
      grid-column: 1 / span 2;
    }
  }
}
</style>
