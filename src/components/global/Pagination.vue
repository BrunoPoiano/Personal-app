<template>
  <div class="pagination-container">
    <div class="pagination">
      <div class="pagination-buttons">
        <button
          v-for="page in pages"
          :key="page"
          @click="handleCurrentPage(page)"
          :data-selected="page == pagination.current_page"
        >
          {{ page }}
        </button>
      </div>

      <div class="pagination-status">
        <span>
          Exibindo do {{ pagination.from }}° ao {{ pagination.to }}° de
          {{ pagination.total }} items
        </span>

        <select
          v-model="pagination.per_page"
          class="select"
          @change="handlePerPage(pagination.per_page)"
        >
          <option
            v-for="(perpage, index) in perPage"
            :key="index"
            :value="perpage.value"
          >
            {{ perpage.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script >
import { onMounted, reactive, ref, watch } from "vue";
export default {
  props: {
    pagination: {
      current_page: 1,
      from: 1,
      last_page: 10,
      per_page: 10,
      to: 10,
      total: 10,
    },
  },
  setup(props, context) {
    let pages = ref([]);

    const perPage = reactive([
      {
        value: 5,
        name: "5 por pagina",
      },

      {
        value: 10,
        name: "10 por pagina",
      },

      {
        value: 25,
        name: "25 por pagina",
      },

      {
        value: 50,
        name: "50 por pagina",
      },
    ]);

    function handlePerPage(page) {
      context.emit("perPage", page);
    }

    function handleCurrentPage(page) {
      context.emit("currentPage", page);
    }

    function pageList() {
      let min = 5;
      pages.value = [];
      const current_page = parseInt(props.pagination.current_page);
      if (current_page < min) {
        for (let index = 1; index <= props.pagination.last_page; index++) {
          pages.value = [...pages.value, index];
        }
      } else if (current_page + min - 1 > props.pagination.last_page) {
        for (
          let index = parseInt(props.pagination.last_page) - min + 1;
          index <= props.pagination.last_page;
          index++
        ) {
          pages.value = [...pages.value, parseInt(index)];
        }
      } else {
        for (let index = -2; index < 3; index++) {
          pages.value = [...pages.value, current_page + parseInt(index)];
        }
      }
    }

    watch(props.pagination, async () => {
      pageList();
    });

    return {
      pages,
      perPage,
      pageList,
      handlePerPage,
      handleCurrentPage,
    };
  },
  mounted() {
    this.pageList();
  },
};
</script>

<style>
.pagination-container {
  display: grid;
  place-items: center;
}
.pagination {
  display: grid;
  gap: 10px;
  max-width: 120ch;
  width: 100%;

  & .pagination-buttons {
    width: 100%;
    display: flex;
    place-items: center;
    justify-content: center;

    gap: 5px;

    & button {
      cursor: pointer;
      border: none;
      aspect-ratio: 1;
      width: 35px;
      border-radius: var(--border-radius);

      font-size: var(--font-size-base);
      background: var(--accent-color-80);

      &[data-selected="true"] {
        background: var(--accent-color-50);
      }

      &:hover {
        background: var(--accent-color-10);
      }
    }
  }

  & .pagination-status {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    margin-top: 20px;

    & span {
      font-size: var(--font-size-base);
      display: grid;
      place-items: center;
    }
  }
}
</style>