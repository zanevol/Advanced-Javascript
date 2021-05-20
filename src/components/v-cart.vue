<template>
  <div>
    <div class="top-line">
      <router-link class="v-catalog-link" :to="{name: 'catalog'}">
        <div class="v-catalog-cart">Back to Catalog</div>
      </router-link>
      <div class="v-cart__total">
        <p>Total: {{cartTotalCost}} ₽</p>
      </div>
    </div>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no goods in cart...</p>
    <div class="v-cart">
      <vCartItem
        v-for="(item, i) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(i)"
        @increment="increment(i)"
        @decrement="decrement(i)"
      />
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item";
import { mapActions } from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data: () => ({}),
  computed: {
    cartTotalCost() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce((sum, el) => {
          return sum + el;
        });

        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "DECREMENT_CART_ITEM",
      "INCREMENT_CART_ITEM",
    ]),
    deleteFromCart(i) {
      this.DELETE_FROM_CART(i);
    },
    increment(i) {
      this.INCREMENT_CART_ITEM(i);
    },
    decrement(i) {
      this.DECREMENT_CART_ITEM(i);
    },
  },
};
</script>

<style lang="sass">
.top-line
	display: flex
	align-items: center
	justify-content: center
.v-cart
	display: flex
	flex-wrap: wrap
	justify-content: space-between
	align-items: center
	&__total
		margin-left: 25px
		border: 1px solid #66CDAA
		background: #66CDAA
		p
			margin: 0
			padding: 10px
			color: #fff
</style>