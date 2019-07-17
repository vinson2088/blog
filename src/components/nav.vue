<template>
  <div class="nav">
    <el-menu
      router
      :default-active="index"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#409eff"
      text-color="#fff"
      active-text-color="#fff"
      @select="handleSelect">
      <el-menu-item index="1">
        <el-input
          placeholder="请输入内容"
          v-model="search">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-house"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-menu-item index="/me">
        <i class="el-icon-user"></i>
        <span slot="title">关于我</span>
      </el-menu-item>
      <el-menu-item index="/blog">
        <i class="el-icon-date"></i>
        <span slot="title">博客</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: String,
      default: '/',
    }
  },
  name: 'navigation',
  data() {
    return {
      activeIndex: '2',
      search: ''
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    handleSelect() {}
  },
}
</script>
<style lang="scss" scoped>
.nav{
  .el-menu{
    display: flex;
    justify-content: center;
    .el-menu-item{
      i{
        color: #fff;
      }
      .el-input{
        i{
          color: #C0C4CC;
        }
      }
    }
  }
}
</style>
