<template>
  <section>
    <div>
      <Loading :loading="loading">
        <LineChart :chartData="chartData" />
      </Loading>
    </div>
    <div>
      <add-weight @refreshTable="getWeights" />
      <Table :content="weigths" @deleteITem="deleteITem" />
      <pagination
        :pagination="pagination"
        @currentPage="currentPage"
        @perPage="perPage"
      />
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
import Pagination from "@/components/global/Pagination.vue";
import Color from "@/components/global/Color.vue";
import Table from "@/components/Home/Table/index.vue";
import AddWeight from "@/components/Home/AddWeight/index.vue";
import LineChart from "@/components/global/graphs/LineChart.vue";
import Loading from "@/components/global/Loading/index.vue";
export default {
  components: { Pagination, Color, Table, AddWeight, LineChart, Loading },
  data() {
    return {
      chartData: {},
      weigths: [],
      loading: false,
      pagination: {
        current_page: 1,
        from: 1,
        last_page: 20,
        per_page: 10,
        to: 10,
        total: 10,
      },
    };
  },
  methods: {
    perPage(perPage) {
      this.pagination.per_page = perPage;
      this.currentPage(1);
    },
    currentPage(item) {
      this.pagination.current_page = item;
      this.getWeights();
    },
    getWeights() {
      this.loading = true;
      this.axios
        .get("/weight", {
          params: {
            ...this.pagination,
          },
        })
        .then(({ data }) => {
          this.weigths = data.data;
          this.pagination.current_page = data.current_page;
          this.pagination.from = data.from;
          this.pagination.last_page = data.last_page;
          this.pagination.per_page = data.per_page;
          this.pagination.total = data.total;
          this.pagination.to = data.to;

          let graphLabel = [];
          let graphData = [];

          data.data.forEach((el) => {
            graphLabel.push(el.id);
            graphData.push(el.weight);
          });

          this.chartData = {
            labels: graphLabel.reverse(),
            datasets: [
              {
                label: "Weight",
                data: graphData.reverse(),
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: ["rgba(255, 99, 132, 1)"],
                borderWidth: 1,
              },
            ],
          };
        })
        .finally(() => {
          this.loading = false;
        });
    },
    deleteITem(itemId) {
      this.axios.delete(`weight/${itemId}`).then(() => {
        this.getWeights();
      });
    },
  },
  mounted() {
    this.getWeights();
  },
};
</script>

<style scoped>
section {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 10px;
}
button {
  font-weight: bold;
}
</style>
