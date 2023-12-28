
<template>
  <div>
    <add-weight @refreshTable="getWeights" />
    <Table :content="weigths" @deleteITem="deleteITem" />
    <pagination
      :pagination="pagination"
      @currentPage="currentPage"
      @perPage="perPage"
    />
  </div>
</template>

<script>
import { onMounted } from "vue";
import Pagination from "@/components/global/Pagination.vue";
import Color from "@/components/global/Color.vue";
import Table from "@/components/Home/Table/index.vue";
import AddWeight from "@/components/Home/AddWeight/index.vue";
export default {
  components: { Pagination, Color, Table, AddWeight },
  data() {
    return {
      weigths: [],
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
        });
    },
    deleteITem(itemId) {
      this.axios.delete(`weight/${itemId}`).then(() => {
        this.getWeights();
      });
    },
  },
  mounted() {
    console.log("aqui mounted");
    this.getWeights();
  },
};
</script>


<style scoped>
button {
  font-weight: bold;
}
</style>