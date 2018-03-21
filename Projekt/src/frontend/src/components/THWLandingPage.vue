<!-- this component will be our landing page -->
<!-- landing page will demand Rolle, Name, Hdz, Funktion -->
<template>
<el-form
  :model="userData"
  :rules="rules"
  ref="userData"
  class="demo-userData">

  <div style="margin-bottom: 30px">
    <span style="color:#606266">Rolle auswählen und Daten eingeben</span>
  </div>

  <el-form-item>
    <el-dropdown>
      <el-button type="primary">
        Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item>Action 4</el-dropdown-item>
        <el-dropdown-item>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-form-item>

  <el-form-item prop="role" style="margin-bottom: 20px">
    <el-radio-group v-model="userData.role" size="medium">
      <el-radio-button
        v-for="roleOption in roles"
        :label="roleOption"
        :key="roleOption">
        {{ roleOption }}
      </el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item prop="position" style="margin-bottom: 20px">
    <el-radio-group
      v-model="userData.position"
      v-if="userData.role === 'SGL'"
      size="medium">
      <el-radio-button
        v-for="positionOption in positions"
        :label="positionOption"
        :key="positionOption">
        {{ positionOption }}
      </el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item prop="sender" style="margin-bottom: 20px">
    <el-input v-model="userData.sender">
      <template slot='prepend'>
        <span>Name</span>
      </template>
    </el-input>
  </el-form-item>

  <el-form-item prop="signature" style="margin-bottom: 20px">
    <el-input v-model="userData.signature">
      <template slot='prepend'>
        <span>Handzeichen</span>
      </template>
    </el-input>
  </el-form-item>

  <el-form-item style="margintop: 100px">
    <el-button @click="submitForm('userData')">Speichern</el-button>
    <el-button @click="resetForm('userData')">Felder leeren</el-button>
  </el-form-item>

</el-form>

</template>

<script>

import { Notification } from 'element-ui'
// import { mapMutations } from 'vuex'

const roleOptions =
['Sichter', 'LdF', 'Fernmelder', 'SGL', 'Fachberater', 'Verbindungsstelle']
const positionOptions = ['S1', 'S2', 'S3', 'S4', 'S6']

export default {
  name: 'THWLandingPage',
  data () {
    return {
      userData: {
        role: 'SGL',
        position: '',
        sender: '',
        signature: ''
      },

      operations: [],

      roles: roleOptions,

      positions: positionOptions,

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
          { required: (this.role === 'SGL'),
            message: 'Bitte die Funktion auswählen',
            trigger: 'change' }
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
<style>
    .demo-userData{
        background-color: #DCDFE6;
        padding: 0.5em 0.5em;
        font-family: helvetica;
        width: 62%; margin: auto;
    }
    .demo-div{
        margin-left: auto;
        margin-right: auto;
        width: 70%;
    }
    .el-dropdown {
      vertical-align: top;
    }
    .el-dropdown + .el-dropdown {
      margin-left: 15px;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
</style>
