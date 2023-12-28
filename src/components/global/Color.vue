<template>
<div class="color-wrap">
  <div class="color">
    <div
      v-for="(color, index) in attentionColor()"
      :key="index"
      :style="`background-color: ${color}`"
    ></div>
  </div>

  <div class="color">
    <div
      v-for="(color, index) in accentColor()"
      :key="index"
      :style="`background-color: ${color}`"
    ></div>
  </div>

  <div class="color">
    <div
      v-for="(color, index) in neutralColor()"
      :key="index"
      :style="`background-color: ${color}`"
    ></div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    attentionColor() {
      let color = [];
      for (let index = 1; index <= 10; index++) {
        color = [...color, `var(--attention-color-${index}0)`];
      }

      return color;
    },
    accentColor() {
      let color = [];
      for (let index = 1; index <= 10; index++) {
        color = [...color, `var(--accent-color-${index}0)`];
      }

      return color;
    },

    neutralColor() {
      let color = [];
      for (let index = 10; index <= 100; index = index + 5) {
        color = [...color, `var(--neutral-color-${index})`];
      }

      return color;
    },
  },
};
</script>

<style>
.color {
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 50px;
    aspect-ratio: 1;
  }
}
</style>