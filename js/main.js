class ProductList {
	constructor(container = '.products') {
		this.container = container;
		this._goods = []; // Данные
		this.allProducts = []; // Массив эксземпляров товаров на основе this._goods;

		this._fetchGoods();
		this.sumOfGoods();
		this._render();
	}

	_fetchGoods() {
		this._goods = [
			{ id: 1, title: 'Notebook', price: 20000, src: 'https://items.s1.citilink.ru/1217407_v01_m.jpg' },
			{ id: 2, title: 'Mouse', price: 1500, src: 'https://user-items.s1.citilink.ru/713180_01_b.jpg' },
			{ id: 3, title: 'Keyboard', price: 5000, src: 'https://items.s1.citilink.ru/477614_v01_b.jpg' },
			{ id: 4, title: 'Gamepad', price: 4500, src: 'https://c.dns-shop.ru/thumb/st4/fit/320/250/62e44d0f48df95f8b00ab6ba0e5f04c0/66394ce881ab98b457968e02f88c52870e1b7a2ab8608808cd2758d49e61ee8f.jpg' },
		]
	}

	_render() {
		const block = document.querySelector(this.container);

		for (let product of this._goods) {
			const productObject = new ProductItem(product);
			this.allProducts.push(productObject);
			block.insertAdjacentHTML('afterbegin', productObject.render());
		}
	}

	sumOfGoods() {
		let sum = 0;
		let out = '';
		for (let priceItem of this._goods) {
			out = sum += priceItem.price;
		}
		document.querySelector('.total-cost').insertAdjacentText('beforeend', out);
	}
}

class ProductItem {
	constructor(product) {
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.src = product.src;
	}

	render() {
		return `
		<div class="product-item">
			<h3>${this.title}</h3>
			<img src="${this.src}" alt="${this.title}">	
			<p>${this.price}</p>
			<button class="by-btn">В корзину</button>
	</div>`
	}
}

new ProductList();