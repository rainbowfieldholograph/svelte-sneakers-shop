<script lang="ts">
  import { Link } from 'svelte-navigator';

  export let title: string;
  export let brandTitle: string;
  export let image: string;
  export let price: number;
  export let id: number;
</script>

<Link to={String(id)}>
  <div class="card" role="button">
    <img class="image" src={image} alt={title} />
    <h5 class="title">{title}</h5>
    <h6 class="brand-title">{brandTitle}</h6>
    <p class="price">{price}$</p>
  </div>
</Link>

<style>
  .card {
    max-width: 450px;
    width: 100%;
    cursor: pointer;
    position: relative;
  }
</style>
