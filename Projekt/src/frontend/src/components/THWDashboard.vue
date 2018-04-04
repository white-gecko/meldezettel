<template>
  <div class="flexContainerDashboardA">

    <div class="
          dashboard
          hasShadowDashboardA">
      <el-table :data="ticketList" style="width: 100%" max-height="500">
        <el-table-column width="80">
          <template slot-scope="scope">
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
                         align="center"></el-table-column>

        <el-table-column prop="numberTB"
                         label="TB Nummer"
                         align="center"></el-table-column>

        <el-table-column prop="creator"
                         label="Verfasser"></el-table-column>

        <el-table-column prop="docketIdentification"
                         label="Sichter" width="100"></el-table-column>

        <el-table-column :formatter="formatDate"
                         prop="date"
                         label="Datum"
                         align="center"></el-table-column>

        <el-table-column :formatter="formatTime"
                         prop="time"
                         label="Uhrzeit"
                         align="center"></el-table-column>

        <el-table-column prop="receiverName"
                         label="Empfänger"></el-table-column>

        <el-table-column :formatter="formatContent"
                         prop="content"
                         label="Kurzinhalt"></el-table-column>

      </el-table>
    </div>

    <div class="
          sideMenuDashboard
          hasShadowDashboardA
          flexContainerDashboardB">

      <div class="
            dashboardSection
            hasShadowDashboardA
            flexContainerDashboardB">
        <input class="
              dashboardInput
              hasShadowDashboardA"
               v-model='filter.search'
               placeholder="Suche"/>
      </div>

      <div class="
            dashboardSection
            hasShadowDashboardA
            flexContainerDashboardB">

        Einsatz:

        <select class="
                dashboardSelect
                hasShadowDashboardA"
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

        Filter-Optionen:

        <div class="
            dashboardButton
            hasShadowDashboardA"
             style="margin: 10px 0 10px 0"
             @click="showHideIncoming">
          Eingang
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
                  background-color: var(--darkNeutralColor);
                  margin: 4px 5px 0 5px;"></div>
          </div>

        </div>

        <div class="
            dashboardButton
            hasShadowDashboardA"
             style="margin-bottom: 10px"
             @click="showHideOutgoing">
          Ausgang
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
                  background-color: black;
                  margin: 4px 5px 0 5px;"></div>
          </div>

        </div>

      </div>

      <div class="
            dashboardSection
            hasShadowDashboardA
            flexContainerDashboardB"
           style="margin: 0 0 0 0">
        <div class="
            dashboardButton
            hasShadowDashboardA"
             style="margin-bottom: 20px"
             @click="changeFilters()">
          Anwenden
        </div>
        <div class="
            dashboardButton
            hasShadowDashboardA"
             @click="resetFilters()">
          Zurücksetzen
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import { Notification } from 'element-ui'
import { mapActions } from 'vuex'
import { quitstore } from '../api/QuitStoreAdapter.js'
import queryHelper from '../sparql_help/sparql_queries.js'
import { parseResponse } from '../sparql_help/sparql_response'

export default {
  name: 'THWDashboard',

  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.dispatch('updateTicketListAction')
        .catch(error => alert(error))

      let operationsQuery = queryHelper.operationsQuery()

      quitstore.getData(operationsQuery)
        .then((response) => {
          let data = parseResponse(response)
          vm.$data.operationList = data
        })
        .catch((error) => {
          alert(error)
        })
    })
  },

  beforeRouteUpdate (to, from, next) {
    next(false)
  },

  data: () => {
    return {
      operationList: [],
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
    }
  },

  methods: {
    ...mapActions['setFilters,setDefaultFilters'],
    /*  function that changes filters in vuex store, then calls
        a function that updates dashboard
    */
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

    changeFilters: function () {
      this.$store
        .dispatch('setFilters', this.filter)
        .then(() => {
          this.useFilters()
          this.notifySuccess('Filter angewandt')
        })
        .catch((error) => alert(error))
    },
    resetFilters: function () {
      this.$store
        .dispatch('setDefaultFilters')
        .then(() => {
          this.useFilters()
          this.notifySuccess('Filter angewandt')
        })
        .catch((error) => alert(error))
    },
    /*  function that updates the displayed documents on dashboard
        after filters got changed,
        works similar to beforeRouteEnter
    */
    useFilters: function () {
      this.$store.dispatch('updateTicketListAction')
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
    //  formatter that returns the fitting icons for all different states
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
          return <i class='el-icon-edit-printer out stateTable'></i>
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
    color: black;
  }
  .in{
    color: blue;
  }
  .warn{
    color:red;
  }
  .stateFilter{
    font-size: 21px;
  }
  .stateTable {
    font-size: 35px;
  }
  .dashboard {
    background-color: var(--semiLightNeutralColor);
    width: 80%;
    overflow: visible;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--primaryTextColor);
    padding-top: 50px;
    padding-bottom: 20px;
    font-family: var(--mainFont);
    font-size: var(--smallTitleSize);
    color: var(--primaryTextColor);
  }
  .sideMenuDashboard {
    background-color: var(--darkNeutralColor);
    width: 20%;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--primaryTextColor);
    margin-left: 50px;
    font-family: var(--mainFont);
    font-size: var(--smallTitleSize);
    color: var(--primaryTextColor);
  }
  .dashboardSection {
    width: 100%;
    background-color: var(--semiLightNeutralColor);
    padding: 20px 0 20px 0;
    margin: 0 0 20px 0;
  }
  .dashboardInput {
    height: 50px;
    width: 100%;
    background-color: var(--semiLightNeutralColor);
    margin: 0 0 0 0;
    padding: 0 0 0 10px;
    position: relative;
    right: 10px;
    border-style: none;
    border-left: var(--formBlueColor);
    border-left-style: solid;
    border-left-width: 10px;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .dashboardSelect {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 50px;
    width: 100%;
    background-color: var(--semiLightNeutralColor);
    margin: 10px 0 30px 0;
    padding: 0 0 0 10px;
    position: relative;
    right: 10px;
    cursor: pointer;
    border-style: none;
    border-left: var(--formBlueColor);
    border-left-style: solid;
    border-left-width: 10px;
    text-align: center;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .dashboardButton {
    height: 50px;
    width: 100%;
    background-color: var(--semiLightNeutralColor);
    padding: 15px 20px 0 0;
    margin: 0 0 10px 0;
    position: relative;
    right: 10px;
    border-left: var(--formBlueColor);
    border-left-style: solid;
    border-left-width: 10px;
    text-align: center;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .dashboardButton:hover {
    border-left: var(--mainColor);
    border-left-style: solid;
    border-left-width: 10px;
    cursor: pointer;
  }
  /* checkbox */
  .dashboardCheckbox {
    margin: 5px 0 0 10px;
    border: 1px solid var(--darkNeutralColor);
  }
  .control {
    height: 20px;
    display: block;
    position: relative;
    padding: 5px 0 0 40px;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .control input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .control_indicator {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    background: var(--darkNeutralColor);
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
    top: 3px;
    width: 7px;
    height: 16px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
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
    box-shadow: 0px 10px 20px 1px var(--lightShadowColor);
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
</style>
