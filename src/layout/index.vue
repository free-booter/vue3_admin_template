<template>
  <div class="main">
    <el-container class="main_content">
      <el-aside class="el_aside" :width="isFold ? '60px' : '210px'">
        <Aside :is-fold="isFold" />
      </el-aside>
      <el-container class="page">
        <el-header class="page_header">
          <Header @on-change-aside="handleFold" />
        </el-header>
        <el-main class="page_content">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Aside from './aside/index.vue'
import Header from './header/index.vue'

const isFold = ref(false)
const handleFold = (flag) => {
  isFold.value = flag
}

</script>
<style scoped lang='scss'>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.main_content,
.page {
  height: 100%;
}

.el_aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none;
  /* firefox */
  -ms-overflow-style: none;
  /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.page_header {
  height: 48px;
}

.page_content {
  text-align: center;
  background-color: #f0f2f5;
}
</style>