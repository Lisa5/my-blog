<template>
  <div class="write-blog">
    <div>
        <label>博客标题</label>
        <el-input placeholder="title" v-model="title"></el-input>
    </div>
    <label>博客内容</label>
    <div id="editor">
        <textarea :value="input" @input="update"></textarea>
        <div v-html="compiledMarkdown"></div>
    </div>
    <div class="publish">
        <el-button type="" @click="pusblish">发布</el-button>
    </div>
  </div>
</template>

<script>
import {httpPost} from '../../common/util/http-utils'
import marked from 'marked'
import _ from 'lodash'
export default {
  name: 'hello',
  data () {
    return {
      input: '# hello',
      title: ' 第一篇博客'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300),
    pusblish () {
      let params = {
        'title': this.title,
        'labels': ['life'],
        'contnet': this.input
      }
      httpPost('', '/api/blog/blog', params).then((data) => {
        console.log(data)
        this.$notify.success({
          title: '成功',
          message: '发布成功啦～',
          offset: 100
        })
      }, (error) => {
        this.$message({
          type: 'error',
          message: error
        })
      })
    }
  }
}
</script>

<style>
.write-blog {
  height:400px;
}
html, body, #editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  border: 1px solid #bfcbd9;
  border-radius: 4px;
}

textarea, #editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
