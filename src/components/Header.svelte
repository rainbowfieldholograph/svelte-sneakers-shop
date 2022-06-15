<script lang="ts">
  import { Link } from 'svelte-navigator';
  import Container from './Container.svelte';

  interface Link {
    linkTo: string;
    title: string;
  }

  const LINKS_DATA: Link[] = [
    { linkTo: '/', title: 'Home' },
    { linkTo: 'about', title: 'About' },
    { linkTo: 'products', title: 'Products' },
  ];
</script>

<header>
  <Container>
    <nav>
      <ul>
        {#each LINKS_DATA as link}
          <li>
            <Link to={link.linkTo}>
              {link.title}
            </Link>
          </li>
        {/each}
      </ul>
      <Link to={'/cart'}>My cart</Link>
    </nav>
  </Container>
</header>

<style>
  header {
    background-color: var(--background-color);
  }
  nav {
    display: flex;
    justify-content: space-between;
  }
  ul {
    display: flex;
    gap: 2.5rem;
  }
</style>
