<template>
  <div class="hello">
    　<label>力所能及，追赶那个遥远的自己。</label><br>
    <label>你好，我是Lisa</label>
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

<style>
</style>
