<script>
  import { posts, user } from "../../stores.js";
  import { onMount } from "svelte";
  let show = false;

  onMount(async () => {
    firebase.auth().onAuthStateChanged(data => {
      $user = data;

      if (!$user) {
        location.href = "/";
      } else {
        show = true;
      }
    });
  });
</script>

{#if show}
  <section class="container my-3">
    <h3>Latest posts</h3>
    <hr />
    <div class="row">
      <div class="col-12 col-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Ends of the earth</h4>
            <h6 class="card-subtitle mb-2 text-muted">By James Voo</h6>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              veniam nam sit sapiente, tempora dignissimos numquam facilis odit
              assumenda enim?
            </p>
            <a href="." class="card-link">Read More</a>
            <a href="." class="card-link">View Reviews</a>
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}
