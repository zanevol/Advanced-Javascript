<template>
  <div class="v-popup-wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span class="v-popup__name">{{popupTitle}}</span>
        <span class="v-popup__close" @click="closePopup">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <button class="btn" @click="rightBtnAction">{{rightBtnTitle}}</button>
        <button class="btn" @click="closePopup">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  methods: {
    rightBtnAction() {
      this.$emit("rightBtnAction");
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },
  props: {
    rightBtnTitle: {
      type: String,
      default: "Ok",
    },
    popupTitle: {
      type: String,
      default: "Popup name",
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (target === vm.$refs["popup_wrapper"]) {
        vm.closePopup();
      }
    });
  },
};
</script>

<style lang="sass">
.v-popup-wrapper
	display: flex
	align-items: center
	justify-content: center
	position: absolute
	min-height: 140%
	background-color: rgba(0,0,0,.4)
	top: 0
	right: 0
	bottom: 0
	left: 0
	overflow: hidden
	z-index: 99
.v-popup
	width: 250px
	padding: 16px
	background: #fff
	box-shadow: 0 0 17px 0 #e7e7e7
	&__header
		display: flex
		justify-content: space-between
		align-items: center
	&__content
		display: flex
		justify-content: space-between
		align-items: center
	&__close 
		cursor: pointer
		svg
			display: block
			padding: 0
			margin-top: -35px
			margin-right: -15px
	&__footer
		display: flex
		align-items: center
		justify-content: space-around
		margin-top: 25px
	&__name
		margin: 0 auto 25px
</style>