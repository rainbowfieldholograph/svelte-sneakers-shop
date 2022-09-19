<script lang="ts">
	import { Link } from 'svelte-navigator';

	export let title: string;
	export let brandTitle: string;
	export let image: string;
	export let price: number;
	export let id: number;
</script>

<div class="card" role="button">
	<Link style="" to={`/products/${id}`}>
		<img class="image" src={image} alt={title} />
		<h5 class="title">{title}</h5>
		<h6 class="brand-title">{brandTitle}</h6>
		<p class="price">{price}$</p>
	</Link>
</div>

<style>
	.card {
		max-width: 400px;
		width: 100%;
		cursor: pointer;
		position: relative;
	}
	.image {
		max-width: 100%;
		width: 100%;
	}
</style>
