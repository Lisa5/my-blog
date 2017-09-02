<template>
  <div class="hello">
    <head-bar></head-bar>
    <div class="main">
      <div class="blog-container">
        <div class="blog-container-lg">
          <el-row type="flex" class="row-bg">
            <el-col :span="6">
              <div class="blog-left">
                <div class="blog-info">
                  <!-- <img src="../../assets/images/head.jpeg"/>
                  <label>Lisa</label> -->
                  <div class="blog-info-title"><label>近期文章</label></div>
                    <div class="blog-info-content" v-for="(item, index) in blogList">
                      <router-link to="/blog/blog-list">
                      <div class="content" >
                        {{item.title}}
                      </div>
                    </router-link>
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
              <transition name="el-fade-in-linear" mode="out-in">
                <router-view></router-view>
              </transition>
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
  components: {
    headBar
  }
}
</script>

<style>
  .blog-container {
    box-sizing: border-box;
    -moz-box-sizing: border-box; /* Firefox */
    -webkit-box-sizing: border-box; /* Safari */
    margin-top: 24px !important;
  }
  .blog-left {
    padding: 10px;
    border: 1px solid #efefef;
  }
  .blog-left a {
    color: #aaaaaa;
  }
  .blog-left a:hover {
    color: #666666;
  }
  .blog-info {
    text-align: left;
    padding:0px 10px 30px 0px;
  }
  .blog-info img{
    width:100%;
  }
  .blog-info-content {
    color:#aaaaaa;
    padding: 8px 0px;
    border-bottom: 1px solid #efefef;
  }
  .blog-content {
    margin-left: 20px;
    padding:10px;
    border: 1px solid #efefef;
    min-height: 600px;
  }
</style>
