// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'

export default {
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'count'
  ])
}
