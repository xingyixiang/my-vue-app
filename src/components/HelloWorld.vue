<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

defineProps<{ msg: string }>();

const count = ref(1);

const add = () => {
  count.value += 1;
};
const { locale, t } = useI18n();
const changeLang = (type: string) => {
  locale.value = type;
};
</script>

<template>
  <el-button @click="add">加一</el-button>
  {{ count }}
  <span>{{ t("helloWorld.hello", { name: "xyx" }) }}</span>

  <el-button @click="changeLang('en-US')">英文</el-button>
  <el-button @click="changeLang('zh-CN')">中文</el-button>
  <el-table :data="[]" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
