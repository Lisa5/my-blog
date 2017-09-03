
<template>
  <div id="">
    <div class="blog-footer">
        <div class="blog-container-lg">
            <!-- <div class="blog-menu-item">
               <router-link to="/blog/blog-list">Lisa的博客</router-link>
            </div>
            <div class="blog-menu-item is-right">
                <router-link to="/blog/about-me"> 关于Lisa</router-link>
            </div> -->
            <div class="blog-footer-item">
                <label>Copyright © Buking 2019-****	Create by Lisa </label>
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
  .blog-footer{
    background-color: #324157;
    position: relative;
    bottom:0;
    display: table;
    width: 100%;
  }
  .blog-footer-item{
    float: left;
    height: 80px;
    line-height: 80px;
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
