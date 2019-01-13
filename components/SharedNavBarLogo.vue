<template>
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
</template>
<script>
  export default {
    name: 'SharedNavBarLogo'
  }
</script>
<style scoped>
    .logo {
        max-width: 72px;
    }
</style>