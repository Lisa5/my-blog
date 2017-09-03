<template>
  <div class="blog">
    <el-row type="flex" class="row-bg">
      <el-col :span="6">
        <div class="blog-left">
          <div class="blog-info">
            <!-- <img src="../../assets/images/head.jpeg"/>
            <label>Lisa</label> -->
            <div class="blog-info-title"><label>近期文章</label></div>
              <div class="blog-info-content" v-for="(item, index) in blogList">
                <!-- <router-link to="/blog/blog-list"> -->
                <a class="content" @click="getBlog(item._id)">
                  {{item.title}}
                </a>
              <!-- </router-link> -->
            </div>
          </div>
          <div class="blog-info">
            <div class="blog-info-title"><label>分类目录</label></div>
            <div class="blog-info-content" v-for="(item, index) in blogList">
              <div class="content" >
                {{item.title}}
              </div>
            </div>
          </div>
          <div class="blog-info">
            <label>文章归档</label>
            <div class="blog-info-content" v-for="(item, index) in blogList">
              <div class="content" >
                {{item.title}}
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="blog-content">
        <div class="content" v-html="compiledMarkdown"></div>
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
// import * as Utils from '../../common/util/utils'
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
        month: '7',
        year: '2017'
      }
      httpPost('', '/api/blog/blogList', params).then((data) => {
        this.blogTitleList = data.blogList
        this.blogList = data.blogs.docs
        this.id = this.blogList[0]._id
        // this.getBlog(this.id)
      }, (error) => {
        console.log(error)
      })
    },
    getBlog (id) {
      let params = {
        _id: id
      }
      console.log('id', id)
      httpGet('', '/api/blog/getBlog', params).then((data) => {
        this.blog = data.blog
        console.log(this.blog)
      }, (error) => {
        console.log(error)
      })
    }
  },
  computed: {
    compiledMarkdown () {
      let content = '###### angular-cli打包部署之后刷新变为404\n \n解决方法\n在配置路由的时候加一行\n\n    {useHash:true}\n    \n\n  ```\nimport { RouterModule, Routes } from "@angular/router";\nimport { LoginComponent } from "./components/login/login.component";\n\n\nconst routes: Routes = [\n  { path: "login", component: LoginComponent },\n\n]\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes,{useHash:true})],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }\n\t```\n\n'
      // let content = this.blog.docs[0].content
      return marked(content, { sanitize: true })
    }
  }
}
</script>

<style scoped>
  
</style>
