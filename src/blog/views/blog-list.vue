<template>
  <div class="hello">
    <h2>Lisa's Blog</h2>
    <div class="blog-cell" v-for="(item, index) in blogList">
      <div class="title">
        <label>{{item.title}}</label>
      </div>
      <div class="content">
        <label>{{item.content}}</label>
      </div>
    </div>
  </div>
</template>

<script>
import {httpPost} from '../../common/util/http-utils'
export default {
  name: 'hello',
  data () {
    return {
      blogList: []
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
        this.blogList = data.blogs.docs
      }, (error) => {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
