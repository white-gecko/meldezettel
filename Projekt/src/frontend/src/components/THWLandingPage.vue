<!-- this component will be our landing page -->
import { mapMutations } from 'vuex';
<!-- landing page will demand Rolle, Name, Funktion, Hdz -->
<template>
  <div>
    <el-dropdown @command="this.setRole" style="margin-bottom: 20px">
      <span class="el-dropdown-link">
        Rolle auswählen<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="Sichter">Sichter</el-dropdown-item>
        <el-dropdown-item command="Funker">Funker</el-dropdown-item>
        <el-dropdown-item command="LdF">LdF</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- use element-UI elements to design the component -->
    <el-input
      placeholder="Name"
      v-model="formdata.name"
      style="margin-bottom: 20px"
      :disabled="false">
    </el-input>

    <el-input
      placeholder="Handzeichen"
      v-model="formdata.signature"
      style="margin-bottom: 20px"
      :disabled="false">
    </el-input>

    <el-input
      placeholder="Funktion"
      v-model="formdata.position"
      style="margin-bottom: 20px"
      :disabled="false">
    </el-input>

  <el-button @click="this.setUserData">Bestätigen</el-button>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
// define data function to return stored data
// define method to store data inside store/state.js
export default {

  name: 'THWLandingPage',

  data: () => {
    return {
      formdata: {
        role: '',
        name: '',
        position: '',
        signature: ''
      }
    }
  },

  methods: {

    ...mapMutations(['setUserData']),

    ...mapMutations(['setRole'])

  }
}

</script>

<style>

.landingPage-item {
  margin-bottom: 20px;
}

</style>
