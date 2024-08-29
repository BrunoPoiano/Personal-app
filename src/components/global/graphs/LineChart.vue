<template>
  <LineChart
    :data="lineData"
    :tooltip="tooltip"
    :gridlines="gridlines"
    :animations="animations"
    :gradient="gradient"
    :xAxis="xAxis"
    :yAxis="yAxis"
    :smooth="smooth"
    :width="600"
    :height="400"
  />
</template>

<script setup>
import { ref } from "vue";
import { LineChart } from "vue-graphs";

const props = defineProps({
  data: {
    default: [],
  },
  tooltip: {
    default: false,
  },
  gridlines: {
    default: true,
  },
  animations: {
    default: true,
  },
  gradient: {
    default: true,
  },
  xAxis: {
    default: true,
  },
  yAxis: {
    default: true,
  },
  smooth: {
    default: true,
  },
});

console.log("aqui props.data", props.data);

const lineData = ref([
  {
    color: "#41b883",
    values: props.data.map((el) => {
      return {
        y: el.weight,
        x: el.id,
      };
    }),
  },
]);
</script>
