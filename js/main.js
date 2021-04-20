const products = [
	{ id: 1, title: 'Notebook', price: 20000, src: 'https://items.s1.citilink.ru/1217407_v01_m.jpg' },
	{ id: 2, title: 'Mouse', price: 1500, src: 'https://user-items.s1.citilink.ru/713180_01_b.jpg' },
	{ id: 3, title: 'Keyboard', price: 5000, src: 'https://items.s1.citilink.ru/477614_v01_b.jpg' },
	{ id: 4, title: 'Gamepad', price: 4500, src: 'https://c.dns-shop.ru/thumb/st4/fit/320/250/62e44d0f48df95f8b00ab6ba0e5f04c0/66394ce881ab98b457968e02f88c52870e1b7a2ab8608808cd2758d49e61ee8f.jpg' },
];

const renderProduct = (title, src, price) => {
	return `<div class="product-item">
                <h3>${title}</h3>
								<img src="${src}" alt="${title}">	
                <p>${price}</p>
                <button class="by-btn">В корзину</button>
              </div>`;
};

const renderProducts = (list = []) => {
	const productList = list.map((item) => {
		return renderProduct(item.title, item.src, item.price);
	});

	productList.forEach(elem => {
		document.querySelector('.products').innerHTML += elem;
	});
}

renderProducts(products);
