Vue.component('search', {
	props: ['filterGoods'],
	data() {
		return {
			searchLine: ''
		}
	},
	template: `
	<div class="search-form">
	<input type="text" class="search-field" v-model="searchLine">
	<button class="btn-search" type="submit" @click.prevent="filterGoods(searchLine)">
		<i class="fas fa-search"></i>
	</button>
</div>
	`,
});