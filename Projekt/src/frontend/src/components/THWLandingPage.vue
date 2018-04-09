<!-- this component will be our landing page -->
<!-- landing page will demand Rolle, Name, Hdz, Funktion -->
<template>
  <div class="
        landingPage
        hasShadowLandingPageA
        flexContainerLPB">
    <div class="outerWrapper"
         style="padding: 0 20px 20px 20px;">
      <div class="middleWrapper"
           style="
            padding: 0 0 5px 0;
            margin: 0 0 10px 0;">

        <div class="innerWrapper"
             style="
              padding: 10px 10px 0 10px;
              margin: 0 0 5px 0;">
          <!--role-selector-->
          <el-radio-group class="landingPageRoleSelect"
                          v-model="userData.role"
                          @change="checkIfRoleIsNotSGL(userData.role)">
            <el-radio-button v-for="roleOption in roles"
                             :label="roleOption"
                             :key="roleOption">
              {{ roleOption }}
            </el-radio-button>
          </el-radio-group>

          <!--sub-role-selector for SGL-->
          <el-radio-group class="landingPageSubRoleSelect"
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
        </div>

        <div class="innerWrapper"
             style="
              padding: 10px 10px 0 10px;
              margin: 0 0 5px 0;">
          <div class="flexContainerLPA">

            <div class="
              LPInputWrapper
              flexContainerLPA">
              <div class="LPInputSelectionHighlight"></div>
              <label class="LPInputLabel">
                Absender
              </label>
              <input class="LPInputWithLabel"
                     v-model="userData.sender"/>
            </div>

            <div class="
              LPInputWrapper
              flexContainerLPA"
                 style="margin: 0 0 0 10px;">
              <div class="LPInputSelectionHighlight"></div>
              <label class="LPInputLabel">
                Handzeichen
              </label>
              <input class="LPInputWithLabel"
                     v-model="userData.identification"/>
            </div>

          </div>
        </div>

        <div class="innerWrapper"
             style="
              padding: 10px 10px 0 10px;
              margin: 0 0 5px 0;"
             v-if="userData.operation.operationName != ''">

          <div class="
              LPInputWrapper
              flexContainerLPA">
            <div class="LPInputSelectionHighlight"></div>
            <label class="LPInputLabel">
              Ausgewählter Einsatz:
            </label>
            <div class="LPInputWithLabel"
                 style="
                  padding: 10px 0 0 0;
                  text-align: center;">
              {{ userData.operation.operationName }}
            </div>
          </div>

        </div>
      </div>
      <div class="middleWrapper"
           style="
            padding: 0 0 5px 0;
            margin: 0 0 10px 0;">

        <div class="innerWrapper"
             style="
              padding: 10px 10px 0 10px;
              margin: 0 0 5px 0;"
             v-show="choosingOperation">
          <el-table
            style="border: 4px solid var(--middleNeutralColor);"
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

        <div class="innerWrapper"
             style="
              padding: 10px 10px 0 10px;
              margin: 0 0 5px 0;"
             v-show="addingOperation">

          <div class="
              LPInputWrapper
              flexContainerLPA">
            <div class="LPInputSelectionHighlight"></div>
            <label class="LPInputLabel">
              Einsatzname
            </label>
            <input class="LPInputWithLabel"
                   v-model="newOperation.operationName"/>
          </div>

          <div class="
              LPInputWrapper
              flexContainerLPA"
               style="margin: 5px 0 0 0;">
            <div class="LPInputSelectionHighlight"></div>
            <label class="LPInputLabel">
              Einsatzadresse
            </label>
            <input class="LPInputWithLabel"
                   v-model="newOperation.operationAdress"/>
          </div>

          <div class="
              LPInputWrapper
              flexContainerLPA"
               style="margin: 5px 0 0 0;">
            <div class="LPInputSelectionHighlight"></div>
            <label class="LPInputLabel">
              Art des Stabes
            </label>
            <input class="LPInputWithLabel"
                   v-model="newOperation.operationStaffType"/>
          </div>

          <div class="LPButtonWrapper"
               style="
                margin: 5px 0 0 0;">
            <div class="LPButton"
                 @click="submitOperation(newOperation)">
              <div class="LPButtonLabel">
                Einsatz speichern
              </div>
            </div>
          </div>

        </div>

        <div class="
              innerWrapper
              flexContainerLPA"
             style="
              padding: 10px 10px 0 10px;">

          <div class="LPButtonWrapper">
            <div class="LPButton"
                 @click="
                  addingOperation = !addingOperation;
                  choosingOperation = false">
              <div class="LPButtonLabel">
                Einsatz erstellen
              </div>
            </div>
          </div>

          <div class="LPButtonWrapper">
            <div class="LPButton"
                 @click="
                  choosingOperation = !choosingOperation;
                  addingOperation = false">
              <div class="LPButtonLabel">
                Einsatz auswählen
              </div>
            </div>
          </div>

        </div>

      </div>
      <div class="middleWrapper"
           style="padding: 0 0 5px 0;">

        <div class="
              innerWrapper
              flexContainerLPA"
             style="
              padding: 10px 10px 0 10px;">

          <div class="LPButtonWrapper">
            <div class="dashboardButton"
                 @click="validateUser('userData')">
              <div class="LPButtonLabel">
                Eingaben speichern
              </div>
            </div>
          </div>

          <div class="LPButtonWrapper">
            <div class="LPButton"
                 @click="resetUserData()">
              <div class="LPButtonLabel">
                Felder leeren
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
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
      }
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
  .landingPage {
    background-color: var(--semiLightNeutralColor);
    border-top: 20px solid var(--secondaryTextColor);
    padding: 0 10px 20px 10px;
    width: 715px;
    font: var(--bigTitleSize) var(--mainFont);
    color: var(--primaryTextColor);
  }
  .landingPageRoleSelect {
    width: 86%;
    margin: 0 5px 0 40px;
    display: flex;
    justify-content: center;
    font: var(--bigTitleSize) var(--mainFont);
    color: var(--primaryTextColor);
  }
  .landingPageSubRoleSelect {
    width: 40%;
    margin: 10px 5px 0 42px;
    display: flex;
    justify-content: center;
  }

  /* custom input */
  .LPInputWrapper {
    height: 100%;
    width: 100%;
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    border: 4px solid var(--middleNeutralColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .LPInputWrapper:hover .LPInputSelectionHighlight {
    background-color: var(--mainColor);
  }
  .LPInputLabel {
    height: 50px;
    width: 40%;
    background-color: var(--middleNeutralColor);
    padding: 10px 10px 0 10px;
    margin: 0 0 0 0;
    font: var(--bigTitleSize) var(--mainFont);
    color: var(--primaryTextColor);
    overflow-wrap: break-word;
    text-align: center;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .LPInputWithLabel {
    width: 60%;
    height: 50px;
    padding: 0 0 0 10px;
    margin: 0 0 0 0;
    background-color: var(--semiLightNeutralColor);
    border: 0 none;
    font: var(--bigTitleSize) var(--mainFont);
    color: var(--primaryTextColor);
    -webkit-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .LPInputSelectionHighlight {
    height: auto;
    min-width: 10px;
    width: 10px;
    background-color: var(--formBlueColor);
  }

  .landingPageSelectedOperation {
    height: 35px;
    width: 93%;
    background-color: var(--semiLightNeutralColor);
    padding: 5px 0 0 0;
    margin: 0 5px 40px 25px;
    text-align: center  ;
  }

  /* custom button */
  .LPButtonWrapper {
    width: 300px;
    border: 4px solid var(--middleNeutralColor);
  }
  .LPButton {
    height: 50px;
    width: 100%;
    background-color: var(--semiLightNeutralColor);
    padding: 0 0 0 0;
    border-left: 10px solid var(--formBlueColor);
    text-align: center;
    font: var(--bigTitleSize) var(--mainFont);
    color: var(--primaryTextColor);
    -webkit-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .LPButton:hover {
    border-left: 10px solid var(--mainColor);
    cursor: pointer;
  }
  .LPButtonLabel {
    height: 40px;
    width: 100%;
    padding: 5px 40px 0 40px;
    margin: 0 10px 0 10px;
    background-color: var(--middleNeutralColor);
    font: var(--bigTitleSize) var(--mainFont);
    color: var(--primaryTextColor);
    text-align: center;
    cursor: pointer;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .operationContent {
    width: 95%;
    margin: 10px 0 40px 10px;
    display: flex;
    justify-content: center;
  }

  /* custom checkbox */
  .dashboardCheckbox {
    width: 100%;
    margin: 5px 10px 0 10px;
    border: 4px solid var(--middleNeutralColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .dashboardCheckbox:hover div {
    background-color: var(--mainColor);
  }
  .control {
    width: 100%;
    height: 30px;
    padding: 5px 10px 0 30px;
    background-color: var(--middleNeutralColor);
    text-align: center;
    display: block;
    position: relative;
    cursor: pointer;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .control input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .control_indicator {
    height: 30px;
    width: 30px;
    background: var(--formBlueColor);
    position: absolute;
    top: 0;
    left: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .control-radio .control_indicator {
    border-radius: undefined%;
  }
  .control input:checked ~ .control_indicator {
    background: var(--mainColor);
  }
  .control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;

  }
  .control input:checked ~ .control_indicator:after {
    display: block;
  }
  .control-checkbox .control_indicator:after {
    left: 10px;
    top: 4px;
    width: 7px;
    height: 15px;
    border: solid var(--semiLightNeutralColor);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);

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
  .flexContainerLPA {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .flexContainerLPB {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .flexContainerLPC {
    display: flex;
    flex-direction: row;
  }
</style>
