<template>
  <div id="app">
    <nav id="nav" class="p-8 text-center">
      <RouterLink to="/">
        Home
      </RouterLink>
      |
      <RouterLink to="/about">
        About
      </RouterLink>
    </nav>
    <FirebaseUser />
    <RouterView />
  </div>
</template>

<script lang="ts">
  import { useAuth } from '@/useAuth'
  import { defineComponent } from '@vue/composition-api'
  import FirebaseUser from '@/components/FirebaseUser.vue'

  export default defineComponent({
    components: {
      FirebaseUser,
    },
    setup () {
      const { auth, user } = useAuth()
      auth()
      return { user }
    },
  })
</script>

<style>
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
