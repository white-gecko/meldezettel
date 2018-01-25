<template>
<div>
  <el-dropdown @command="this.setRole">
    <span class="el-dropdown-link">
      Rolle auswählen<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="Sichter">Sichter</el-dropdown-item>
      <el-dropdown-item command="Funker">Funker</el-dropdown-item>
      <el-dropdown-item command="LdF">LdF</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {

  name: 'THWRoleSelect',

  data: () => {
    return {
      formdata: {
        role: ''
      }
    }
  },

  methods: {

    ...mapMutations(['setRole'])

  }
}

</script>
