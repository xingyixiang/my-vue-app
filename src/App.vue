<script setup lang="ts">
import { computed } from 'vue';
import { useAppStoreHook } from '@/store/modules/app';
import LayoutHeader from '@/layout/layout-header.vue';
import Sidebar from '@/layout/Sidebar.vue';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';

const appStore = useAppStoreHook();
const locale = computed(() => {
  const lang = appStore.getLang;
  return lang === 'zh' ? zhCn : en;
});
</script>

<template>
  <el-config-provider :locale="locale">
    <layout-header />
    <div class="content">
      <Sidebar class="sidebar" />
      <div class="panel">
        <router-view />
      </div>
    </div>
  </el-config-provider>
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
