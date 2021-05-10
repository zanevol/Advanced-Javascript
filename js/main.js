const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
	el: '#app',
	data: {
		catalogUrl: '/catalogData.json',
		products: [],
		imgCatalog: 'https://via.placeholder.com/200x150',
		searchLine: '',
		showError: false
	},
	methods: {
		getJson(url) {
			return fetch(url)
				.then(result => result.json())
				.catch(error => {
					this.showError = true;
				})
		},
		addProduct(product) {
			console.log(product.id_product);
		},
		filterGoods(value) {
			let filtered = [];
			const regexp = new RegExp(value, 'i'); //
			filtered = this.products.filter(product => regexp.test(product.product_name));
			this.products.forEach(el => {
				const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
				if (!filtered.includes(el)) {
					block.classList.add('invisible');
				} else {
					block.classList.remove('invisible');
				}
			})
		}
	},
	beforeCreate() { },
	created() {
		this.getJson(`${API + this.catalogUrl}`)
			.then(data => {
				for (let el of data) {
					this.products.push(el);
				}
			});
	},
	beforeMount() { },
	mounted() { },
	beforeUpdate() { },
	updated() { },
	beforeDestroy() { },
	destroyed() { },
});
