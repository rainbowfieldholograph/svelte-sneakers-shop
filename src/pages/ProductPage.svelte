<script lang="ts">
  import { getProductById } from '../api/products';
  import { useParams } from 'svelte-navigator';
  import { addCartItem } from '../storage/cart';

  const params = useParams();
  $: $params;

  const { title, brandTitle, image, price, id } = getProductById(+$params.id);

  const onClickBuyButton = () => {
    addCartItem(id);
  };
</script>

<div class="wrapper">
  <img class="image" src={image} alt={title} />
  <div class="details">
    <h1 class="title">{title}</h1>
    <h2 class="brand">{brandTitle}</h2>
    <p class="price">price: {price} usd</p>
    <p class="id">product id: {id}</p>
    <button on:click={onClickBuyButton} class="button">Buy</button>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 10rem;
    row-gap: 2rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2rem;
    max-width: 450px;
    width: 100%;
    text-align: center;
    gap: 1rem;
  }
  .title {
    font-size: 2rem;
  }
  .brand {
    font-size: 1.5rem;
  }
  .image {
    max-width: 450px;
    width: 100%;
  }
  .price {
    font-size: 1rem;
  }
  .button {
    margin-top: auto;
    border-radius: 8px;
    background-color: gray;
    padding: 0.5rem;
    cursor: pointer;
    border: none;
    color: #fff;
  }
  .button:hover,
  .button:focus-visible {
    opacity: 0.9;
  }
  .button:active {
    outline: 2px solid lightgray;
  }
</style>
