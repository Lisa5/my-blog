
<template>
  <div id="">
    <!-- <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Lisa</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu> -->
    <div class="blog-menu">
        <div class="blog-container-lg">
            <div class="blog-menu-item">
               <router-link to="/blog/blog-list">Lisa的博客</router-link>
            </div>
            <div class="blog-menu-item is-right">
                <router-link to="/blog/about-me"> 关于Lisa</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style>
  .blog-menu{
    background-color: #324157;
    position: relative;
    margin:0;
    display: table;
    width: 100%;
  }
  .blog-menu-item{
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    border-bottom: 5px solid transparent;
    color:#ffffff;
  }
  .blog-menu-item a {
    color: #ffffff;
    text-decoration: none;
  }
</style>
