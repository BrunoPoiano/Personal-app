
<template>
  <div class="full-width hover-effect">
    <div class="photo left-end center">
      <img id="anchor" src="@/assets/me.png" alt="" />
      <div class="eyes">
        <div class="eye" style="top: 203px; left: 113px"></div>
        <div class="eye" style="top: 200px; right: 120px"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;

  return deg;
}

function mousemoveHandler(e) {
  const mouxeX = e.clientX;
  const mouxeY = e.clientY;

  const anchor = document.getElementById("anchor");
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  const angleDeg = angle(mouxeX, mouxeY, anchorX, anchorY);
  const eyes = document.querySelectorAll(".eye");

  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${-90 + angleDeg}deg)`;
  });
}

onMounted(() => {
  addEventListener("mousemove", mousemoveHandler);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", mousemoveHandler);
});
</script>


<style scoped>
.hover-effect {
  height: 50vh;
}

.photo {
  margin: 10px;
  position: relative;

  & .eyes {
    position: absolute;
    inset: 0;
    width: 390px;
    max-width: 390px;
  }
}

img {
  width: 390px;
  max-width: 390px;
}

.eye {
  position: absolute;
  width: 4rem;
  aspect-ratio: 1;
  border: 2px solid black;
  border-radius: 100%;
  background: #fff;

  &::after {
    content: "";
    position: absolute;
    width: 7px;
    aspect-ratio: 1;
    background: black;
    border-radius: 100%;

    left: 17px;
    top: 7px;
  }
}
</style>