<script>
  import { posts } from "../stores.js";
  import AuthForm from "../components/AuthForm.svelte";
  import TopWriter from "../components/TopWriter.svelte";
</script>

<style>
  .landing--bg {
    background: linear-gradient(
      to bottom,
      rgba(75, 75, 75, 1),
      rgba(50, 50, 50, 1)
    );
  }

  .steps {
    border-left: 2px solid #333;
    min-height: 50px;
    margin-left: 50%;
    width: 2px;
  }

  .w-95 {
    width: 95%;
  }

  .ad-space {
    height: 100px;
  }

  .ad {
    height: 100%;
    width: 150px;
  }
</style>

<svelte:head>
  <title>Open Writing - Words Collaboration</title>
</svelte:head>

<section class="container-fluid landing--bg">
  <div class="row p-3 justify-content-center">
    <div class="col-lg-8 mx-auto">
      <div class="row">
        <div class="col-lg-6 d-flex">
          <div class="align-self-center">
            <h1 class="display-4 text-light text-bold">Improve your writing</h1>
            <p class="lead text-light align-self-center">
              Open writing is a project developed for writers to collaborate. It
              is based on a peer-review system, where an author of a piece of
              text posts that text online for other authors or editors to
              review.
            </p>
          </div>
        </div>
        <div class="col-lg-6 p-3">
          <div class="d-none d-lg-block">
            <AuthForm loginMode={false} />
          </div>
          <div class="d-lg-none text-center">
            <button class="btn btn-lg btn-primary">SIGN UP TODAY</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="container my-5 p-5 border shadow rounded w-95">
  <div class="row justify-content-center">
    <h1 class="display-5 text-uppercase">How it works</h1>
  </div>
  <div class="row steps my-2" />
  <div class="row justify-content-center">
    <h3 class="bold text-uppercase">Write your text</h3>
  </div>
  <div class="row justify-content-center">
    <p class="lead w-75 mb-0 text-center">
      Your text can be of any nature. It doesn't matter if you are writing for a
      book, a contract or a tweet - if you want to have it reviewed you can post
      it.
    </p>
  </div>
  <div class="row steps my-2" />
  <div class="row justify-content-center">
    <h3 class="bold text-uppercase">Post your text</h3>
  </div>
  <div class="row justify-content-center">
    <p class="lead w-75 mb-0 text-center">
      By posting your text, it gets added to the home page for the world to see.
      Strong language will unfortunately be covered up. We want to keep the
      community clean and friendly.
    </p>
  </div>
  <div class="row steps my-2" />
  <div class="row justify-content-center">
    <h3 class="bold text-uppercase">Get notified</h3>
  </div>
  <div class="row justify-content-center">
    <p class="lead w-75 mb-0 text-center">
      Every time another user reviews or comments on your post you will receive
      a notification. You can either accept the review, or leave it pending to
      see how other members rate it.
    </p>
  </div>
  <div class="row steps my-2" />
  <div class="row justify-content-center">
    <h3 class="bold text-uppercase">Do your part</h3>
  </div>
  <div class="row justify-content-center">
    <p class="lead w-75 mb-0 text-center">
      You can also post reviews on other user's text. You earn points that
      improves your rank on the site. Higher rank brings perks like badges and
      authority among users. Your opinion will be more valuable to the
      community.
    </p>
  </div>
  <div class="row justify-content-center mt-4">
    <button class="btn btn-primary">GET STARTED</button>
  </div>
</section>

<section class="container-fluid bg-primary py-3">
  <div class="row">
    <div class="ad-space col-12 mx-auto">
      <div
        class="ad border d-flex align-items-center justify-content-center
        rounded bg-light mx-auto">
        AD SPACE
      </div>
    </div>
  </div>
</section>

<section class="container my-5">
  <h1 class="text-center mb-4">TOP WRITERS</h1>
  <div class="row">
    {#each Array(6) as writer}
      <div class="col-lg-4 mb-4">
        <TopWriter />
      </div>
    {/each}
  </div>
</section>
