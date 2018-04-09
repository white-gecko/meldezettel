<template>
  <div class="flexContainerDashboardA">

    <div class="
          dashboard
          hasShadowDashboardA">
      <div class="outerWrapper"
           style="padding: 0 20px 10px 20px;">
        <el-table :data="ticketList"
                  style="width: 100%"
                  border
                  :header-cell-style="{
                    'font': 'var(--titleSize) var(--mainFont)',
                    'color': 'var(--primaryTextColor)',
                    'border-bottom': '20px solid var(--darkNeutralColor)'}">
          <el-table-column min-width="6%">
            <template slot-scope="scope" width="100%">
              <router-link v-bind:to="{
          name:'Create',
          params:{id: ticketList[scope.$index]['id'] }}"
                           tag="el-button">
                <i class="el-icon-zoom-in"></i>
              </router-link>
            </template>
          </el-table-column>

          <!-- Festlegen der zu verwendenden Werte aus dem VVD -->
          <el-table-column :formatter="formatState"
                           label="Status"
                           prop="ticketState"
                           align="center"
                           min-width="6%"></el-table-column>

          <el-table-column prop="numberTB"
                           label="TB Nr."
                           align="center"
                           min-width="6.5%"></el-table-column>

          <el-table-column prop="creator"
                           label="Verf."
                           min-width="7%"></el-table-column>

          <el-table-column prop="docketIdentification"
                           label="Sichter"
                           min-width="7%"></el-table-column>

          <el-table-column :formatter="formatDate"
                           prop="date"
                           label="Datum"
                           align="center"
                           min-width="9%"></el-table-column>

          <el-table-column :formatter="formatTime"
                           prop="time"
                           label="Uhrzeit"
                           align="center"
                           min-width="7%"></el-table-column>

          <el-table-column prop="receiverName"
                           label="Empfänger"
                           min-width="18%"></el-table-column>

          <el-table-column :formatter="formatContent"
                           prop="content"
                           label="Kurzinhalt"
                           min-width="33.5%"></el-table-column>

        </el-table>
      </div>
    </div>

    <div class="
          dashboardSideMenu
          hasShadowDashboardA
          flexContainerDashboardB">

      <div class="outerWrapper"
           style="padding: 0 0 0 20px">

        <div class="
              middleWrapper
              dashboardSideMTopSection">

          <div class="
                innerWrapper
                dashboardSideMTopTop">
            <div style="border: 4px solid var(--middleNeutralColor);">
              <input class="dashboardInput"
                     v-model='filter.search'
                     placeholder="Suche"/>
            </div>
          </div>

        </div>

        <div class="
              middleWrapper
              dashboardSideMMidSection">

          <div class="
                innerWrapper
                dashboardSideMMidTop">
            <label class="
                    dashboardLabel
                    hasShadowDashboardB">
              Einsatz:
            </label>

            <div class="dashboardButtonWrapper">
              <select class="dashboardSelect"
                      v-model='filter.operation'>
                <option class="dashboardOption"
                        value='Alle'>
                  Alle
                </option>
                <option class="dashboardOption"
                        v-for='operation in operationList'
                        :key='operation.operationName'
                        :value='operation.operationName'>
                  {{ operation.operationName }}
                </option>
              </select>
            </div>

          </div>

        </div>
        <div class="
              middleWrapper
              dashboardSideMMidSection">

          <div class="
                innerWrapper
                dashboardSideMMidBot">
            <label class="
                    dashboardLabel
                    hasShadowDashboardB">
              Status:
            </label>

            <div class="dashboardButtonWrapper">
              <div class="dashboardButton"
                   @click="showHideIncoming">
                <div class="dashboardButtonLabel">
                  Eingang
                </div>
              </div>
            </div>
            <div class="flexContainerDashboardA"
                 style="flex-wrap: wrap; margin: 0 0 10px 0"
                 v-show="isIncoming">

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Erstellt
                  <input type="checkbox" v-model='filter.s11'/>
                  <div class="control_indicator"></div>
                </label>
                <i class="el-icon-edit-outline stateFilter in"
                   style="padding: 4px 5px 0 5px"/>
              </div>

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Zurückgeschickt
                  <input type="checkbox" v-model='filter.s12'/>
                  <div class="control_indicator"></div>
                </label>
                <i class="el-icon-circle-close stateFilter in"
                   style="padding: 4px 5px 0 5px"/>
              </div>

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Zu sichten
                  <input type="checkbox" v-model='filter.s13'/>
                  <div class="control_indicator"></div>
                </label>
                <i class="el-icon-tickets stateFilter in"
                   style="padding: 4px 5px 0 5px"/>
              </div>

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Druckfertig
                  <input type="checkbox" v-model='filter.s14'/>
                  <div class="control_indicator"></div>
                </label>
                <i class="el-icon-printer stateFilter in"
                   style="padding: 4px 5px 0 5px"/>
              </div>

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Archiviert
                  <input type="checkbox" v-model='filter.s15'/>
                  <div class="control_indicator"></div>
                </label>
                <div style="
                  height: 20px;
                  width: 20px;
                  background-color: var(--formBlueColor);
                  margin: 5px 5px 0 5px;"></div>
              </div>
            </div>

            <div class="dashboardButtonWrapper">
              <div class="dashboardButton"
                   @click="showHideOutgoing">
                <div class="dashboardButtonLabel">
                  Ausgang
                </div>
              </div>
            </div>
            <div class="flexContainerDashboardA"
                 style="flex-wrap: wrap; margin: 0 0 10px 0"
                 v-show="isOutgoing">

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Zu sichten
                  <input type="checkbox" v-model='filter.s1'/>
                  <div class="control_indicator"></div>
                </label>
                <i class="el-icon-edit-outline stateFilter out"
                   style="padding: 4px 5px 0 5px"/>
              </div>

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Zurückgeschickt
                  <input type="checkbox" v-model='filter.s2'/>
                  <div class="control_indicator"></div>
                </label>
                <i class="el-icon-circle-close stateFilter out"
                   style="padding: 4px 5px 0 5px"/>
              </div>

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Gesichtet
                  <input type="checkbox" v-model='filter.s3'/>
                  <div class="control_indicator"></div>
                </label>
                <i class="el-icon-view stateFilter out"
                   style="padding: 4px 5px 0 5px"/>
              </div>

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Sendefertig
                  <input type="checkbox" v-model='filter.s4'/>
                  <div class="control_indicator"></div>
                </label>
                <i class="el-icon-service stateFilter out"
                   style="padding: 4px 5px 0 5px"/>
              </div>

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Versandt(LdF)
                  <input type="checkbox" v-model='filter.s5'/>
                  <div class="control_indicator"></div>
                </label>
                <i class="el-icon-circle-check-outline stateFilter out"
                   style="padding: 4px 5px 0 5px"/>
              </div>

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Versandt(Sichter)
                  <input type="checkbox" v-model='filter.s6'/>
                  <div class="control_indicator"></div>
                </label>
                <i class="el-icon-circle-check stateFilter out"
                   style="padding: 4px 5px 0 5px"/>
              </div>

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Zurück(Funker)
                  <input type="checkbox" v-model='filter.s7'/>
                  <div class="control_indicator"></div>
                </label>
                <i class="el-icon-circle-close-outline stateFilter out"
                   style="padding: 4px 5px 0 5px"/>
              </div>

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Druckfertig
                  <input type="checkbox" v-model='filter.s8'/>
                  <div class="control_indicator"></div>
                </label>
                <i class="el-icon-printer stateFilter out"
                   style="padding: 4px 5px 0 5px"/>
              </div>

              <div class="
                dashboardCheckbox
                flexContainerDashboardA">
                <label class="control control-checkbox">
                  Archiviert
                  <input type="checkbox" v-model='filter.s9'/>
                  <div class="control_indicator"></div>
                </label>
                <div style="
                  height: 20px;
                  width: 20px;
                  background-color: var(--formGreenColor);
                  margin: 4px 5px 0 5px;"></div>
              </div>
            </div>

          </div>

        </div>

        <div class="
              middleWrapper
              dashboardSideMBotSection">

          <div class="
                innerWrapper
                dashboardSideMBotTop">

            <div class="dashboardButtonWrapper">
              <div class="dashboardButton"
                   @click="useFilters()">
                <div class="dashboardButtonLabel">
                  Anwenden
                </div>
              </div>
            </div>

            <div class="dashboardButtonWrapper">
              <div class="dashboardButton"
                   @click="resetFilters()">
                <div class="dashboardButtonLabel">
                  Zurücksetzen
                </div>
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

export default {
  name: 'THWDashboard',

  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.dispatch('updateTicketListAction')
        .catch(error => alert(error))
    })
  },

  beforeRouteUpdate (to, from, next) {
    next(false)
  },

  data: () => {
    return {
      isIncoming: false,
      isOutgoing: false
    }
  },

  computed: {
    ticketList () {
      return this.$store.state.ticketlist
    },
    filter () {
      return this.$store.state.filter
    },
    operationList () {
      return this.$store.state.operationList
    }
  },

  methods: {
    showHideIncoming: function () {
      if (this.isIncoming) {
        this.isIncoming = false
      } else {
        this.isIncoming = true
      }
    },
    showHideOutgoing: function () {
      if (this.isOutgoing) {
        this.isOutgoing = false
      } else {
        this.isOutgoing = true
      }
    },
    resetFilters: function () {
      this.$store
        .dispatch('setDefaultFilters')
        .then(() => {
          this.useFilters()
        })
        .catch((error) => alert(error))
    },
    /*  function that updates the displayed documents on dashboard
        after filters got changed,
        works similar to beforeRouteEnter
    */
    useFilters: function () {
      this.$store.dispatch('updateTicketListAction')
        .then(() => {
          this.notifySuccess('Filter angewandt')
        })
        .catch(error => alert(error))
    },
    notifySuccess (message) {
      Notification({
        title: message,
        duration: 1200,
        type: 'success',
        offset: 120,
        showClose: false
      })
    },
    // formatter that returns the fitting icons for all different states
    formatState (row, column, cellValue) {
      switch (cellValue) {
        case 1:
          return <i class='el-icon-edit-outline out stateTable'></i>
        case 2:
          return <i class='el-icon-circle-close out stateTable'></i>
        case 3:
          return <i class='el-icon-view out stateTable'></i>
        case 4:
          return <i class='el-icon-service out stateTable'></i>
        case 5:
          return <i class='el-icon-circle-check-outline out stateTable'></i>
        case 6:
          return <i class='el-icon-circle-close-outline out stateTable'></i>
        case 7:
          return <i class='el-icon-circle-check out stateTable'></i>
        case 8:
          return <i class='el-icon-printer out stateTable'></i>
        case 9:
          return <span class='out stateTable'>&#9632;</span>
        case 11:
          return <i class='el-icon-edit-outline in stateTable'></i>
        case 12:
          return <i class='el-icon-circle-close in stateTable'></i>
        case 13:
          return <i class='el-icon-tickets in stateTable'></i>
        case 14:
          return <i class='el-icon-printer in stateTable'></i>
        case 15:
          return <span class='in stateTable'>&#9632;</span>
        default:
          // if this is reached, that means that there is an issue
          // in the whole state process => a warning is shown
          return <i class='el-icon-warning warn stateTable'></i>
      }
    },
    formatDate (row, column, cellValue) {
      // return (new Date(cellValue)).toLocaleDateString()
      return cellValue
    },
    formatTime (row, column, cellValue) {
      // return (new Date(cellValue)).toLocaleTimeString()
      return cellValue
    },
    formatContent (row, column, cellValue) {
      return String(cellValue).length > 80
        ? cellValue.substring(0, 77) + '...' : cellValue
    }
  }
}
</script>

<style>
  .el-row{
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-checkbox-button{
    margin-right: 10px;
  }
  .out{
    color: var(--formGreenColor);
  }
  .in{
    color: var(--formBlueColor);
  }
  .warn{
    color:var(--formRedColor);
  }
  .stateFilter{
    font-size: 21px;
  }
  .stateTable {
    font-size: 35px;
  }
  .dashboard {
    background-color: var(--semiLightNeutralColor);
    width: 75%;
    height: auto;
    padding: 0 10px 20px 10px;
    margin: 0 0 0 0;
    border-top: 20px solid var(--secondaryTextColor);
    font-size: var(--titleSize);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .dashboardSideMenu {
    background-color: var(--semiLightNeutralColor);
    width: 20%;
    padding: 0 0 20px 10px;
    margin: 0 0 0 2%;
    border-top: 20px solid var(--secondaryTextColor);
    position: absolute;
    left: 78%;
    font-size: var(--titleSize);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  /* sections */
  .dashboardSideMTopSection {
    padding: 0 0 5px 0;
    margin: 0 0 10px 0;
  }
  .dashboardSideMMidSection {
    padding: 0 0 5px 0;
    margin: 0 0 10px 0;
  }
  .dashboardSideMBotSection {
    padding: 0 0 5px 0;
    margin: 0 0 10px 0;
  }

  /* elements */
  .dashboardSideMTopTop {
    padding: 10px 10px 0 10px;
    margin: 0 0 0 0;
  }
  .dashboardSideMMidTop {
    padding: 45px 10px 0 10px;
    margin: 0 0 5px 0;
  }
  .dashboardSideMMidBot {
    padding: 45px 10px 0 10px;
    margin: 0 0 0 0;
  }
  .dashboardSideMBotTop {
    padding: 10px 10px 0 10px;
    margin: 0 0 0 0;
  }

  /* custom input */
  .dashboardInput {
    height: 50px;
    width: 100%;
    background-color: var(--semiLightNeutralColor);
    margin: 0 0 0 0;
    padding: 0 0 0 10px;
    border-style: none;
    border-left: 10px solid var(--formBlueColor);
    font-size: var(--titleSize);
    -webkit-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .dashboardInput:hover {
    border-left: 10px solid var(--mainColor);
  }
  .dashboardSelect {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 50px;
    width: 100%;
    background-color: var(--semiLightNeutralColor);
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    cursor: pointer;
    font-size: var(--titleSize);
    -webkit-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    border-style: none;
    border-left: 10px solid var(--formBlueColor);
    text-align: center;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .dashboardSelect:hover {
    border-left: 10px solid var(--mainColor);
  }

  /* custom label*/
  .dashboardLabel {
    height: 30px;
    width: auto;
    padding: 5px 10px 0 10px;
    background-color: var(--middleNeutralColor);
    font-size: var(--titleSize);
    position: absolute;
    top: 0;
    left: 10px;
  }

  /* custom button */
  .dashboardButtonWrapper {
    margin: 5px 0 0 0;
    border: 4px solid var(--middleNeutralColor);
  }
  .dashboardButton {
    height: 50px;
    width: 100%;
    background-color: var(--semiLightNeutralColor);
    padding: 0 0 0 0;
    border-left: 10px solid var(--formBlueColor);
    text-align: center;
    font-size: var(--titleSize);
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
  .dashboardButton:hover {
    border-left: 10px solid var(--mainColor);
    cursor: pointer;
  }
  .dashboardButtonLabel {
    height: 40px;
    width: 100%;
    padding: 10px 40px 0 40px;
    margin: 0 10px 0 10px;
    background-color: var(--middleNeutralColor);
    font-size: var(--titleSize);
    text-align: center;
    cursor: pointer;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
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
  .hasShadowDashboardA {
    box-shadow: 0px 5px 10px 0px var(--lightShadowColor);
  }
  .hasShadowDashboardB {
    box-shadow: 0px 5px 10px -6px var(--lightShadowColor);
  }
  .hasShadowDashboardC {
    -webkit-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
  }

  /*
  flex-settings:
    different settings for the flex attribute
  */
  .flexContainerDashboardA {
    display: flex;
    flex-direction: row;
  }
  .flexContainerDashboardB {
    display: flex;
    flex-direction: column;
  }

  .testSquare {
    width: 50px;
    height: 50px;
    background-color: yellow;
  }
</style>
