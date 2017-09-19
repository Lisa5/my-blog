<template>
  <div class="hello">
    <head-bar></head-bar>
    <div class="main">
      <div class="blog-container">
        <div class="blog-container-lg">
          <transition name="el-fade-in-linear" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div> 
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import {httpPost} from '../../common/util/http-utils'
import headBar from '../../common/components/head-bar.vue'
import footerBar from '../../common/components/footer-bar.vue'
export default {
  name: 'hello',
  data () {
    return {
      blogList: [],
      blogTitleList: []
    }
  },
  created () {
    // this.getBlogList()
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
      }, (error) => {
        console.log(error)
      })
    },
    getBlog (id) {
      this.$router.push({path: '/blog/blog-list', query: {'_id': id}})
    }
  },
  components: {
    headBar,
    footerBar
  }
}
</script>

<style>
  .blog-container {
    box-sizing: border-box;
    -moz-box-sizing: border-box; /* Firefox */
    -webkit-box-sizing: border-box; /* Safari */
    margin-top: 24px !important;
    margin-bottom: 150px;
    min-height: 600px;
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
  .blog-info-content a{
    cursor: pointer;
  }
  .blog-content {
    margin-left: 20px;
    padding:10px;
    border: 1px solid #efefef;
    min-height: 600px;
  }
</style>
