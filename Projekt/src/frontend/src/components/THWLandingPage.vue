<!-- this component will be our landing page -->
<!-- landing page will demand Rolle, Name, Hdz, Funktion -->
<template>

<div class="userData">
<el-form
  :model="userData"
  ref="userData">

  <el-form-item>
    <h3 style="color:#606266">
      Rolle auswählen und Daten eingeben
    </h3>
  </el-form-item>

  <el-form-item
    style="margin-bottom: 30px"
    v-if="userData.operation.operationName != ''">
    <h3 style="color:#606266">
      Ausgewählter Einsatz: {{ userData.operation.operationName }}
    </h3>
  </el-form-item>

  <el-form-item>
    <el-button
      @click="choosingOperation = !choosingOperation;
        addingOperation = false"
      style="margin-bottom: 20px">
      Einsatz auswählen
    </el-button>

    <el-button
      @click="addingOperation = !addingOperation;
        choosingOperation = false"
      style="margin-bottom: 20px">
      Einsatz erstellen
    </el-button>

    <el-form-item v-if="choosingOperation">
      <el-table
        :data="operations"
        border
        @current-change="selectOperation"
        size="small">
          <el-table-column
            prop="operationName"
            label="Einsatz-Name">
          </el-table-column>
          <el-table-column
            prop="operationAdress"
            label="Einsatz-Adresse">
          </el-table-column>
          <el-table-column
            prop="operationStaffType"
            label="Art des Stabes">
          </el-table-column>
        </el-table>
      </el-form-item>
    </el-form-item>

    <div v-if="addingOperation">
      <div style="margin-bottom: 20px">
        <label
          style="color:#606266">
          Einsatzname
        </label>
        <input v-model="newOperation.operationName"/>
      </div>

      <div style="margin-bottom: 20px">
        <label style="color:#606266">
          Einsatzadresse
        </label>
        <input v-model="newOperation.operationAdress"/>
      </div>

      <div style="margin-bottom: 20px">
        <label style="color:#606266">
          Art des Stabes
        </label>
        <input v-model="newOperation.operationStaffType"/>
      </div>

      <el-form-item>
        <el-button @click="validateOperation()">Einsatz speichern</el-button>
      </el-form-item>
    </div>

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

    <div style="margin-bottom: 20px">
      <label style="color:#606266">
        Absender
      </label>
      <input v-model="userData.sender"/>
    </div>

      <div style="margin-bottom: 20px">
      <label style="color:#606266">
        Handzeichen
      </label>
      <input v-model="userData.identification"/>
    </div>

  <el-form-item style="margintop: 100px">
    <el-button @click="validateUser('userData')">Eingaben speichern</el-button>
    <el-button @click="resetForm('userData')">Felder leeren</el-button>
  </el-form-item>

</el-form>

</div>

</template>

<script>

import { Notification } from 'element-ui'
import { mapActions } from 'vuex'
import { quitstore } from '../api/QuitStoreAdapter.js'
import { parseResponse } from '../sparql_help/sparql_response.js'
import sparql from '../sparql_help/sparql_queries.js'

const roleOptions =
['Sichter', 'LdF', 'Fernmelder', 'SGL', 'Fachberater', 'Verbindungsstelle']
const positionOptions = ['S1', 'S2', 'S3', 'S4', 'S6']

export default {
  name: 'THWLandingPage',
  data () {
    return {
      userData: {
        operation: {
          operationName: '',
          operationAdress: '',
          operationStaffType: '',
          operationID: ''
        },
        role: 'SGL',
        position: '',
        sender: '',
        identification: ''
      },
      // booleans for the operation options to be shown or hidden
      addingOperation: false,
      choosingOperation: false,
      // object for operation selection in table
      currentRowObject: {},
      // new Operation object that binds to operation input
      newOperation: {
        operationName: '',
        operationAdress: '',
        operationStaffType: '',
        operationID: ''
      },

      // objects for operations, roles and positions
      operations: [],
      roles: roleOptions,
      positions: positionOptions
    }
  },

  mounted () {
    let operationsQuery = sparql.operationsQuery()

    quitstore.getData(operationsQuery)
      .then((response) => {
        let data = parseResponse(response)
        this.setStoredOperations(data)
        // vm.setStoredOperations({'storedOperations': data})
      })
      .catch((error) => {
        alert(error)
      })
  },

  methods: {

    ...mapActions(['handleOperation']),

    setStoredOperations (storedOperations) {
      this.$data.operations = storedOperations
      console.log(JSON.stringify(storedOperations))
    },
    // checks if userData is typed in (not empty)
    validateUser (userData) {
      if (this.userData.identification === '' || this.userData.sender === '') {
        alert('Bitte Absender und Handzeichen eintragen.')
      } else {
        this.submitUser()
      }
    },
    // stores userData in store/state.js (vuex)
    submitUser () {
      this.$store.commit('setUser', this.userData)
      this.notifySuccess('Eingaben erfolgreich gespeichert')
      this.$store.commit('setShowLandingPage')
    },
    // resets inputs
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // handle selection of operation in operations table
    selectOperation (selectedOperation) {
      this.currentRowObject = selectedOperation
      this.userData.operation = this.currentRowObject
      this.notifySuccess('Einsatz ausgewählt.')
      this.choosingOperation = false
    },
    // check if operation data is filled in
    validateOperation () {
      if (
        // test if input fields are empty
        this.newOperation.operationName === '' ||
        this.newOperation.operationAdress === '' ||
        this.newOperation.operationStaffType === '') {
        alert('Bitte Einsatzdaten eingeben.')
      } else {
        this.submitOperation()
        this.selectOperation(this.newOperation)
      }
    },
    // check if data of newOperation already is in operations
    /*
    operationIsDuplicate () {
      let isDuplicate = false
      for (operation of this.$data.operations) {
        if (
          this.$data.newOperation.operationName === operation.operationName ||
          this.$data.newOperation.operationAdress === operation.operationAdress
        ) {
          isDuplicate = true
        }
      }
      return isDuplicate
    },
    */
    // handle saving of a new operation
    submitOperation () {
      this.newOperation.operationID = 'operation' + Date.now()
      // Quitstore post via sparql_queries.js and QuitStoreAdapter.js
      this.$store.dispatch('handleOperation', this.newOperation)
      // add operation to operations array for table
      this.operations.push({
        operationName: this.newOperation.operationName,
        operationAdress: this.newOperation.operationAdress,
        operationStaffType: this.newOperation.operationStaffType,
        operationID: this.newOperation.operationID
      })
      this.notifySuccess('Einsatz gespeichert')
      this.newOperation.operationName = ''
      this.newOperation.operationAdress = ''
      this.newOperation.operationStaffType = ''
      this.addingOperation = false
      this.operationID = ''
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
<style>
    .userData{
        background-color: #DCDFE6;
        padding: 0.5em 0.5em;
        font-family: helvetica;
        width: 68%; margin: auto;
    }
</style>
