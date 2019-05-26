<script>
  import { posts } from "../stores.js";
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
          <div class="card border-light my-3 mx-auto" style="max-width: 25rem;">
            <div class="card-header">Get started</div>
            <div class="card-body">
              <h4 class="card-title">Create an account</h4>
              <form>
                <div class="form-group">
                  <label for="email">E-mail address</label>
                  <input id="email" type="email" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input id="password" type="password" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password2">Re-enter your password</label>
                  <input id="password2" type="password" class="form-control" />
                </div>
                <div class="form-group">
                  <button class="btn btn-primary">Sign up</button>
                </div>
                <button class="btn btn-secondary w-100">GitHub</button>
                <button class="btn btn-secondary w-100 mt-1">Google</button>
                <small class="text-muted">
                  Already have an account?
                  <span class="btn btn-link pl-0">Login</span>
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="container p-5">
  <div class="row">
    <h1 class="display-3">How it works</h1>
  </div>
  <div class="row steps my-2 ml-3" />
  <div class="row">
    <h2 class="bold text-uppercase ml-2">Write your text</h2>
  </div>
  <div class="row">
    <p class="lead w-50 mb-0 ml-2">
      Your text can be of any nature. It doesn't matter if you are writing for a
      book, a contract or a tweet - if you want to have it reviewed you can post
      it.
    </p>
  </div>
  <div class="row steps my-2 ml-3" />
  <div class="row">
    <h2 class="bold text-uppercase ml-2">Post your text</h2>
  </div>
  <div class="row">
    <p class="lead w-50 mb-0 ml-2">
      By posting your text, it gets added to the home page for the world to see.
      Strong language will unfortunately be covered up. We want to keep the
      community clean and friendly.
    </p>
  </div>
  <div class="row steps my-2 ml-3" />
  <div class="row">
    <h2 class="bold text-uppercase ml-2">Get notified</h2>
  </div>
  <div class="row">
    <p class="lead w-50 mb-0 ml-2">
      Every time another user reviews or comments on your post you will receive
      a notification. You can either accept the review, or leave it pending to
      see how other members rate it.
    </p>
  </div>
  <div class="row steps my-2 ml-3" />
  <div class="row">
    <h2 class="bold text-uppercase ml-2">Do your part</h2>
  </div>
  <div class="row">
    <p class="lead w-50 mb-0 ml-2">
      You can also post reviews on other user's text. You earn points that
      improves your rank on the site. Higher rank brings perks like badges and
      authority among users. Your opinion will be more valuable to the
      community.
    </p>
  </div>
</section>
