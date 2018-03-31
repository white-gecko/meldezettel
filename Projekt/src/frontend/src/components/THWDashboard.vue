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
  <el-table :data="tabledata" style="width: 100%" max-height="500">
    <el-table-column width="80">
      <template slot-scope="scope">
        <router-link v-bind:to="{
          name:'Create',
          params:{id: tabledata[scope.$index]['id'] }}"
                     tag="el-button">
          <i class="el-icon-zoom-in"></i>
        </router-link>
      </template>
    </el-table-column>

    <!-- Festlegen der zu verwendenden Werte aus dem VVD -->
    <el-table-column :formatter="formatState"
                     label="Status"
                     prop="state"
                     align="center"
                     width="100"></el-table-column>

    <el-table-column prop="numberTB"
                     label="TB Nummer"
                     width="130"></el-table-column>

    <el-table-column prop="primaryHdZ"
                     label="Verfasser"
                     width="100"></el-table-column>

    <el-table-column prop="identification"
                     label="Sichter" width="100"></el-table-column>

    <el-table-column :formatter="formatDate"
                     prop="primaryDate"
                     label="Datum"
                     width="100"></el-table-column>

    <el-table-column :formatter="formatTime"
                     prop="primaryTime"
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
import { quitstore } from '../api/QuitStoreAdapter.js'
import { parseResponse } from '../sparql_help/sparql_response.js'
import sparql from '../sparql_help/sparql_queries.js'
import store from '../store/index.js'
import { mapActions } from 'vuex'

export default {
  name: 'THWDashboard',

  beforeRouteEnter (to, from, next) {
    let filterStore = store.getters.getFilters
    let query = sparql.dashboardQuery(filterStore)
    quitstore.getData(query)
      .then((response) => {
        next(vm => {
          let data = parseResponse(response.data)
          vm.setData(data)
          vm.$store.dispatch('setTicketlist', data)
          vm.setFilter(filterStore)
        })
      })
      .catch((error) => {
        alert(error)
        next()
      })
  },

  beforeRouteUpdate (to, from, next) {
    next(false)
  },

  data () {
    return {
      filter: {},
      tabledata: [{}]
    }
  },

  computed: {
    ...mapActions['setFilters']
  },

  methods: {
    changeFilters: function () {
      console.log('-1')
      this.$store
        .dispatch('setFilters', this.filters)
        .then(() => this.useFilters())
        .catch((error) => alert(error))
    },
    useFilters: function () {
      console.log('0')
      let filterStore = this.$store.getters.getFilters
      let query = sparql.dashboardQuery(filterStore)
      console.log('1')
      quitstore.getData(query)
        .then((response) => {
          console.log('2')
          let data = parseResponse(response.data)
          this.setData(data)
          this.$store.dispatch('setTicketlist', data)
          this.setFilter(filterStore)
          this.notifySuccess('Filter angewandt')
        })
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
    setFilter (filter) {
      this.$data.filter = filter
    },
    setData (data) {
      this.$data.tabledata = data
    },
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
  .stateTable{
    font-size: 35px;
  }
</style>
