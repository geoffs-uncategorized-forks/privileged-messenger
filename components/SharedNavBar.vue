<template>
  <nav
    class="navbar has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            class="logo"
            alt="Encrypted Messaging"
            src="~/assets/message-lock.jpg"
          >
          <span class="is-size-4">
            &nbsp;Privileged
          </span>
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
      >
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-link">
                <strong>Sign up</strong>
              </a>
              <nuxt-link to="/dashboard" class="button is-light">
                Log in
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'SharedNavBar'
  }
</script>

<style scoped>
.logo {
  max-width: 72px;
}
</style>
