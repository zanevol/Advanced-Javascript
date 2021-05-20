
export default {
	SET_PRODUCTS_TO_STATE: (state, products) => {
		state.products = products;
	},
	SET_CART: (state, product) => {
		if (state.cart.length) {
			let isProductExist = false;
			state.cart.map(t => {
				if (t.article === product.article) {
					isProductExist = true;
					t.quantity++;
				}
			})
			if (!isProductExist) {
				state.cart.push(product);
			}
		}
		else {
			state.cart.push(product);
		}

	},
	REMOVE_FROM_CART: (state, i) => {
		state.cart.splice(i, 1);
	},
	DECREMENT: (state, i) => {
		if (state.cart[i].quantity > 1) {
			state.cart[i].quantity--;
		}
	},
	INCREMENT: (state, i) => {
		state.cart[i].quantity++;
	}
}