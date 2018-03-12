<!-- this component will be our landing page -->
<!-- landing page will demand Rolle, Name, Funktion, Hdz -->
<template>
  <!-- use element-UI elements to design the component
  checkbox-group for role and simple input fields -->
  <div :model='userData'>

    <el-checkbox-group v-model="userData.role" size="medium" style="margin-bottom: 20px">
      <el-checkbox-button v-for="roleOption in roles" :label="roleOption" :key="roleOption">
        {{ roleOption }}
      </el-checkbox-button>
    </el-checkbox-group>

    <el-input
      placeholder="Name"
      v-model="userData.sender"
      style="margin-bottom: 20px"
      :disabled="false">
    </el-input>

    <el-input
      placeholder="Handzeichen"
      v-model="userData.signature"
      style="margin-bottom: 20px"
      :disabled="false">
    </el-input>

    <el-input
      placeholder="Funktion"
      v-model="userData.position"
      style="margin-bottom: 20px"
      :disabled="false">
    </el-input>

    <el-button @click="setUser">Bestätigen</el-button>
  </div>
</template>

<script>

import { Notification } from 'element-ui'
import { mapMutations } from 'vuex'
// define data function to return stored data
const roleOptions = ['Sichter', 'LdF', 'Funker', 'Sachbearbeiter']

export default {

  name: 'THWLandingPage',

  data: () => {
    return {
      userData: {
        role: '',
        sender: '',
        position: '',
        signature: ''
      },
      roles: roleOptions
    }
  },

  methods: {

    ...mapMutations(['setRole']),
    ...mapMutations(['setUser']),
    // define method to store data inside store/state.js
    /*
    setUser: () => {
      this.$store
        .commit('setUser', this.userData)
        .then(() => this.$router.push('home'))
    },
    */

    // just for testing redirect home functionality
    directHome: () => {
      this.$router.push('home')
    },

    notifySuccess (message) {
      Notification({
        title: message,
        duration: 1200,
        type: 'success',
        offset: 120,
        showClose: false
      })
    }

  }
}

</script>
