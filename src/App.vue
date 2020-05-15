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
      |
      <RouterLink to="/user">
        User infos
      </RouterLink>
    </nav>
    <div class="divide-y divide-gray-400 mx-4 md:mx-64">
      <FirebaseUser class="mb-6" />
      <RouterView />
    </div>
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
      const { authenticate } = useAuth()
      authenticate()
      return {}
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
