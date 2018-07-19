<template>
	<picture class="wg-img">
		<v-lazy-image
			:src="src"
			:srcset="srcset"
			:src-placeholder="placeholder"
		></v-lazy-image>
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
.wg-img {
	overflow: hidden;
	display: block;
	background-color: var(--wg-primary-color);
	/deep/ img {
		display: block;
		overflow: hidden;
		width: 100%;
		filter: blur(5px);
		transform: scale(1.05);
		transition: filter 2s var(--wg-transition-timing-function),
		transform 0 2s var(--wg-transition-timing-function);
		&.v-lazy-image-loaded {
			max-width: 100%;
			filter: blur(0);
			transform: scale(1);
		}
	}
}
</style>
