Vue.component('cart', {
data() {
	return {
		isVisibleCart: false
	}
},
	template: `
	<div>
		<button class="btn-cart" type="button" @click.stop="isVisibleCart = !isVisibleCart">Корзина</button>
		<div class="cart-block" v-show="isVisibleCart">
			<div class="cart-item" data-id="">
				<div class="product-bio">
					<img src="" alt="Some image">
					<div class="product-desc">
						<p class="product-title"></p>
						<p class="product-quantity">Количество: </p>
						<p class="product-single-price"> за ед.</p>
					</div>
				</div>
				<div class="right-block">
					<p class="product-price"> ₽</p>
					<button class="del-btn" data-id="">&times;</button>
				</div>
			</div>
		</div>
	</div>
	`,
});