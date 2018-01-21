<template>
  <div id="app">
    <el-container>
      <el-header height="120px">
        <THWHeader/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <THWMenu/>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import THWHeader from '@/components/THWHeader'
import THWMenu from '@/components/THWMenu'

export default {
  name: 'App',
  components: {
    THWHeader,
    THWMenu
  }
}
</script>

<style>
.el-header {
  padding: 0;
}
</style>
