<!-- this component will be our landing page -->
<!-- landing page will demand Rolle, Name, Hdz, Funktion -->
<template>
<el-form
  :model="userData"
  :rules="rules"
  ref="userData"
  class="demo-userData"
  style='background: #DCDFE6; padding: 0.5em 0.5em; font-family: helvetica; width: 500px; margin: auto'>

  <div style="margin-bottom: 30px">
    <span style="color:#606266">Rolle auswählen und Daten eingeben</span>
  </div>

  <el-form-item prop="role" style="margin-bottom: 30px">
    <el-radio-group v-model="userData.role" size="medium">
      <el-radio-button
        v-for="roleOption in roles"
        :label="roleOption"
        :key="roleOption">
        {{ roleOption }}
      </el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item prop="sender" style="margin-bottom: 30px">
    <el-input v-model="userData.sender">
      <template slot='prepend'>
        <span>Name</span>
      </template>
    </el-input>
  </el-form-item>

  <el-form-item prop="signature" style="margin-bottom: 30px">
    <el-input v-model="userData.signature">
      <template slot='prepend'>
        <span>Handzeichen</span>
      </template>
    </el-input>
  </el-form-item>

  <el-form-item prop="position" style="margin-bottom: 30px">
    <el-input v-model="userData.position" v-if="userData.role == 'Sachbearbeiter'">
      <template slot='prepend'>
        <span>Funktion</span>
      </template>
    </el-input>
  </el-form-item>

  <el-form-item>
    <el-button @click="submitForm('userData')">Speichern</el-button>
    <el-button @click="resetForm('userData')">Felder leeren</el-button>
  </el-form-item>

</el-form>

</template>

<script>

import { Notification } from 'element-ui'
// import { mapMutations } from 'vuex'

const roleOptions = ['Sichter', 'LdF', 'Funker', 'Sachbearbeiter']

export default {
  name: 'THWLandingPage',
  data () {
    return {
      userData: {
        role: 'Sachbearbeiter',
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
            message: 'Der Name sollte aus 3-30 Zeichen bestehen',
            trigger: 'blur' }
        ],
        signature: [
          { required: true,
            message: 'Bitte Zeichen eingeben',
            trigger: 'blur' },
          { min: 2,
            max: 3,
            message: 'Das Zeichen sollte aus 2-3 Zeichen bestehen',
            trigger: 'blur' }
        ],
        position: [
          { required: (this.role === 'Sachbearbeiter'),
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
          this.notifySuccess('Eingaben erfolgreich gespeichert')
          this.$store.commit('setShowLandingPage')
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
