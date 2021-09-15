import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import state from './state'
import mutations from './mutation'
import getters from './getter'
import actions from './action'

let store=new vuex.Store({
    state,
    mutations,
    getters,
    actions
})

export default store;