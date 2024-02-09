<template>
  <input type="file" @change="handleFileChange" />
  <canvas ref="canvas" style="border: 1px solid black"></canvas>

  <div class="canva-ascii">
    <div class="y-index" v-for="(y, key) in image" :key="key">
      <div class="x-index" v-for="(i, index) in y" :key="index">
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      density: "Ñ@#W$9876543210?!abc;:+=-,._ ",
      image: [],
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;

      this.image = [];

      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // Clear canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const scale = 0.1; // Downscale factor
          const scaledWidth = img.width * scale;
          const scaledHeight = img.height * scale;

          canvas.width = scaledWidth;
          canvas.height = scaledHeight;

          ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

          const imageData = ctx.getImageData(0, 0, scaledWidth, scaledHeight);
          this.processImageData(imageData);
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    },

    processImageData(imageData) {
      const data = imageData.data;
      const width = imageData.width;
      const height = imageData.height;

      const blurAmount = 5;
      for (let y = 0; y < height; y++) {
        this.image[y] = [];
        for (let i = 0; i < width; i++) {
          const pixelIndex = (i + y * width) * 4;
          const red = data[pixelIndex];
          const green = data[pixelIndex + 1];
          const blue = data[pixelIndex + 2];

          // Calculate luminance (grayscale)
          const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

          const charIndex = Math.floor(
            (this.density.length - 1) * (luminance / 255)
          );
          const char = this.density.charAt(charIndex);

          this.image[y][i] = char;
        }
      }

      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      ctx.putImageData(imageData, 0, 0);
    },
  },
};
</script>

<style scoped>

.canva-ascii{
  margin-top: 10px;
}
.y-index {

  display: flex;
  font-size: 2px;
  background-color: #000;
  font-family: "Courier";
  color: #fff;
  font-size: 12pt;
  line-height: 6pt;
}
</style>