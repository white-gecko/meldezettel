<template>
  <div id="app">
    <THWHeader/>
    <router-view/>
  </div>
</template>

<script>

import THWHeader from '@/components/THWHeader'
export default {
  name: 'App',
  components: {
    THWHeader
  }
}
</script>

<style>
</style>
