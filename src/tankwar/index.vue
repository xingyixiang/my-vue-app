<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Engine from './Engine';

const canvasDom = ref();
onMounted(() => {
  const engine = new Engine({
    el: canvasDom.value,
  });
  engine.init();
});
</script>

<template>
  <div ref="canvasDom" />
</template>

<style lang="scss" scoped></style>
