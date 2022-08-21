<script setup lang="ts"></script>

<template>
  <div class="layout-logo">
    <img class="logo-icon" src="@/assets/images/vite.svg" alt="" />
    <div class="logo-title">my-vue-app</div>
  </div>
</template>

<style lang="scss" scoped>
.layout-logo {
  box-sizing: border-box;
  height: 100%;
  padding: 0 10px;
  width: 220px;
  border-right: 1px solid #ddd;

  .logo-icon {
    display: inline-block;
    vertical-align: middle;
  }
  .logo-title {
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
    font-size: 20px;
    color: #1890ff;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  }
}
</style>
