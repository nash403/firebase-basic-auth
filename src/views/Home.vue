<template>
  <div class="p-8">
    <img alt="Vue logo" src="../assets/logo.png" class="m-auto" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
  import { defineComponent } from '@vue/composition-api'

  export default defineComponent({
    name      : 'Home',
    components: {
      HelloWorld,
    },
  })
</script>
