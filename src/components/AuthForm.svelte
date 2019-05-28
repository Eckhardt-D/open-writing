<script>
  export let loginMode;
  import { user } from "../stores.js";
  import { goto } from "@sapper/app";

  let email = "";
  let password = "";
  let password2 = "";
  let showError = false;
  let errorMessage = "";
  let showSuccess = false;
  let successMessage = "";

  let handleAuth = () => {
    if (loginMode) {
      return loginWithEmail();
    }

    signUpWithEmail();
  };

  let changeMode = () => {
    loginMode = !loginMode;
  };

  let createError = message => {
    showError = true;
    errorMessage = message;
  };

  let handleErrors = code => {
    switch (code) {
      case "auth/email-already-in-use":
        createError("Email already exists");
        break;
      case "auth/invalid-email":
        createError("Not a valid email address");
        break;
      case "auth/weak-password":
        createError("Your password is too weak.");
        break;
      case "auth/invalid-email":
        createError("User not found");
        break;
      case "auth/user-disabled":
        createError("You are disallowed from this site.");
        break;
      case "auth/user-not-found":
        createError("User not found");
        break;
      case "auth/wrong-password":
        createError("Incorrect e-mail or password");
        break;
      default:
        createError("Something went wrong");
        break;
    }
  };

  let resetForm = () => {
    email = "";
    password = "";
    password2 = "";
  };

  let signUpWithEmail = function() {
    authentication
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        authentication.currentUser
          .sendEmailVerification({
            url: "https://open-writing.firebaseapp.com/auth/login",
            handleCodeInApp: false
          })
          .then(() => {
            resetForm();
            showSuccess = true;
            successMessage = "We have sent a confirmation email";
          })
          .catch(error => {
            showError = true;
            errorMessage = "Error sending email verification";
          });
      })
      .catch(error => handleErrors(error.code));
  };

  let loginWithEmail = function() {
    authentication
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resetForm();
        showSuccess = true;
        successMessage = "Logging in";
      })
      .catch(function(error) {
        $user = false;
        let errorCode = error.code;
        handleErrors(errorCode);
      });
  };
</script>

<div class="card border-light mx-auto" style="max-width: 25rem;">
  <div class="card-header">
    <h5 class="mb-0">
       {loginMode ? 'Login to your account' : 'Create an account'}
    </h5>
  </div>
  <div class="card-body">
    <form>
      <div class="form-group">
        <label for="email">E-mail address</label>
        <input
          bind:value={email}
          id="email"
          type="email"
          class="form-control"
          required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          bind:value={password}
          id="password"
          type="password"
          class="form-control"
          required />
      </div>
      {#if !loginMode}
        <div class="form-group">
          <label for="password2">Re-enter your password</label>
          <input
            bind:value={password2}
            id="password2"
            type="password"
            class="form-control"
            required />
        </div>
      {/if}
      <div class="form-group">
        <button type="button" on:click={handleAuth} class="btn btn-primary">
           {loginMode ? 'Login' : 'Sign Up'}
        </button>
      </div>
      {#if showError}
        <div class="alert alert-dismissible alert-danger">
          <button
            type="button"
            class="close"
            on:click={() => (showError = false)}>
            ×
          </button>
          <strong>Error!</strong>
           {errorMessage}
        </div>
      {/if}
      {#if showSuccess}
        <div class="alert alert-dismissible alert-success">
          <button
            type="button"
            class="close"
            on:click={() => (showSuccess = false)}>
            ×
          </button>
          <strong>Success!</strong>
           {successMessage}
        </div>
      {/if}
      <button class="btn btn-secondary w-100">GitHub</button>
      <button class="btn btn-secondary w-100 mt-1">Google</button>
      <small class="text-muted">
         {loginMode ? "Don't have an account?" : 'Already have an account?'}
        <span on:click={changeMode} class="btn btn-link pl-0">
           {loginMode ? 'Sign up' : 'Login'}
        </span>
      </small>
    </form>
  </div>
</div>
