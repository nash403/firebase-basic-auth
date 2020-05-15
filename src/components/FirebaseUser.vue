<template>
  <div class="md:flex md:flex-wrap rounded-lg p-4 border border-gray-300 relative">
    <div v-if="showLoader" class="absolute inset-0 flex z-10">
      <div class="absolute w-full h-full bg-gray-300 opacity-50"></div>
      <OrbitSpinner class="m-auto w-32 h-32" />
    </div>
    <div class="md:flex-shrink-0 md:mr-6 md:mb-1">
      <img class="rounded-lg md:w-56 md:min-h-full bg-gray-400" :src="user && user.photoURL ? user.photoURL : require('@/assets/undraw_male_avatar_323b.png')" alt="Signed in user profile picture" />
    </div>
    <div class="mt-4 md:mt-0">
      <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
        Firebase Google Authentication ({{ showLoader ? 'loading...' : 'loaded' }})
      </div>
      <a :href="`mailto:${user ? user.email : ''}`" class="block my-2 text-lg leading-tight font-semibold text-gray-900">
        You are currently <span class="rounded py-px px-1" :class="user ? 'bg-teal-200' :'bg-red-200'">signed {{ user ? `in` : 'out' }}</span> <template v-if="user">as {{ user.displayName }}</template>.
      </a>
      <!-- Button that handles sign-in/sign-out -->
      <button
        class="my-4 py-2 px-6 rounded-md"
        :class="user && ready ? 'bg-red-500' : 'bg-green-500'"
        :disabled="showLoader"
        @click="user ? logout() : login()"
      >
        Sign {{ user ? 'out' : 'in with Google' }}
      </button>
      <p class="text-red-500">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script>
  import { defineComponent, computed } from '@vue/composition-api'
  import OrbitSpinner from '@/components/OrbitSpinner.vue'
  import { useAuth } from '@/useAuth'
  import { useLogin } from '@/useLogin'

  export default defineComponent({
    name      : 'FirebaseUser',
    components: {OrbitSpinner},
    setup () {
      const { ready, user } = useAuth()
      const { login, logout, signingIn, error, credentials } = useLogin()
      const showLoader = computed(() => !ready || signingIn.value)

      return {
        ready,
        signingIn,
        login,
        logout,
        credentials,
        user,
        error,
        showLoader,
      }
    },
  })
</script>

<style scoped>
  img::before, img::after {
    color: transparent;
    @apply .sr-only;
  }
</style>
