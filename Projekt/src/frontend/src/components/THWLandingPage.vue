<!-- this component will be our landing page -->
<!-- landing page will demand Rolle, Name, Hdz, Funktion -->
<template>
  <div class="
        landingPage
        hasShadowLandingPageA
        flexContainerFormB">

    <div class="
      topSection
      hasShadowLandingPageC
      flexContainerFormB">

      <!--role-selector-->
      <el-radio-group class="
                      landingPageRoleSelect
                      hasShadowLandingPageB"
                      v-model="userData.role">
        <el-radio-button v-for="roleOption in roles"
                         :label="roleOption"
                         :key="roleOption">
          {{ roleOption }}
        </el-radio-button>
      </el-radio-group>

      <!--sub-role-selector for SGL-->
      <el-radio-group class="
                      landingPageSubRoleSelect
                      hasShadowLandingPageB"
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

      <div class="flexContainerFormA"
           style="margin-top: 40px">
        <div class="
            landingPageInput
            hasShadowLandingPageB
            flexContainerFormC"
             style="position: relative; right: 2.5px;">
          <label class="landingPageInputLabel">
            Absender
          </label>
          <input class="landingPageInputField"
                 v-model="userData.sender"/>
        </div>
        <div class="
            landingPageInput
            hasShadowLandingPageB
            flexContainerFormC"
             style="position: relative; right: 15px;">
          <label class="landingPageInputLabel">
            Handzeichen
          </label>
          <input class="landingPageInputField"
                 v-model="userData.identification"/>
        </div>
      </div>

      <div class="
          landingPageSelectedOperation
          hasShadowLandingPageB"
           v-if="userData.operation.operationName != ''">
        Ausgewählter Einsatz: {{ userData.operation.operationName }}
      </div>

      <div class="flexContainerFormA" >
        <div class="
            landingPageButton
            hasShadowLandingPageD"
             @click="validateUser('userData')">
          Eingaben speichern
        </div>
        <div class="
            landingPageButton
            hasShadowLandingPageD"
             @click="resetUserData()">
          Felder leeren
        </div>
      </div>

    </div>

    <div class="
          botSection
          hasShadowLandingPageC">
      <div class="
            operationContent
            hasShadowLandingPageB">
        <el-table
          v-show="choosingOperation"
          :data="operations"
          border
          @current-change="selectOperation"
          size="medium">
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
      </div>

      <div class="
            operationContent
            hasShadowLandingPageB
            flexContainerFormB"
           v-show="addingOperation">
        <div class="
            landingPageInput
            hasShadowLandingPageB
            flexContainerFormC"
             style="
              width: 94.2%;
              margin: 20px 10px 20px 20px;">
          <label class="landingPageInputLabel">
            Einsatzname
          </label>
          <input class="landingPageInputField"
                 style="width: 100%;"
                 v-model="newOperation.operationName"/>
        </div>
        <div class="
            landingPageInput
            hasShadowLandingPageB
            flexContainerFormC"
             style="
              width: 94.2%;
              margin: 0 20px 20px 20px;">
          <label class="landingPageInputLabel">
            Einsatzadresse
          </label>
          <input class="landingPageInputField"
                 style="width: 100%;"
                 v-model="newOperation.operationAdress"/>
        </div>
        <div class="
            landingPageInput
            hasShadowLandingPageB
            flexContainerFormC"
             style="
              width: 94.2%;
              margin: 0 20px 20px 20px;">
          <label class="landingPageInputLabel">
            Art des Stabes
          </label>
          <input class="landingPageInputField"
                 style="width: 100%;"
                 v-model="newOperation.operationStaffType"/>
        </div>

        <div class="
            landingPageButton
            hasShadowLandingPageD"
             style="align-self: center"
             @click="submitOperation(newOperation)">
          Einsatz speichern
        </div>

      </div>

      <div class="flexContainerFormA" >
        <div class="
            landingPageButton
            hasShadowLandingPageD"
             @click="
              addingOperation = !addingOperation;
              choosingOperation = false">
          Einsatz erstellen
        </div>
        <div class="
            landingPageButton
            hasShadowLandingPageD"
             @click="
              choosingOperation = !choosingOperation;
              addingOperation = false">
          Einsatz auswählen
        </div>
      </div>

    </div>
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
        this.sortOperations(data)
        this.setStoredUserData()
      })
      .catch((error) => {
        alert(error)
      })
  },

  methods: {

    ...mapActions(['handleOperation']),

    // method to call stored userData from vuex
    setStoredUserData () {
      if (this.$store.state.user.sender !== '') {
        this.userData = this.$store.state.user
      }
    },
    // method to sort operations array
    sortOperations (storedOperations) {
      var op = storedOperations

      for (var i = op.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
          if (op[i].operationName < op[j].operationName) {
            var temp = op[j]
            op[j] = op[i]
            op[i] = temp
          }
        }
      }
      this.setStoredOperations(op)
    },

    setStoredOperations (sortedOperations) {
      this.operations = sortedOperations
    },
    // checks if userData is typed in (not empty)
    validateUser (userData) {
      if (
        this.userData.identification === '' ||
        this.userData.sender === '' ||
        (this.userData.role === 'SGL' && this.userData.position === '') ||
        this.userData.operation.operationName === '') {
        alert(
          'Bitte Absender und Zeichen eintragen sowie einen Einsatz auswählen.'
        )
      } else {
        this.submitUser()
      }
    },
    // stores userData in store/state.js (vuex)
    submitUser () {
      this.$store.commit('setUser', this.userData)
      this.$store.dispatch('setDefaultFilters')
      this.notifySuccess('Eingaben erfolgreich gespeichert')
      this.$store.commit('setShowLandingPage')
      this.$router.push({ path: 'home' })
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
      } if (this.operationIsDuplicate(newOperation)) {
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
      let duplicate = false
      this.operations.forEach(function (operation) {
        if (operation.operationName === newOperation.operationName) {
          duplicate = true
        }
      })
      return duplicate
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
  .landingPage {
    background-color: var(--darkNeutralColor);
    padding: 20px 20px 20px 20px;
    width: 715px;
  }
  .topSection {
    width: 700px;
    padding: 40px 0 0 14px;
    background-color: var(--semiLightNeutralColor);
    font-family: var(--mainFont);
    font-size: var(--smallTitleSize);
    color: var(--primaryTextColor);
    overflow: visible;
  }
  .botSection {
    width: 700px;
    padding: 0 0 0 14px;
    margin: 40px 0 0 0;
    background-color: var(--semiLightNeutralColor);
    font-family: var(--mainFont);
    font-size: var(--smallTitleSize);
    color: var(--primaryTextColor);
    overflow: visible;
  }
  .landingPageRoleSelect {
    width: 86%;
    margin: 0 5px 0 40px;
    display: flex;
    justify-content: center;
  }
  .landingPageSubRoleSelect {
    width: 40%;
    margin: 10px 5px 0 42px;
    display: flex;
    justify-content: center;
  }
  .landingPageInput {
    height: 35px;
    width: 290px;
    margin: 0 0 40px 0;
  }
  .landingPageInputLabel {
    background-color: var(--darkNeutralColor);
    white-space: nowrap;
    min-width: 100px;
    padding: 5px 10px 0 10px;
  }
  .landingPageInputField {
    background-color: var(--semiLightNeutralColor);
    width: 157px;
    padding-left: 10px;
    border: var(--darkNeutralColor);
    border-style: solid;
    border-width:2px;
  }
  .landingPageSelectedOperation {
    height: 35px;
    width: 93%;
    background-color: var(--semiLightNeutralColor);
    padding: 5px 0 0 0;
    margin: 0 5px 40px 25px;
    text-align: center  ;
  }
  .landingPageButton {
    height: 35px;
    width: 30%;
    background-color: var(--semiLightNeutralColor);
    padding: 5px 0 0 0;
    border-bottom: var(--formBlueColor);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    position: relative;
    top: 10px;
    text-align: center;
  }
  .landingPageButton:hover {
    border-bottom: var(--mainColor);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    cursor: pointer;
  }
  .operationContent {
    width: 95%;
    margin: 10px 0 40px 10px;
    display: flex;
    justify-content: center;
  }

  /*
  shadow-settings:
  different shadow settings
   */
  .hasShadowLandingPageA {
    box-shadow: 0px 5px 10px 0px var(--darkShadowColor);
  }
  .hasShadowLandingPageB {
    box-shadow: 0px 10px 20px 1px var(--lightShadowColor);
  }
  .hasShadowLandingPageC {
    box-shadow: 0px 5px 10px 0px var(--middleShadowColor);
  }
  .hasShadowLandingPageD {
    box-shadow: 0px -6px 8px 0px var(--lightShadowColor),
      0px 5px 10px -1px var(--middleShadowColor);
  }

  /*
  flex-settings:
    different settings for the flex attribute
  */
  .flexContainerFormA {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .flexContainerFormB {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .flexContainerFormC {
    display: flex;
    flex-direction: row;
  }
</style>
