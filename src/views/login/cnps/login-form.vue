<template>
  <el-form ref="ruleFormRef" label-position="top" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules"
    label-width="auto" class="login-form">
    <el-form-item label="账号" prop="account">
      <el-input v-model="ruleForm.account" :prefix-icon="User" placeholder="请输入账号" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.pass" :prefix-icon="Lock" type="password" show-password placeholder="请输入不少于6位数的密码"
        autocomplete="off" />
    </el-form-item>
    <el-form-item class="form-submit">
      <div class="submit-btn">
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          登录
        </el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue'

const ruleFormRef = ref()
const checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style scoped lang='scss'>
.login-form {
  text-align: left;

  .el-input {
    width: 300px;
  }

  .form-submit {
    .submit-btn {
      width: 100%;
      text-align: center;

      .el-button {
        width: 100%;
      }
    }
  }
}
</style>