<template>
	<picture class="wg-img">
		<v-lazy-image
			:src="src"
			:srcset="srcset"
			:src-placeholder="placeholder"
		></v-lazy-image>
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
		srcset: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: ''
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
