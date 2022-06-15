<script lang="ts">
  import { Router, Route } from 'svelte-navigator';
  import About from './pages/About.svelte';
  import ProductsList from './pages/ProductsList.svelte';
  import Home from './pages/Home.svelte';
  import Container from './components/Container.svelte';
  import NotFoundPage from './pages/NotFoundPage.svelte';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import './styles/null.css';
  import './styles/default.css';
  import ProductPage from './pages/ProductPage.svelte';
  import Cart from './pages/Cart.svelte';
  import { storageWrapper } from './storage/storage';
</script>

<Router primary={false}>
  <div class="layout">
    <Header />
    <main class="content">
      <Container>
        <Route path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="products/*">
          <Route path="/" component={ProductsList} />
          <Route path=":id" component={ProductPage} />
        </Route>
        <Route path="/cart" component={Cart} />
        <Route component={NotFoundPage} />
      </Container>
    </main>
    <Footer />
  </div>
</Router>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex: 1;
    background-color: var(--background-color);
  }
</style>
