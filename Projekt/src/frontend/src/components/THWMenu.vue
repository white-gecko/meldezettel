<template>
<div>
   <el-menu default-active="2" class="el-menu-vertical-demo" :router="true" :collapse="isCollapsed">
      <el-menu-item index="home">
        <i class="el-icon-menu"></i>
        <span slot="title">Übersicht</span>
      </el-menu-item>
      <el-menu-item index="create">
        <i class="el-icon-document"></i>
        <span slot="title">Neues Formular</span>
      </el-menu-item>
      <el-menu-item index="role">
        <i class="el-icon-view"></i>
        <span slot="title">Rollenauswahl</span>
      </el-menu-item>
      <el-menu-item @click="toggleCollapse" index="collapse" :route="this.$route.path">
        <i v-if="!isCollapsed" class="el-icon-d-arrow-left"></i>
        <i v-if="isCollapsed" class="el-icon-d-arrow-right"></i>
        <span slot="title">Verkleinern</span>
      </el-menu-item>
    </el-menu>
</div>
</template>

<script>

export default {

  name: 'THWMenu',

  data: () => {
    return {
      isCollapsed: false
    }
  },

  methods: {

    toggleCollapse: function () {
      this.isCollapsed = !this.isCollapsed
    }
  }

}

</script>
