<script setup>
import { useFiltersStore } from '../stores/filters.store';
const useFilters = useFiltersStore()
const props = defineProps(['title', 'callback', 'filterProperty'])
</script>

<template>
  <div class="switch">
    <span>{{ props.title }}</span>
    <el-switch @input="(e) => { callback({ [`${filterProperty}`]: e })}" v-model="useFilters.filters[`${filterProperty}`]" />
  </div>
</template>

<style lang="scss" scoped>
    .switch {
        // background-color: #ffffff;
        width: 160px;
        padding: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        // border: 1px solid #dadde3;
        border-radius: 4px;
        span {
            font-size: 1.4rem;
            font-weight: 500;
            // color: #a8abb1;
            color: #ededed;
            font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei','微软雅黑',Arial,sans-serif;
        }
    }
</style>
