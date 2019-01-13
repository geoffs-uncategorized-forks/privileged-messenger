<template>
  <div>
    <shared-nav-bar />
    <section class="section has-background-grey-lighter">
      <div class="container">
        <div class="columns">
          <div class="column">
            <logo />
            <h1 class="title">
              Privileged
            </h1>
            <p class="subtitle">
              Messenger
            </p>
          </div>
          <div class="column">
            <h2 class="subtitle">
              Benefits
            </h2>
            <ul>
              <li>Benefit #1!</li>
              <li>Benefit #2!</li>
              <li>Benefit #3!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-background-primary">
      <div class="container is-spaced">
        <div class="columns is-centered">
          <div class="column is-half">
            <form>
              <div class="field has-addons">
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Email"
                  >
                </div>
                <div class="control">
                  <a class="button is-info">
                    Sign Up
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <SharedFooter />
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import SharedNavBar from '~/components/SharedNavBar.vue'
  import SharedFooter from '~/components/SharedFooter'

  export default {
  components: {
    SharedFooter,
    Logo,
    SharedNavBar
  }
}
</script>

