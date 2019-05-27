<script>
  import { setContext } from "svelte";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  .content {
    padding-top: 53px;
    min-height: 100vh;
  }
</style>

<Nav {segment} />

<main class="content">
  <slot />
</main>

<Footer />
