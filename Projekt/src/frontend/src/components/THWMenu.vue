<template>
  <div>
    <el-menu
      default-active="home"
      class="el-menu-vertical-demo" :router="true" :collapse="isCollapsed">
      <el-menu-item index="home" :route="{name:'Home'}">
        <i class="el-icon-menu"></i>
        <span slot="title">Übersicht</span>
      </el-menu-item>
      <el-menu-item index="create" :route="{name:'Create'}">
        <i class="el-icon-document"></i>
        <span slot="title">Neues Formular</span>
      </el-menu-item>
      <el-menu-item index="role" :route="{name:'Role'}">
        <i class="el-icon-view"></i>
        <span slot="title">Rollenauswahl</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {

  name: 'THWMenu',

  data: () => {
    return {
      isCollapsed: false,
      activeLink: null
    }
  }
}

</script>
