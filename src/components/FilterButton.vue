<script setup>
import { Filter } from '@element-plus/icons-vue'
const props = defineProps(['title', 'type', 'callback'])
</script>

<template>
    <el-button :type="props.type" :icon="Filter" @click="callback">{{ props.title }}</el-button>
</template>

<style lang="scss" scoped>

</style>