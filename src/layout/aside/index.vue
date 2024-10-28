<template>
  <div class="aside_menu">
    <div class="logo">
      <img class="img" src="@/assets/logo.svg" alt="">
      <span class="title" v-show="!isFold">汽车租凭后台管理</span>
    </div>
    <el-menu class="el-menu-vertical-demo" :default-active="defaultValue" :collapse="isFold">
      <template v-for="(item, index) in menuList">
        <el-sub-menu :index="item.meta.index" v-if="item.children?.length" :key="'submenu-' + index">
          <template #title>
            <el-icon>
              <component :is="item.meta.icon" />
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="v.meta.index" v-for="(v, k) in item.children" :key="k"
              @click="handleLinkTo(`${item.path}/${v.path}`)">
              <template #title>
                <el-icon>
                  <component :is="v.meta.icon" />
                </el-icon>
                <span>{{ v.meta.title }}</span>
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item :index="item.meta.index" v-else :key="'menuitem-' + index" @click="handleLinkTo(item.path)">
          <el-icon>
            <component :is="item.meta.icon" />
          </el-icon>
          <template #title>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>

    </el-menu>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

defineProps({
  isFold: Boolean
})

const route = useRoute();
const router = useRouter();

// 获取菜单路由
const menuList = computed(() => {
  let list = []
  list = router.getRoutes().filter(item => item.children && item.children.length > 0 && item.meta.title == '首页')
  return list[0].children.filter(item => item.meta.index)
})

const defaultValue = computed(() => {
  return route.meta.index
})

// 路由跳转
const handleLinkTo = (path) => {
  router.push(`/${path}`)
}


</script>
<style scoped lang='scss'>
.aside_menu {
  height: 100%;
  background-color: rgb(12, 33, 53);

  .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 28px;
    padding: 12px 10px 8px 10px;
    color: #fff;
    background-color: #001529;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-weight: bold;
    }
  }

  :deep(.el-menu) {
    background-color: #001529;
    border: none;

    .el-sub-menu__title,
    .el-menu-item {
      color: rgb(183, 189, 195);
    }

    .el-menu-item-group__title {
      display: none;
    }

    .el-sub-menu__title,
    .el-menu-item:hover {
      background-color: transparent;
    }

    .el-menu-item:hover {
      color: #fff;
    }

    .el-menu-item.is-active {
      color: #fff;
      background-color: #0a60bd;
    }

    .el-sub-menu {
      .el-sub-menu__title {
        border: none;
      }

      .el-menu {
        background-color: rgb(12, 33, 53);
      }
    }
  }

  :global(.el-menu-item-group__title) {
    display: none;
  }
}
</style>