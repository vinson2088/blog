<template>
  <div class="detail">
    <navigation index="/blog"></navigation>
    <div class="main" :style="{height: domHeight}">
      <div class="center">
        <p class="title">{{detail[0].title}}</p>
        <p class="content" v-html="detail[0].content">{{detail[0].content}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import navigation from './../components/nav'
import * as datas from './../assets/blog.js'
export default {
  name: 'detail',
  components: {
    navigation
  },
  mounted() {
    let documentHeight = document.querySelector('.detail').offsetHeight
    let windowHeight = window.innerHeight
    if(documentHeight > windowHeight){
      this.domHeight = 'auto'
    } else {
      this.domHeight = window.innerHeight - 61 + 'px'
    }
  },
  data() {
    return {
      domHeight: ''
    }
  },
  computed: {
    detail() {
      let titles = this.$route.query.name
      let filterData = datas.data.filter((item) => {
        return item.title === titles
      })
      return filterData;
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  background-color: #f0f0f0;
  height: 100%;
  .center{
    width: 100%;
    height: 100%;
    max-width: 700px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    text-align: left;
    .title{
      font-size: 23px;
      color: #333;
    }
    .content{
      color: #333;
    }
  }
}
</style>
<style scoped>
.content >>> .ql-syntax{
  background-color: #f1f1f1;
  font-family: Arial;
  line-height: 1.5;
  padding: 10px;
  overflow-x: auto;
}
.content >>> .reference{
  margin: 10px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border-left: 4px solid #efefef;
  color: #888;
}
.content >>> .reference .link{
  color: #888;
}
</style>
