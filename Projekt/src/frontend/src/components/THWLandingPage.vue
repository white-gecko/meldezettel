<!-- this component will be our landing page -->
<!-- landing page will demand Rolle, Name, Funktion, Hdz -->
<template>
  <div>
    <!-- use element-UI elements to design the component -->
    <el-input
      placeholder="Name"
      v-model="input1"
      :disabled="false">
    </el-input>

    <landingPage-item>
    <el-input
      placeholder="Handzeichen"
      v-model="input1"
      :disabled="false">
    </el-input>
    </landingPage-item>

    <el-input
      placeholder="Funktion"
      v-model="input1"
      :disabled="false">
    </el-input>

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

  <el-button>Bestätigen</el-button>
  </div>
</template>

<script>
// define data function to return stored data
// define method to store data inside store/state.js
export default {

  name: 'THWLandingPage',

  data: () => {
    return {
      userData: {
        role: '',
        name: '',
        position: '',
        signature: ''
      }
    }
  }

}
</script>

<style>

.landingPage-item {
  margin-bottom: 20px;
}

</style>
