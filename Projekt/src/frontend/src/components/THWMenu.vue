<template>
<div>
   <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
      <el-menu-item index="home"> 
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="create">
        <i class="el-icon-setting"></i>
        <span>Navigator Three</span>
      </el-menu-item>
    </el-menu>
</div>
</template>

<script>

export default {

  name: 'THWMenu'

}

</script>
