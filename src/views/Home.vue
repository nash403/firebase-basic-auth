<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <p>
        Sign in with your Google account below. ({{ !ready || signingIn ? 'loading...' : 'loaded' }})
      </p>

      <p>{{ error }}</p>

      <!-- Button that handles sign-in/sign-out -->
      <button :disabled="!ready || loading" @click="user ? logout() : login()">
        Sign {{ user ? 'out' : 'in with Google' }}
      </button>

      <!-- Container where we'll display the user details -->
      <div>
        Firebase sign-in status:
        <span>Signed {{ user ? 'in' : 'out' }}</span>
        <div>Firebase auth <code>currentUser</code> object value:</div>
        <pre><code>{{ user }}</code></pre>
        <div>Google OAuth Access Token:</div>
        <pre><code>{{ user && credentials }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { useAuth } from '../useAuth'
import { useLogin } from '../useLogin'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name      : 'Home',
  components: {
    HelloWorld,
  },
  setup () {
    const { ready, user } = useAuth()
    const { login, logout, signingIn, error, credentials } = useLogin()

    return {
      ready,
      signingIn,
      login,
      logout,
      credentials,
      user,
      error,
    }
  },
})
</script>
