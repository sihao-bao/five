import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
export default new Vuex.Store({
	state: {
		list: [],
		
	},
	mutations: {

	},
	actions: {
		
	},
	getters:{

	},
	modules: {

	},
	plugins: [vuexLocal.plugin]
})
