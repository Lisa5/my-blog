<template>
<div>
  <el-form :model="formBlog" :rules="rules" ref="formBlog"> 
    <div class="write-blog">
        <div class="write-title">
          <label>博客标题</label>
          <el-row type="flex" class="row-bg">   
              <el-col :span="12" >
                <el-form-item prop="title">
                <el-input placeholder="博客标题" v-model="formBlog.title"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="11" :offset="1">
                <el-form-item label="" prop="labels">
                  <el-radio-group v-model="formBlog.labels">
                    <el-radio :label="1">生活兴趣</el-radio>
                    <el-radio :label="2">开发教程</el-radio>
                    <el-radio :label="3">我的作品</el-radio>
                  </el-radio-group>
                </el-form-item>
                  <!-- <el-button @click="setLabels('life')">生活兴趣</el-button>
                  <el-button @click="setLabels('learn')">开发教程</el-button>
                  <el-button @click="setLabels('production')">我的作品</el-button> -->
              </el-col>     
          </el-row>    
        </div>
        <el-form-item prop="content">
          <div class="write-content">
          <label>博客内容</label>
          <div id="editor">  
              <textarea :value="formBlog.content" @input="update" placeholder="博客内容"></textarea>
              <div v-html="compiledMarkdown"></div> 
          </div>
          </div>
        </el-form-item>
        <div class="write-footer">
          <el-form-item>
            <el-button type="" @click="submit()">发布</el-button>       
            <el-button type="" @click="back()">返回</el-button>
          </el-form-item>
        </div>
    </div>
  </el-form>
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
      formBlog: {
        title: '',
        content: '',
        labels: 3
      },
      input: '',
      title: '',
      labels: [],
      rules: {
        title: [
          {required: true, message: '请输入博客名称', trigger: 'blur'}
        ],
        content: [
          {required: true, message: '请输入博客内容', trigger: 'blur'}
        ]
      }
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.formBlog.content, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.formBlog.content = e.target.value
    }, 300),
    submit () {
      this.$refs.formBlog.validate((valid) => {
        if (valid) {
          if (this.formBlog.content === '' || this.formBlog.content === null) {
            return false
          } else {
            this.pusblish()
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    pusblish () {
      let params = {
        'title': this.formBlog.title,
        'labels': this.transLabels(this.formBlog.labels),
        'content': this.formBlog.content
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
    },
    setLabels (label) {
      this.labels.push(label)
      console.log(this.labels)
    },
    transLabels (label) {
      switch (label) {
        case 1:
          return 'life'
        case 2:
          return 'learn'
        case 3:
          return 'production'
        default:
          return 'life'
      }
    },
    back () {
      this.$router.push('/blog/blog-list')
    }
  }
}
</script>

<style>
.write-blog {
  height:400px;
  padding-bottom: 20px;
}
.write-blog .write-content{
  height:400px;
  padding-bottom: 20px;
}
#editor {
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
  overflow: scroll;
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
.write-title{
  padding-bottom: 15px;
}
.write-footer {
  margin-top:15px;
}
</style>
