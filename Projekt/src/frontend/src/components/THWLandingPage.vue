<!-- this component will be our landing page -->
<!-- landing page will demand Rolle, Name, Hdz, Funktion -->
<template>
<el-form
  :model="userData"
  :rules="rules"
  ref="userData"
  label-width="120px"
  class="demo-userData"
  style='background:lightblue; padding: 0.5em 0.5em; font-family: helvetica'>

  <div>
    <h2 style="color:white">Daten eingeben</h2>
  </div>

  <el-form-item label="Rolle" prop="role">
    <el-radio-group v-model="userData.role" size="medium">
      <el-radio-button
        v-for="roleOption in roles"
        :label="roleOption"
        :key="roleOption">
        {{ roleOption }}
      </el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="Name" prop="sender">
    <el-input v-model="userData.sender"></el-input>
  </el-form-item>

  <el-form-item label="Zeichen" prop="signature">
    <el-input v-model="userData.signature"></el-input>
  </el-form-item>

  <el-form-item label="Funktion" prop="position">
    <el-input v-model="userData.position"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('userData')">Speichern</el-button>
    <el-button @click="resetForm('userData')">Felder leeren</el-button>
  </el-form-item>

</el-form>

</template>

import { Notification } from 'element-ui'
import { mapMutations } from 'vuex'

<script>

const roleOptions = ['Sichter', 'LdF', 'Funker', 'Sachbearbeiter']

export default {
  name: 'THWLandingPage',
  data () {
    return {
      userData: {
        role: '',
        sender: '',
        position: '',
        signature: ''
      },

      roles: roleOptions,

      rules: {
        sender: [
          { required: true,
            message: 'Bitte Namen eingeben',
            trigger: 'blur' },
          { min: 3,
            max: 30,
            message: 'Der Name sollte aus 2-30 Zeichen bestehen',
            trigger: 'blur' }
        ],
        signature: [
          { required: true,
            message: 'Bitte ein Zeichen eingeben',
            trigger: 'blur' },
          { min: 2,
            max: 3,
            message: 'Das Zeichen sollte aus 2-3 Zeichen bestehen',
            trigger: 'blur' }
        ],
        position: [
          { required: true,
            message: 'Bitte die Funktion eingeben',
            trigger: 'blur' },
          { min: 2,
            max: 3,
            message: 'Die Funktion sollte aus 2-3 Zeichen bestehen',
            trigger: 'blur' }
        ],
        role: [
          { required: true,
            message: 'Bitte eine Rolle auswählen',
            trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    notifySuccess (message) {
      Notification({
        title: message,
        duration: 1200,
        type: 'success',
        offset: 120,
        showClose: false
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.commit('setUser', this.userData)
          this.notifySuccess('Speichern erfolgreich')
          this.$router.push('home')
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
