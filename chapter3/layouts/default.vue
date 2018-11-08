<template>
  <div>
   <span>default layout</span>
   <AppNavigation/>

   <hr>

   <nuxt/>

   <footer>
     footer
   </footer>

  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'

export default {
components: {
    AppNavigation
  }
}
</script>

<style>
</style>
