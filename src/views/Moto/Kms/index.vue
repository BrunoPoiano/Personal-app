<template>
  <div class="km-page">
    <km-modal @refreshTable="getKms" />
    <KmTable :content="kms" />
    <Pagination
      :pagination="pagination"
      @currentPage="currentPage"
      @perPage="perPage"
    />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import KmModal from "./components/KmModal.vue";
import axios from "@/axios";
import KmTable from "./components/KmTable/index.vue";
import Pagination from "@/components/global/Pagination.vue";
export default {
  components: { KmModal, KmTable, Pagination },

  setup() {
    const kms = ref([]);

    const pagination = ref({
      current_page: 1,
      from: 1,
      last_page: 20,
      per_page: 10,
      to: 10,
      total: 10,
    });

    const getKms = () => {
      axios.get("moto/kms", {
        params: {
          ...pagination.value
        }
      }).then(({ data }) => {
        kms.value = data.data;
        pagination.value.current_page = data.current_page;
        pagination.value.from = data.from;
        pagination.value.last_page = data.last_page;
        pagination.value.per_page = data.per_page;
        pagination.value.total = data.total;
        pagination.value.to = data.to;
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
    };
  },
};
</script>

<style scoped>
.km-page {
  width: 100%;

  display: grid;
  gap: 20px;
}
</style>