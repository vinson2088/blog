<template>
  <div class="blog">
    <navigation index="/blog"></navigation>
    <div class="main" :style="{height: domHeight}">
      <div class="center">
        <div class="filter">
          <table>
            <tr>
              <td>类别：</td>
              <td><router-link :to="{query: {type: 'HTML5'}}" class="filter-btn">HTML5</router-link></td>
              <td><router-link :to="{query: {type: 'CSS3'}}" class="filter-btn">CSS3</router-link></td>
              <td><router-link :to="{query: {type: 'Javascript'}}" class="filter-btn">Javascript</router-link></td>
              <td><router-link :to="{query: {type: 'canvas'}}" class="filter-btn">canvas</router-link></td>
              <td><router-link :to="{query: {type: 'webpack'}}" class="filter-btn">webpack</router-link></td>
            </tr>
            <tr>
              <td>版权：</td>
              <td><router-link :to="{query: {copyright: 'original'}}" class="filter-btn">原创</router-link></td>
              <td><router-link :to="{query: {copyright: 'reprint'}}" class="filter-btn">转载</router-link></td>
              <td><router-link :to="{query: {copyright: 'notes'}}" class="filter-btn">笔记</router-link></td>
            </tr>
            <tr>
              <td>时间：</td>
              <td><router-link :to="{query: {time: '2019'}}" class="filter-btn">2019年</router-link></td>
              <td><router-link :to="{query: {time: '2018'}}" class="filter-btn">2018年</router-link></td>
              <td><router-link :to="{query: {time: '2017'}}" class="filter-btn">2017年</router-link></td>
            </tr>
          </table>
        </div>
        <div>
          <ul class="list">
            <li v-for="(item, index) in blogList" :key="index">
              <el-divider></el-divider>
              <router-link :to="{path: item.link, query: item.query}" class="blog-list">
                <p class="title">{{item.title}}</p>
                <p class="summary">{{item.summary}}</p>
                <div class="tag">
                  <el-tag effect="plain" v-for="(items, indexs) in item.tag" :key="indexs" type="info" color="#e1e1e1">{{items}}</el-tag>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navigation from './../components/nav'
import * as datas from './../assets/blog.js'
export default {
  name: 'blog',
  components: {
    navigation
  },
  mounted() {
    this.windowHeight = window.innerHeight - 61
  },
  data() {
    return {
      windowHeight: '',
      domHeight: ''
    }
  },
  computed: {
    blogList() {
      let filter = this.$route.query
      let that = this
      if(Object.keys(filter).length){
        let filterData = datas.data.filter((item) => {
          return ((item.type || '') === filter.type) || ((item.copyright || '') === filter.copyright) || ((item.time || '') === filter.time)
        })
        if(filterData.length < 3){
          that.domHeight = that.windowHeight + 'px'
        } else {
          that.domHeight = 'auto'
        }
        return filterData
      } else {
        return datas.data
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.main{
  background-color: #f0f0f0;
  height: 100%;
  .center{
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    .filter{
      .filter-btn{
        color: #333;
        text-decoration: none;
      }
      .router-link-exact-active{
        font-weight: bold;
      }
    }
    .list{
      margin: 0;
      padding: 0;
      list-style: none;
      .blog-list{
        display: block;
        padding: 0 20px;
        text-align: left;
        text-decoration: none;
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
  }
}
</style>
