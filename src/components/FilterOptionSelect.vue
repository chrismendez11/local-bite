<script setup>
import { useFiltersStore } from '../stores/filters.store';
const props = defineProps(['option', 'callback', 'filterProperty'])
const useFilters = useFiltersStore()
</script>

<template>
  <el-select @change="(e) => { callback({ [`${filterProperty}`]: e }) }" v-model="useFilters.filters[`${filterProperty}`]" class="m-2" :placeholder="props.option.title">
    <el-option
      v-for="item in props.option.options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      ><span style="color: #ededed;">{{ item.label }}</span
      ></el-option
    >
  </el-select>
</template>

<style lang="scss">
.el-input__wrapper,
.el-select-dropdown {
  background-color: #121212;
}
.el-input__inner {
  --el-input-text-color: #ededed;
  --el-select-input-color: #ededed;
  --el-select-multiple-input-color: #ededed;
  --el-button-text-color: #ededed;
  --el-text-color-regular: #ededed;
}
#el-id-7157-32 {
  color: #ededed;
}
</style>
