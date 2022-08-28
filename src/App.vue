<script setup lang="ts">
import { computed } from 'vue';
import { useAppStoreHook } from '@/store/modules/app';
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
    <router-view />
  </el-config-provider>
</template>

<style lang="scss" scoped></style>
