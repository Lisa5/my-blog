<template>
  <div class="about-content">
    <div class="text-4"><label>力所能及，追赶那个遥远的自己。</label></div>
    <div class="text-5"><span>你好，我是Lisa</span><br>
      <span>#公众号# 荼蘼未开</span></div>
    <div class="text-5">
        <span>博客开始创建于2017年9月</span>
    </div>
    <div class="text-5">
        <router-link to="/blog/write-blog">写博客>></router-link>
    </div>
  </div>
</template>

<script>
import {httpPost} from '../../common/util/http-utils'
export default {
  name: 'hello',
  data () {
    return {
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
      httpPost('', 'api/blog/blogList', params).then((data) => {
        console.log(data)
      }, (error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
  .about-content {
    min-height: 500px;
    margin: 50px 0px 30px 20px;
  }
  .about-content .text-4{
    padding-bottom: 30px;
  }
</style>
