
const state = {
	data: [],
	id: '',
	name: '',
	members: new Array<string>(),
	limit: 20,
	skip: 0,
	current: 3,
	total: 101,
	test: ''
}

const getters = {
	pageCount () {
		return state.total / state.limit
	}
}

const actions = {
	async query () {

	},
	async change ({ dispatch, commit }, data: any) {

		commit('change', data)
		await dispatch('query')

	}
}

const mutations = {
  change (state, data: any) {
	  Object.assign(state, data)
  }
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}