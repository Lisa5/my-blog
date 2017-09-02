<template>
  <div class="blog">
    
    <div class="blog-cell" v-for="(item, index) in blogList">
      <div class="title">
        <label>{{item.title}}</label>
      </div>
      <div class="content" v-html="compiledMarkdown">
      </div>
      <!-- <div>{{item.content}}</div> -->
    </div>
    <!-- <el-steps :space="150" direction="vertical" :active="1" >
      <el-step title="步骤 2">
      </el-step>
      <el-step title="步骤 3"></el-step>
      <div class="blog-cell" v-for="(item, index) in blogList">
        <el-step :title="item.createdAt" :description="item.content"></el-step>
      </div>
    </el-steps> -->
  </div>
</template>

<script>
import {httpPost} from '../../common/util/http-utils'
// import * as Utils from '../../common/util/utils'
import marked from 'marked'
export default {
  name: 'hello',
  data () {
    return {
      blogList: [],
      blogTitleList: []
    }
  },
  created () {
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
        // if (this.blogList.length > 0) {
        //   for (let i = 0; i < this.blogList.length; i++) {
        //     this.blogList[i].content = Utils.subContent(this.blogList[i].content)
        //     console.log(this.blogList[i].content)
        //   }
        // }
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
