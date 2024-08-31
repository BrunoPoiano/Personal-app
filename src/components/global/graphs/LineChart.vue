<template>
  <div class="graph-box">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto"; // Import Chart.js
import { shallowRef } from "vue";

export default {
  name: "MyChart",
  props: {
    chartData: {
      default: {},
    },
    chartOptions: {
      default: {
        interaction: {
          intersect: false,
          mode: "index",
        },
      },
    },
  },
  data() {
    return {
      chartInstance: shallowRef(null),
    };
  },

  methods: {
    renderChart() {
      const ctx = this.$refs.chartCanvas.getContext("2d");

      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: this.chartData,
        options: this.chartOptions,
      });
    },
  },
  mounted() {
    this.renderChart();
  },
};
</script>
<style scoped>
.graph-box {
  display: grid;
  place-items: center;
  background-color: #fff;
  border-radius: var(--border-radius);
  padding: 20px;
}
</style>
