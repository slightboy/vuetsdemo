import Vue from 'vue'
import Vuex from 'vuex'
import todos from './todos'

// https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/store/index.js

const
	debug = process.env.NODE_ENV !== 'production'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
	todos
  },
  strict: debug
})