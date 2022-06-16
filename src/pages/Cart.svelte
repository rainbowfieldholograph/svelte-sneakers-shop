<script lang="ts">
	import ProductCard from '../components/ProductCard.svelte';
	import { getCartItems } from '../storage/adapters/cart';
	const products = getCartItems();
	console.log(products);
</script>

<div>
	<h1>Cart ({products?.length ?? 0})</h1>
	{#if !products}
		<p class="empty-title">Cart is empty.</p>
	{:else}
		<ul class="products-list">
			{#each products as product, i (i)}
				<li>
					<ProductCard {...product} />
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.empty-title {
		margin-top: 1rem;
	}
</style>
