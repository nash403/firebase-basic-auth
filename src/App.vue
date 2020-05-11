<template>
  <div id="app">
    <div id="nav">
      <RouterLink to="/">
        Home
      </RouterLink>
      |
      <RouterLink to="/about">
        About
      </RouterLink>
    </div>
    <p>{{ user && user.displayName }}</p>
    <RouterView />
  </div>
</template>

<script lang="ts">
import { useAuth } from '@/useAuth'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const { auth, user } = useAuth()
    auth()
    return { user }
  },
})
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
