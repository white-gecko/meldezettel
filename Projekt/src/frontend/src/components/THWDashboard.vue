<template>
  <div>
    <el-form :model='filter'>
      <el-collapse>
        <el-collapse-item title='Filter'>
          <el-row>
            <el-col :span='2'>
              Suchen:
            </el-col>
            <el-col :span='20'>
              <el-input style='width:600px' v-model='filter.search'></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span='2'>
              Einsatz:
            </el-col>
            <el-col :span='20'>
              <el-select v-model='filter.operation'
                         style='width:600px'>
                <el-option value='Alle'>
                  Alle
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span='2'>Status Ausgang:</el-col>
            <el-col :span='20'>
              <el-checkbox-button v-model='filter.s1'>
                <i class="el-icon-edit-outline stateFilter out">
                </i> Zu sichten</el-checkbox-button>
              <el-checkbox-button v-model='filter.s2'>
                <i class="el-icon-circle-close stateFilter out">
                </i> Zurückgeschickt</el-checkbox-button>
              <el-checkbox-button v-model='filter.s3'>
                <i class="el-icon-view stateFilter out">
                </i> Gesichtet</el-checkbox-button>
              <el-checkbox-button v-model='filter.s4'>
                <i class="el-icon-service stateFilter out">
                </i> Sendfertig</el-checkbox-button>
              <el-checkbox-button v-model='filter.s5'>
                <i class="el-icon-circle-check-outline stateFilter out">
                </i> Versandt(LdF)</el-checkbox-button>
              <el-checkbox-button v-model='filter.s7'>
                <i class="el-icon-circle-check stateFilter out">
                </i> Versandt(Sichter)</el-checkbox-button>
              <el-checkbox-button v-model='filter.s6'>
                <i class="el-icon-circle-close-outline stateFilter out">
                </i> Zurück(Funker)</el-checkbox-button>
              <el-checkbox-button v-model='filter.s8'>
                <i class="el-icon-printer stateFilter out">
                </i> Druckfertig</el-checkbox-button>
              <el-checkbox-button v-model='filter.s9'>
                <span class="stateFilter out">
                  &#9632;</span> Archiviert</el-checkbox-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span='2'>Status Eingang:</el-col>
            <el-col :span='20'>
              <el-checkbox-button v-model='filter.s11'>
                <i class="el-icon-edit-outline stateFilter in">
                </i> Erstellt</el-checkbox-button>
              <el-checkbox-button v-model='filter.s12'>
                <i class="el-icon-circle-close stateFilter in">
                </i> Zurückgeschickt</el-checkbox-button>
              <el-checkbox-button v-model='filter.s13'>
                <i class="el-icon-tickets stateFilter in">
                </i> Zu sichten</el-checkbox-button>
              <el-checkbox-button v-model='filter.s14'>
                <i class="el-icon-printer stateFilter in">
                </i> Druckfertig</el-checkbox-button>
              <el-checkbox-button v-model='filter.s15'>
                <span class="stateFilter in">
                  &#9632; </span> Archiviert</el-checkbox-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span='2'>
              <el-button
                @click="changeFilters()">
                Anwenden
              </el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-form>
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
</template>
<script>
import { Notification } from 'element-ui'
import { mapActions } from 'vuex'

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

  computed: {
    ticketList () {
      return this.$store.state.ticketlist
    },
    filter () {
      return this.$store.state.filter
    }
  },

  methods: {
    ...mapActions['setFilters'],
    /*  function that changes filters in vuex store, then calls
        a function that updates dashboard
    */
    changeFilters: function () {
      this.$store
        .dispatch('setFilters', this.filter)
        .then(() => this.useFilters())
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
  }
  .sideMenuDashboard {
    background-color: var(--semiLightNeutralColor);
    width: 20%;
    overflow: visible;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--primaryTextColor);
    padding-top: 50px;
    padding-bottom: 20px;
    margin-left: 40px;
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
    flex-direction: column;
    align-items: flex-end;
  }
  .flexContainerDashboardB {
    display: flex;
    flex-direction: row;
  }
  .flexChildDashboardA {
    align-self: center;
  }
</style>
