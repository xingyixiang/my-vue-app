<script setup lang="ts">
import Logo from './Logo.vue';
</script>

<template>
  <div class="layout-header"><Logo /></div>
</template>

<style lang="scss" scoped>
$headerHeight: 47px;
.layout-header {
  height: $headerHeight;
  line-height: $headerHeight;
  border-bottom: 1px solid #cccccc;
}
</style>
