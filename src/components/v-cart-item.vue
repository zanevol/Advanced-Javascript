<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__img"
      :src="require('../assets/images/' + cart_item_data.image)"
      alt="img"
    />
    <p class="v-cart-item__name">{{cart_item_data.name}}</p>
    <p class="v-cart-item__price">Price: {{cart_item_data.price | toFix}} ₽</p>
    <p class="v-cart-item__article">{{cart_item_data.article}}</p>
    <button class="v-cart-item__del btn" @click="deleteFromCart">Delete</button>
    <div class="v-cart-item__quantity">
      <p>Qty</p>
      <span class="v-cart-item__minus" @click="decrementItem">-</span>
      {{cart_item_data.quantity}}
      <span class="v-cart-item__plus" @click="incrementItem">+</span>
    </div>
  </div>
</template>

<script>
import toFix from  "../filters/toFix"

export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
	},
	filters: {
		toFix
	},
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
};
</script>

<style lang="sass">
.v-cart
	&-item
		flex-basis: 25%
		box-shadow: 0 0 8px 0 #e0e0e0
		padding: 15px
		margin-bottom: 15px
		&__img
			width: 100px
		&__plus, &__minus
			display: inline-block
			width: 20px
			height: 20px
			background: #66CDAA
			color: #fff
			cursor: pointer
</style>