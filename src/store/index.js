import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  // 数据就用state相当于vue文件中的data,用state调用
  state: {
    id: 33344
  },
  // 方法用mutations相当于vue文件中的methods，,用commit更新 $store.commit('change_code', '2')
  mutations: {
    change_id(state, id) {
      state.id = id
    }
  }
})
