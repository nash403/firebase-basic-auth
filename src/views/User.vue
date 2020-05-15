<template>
  <div>
    <h1 class="mt-5 text-center">
      {{ user ? 'User infos:' : 'No user is signed in.' }}
    </h1>
    <JsonViewer
      v-if="user"
      :value="user"
      boxed
      class="mt-2"
    />
  </div>
</template>

<script>
  import { defineComponent } from '@vue/composition-api'
  import JsonViewer from 'vue-json-viewer'
  import { useAuth } from '@/useAuth'

  export default defineComponent({
    name      : 'User',
    components: { JsonViewer },
    setup (){
      const { user }=  useAuth()

      return { user }
    },
  })
</script>
