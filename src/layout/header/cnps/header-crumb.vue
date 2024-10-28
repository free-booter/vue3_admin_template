<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <!-- <template v-for="(item, index) in breadcrumbs" :key="index">
      <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
    </template> -->
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>
<style scoped lang="less"></style>
