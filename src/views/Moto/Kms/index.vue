<template>
  <div class="km-page">
    <!-- <div class="header">
      <KmInfo :key="kminfo" />
    </div> -->
    <div>
      <div class="modal-button">
        <km-modal @refreshTable="getKms" />
      </div>
      <KmTable :content="kms" />
      <Pagination
        :pagination="pagination"
        @currentPage="currentPage"
        @perPage="perPage"
      />
    </div>
    <div>
      <Loading :loading="loading">
        <LineChart :chartData="chartData" />
      </Loading>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Loading from "@/components/global/Loading/index.vue";
import KmModal from "./components/KmModal.vue";
import axios from "@/axios";
import KmTable from "./components/KmTable/index.vue";
import Pagination from "@/components/global/Pagination.vue";
import KmInfo from "./components/KmInfo/index.vue";
import LineChart from "@/components/global/graphs/LineChart.vue";
export default {
  components: { KmModal, KmTable, Pagination, KmInfo, LineChart, Loading },

  setup() {
    const kms = ref([]);
    const kminfo = ref(1);
    const loading = ref(false);
    const chartData = ref({});

    const pagination = ref({
      current_page: 1,
      from: 1,
      last_page: 20,
      per_page: 10,
      to: 10,
      total: 10,
    });

    const getKms = () => {
      loading.value = true;
      axios
        .get("moto/kms", {
          params: {
            ...pagination.value,
          },
        })
        .then(({ data }) => {
          kms.value = data.data;
          pagination.value.current_page = data.current_page;
          pagination.value.from = data.from;
          pagination.value.last_page = data.last_page;
          pagination.value.per_page = data.per_page;
          pagination.value.total = data.total;
          pagination.value.to = data.to;

          let graphLabel = [];
          let graphKm = [];
          let graphLiter = [];
          let graphAverage = [];

          data.data.forEach((el) => {
            graphLabel.push(el.id);
            graphKm.push(el.km);
            graphLiter.push(el.liters);
            graphAverage.push((el.km / el.liters).toFixed(2));
          });

          chartData.value = {
            labels: graphLabel.reverse(),
            datasets: [
              {
                label: "Km",
                data: graphKm.reverse(),
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: ["rgba(255, 99, 132, 1)"],
                borderWidth: 1,
              },
              {
                label: "Liters",
                data: graphLiter.reverse(),
                backgroundColor: ["green"],
                borderColor: ["rgba(255, 99, 132, 1)"],
                borderWidth: 1,
              },
              {
                label: "Average",
                data: graphAverage.reverse(),
                backgroundColor: ["blue"],
                borderColor: ["rgba(255, 99, 132, 1)"],
                borderWidth: 1,
              },
            ],
          };

          kminfo.value++;
        })
        .finally(() => {
          loading.value = false;
        });
    };

    const perPage = (perPage) => {
      pagination.value.per_page = perPage;
      currentPage(1);
    };

    const currentPage = (item) => {
      pagination.value.current_page = item;
      getKms();
    };

    onMounted(() => {
      getKms();
    });

    return {
      kms,
      pagination,
      perPage,
      currentPage,
      getKms,
      kminfo,
      loading,
      chartData,
    };
  },
};
</script>

<style scoped>
.modal-button {
  display: flex;
  justify-content: end;
  margin-block: 20px;
}

.km-page {
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));

  & .header {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    place-items: center;
    gap: 1rem;
  }
}
</style>
