<script lang="ts">
	import ProductCard from '../components/ProductCard.svelte';
	import { getAllProducts } from '../api/products';
	const products = getAllProducts();
</script>

<svelte:head>
	<title>Products</title>
</svelte:head>

<div class="wrapper">
	<h2>Products</h2>
	<ul class="products-list">
		{#each products as product (product.id)}
			<li>
				<ProductCard {...product} />
			</li>
		{/each}
	</ul>
</div>

<style>
	.products-list {
		display: grid;
		gap: 35px;
		grid-template-columns: repeat(auto-fill, minmax(min(360px, 100%), 1fr));
		justify-items: center;
	}
</style>
