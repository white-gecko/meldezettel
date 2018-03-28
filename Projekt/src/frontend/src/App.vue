<template>
  <div id="app">
   <router-view v-if="!showLandingPage" />
   <THWLandingPage v-if="showLandingPage" />
  </div>
</template>

<script>

import THWLandingPage from '@/components/THWLandingPage'

export default {
  name: 'App',

  components: {
    THWLandingPage
  },

  computed: {
    showLandingPage () {
      return this.$store.state.showLandingPage
    }
  }
}
</script>

<style>
</style>
