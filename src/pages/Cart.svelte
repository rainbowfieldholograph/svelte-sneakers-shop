<script lang="ts">
	import ProductCard from '../components/ProductCard.svelte';
	import { getCartItems } from '../storage/adapters/cart';
	const cartProducts = getCartItems();
	const countOfAll = cartProducts?.reduce((acc, { count }) => acc + count, 0);
</script>

<svelte:head>
	<title>Cart</title>
</svelte:head>

<div>
	<h1>Cart ({countOfAll})</h1>
	{#if !cartProducts}
		<p class="empty-title">Cart is empty.</p>
	{:else}
		<ul class="products-list">
			{#each cartProducts as product, i (i)}
				<li>
					<ProductCard {...product} />
					<p>{product.count}</p>
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
