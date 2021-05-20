<template>
  <div>
    
    <div class="v-catalog">
      <router-link class="v-catalog-link" :to="{name: 'cart', params: {cart_data: CART}}">
        <div class="v-catalog-cart">Cart: {{CART.length}}</div>
      </router-link>

      <h1>Catalog</h1>
      <div class="filters">
        <v-select :selected="selected" :options="categories" @select="sortByCategories" />
        <div class="range-slider">
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            v-model.number="minPrice"
            @change="setRangeSlider"
          />

          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            v-model.number="maxPrice"
            @change="setRangeSlider"
          />
        </div>
        <div class="range-values">
          <span class="range-values__min">Min: {{minPrice}}</span>
          <span class="range-values__max">Max: {{maxPrice}}</span>
        </div>
      </div>

      <div class="v-catalog__list">
        <v-catalog-item
          v-for="product in filteredProducts"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item";
import { mapActions, mapGetters } from "vuex";
import vSelect from "./v-select";


export default {
  name: "v-catalog",
  data: () => ({
    categories: [
      { name: "Все", value: "all" },
      { name: "Мужские", value: "м" },
      { name: "Женские", value: "ж" },
    ],
    selected: "Все",
    sortedProducts: [],
    minPrice: 0,
    maxPrice: 10000,
  }),
  components: {
    vCatalogItem,
		vSelect,
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(
        (item) => item.price >= vm.minPrice && item.price <= vm.maxPrice
      );
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(
          (item) => item.category === category.name
        );
        this.selected = category.name;
      }
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories();
		},
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },

  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        this.sortByCategories();
      }
    });
  },
};
</script>

<style lang="sass">
.v-catalog
	&__list
		display: flex
		align-items: center
		flex-wrap: wrap
		justify-content: space-between
	&-link
		text-decoration: none
		color: #000
	&-cart
		margin-left: auto
		max-width: 115px
		padding: 10px
		border: 1px solid #aeaeae
.filters 
	display: flex
	flex-direction: column
	justify-content: flex-start
	align-items: flex-start
  
.range-slider 
	width: 200px
	margin: auto 16px
	text-align: center
	position: relative
  
.range-slider svg, .range-slider input[type=range] 
	position: absolute
	left: 0
	bottom: 0
  
input[type=range]::-webkit-slider-thumb 
	z-index: 2
	position: relative
	top: 2px
	margin-top: -7px
.range-values
	display: flex
	justify-content: space-between
	align-items: center
	margin-top: 10px
	margin-bottom: 25px
	&__min
		margin-right: 50px

</style>