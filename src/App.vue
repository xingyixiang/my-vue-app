<script setup lang="ts">
import LayoutHeader from '@/layout/layout-header.vue';
import Sidebar from '@/layout/Sidebar.vue';
</script>

<template>
  <layout-header />
  <div class="content">
    <Sidebar class="sidebar" />
    <div class="panel">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$swith: 220px;
.content {
  height: calc(100vh - 40px);
}
.sidebar {
  width: $swith;
  height: 100%;
  float: left;
}
.panel {
  width: calc(100% - $swith);
  margin-left: $swith;
  height: 100%;
}
</style>
