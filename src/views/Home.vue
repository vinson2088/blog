<template>
  <div class="home">
    <navigation></navigation>
    <el-row class="main" type="flex" justify="space-around">
      <el-col :span="6">
        <div class="box">
          <div class="avatar">
            <img src="./../assets/logo.png" alt="avatar" class="img">
          </div>
          <p class="name">Vinson</p>
          <p class="introduction">君子终日乾乾  夕惕若厉  无咎</p>
          <p>博客数</p>
          <p class="num"><span>123</span></p>
        </div>
        <div class="box">
          <el-tag effect="plain" v-for="(item, index) in tagList" :key="index">{{item.tag}}</el-tag>
        </div>
      </el-col>
      <el-col :span="8">
        
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<script>
import navigation from './../components/nav'
export default {
  name: 'home',
  components: {
    navigation
  },
  data() {
    return {
      tagList: [
        {tag: 'js'},
        {tag: 'html'},
        {tag: 'css'},
        {tag: 'webpack'},
        {tag: 'es6'},
        {tag: 'Vue.js'},
        {tag: 'jQuery'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  background-color: #f0f0f0;
  height: 100%;
  .box{
    background-color: #fff;
    font-size: 16px;
    margin: 3em 0;
    .avatar{
      position: relative;
      background-color: #409eff;
      height: 100px;
      margin-bottom: 60px;
      .img{
        position: absolute;
        left: 50%;
        bottom: -40px;
        transform: translateX(-50%);
        width: 80px;
        background-color: #fafafa;
        border-radius: 50px;
        border: 2px solid #fff;
      }
    }
    .name{
      font-size: 20px;
      font-weight: bold;
      margin: 10px 0;
    }
    .introduction{
      color: #999;
      margin: 0;
      font-size: 12px;
    }
    .num{
      padding-bottom: 40px;
    }
  }
}
</style>
