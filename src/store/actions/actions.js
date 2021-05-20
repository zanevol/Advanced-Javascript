export default {
	ADD_TO_CART({ commit }, product) {
		commit('SET_CART', product)
	},
	DECREMENT_CART_ITEM({ commit }, i) {
		commit('DECREMENT', i)
	},
	INCREMENT_CART_ITEM({ commit }, i) {
		commit('INCREMENT', i)
	},
	DELETE_FROM_CART({ commit }, i) {
		commit('REMOVE_FROM_CART', i)
	}
}