<template>
  <div class="v-catalog-item">
    <v-popup
      v-if="isInfoPopupVisible"
      @closePopup="closeInfoPopup"
      rightBtnTitle="Add to cart"
      :popupTitle="product_data.name"
      @rightBtnAction="addToCart"
    >
      <img
        class="v-catalog-item__img"
        :src="require('../assets/images/' + product_data.image)"
        alt="img"
      />
      <div>
        <p calss="v-catalog-item__name">{{product_data.name}}</p>
        <p calss="v-catalog-item__price">Price: {{product_data.price}} ₽</p>
        <p calss="v-catalog-item__cat">{{product_data.category}}</p>
      </div>
    </v-popup>
    <img
      class="v-catalog-item__img"
      :src="require('../assets/images/' + product_data.image)"
      alt="img"
    />
    <p calss="v-catalog-item__name">{{product_data.name}}</p>
    <p calss="v-catalog-item__price">Price: {{product_data.price | toFix}} ₽</p>
    <div class="btns">
      <button class="btn" @click="showPopupInfo">Show info</button>
      <button class="v-catalog-item__btn btn" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
import vPopup from "./v-popup";
import toFix from  "../filters/toFix"

export default {
  name: "v-catalog-item",
  components: {
    vPopup,
  },
  data: () => ({
    isInfoPopupVisible: false,
	}),
	filters: {
		toFix
	},
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    showPopupInfo() {
      this.isInfoPopupVisible = !this.isInfoPopupVisible;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
  },
  mounted() {
    this.$set(this.product_data, "quantity", 1);
  },
};
</script>

<style lang="sass">
.v-catalog
	&-item
		flex-basis: 25%
		box-shadow: 0 0 8px 0 #e0e0e0
		padding: 15px
		margin-bottom: 15px
		&__img
			width: 100px

.btns
	display: flex
	justify-content: space-between
	align-items: center
.btn
	background: #66CDAA
	border: none
	padding: 5px 15px
	color: #fff
	cursor: pointer
</style>