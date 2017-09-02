<template>
  <div class="blog">
    <head-bar></head-bar>
    <div class="main">
      <div class="blog-container">
        <div class="blog-container-lg">
          <el-row type="flex" class="row-bg">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div class="blog-info">
                  <img src="../../assets/images/head.jpeg"/>
                  <label>Lisa</label>
                </div>
                <div class="">
                  <div class="blog-cell" v-for="(item, index) in blogList">
                    <div class="content" >
                      {{item.title}}
                    </div>
                    <!-- <div>{{item.content}}</div> -->
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="blog-content">
                <div class="blog-cell" v-for="(item, index) in blogList">
                  <div class="title">
                    <label>{{item.title}}</label>
                  </div>
                  <div class="content" v-html="compiledMarkdown">
                  </div>
                  <!-- <div>{{item.content}}</div> -->
                </div>
                <el-steps :space="200" direction="vertical" :active="1" >
                  <el-step title="步骤 2"></el-step>
                  <el-step title="步骤 3"></el-step>
                  <div class="blog-cell" v-for="(item, index) in blogList">
                    <el-step :title="item.createdAt" :description="item.content"></el-step>
                  </div>
                </el-steps>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {httpPost} from '../../common/util/http-utils'
import * as Utils from '../../common/util/utils'
import marked from 'marked'
import headBar from '../../common/components/head-bar.vue'
export default {
  name: 'hello',
  data () {
    return {
      blogList: [],
      blogTitleList: []
    }
  },
  created () {
    console.log('888888888')
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
        if (this.blogList.length > 0) {
          for (let i = 0; i < this.blogList.length; i++) {
            this.blogList[i].content = Utils.subContent(this.blogList[i].content)
            console.log(this.blogList[i].content)
          }
        }
      }, (error) => {
        console.log(error)
      })
    }
  },
  computed: {
    compiledMarkdown () {
      let content = '###### angular-cli打包部署之后刷新变为404\n \n解决方法\n在配置路由的时候加一行\n\n    {useHash:true}\n    \n\n  ```\nimport { RouterModule, Routes } from "@angular/router";\nimport { LoginComponent } from "./components/login/login.component";\n\n\nconst routes: Routes = [\n  { path: "login", component: LoginComponent },\n\n]\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes,{useHash:true})],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }\n\t```\n\n'
      return marked(content, { sanitize: true })
    }
  },
  components: {
    headBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-container {
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
}
.blog-container-lg{
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px !important;
  padding-left: 16px;
  padding-right: 16px;
}
.blog-info {
  text-align: center;
  padding:0px 10px 30px 0px;
}
.blog-info img{
  width:100%;
}
/* .blog-info label{
  text-align: center !important;
} */
.blog-content {
  padding-left: 10px;
}
</style>
