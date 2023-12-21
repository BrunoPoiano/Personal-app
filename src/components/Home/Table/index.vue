<template>
  <div class="table-container">
    <ul class="responsive-table">
      <li class="table-header">
        <div class="col col-1">#</div>
        <div class="col col-2">Dia</div>
        <div class="col col-3">Peso</div>
      </li>
      <li class="table-row" v-for="item in content" :key="item.id">
        <div class="col col-1">{{ item.id }}</div>
        <div class="col col-2">{{ formatDate(item.created_at) }}</div>
        <div class="col col-3">{{ item.weight }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      required: true,
    },
  },

  setup(props, context) {

    function formatDate(inputDate) {
      const dateObject = new Date(inputDate);
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      const formattedDate = dateObject.toLocaleDateString("en-GB", options);
      return formattedDate;
    }



    return {
      formatDate
    }
  }
}
</script>

<style>
.table-container {
  width: 100%;

  display: grid;
  place-items: center;

  & .responsive-table {
    max-width: 80ch;
    width: 100%;
    & li {
      border-radius: var(--border-radius);
      padding: 25px 30px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
    }
    & .table-header {
      background-color: var(--accent-color-20);
      font-size: var(--font-size-base);
      box-shadow: 0px 0px 9px 0px var(--neutral-color-85);
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    & .table-row {
      background-color: var(--attention-color-100);
      box-shadow: 0px 0px 9px 0px var(--neutral-color-85);
      font-size: var(--font-size-base);
    }

    & .col-1 {
      flex-basis: 20%;
      display: grid;
      place-items: center;
    }
    & .col-2 {
      flex-basis: 40%;
      display: grid;
      place-items: center;
    }
    & .col-3 {
      flex-basis: 40%;
      display: grid;
      place-items: center;
    }
  }
}
</style>