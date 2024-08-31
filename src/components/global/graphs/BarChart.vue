<template>
  <div class="graph-box">
    <h3>{{ title }}</h3>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  data: {
    default: [],
  },
  title: {
    default: "",
  },
});

const barData = props.data.map((el) => {
  return {
    entity: el.id,
    data: [
      { x: "km", y: el.km },
      { x: "liters", y: el.liters },
    ],
  };
});

// const barData = ref([
//   {
//     entity: "AAPL",
//     data: [
//       { x: "Q1 2023", y: 90000000 },
//       { x: "Q2 2023", y: 110000000 },
//       { x: "Q3 2023", y: 105000000 },
//       { x: "Q4 2023", y: 120000000 },
//     ],
//   },
//   {
//     entity: "MSFT",
//     data: [
//       { x: "Q1 2023", y: 100000000 },
//       { x: "Q2 2023", y: 120000000 },
//       { x: "Q3 2023", y: 100000000 },
//       { x: "Q4 2023", y: 100000000 },
//     ],
//   },
//   {
//     entity: "NVDA",
//     data: [
//       { x: "Q1 2023", y: 60000000 },
//       { x: "Q2 2023", y: 80000000 },
//       { x: "Q3 2023", y: 100000000 },
//       { x: "Q4 2023", y: 130000000 },
//     ],
//   },
// ]);

const barColors = ["#ccece6", "#65c2a3", "#228a44"];
</script>

<style scoped>
.graph-box {
  background: #fff;
  padding: 20px;
  border-radius: var(--border-radius);
  overflow: hidden;
  display: grid;
  div {
    place-self: center;
  }
}
</style>
