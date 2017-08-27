<template>
  <div class="hello">
    首页
    <router-link to="/blog/blog-list">
      <a>my blog index/index</a>
    </router-link>
  </div>
</template>

<script>
import {httpPost} from '../../common/util/http-utils'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a {
  color: #42b983;
}
</style>
