<template>
	<picture class="wg-img">
		<v-lazy-image
			:src="src"
			:srcset="`${large || src} 1200w, 
				${medium || src} 972w, 
				${small || src} 480w`"
			:src-placeholder="placeholder"
		/>
		<slot />
	</picture>
</template>
<script>
import VLazyImage from "v-lazy-image";

export default {
	name: 'WgImg',	
	components: {
		VLazyImage
	},
	props: {
		src: {
			type: String,
			required: true,
			default: ''
		},
		large: {
			type: String,
			default: null
		},
		medium: {
			type: String,
			default: null
		},
		small: {
			type: String,
			default: null
		},
		placeholder: {
			type: String,
			default: null
		},
	},
}
</script>
<style lang="scss" scoped>
.filter {
  display: none;
}
.wg-img {
	position: relative;
	display: block;
	background-color: var(--wg-primary-color);
	/deep/ img {
		display: block;
		overflow: hidden;
		width: 100%;
		// &.v-lazy-image {
		//   opacity: 0;
		//   transition: opacity 2s;
		// }
		&.v-lazy-image-loaded {
			max-width: 100%;
			// opacity: 1;
		}
	}
}
</style>
