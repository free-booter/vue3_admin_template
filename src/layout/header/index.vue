<template>
  <div class="header">
    <el-icon class="icon" :size="28" @click="handleFold">
      <component :is="isFold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <div class="content">
      <header-crumb></header-crumb>
      <nav-info></nav-info>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import headerCrumb from './cnps/header-crumb.vue'
import navInfo from './cnps/header-info.vue'
const emit = defineEmits(['on-change-aside'])
const isFold = ref(false)

const handleFold = () => {
  isFold.value = !isFold.value
  emit('on-change-aside', isFold.value)
}
</script>
<style scoped lang='scss'>
.header {
  display: flex;
  align-items: center;
  height: 100%;

  .icon {
    cursor: pointer;
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
  }
}
</style>