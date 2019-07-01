<template>
  <div class="edit">
    <div>
      <el-form :label-position="labelPosition" label-width="80px" ref="form" :model="article">
        <el-form-item label="标题：" prop="title">
          <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="时间：" prop="time">
          <el-input v-model="article.time"></el-input>
        </el-form-item>
        <el-form-item label="类别：" prop="type">
          <el-select v-model="article.copyright" placeholder="请选择">
            <el-option label="原创" value="original"></el-option>
            <el-option label="转载" value="reprint"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标签：" prop="tag">
          <el-checkbox-group v-model="article.tag">
            <el-checkbox label="js"></el-checkbox>
            <el-checkbox label="html"></el-checkbox>
            <el-checkbox label="css"></el-checkbox>
            <el-checkbox label="webpack"></el-checkbox>
            <el-checkbox label="es6"></el-checkbox>
            <el-checkbox label="Vue.js"></el-checkbox>
            <el-checkbox label="event loop"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="内容：" prop="content">
          <quill-editor v-model="article.content" :style="{height: height}"></quill-editor>
        </el-form-item>
      </el-form>
      <div class="btns">
        <el-button type="primary" @click="confirm">保 存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  name: 'edit',
  components: {
    quillEditor
  },
  data() {
    return {
      content: '',
      height: '400px',
      labelPosition: 'right',
      article: {
        title: '',
        time: '',
        type: '',
        tag: [],
        content: ''
      }
    }
  },
  methods: {
    confirm() {
      console.log(this.article)
    }
  },
}
</script>
<style lang="scss" scoped>
.edit{
  padding: 20px 0;
  text-align: left;
  .btns{
    margin-left: 80px;
  }
}
</style>
<style scoped>
.quill-editor >>> .ql-container{
  height: calc(100% - 42px);
}
</style>

