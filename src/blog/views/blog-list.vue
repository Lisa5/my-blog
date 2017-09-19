<template>
  <div class="blog-container">
    <el-row type="flex" class="row-bg">
      <el-col :span="6">
        <div class="blog-left">
          <div class="blog-info">
            <!-- <img src="../../assets/images/head.jpeg"/>
            <label>Lisa</label> -->
            <div class="blog-info-title"><label>近期文章</label></div>
              <div class="blog-info-content" v-for="(item, index) in blogList" :key="item._id">
                <a class="content" @click="getBlog(item._id)" v-show="index < 5">
                  {{item.title}}
                </a>
            </div>
          </div>
          <div class="blog-info">
            <div class="blog-info-title"><label>分类目录</label></div>
            <div class="blog-info-content" v-for="(item, index) in blogList" :key="item._id">
              <div class="content" >
                {{item.title}}
              </div>
            </div>
          </div>
          <div class="blog-info">
            <label>文章归档</label>
            <div class="blog-info-content" v-for="(item, index) in blogList" :key="item._id">
              <div class="content" >
                {{item.title}}
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="blog-content">
          <div class="title">
          <label>标题：{{blog.title}}</label>
          </div>
          <div class="content" v-html="compiledMarkdown"></div>
        </div>
        <div class="blog-component-up">
          <i class="el-icon-caret-top"></i>
        </div> 
      </el-col>
    </el-row>
    <!-- <div class="blog-cell" v-for="(item, index) in blogList">
      <div class="title">
        <label>{{item.title}}</label>
      </div>
      <div class="content" v-html="compiledMarkdown">
      </div>
    </div> -->
    
  </div>
</template>

<script>
import {httpPost, httpGet} from '../../common/util/http-utils'
import Utils from '../../common/util/utils'
import marked from 'marked'
export default {
  name: 'hello',
  data () {
    return {
      blogList: [],
      blogTitleList: [],
      blog: {},
      id: ''
    }
  },
  created () {
    // this.id = this.$route.query._id
    this.getBlogList()
  },
  methods: {
    getBlogList () {
      let params = {
        title: '',
        month: Utils.getMonth(),
        year: '2017'
      }
      httpPost('', '/api/blog/blogList', params).then((data) => {
        this.blogTitleList = data.blogList
        this.blogList = data.blogs.docs
        this.id = this.blogList[0]._id
        this.getBlog(this.id)
      }, (error) => {
        this.$message.error(error)
      })
    },
    getBlog (id) {
      let params = {
        '_id': id
      }
      httpGet('', '/api/blog/getBlog', {params}).then((data) => {
        this.blog = data.data
        console.log(this.blog)
      }, (error) => {
        this.$message.error(error)
      })
    }
  },
  computed: {
    compiledMarkdown () {
      // let content = '###### angular-cli打包部署之后刷新变为404\n \n解决方法\n在配置路由的时候加一行\n\n    {useHash:true}\n    \n\n  ```\nimport { RouterModule, Routes } from "@angular/router";\nimport { LoginComponent } from "./components/login/login.component";\n\n\nconst routes: Routes = [\n  { path: "login", component: LoginComponent },\n\n]\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes,{useHash:true})],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }\n\t```\n\n'
      let content = this.blog.content
      return marked(content, { sanitize: true })
    }
  }
}
</script>

<style scoped>
  .blog-container {
    min-height: 600px;
  }
  .blog-component-up {
    background-color: #58b7ff;
    position: fixed;
    right: 100px;
    bottom: 150px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    cursor: pointer;
    opacity: .4;
    transition: .3s;
  }
  .blog-component-up:hover{
    opacity: 1;
  }
  .blog-component-up i{
    color: #fff;
    display: block;
    line-height: 50px;
    text-align: center;
    font-size: 22px;
  }
</style>
