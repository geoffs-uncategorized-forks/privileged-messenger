<template>
  <section class="login-form hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Authentication</h3>
          <p class="subtitle has-text-grey">Please sign in with your Google to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="~/assets/message-lock.jpg">
            </figure>
            <button @click=onClick class="button is-block is-info is-large is-fullwidth">Google</button>
          </div>
          <p class="has-text-grey">
            <a href="../">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <nuxt-link to="/">Home</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onClick () {
        console.log('submit')
        return this.$auth.loginWith('google')
          .then(() => {
            console.log('login success')
          })
          .catch(err => console.error('login error', err))
      }
    }
  }
</script>

<style>
  .hero.is-success {
    background: #F2F6FA;
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .box {
    margin-top: 5rem;
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }
  .avatar img {
    opacity: 0.6;
    height: 128px;
    width: 128px;
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
  section.login-form input {
    font-weight: 300;
  }

  section.login-form p {
    font-weight: 700;
  }

  section.login-form p.subtitle {
    padding-top: 1rem;
  }
</style>
