<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Kms</th>
        <th>Litros</th>
        <th>Media</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in content" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.km }}</td>
        <td>{{ item.liters }}</td>
        <td>
          {{ (item.km / item.liters).toFixed(2) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    content: {
      required: true,
    },
  },
  setup(props, { expose }) {},
};
</script>

<style scoped>
table {
  border: 1px solid var(--accent-color-90);
  height: 1rem;
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
  border-spacing: 1px;
  text-align: left;
}

caption {
  caption-side: top;
  text-align: left;
}

th {
  border: 1px solid var(--accent-color-90);
  background-color: var(--accent-color-60);
  color: #000000;
  padding: 5px 15px;
}

td {
  border: 1px solid var(--accent-color-90);
  background-color: var(--base-color);
  color: #000000;
  padding: 5px 15px;
}
</style>
