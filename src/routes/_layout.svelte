<script>
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

<svelte:head>
  <title>Open Writing - Words Collaboration</title>
</svelte:head>

<Nav {segment} />

<main class="content">
  <slot />
</main>

<Footer />
