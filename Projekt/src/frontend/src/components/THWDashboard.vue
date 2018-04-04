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
                         align="center"
                         width="100"></el-table-column>

        <el-table-column prop="numberTB"
                         label="TB Nummer"
                         width="130"></el-table-column>

        <el-table-column prop="creator"
                         label="Verfasser"
                         width="100"></el-table-column>

        <el-table-column prop="docketIdentification"
                         label="Sichter" width="100"></el-table-column>

        <el-table-column :formatter="formatDate"
                         prop="date"
                         label="Datum"
                         width="100"></el-table-column>

        <el-table-column :formatter="formatTime"
                         prop="time"
                         label="Uhrzeit"
                         width="100"></el-table-column>

        <el-table-column prop="receiverName"
                         label="Empfänger"
                         width="120"></el-table-column>

        <el-table-column :formatter="formatContent"
                         prop="content"
                         label="Kurzinhalt"></el-table-column>

      </el-table>
    </div>

    <div class="
          sideMenuDashboard
          hasShadowDashboardA
          flexContainerDashboardB">

      <input class="dashboardInput"
             v-model='filter.search'
             placeholder="Suche"/>

      <el-select v-model='filter.operation'
                 style="margin: 40px 10px 0 10px ">
        <el-option value='Alle'>
          Alle
        </el-option>
        <el-option
          v-for='operation in operationList'
          :key='operation.operationName'
          :value='operation.operationName'>
          {{ operation.operationName }}
        </el-option>
      </el-select>

      <div class="
            dashboardButton
            hasShadowDashboardA"
           style="margin: 80px 0 20px 0"
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
      operationList: []
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
    font-size: 20px;
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
    background-color: var(--semiLightNeutralColor);
    width: 20%;
    overflow: visible;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--primaryTextColor);
    padding-top: 50px;
    margin-left: 40px;
    font-family: var(--mainFont);
    font-size: var(--smallTitleSize);
    color: var(--primaryTextColor);
  }
  .dashboardInput {
    height: 40px;
    background-color: var(--semiLightNeutralColor);
    margin: 0 10px 0 10px;
    padding-left: 10px;
    border: var(--darkNeutralColor);
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
  }

  .dashboardButton {
    height: 35px;
    width: 220px;
    background-color: var(--semiLightNeutralColor);
    padding: 15px 20px 0 0;
    margin: 0 0 20px 0;
    position: relative;
    right: 10px;
    border-left: var(--formBlueColor);
    border-left-style: solid;
    border-left-width: 10px;
    text-align: center;
  }
  .dashboardButton:hover {
    border-left: var(--mainColor);
    border-left-style: solid;
    border-left-width: 10px;
    cursor: pointer;
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
