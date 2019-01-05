<!-- this component will be our landing page -->
<!-- landing page will demand Rolle, Name, Hdz, Funktion -->
<template>
  <div>
    <el-row>
      <!--role-selector-->
      <el-radio-group size="small" v-model="userData.role"
        @change="checkIfRoleIsNotSGL(userData.role)">
        <el-radio-button v-for="roleOption in roles" :label="roleOption"
          :key="roleOption">
          {{ roleOption }}
        </el-radio-button>
      </el-radio-group>
    </el-row>

    <el-row>
      <!--sub-role-selector for SGL-->
      <el-radio-group size="small" v-model="userData.position"
        v-if="userData.role === 'SGL'">
        <el-radio-button v-for="positionOption in positions"
          :label="positionOption" :key="positionOption">
          {{ positionOption }}
        </el-radio-button>
      </el-radio-group>
    </el-row>

    <el-row>
      <el-col :span="12">
        <label for="senderInput" class="input-label">Absender</label>
        <el-input id="senderInput" v-model="userData.sender"/>
      </el-col>

      <el-col :span="12">
        <label for="userIdentifactionInput" class="input-label">
          Handzeichen
        </label>
        <el-input id="userIdentifactionInput"
          v-model="userData.identification"/>
      </el-col>
    </el-row>

    <el-row>
      <label>Ausgewählter Einsatz:</label>
      <el-tag v-if="userData.operation.operationName">{{ userData.operation.operationName }}</el-tag>
      <el-tag v-if="!userData.operation.operationName" type="info">unbestimmt</el-tag>

      <el-table  v-show="choosingOperation" :data="operations" border
        @current-change="selectOperation" size="medium">
        <el-table-column prop="operationName" label="Einsatz-Name">
        </el-table-column>
        <el-table-column prop="operationAdress" label="Einsatz-Adresse">
        </el-table-column>
        <el-table-column prop="operationStaffType" label="Art des Stabes">
        </el-table-column>
      </el-table>

      <div v-show="addingOperation">
        <label for="newOpName" class="input-label"> Einsatzname </label>
        <el-input id="newOpName" v-model="newOperation.operationName"/>

        <label for="newOpAddress" class="input-label">Einsatzadresse</label>
        <el-input id="newOpAddress" v-model="newOperation.operationAdress"/>

        <label for="newOpStaffType" class="input-label">Art des Stabes</label>
        <el-input id="newOpStaffType"
          v-model="newOperation.operationStaffType"/>

        <el-button @click="submitOperation(newOperation)" size="small"
          id="saveOperationButton">
          Einsatz speichern
        </el-button>
      </div>
    </el-row>

    <el-row>
      <el-button size="small"
        @click="addingOperation = !addingOperation;
          choosingOperation = false">
        Einsatz erstellen
      </el-button>

      <el-button size="small"
        @click="choosingOperation = !choosingOperation;
          addingOperation = false">
        Einsatz auswählen
      </el-button>
    </el-row>

    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="resetUserData()"
        id="resetUserInputButton">
        Felder leeren
      </el-button>

      <el-button size="small" v-if="showCancelButton" @click="hideLandingPage()"
        id="resetUserInputButton">
        Abbrechen
      </el-button>
      <el-button type="primary" @click="validateUser('userData')"
        id="validateUserButton">
        Eingaben speichern
      </el-button>
    </span>
  </div>
</template>

<script>

import { Notification } from 'element-ui'

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
        role: 'Fernmelder',
        position: '',
        sender: '',
        identification: ''
      },
      // booleans for the operation options to be shown or hidden
      addingOperation: false,
      choosingOperation: false,
      showCancelButton: false,
      // new Operation object that binds to operation input
      newOperation: {
        operationName: '',
        operationAdress: '',
        operationStaffType: '',
        operationID: ''
      },

      // objects for  roles and positions
      roles: roleOptions,
      positions: positionOptions
    }
  },
  // load operations from vuex at reentering landing page
  computed: {
    operations () {
      return this.$store.state.operationList
    }
  },
  // get operations from Quitstore when building landing page
  mounted () {
    this.$store.dispatch('getOperationsAction')
      .then(() => {
        this.setStoredUserData()
      })
  },

  methods: {
    // method to call stored userData from vuex
    setStoredUserData () {
      if (this.$store.state.user.sender !== '') {
        this.userData = this.$store.state.user
        // if there is userData, cancel Button will be displayed
      }
    },
    // method to hide landing page
    hideLandingPage () {
      this.$store.commit('setShowLandingPage')
    },
    // checks if userData is typed in (not empty)
    validateUser (userData) {
      // checks missing fields and generates a custom alert
      if (
        this.userData.identification === '' ||
        this.userData.sender === '' ||
        (this.userData.role === 'SGL' && this.userData.position === '') ||
        this.userData.operation.operationName === ''
      ) {
        let alertMessage = 'Bitte die eingegebenen Daten überprüfen. '
        if (this.userData.identification === '') {
          alertMessage += 'Das Handzeichen fehlt. '
        }
        if (this.userData.sender === '') {
          alertMessage += 'Der Absender fehlt. '
        }
        if (this.userData.role === 'SGL' && this.userData.position === '') {
          alertMessage += 'Die Rolle und/oder die Position fehlen. '
        }
        if (this.userData.operation.operationName === '') {
          alertMessage += 'Es muss ein Einsatz ausgewählt sein. '
        }
        alert(alertMessage)
      } else {
        this.submitUser()
      }
    },
    // stores userData in store/state.js (vuex)
    submitUser () {
      this.$store.commit('setUser', this.userData)
      this.$store.commit('setDefaultFilters')
      this.$store.dispatch('updateTicketListAction')
        .then(() => {
          this.notifySuccess('Eingaben erfolgreich gespeichert')
          this.$store.commit('setShowLandingPage')
          this.$router.push({name: 'Home'})
          this.showCancelButton = true
        })
    },
    // resets inputs
    resetUserData () {
      this.userData.sender = ''
      this.userData.role = 'SGL'
      this.userData.position = ''
      this.userData.identification = ''
      this.userData.operation = {
        operationName: '',
        operationAdress: '',
        operationStaffType: '',
        operationID: ''
      }
    },
    // checks if operation is not SGL to unset position
    checkIfRoleIsNotSGL (role) {
      if (role !== 'SGL') {
        this.userData.position = ''
      }
    },
    // handle selection of operation in operations table
    selectOperation (selectedOperation) {
      this.userData.operation = selectedOperation
      this.notifySuccess('Einsatz ausgewählt.')
      this.choosingOperation = false
    },
    // handle saving of a new operation
    submitOperation (newOperation) {
      if (
        // test if input fields are empty
        this.newOperation.operationName === '' ||
        this.newOperation.operationAdress === '' ||
        this.newOperation.operationStaffType === '') {
        alert('Bitte alle Einsatzdaten eingeben.')
      } else if (this.operationIsDuplicate(newOperation)) {
        alert('Dieser Einsatzname ist bereits vergeben.')
      } else {
        // generate ID
        this.newOperation.operationID = 'operation' + Date.now()
        // set operation inside user
        this.setUserOperation(newOperation)
        // Quitstore post via sparql_queries.js and QuitStoreAdapter.js
        this.$store.dispatch('handleOperation', this.newOperation)
        // add operation to operations array for table
        this.pushToOperationsArray()
        this.resetNewOperationFields()
      }
    },

    operationIsDuplicate (newOperation) {
      let isDuplicate = false
      this.operations.forEach(function (operation) {
        if (operation.operationName === newOperation.operationName) {
          isDuplicate = true
        }
      })
      return isDuplicate
    },

    setUserOperation (operation) {
      this.userData.operation.operationName = operation.operationName
      this.userData.operation.operationAdress = operation.operationAdress
      this.userData.operation.operationStaffType = operation.operationStaffType
      this.userData.operation.operationID = this.newOperation.operationID
    },

    pushToOperationsArray () {
      this.operations.push({
        operationName: this.newOperation.operationName,
        operationAdress: this.newOperation.operationAdress,
        operationStaffType: this.newOperation.operationStaffType,
        operationID: this.newOperation.operationID
      })
    },

    resetNewOperationFields () {
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
  .input-label {
    display: inline-block;
    width: 130px;
  }
</style>
