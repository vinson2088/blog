<template>
  <div class="home">
    <navigation index="/"></navigation>
    <el-row class="main" type="flex" justify="space-around">
      <el-col :span="6">
        <div class="box">
          <div class="avatar">
            <img src="./../assets/logo.png" alt="avatar" class="img">
          </div>
          <p class="name">Vinson</p>
          <p class="introduction">君子终日乾乾  夕惕若厉  无咎</p>
          <p>博客数</p>
          <p class="num"><span>{{blogNum}}</span></p>
        </div>
        <div class="box tag-list">
          <el-tag effect="plain" v-for="(item, index) in tagList" :key="index">{{item.tag}}</el-tag>
        </div>
        <div class="box">
          <p class="blog-type-title">文章类别：</p>
          <ul class="blog-type">
            <li class="types"><router-link :to="{path:'/blog', query:{type:'HTML5'}}" class="links">HTML5</router-link></li>
            <li class="types"><router-link :to="{path:'/blog', query:{type:'CSS3'}}" class="links">CSS3</router-link></li>
            <li class="types"><router-link :to="{path:'/blog', query:{type:'Javascript'}}" class="links">Javascript</router-link></li>
            <li class="types"><router-link :to="{path:'/blog', query:{type:'canvas'}}" class="links">canvas</router-link></li>
            <li class="types"><router-link :to="{path:'/blog', query:{type:'webpack'}}" class="links">webpack</router-link></li>
          </ul>
        </div>
      </el-col>
      <el-col :span="12">
        <el-row class="box center">
          <el-col :span="4">
            <img src="./../assets/logo.png" alt="avatar" class="top-img">
          </el-col>
          <el-col :span="20" class="btn">
            <router-link to="/blog"><el-button type="primary">查看博客</el-button></router-link>
          </el-col>
        </el-row>
        <div class="box" v-for="(item, index) in blogList" :key="index">
          <router-link :to="{path: item.link, query: item.query}" class="blog-list">
            <p class="title">{{item.title}}</p>
            <p class="summary">{{item.summary}}</p>
            <div class="tag">
              <el-tag effect="plain" v-for="(items, indexs) in item.tag" :key="indexs" type="info" color="#e1e1e1">{{items}}</el-tag>
            </div>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import navigation from './../components/nav'
import * as datas from './../assets/blog.js'
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
      ],
      blogNum: 123
    }
  },
  computed: {
    blogList() {
      return datas.data
    }
  },
}
</script>
<style lang="scss" scoped>
.main{
  background-color: #f0f0f0;
  height: 100%;
  box-sizing: border-box;
  .box{
    background-color: #fff;
    font-size: 16px;
    margin: 3em 0;
    border-radius: 5px;
    overflow: hidden;
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
    .blog-type-title{
      text-align: left;
      padding: 0 15px;
    }
    .blog-type{
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: left;
      .types{
        .links{
          text-decoration: none;
          color: #666;
          display: block;
          padding: 10px 15px;
        }
      }
    }
  }
  .tag-list{
    padding: 20px;
    .el-tag{
      margin: 5px;
    }
  }
  .center{
    border-top: 4px solid #409eff;
    padding: 10px 20px;
    .btn{
      text-align: right;
      margin-top: 5px;
    }
    .top-img{
      border-radius: 50px;
      width: 50px;
      background-color: #fafafa;
      border: 2px solid #fff;
    }
  }
  .blog-list{
    display: block;
    text-decoration: none;
    padding: 20px;
    text-align: left;
    .title{
      font-size: 20px;
      margin-top: 0;
      color: #333;
    }
    .summary{
      color: #999;
    }
    .tag{
      .el-tag{
        margin: 0 5px;
      }
    }
  }
}
</style>
