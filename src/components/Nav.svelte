<script>
  export let segment;

  const toggleNavbar = e => {
    const mobileNav = document.querySelector(".navbar-collapse");
    if (mobileNav.classList.contains("collapse")) {
      mobileNav.classList.remove("collapse");
      mobileNav.classList.add("expand");
    } else {
      mobileNav.classList.remove("expand");
      mobileNav.classList.add("collapse");
    }
  };
</script>

<style>
  .navbar-toggler {
    border: none;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
</style>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href=".">
    OPEN
    <span class="text-warning">WRITING</span>
  </a>
  <button on:click={toggleNavbar} class="navbar-toggler" type="button">
    <span class="navbar-toggler-icon" />
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href=".">
          Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=".">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=".">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=".">About</a>
      </li>
    </ul>
  </div>
</nav>
