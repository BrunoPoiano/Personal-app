<template>
  <div class="graph-box">
    <h3>{{ title }}</h3>
    <LineChart
      :data="lineData"
      :tooltip="tooltip"
      :gridlines="gridlines"
      :animations="animations"
      :gradient="gradient"
      :xAxis="xAxis"
      :yAxis="yAxis"
      :smooth="smooth"
      :width="700"
      :height="400"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { LineChart } from "vue-graphs";

const props = defineProps({
  data: {
    default: [],
  },
  title: {
    default: "",
  },
  tooltip: {
    default: false,
  },
  gridlines: {
    default: true,
  },
  animations: {
    default: false,
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
