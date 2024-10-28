<template>
  <div class="nav-info">
    <div class="info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="30" :src="userInfo.picture" />
          <span class="name">{{ userInfo.nickname }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleEditProfile">
              <el-icon>
                <Edit />
              </el-icon>
              修改资料
            </el-dropdown-item>
            <el-dropdown-item @click="loginOutAction">
              <el-icon>
                <CircleClose />
              </el-icon>
              退出系统
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const userInfo = ref({
  nickname: 'admin',
  picture: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})

const loginOutAction = () => {
  console.log('退出登录');

}
const handleEditProfile = () => {
  console.log('编辑资料');

}
</script>
<style scoped lang="scss">
.nav-info {
  display: flex;
  align-items: center;

  .operation {
    margin-right: 20px;

    .el-icon {
      width: 40px;
      height: 35px;
      line-height: 35px;
      cursor: pointer;

      &:hover {
        background: #f2f2f2;
      }
    }

    .el-icon.card::after {
      position: absolute;
      content: '';
      right: 3px;
      top: 5px;
      width: 5px;
      height: 5px;
      background-color: red;
      border-radius: 50%;
    }
  }

  .info {
    .el-dropdown {
      cursor: pointer;

      .el-dropdown-link {
        display: flex;
        align-items: center;

        .name {
          margin-left: 8px;
        }

        &:focus-visible {
          outline: none !important;
        }
      }

      &:focus-visible {
        outline: none !important;
      }
    }
  }


}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
</style>
