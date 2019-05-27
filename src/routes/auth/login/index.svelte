<script>
  import AuthForm from "../../components/AuthForm.svelte";
</script>

<style>
  .auth-container {
    min-height: calc(100vh - 91px);
  }
</style>

<section
  class="d-flex align-items-center auth-container container-fluid bg-primary
  my-0">
  <AuthForm loginMode={true} />
</section>
