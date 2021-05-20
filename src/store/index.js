import Vue from 'vue';
import Vuex from 'vuex';
import commonActions from './actions/actions';
import mutations from './mutations/mutations';
import getters from './getters/getters';
import apiRequests from './actions/api-requests';

Vue.use(Vuex);

const actions = {...commonActions, ...apiRequests}

export default new Vuex.Store({
	state: {
		products: [],
		cart: [],
	},
	mutations,
	actions,
	getters,
	modules: {
	}
})
