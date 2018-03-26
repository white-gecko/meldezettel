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
              <el-select label='Einsatz' v-model='filter.mission' style='width:600px'>
                <el-option value='all'>
                  Alle
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span='2'>Status:</el-col>
            <el-col :span='20'>
              <el-checkbox-button v-model='filter.created'><span style="color:cadetblue;">&#9632; </span> verfasst</el-checkbox-button>
              <el-checkbox-button v-model='filter.inspected'><span style="color:lawngreen;">&#9632; </span> gesichtet</el-checkbox-button>
              <el-checkbox-button v-model='filter.onSituationMap'><span style="color:indianred;">&#9632; </span> auf Lagekarte</el-checkbox-button>
              <el-checkbox-button v-model='filter.printable'><span style="color:yellow;">&#9632; </span> zu drucken</el-checkbox-button>
              <el-checkbox-button v-model='filter.archived'><span style="color:dimgrey;">&#9632; </span> archiviert</el-checkbox-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span='2'>
              <el-button @click="changeFilters(); notifySuccess('Filter angewandt')">Anwenden</el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-form>
  <el-table :data="td" style="width: 100%" max-height="500">
    <el-table-column width="40">
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
    <el-table-column label="Status"
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
                     label="Uhrzeit"
                     width="100"></el-table-column>

    <el-table-column :formatter="formatContent"
                     prop="content"
                     label="Kurzinhalt"></el-table-column>

  </el-table>
  </div>
</template>

<script>

import { quitstore } from '../api/QuitStoreAdapter.js'
import { parseResponse } from '../sparql_help/sparql_response.js'
import sparql from '../sparql_help/sparql_queries.js'
import {mapGetters} from 'vuex'

export default {
  name: 'THWDashboard',

  beforeRouteEnter (to, from, next) {
    let filt = mapGetters.getFilters()
    this.$data.filter=filt
    let query = sparql.dashboardQuery(filt)

    quitstore.getData(query)
      .then((response) => {
        next(vm => {
          let data = parseResponse(response.data)
          vm.setData(data)
          vm.$store.dispatch('setTicketlist', data)
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
      filter: [{}],
      tabledata: [{}]
    }
  },

  methods: {
    changeFilters: function () {
      this.$store
        .dispatch('setFilters', this.filters)
        .then(() => this.$router.push('home'))
        .catch((error) => alert(error))
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
    setData (data) {
      this.$data.tabledata = data
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
  },

  computed: {
    ...mapGetters([
      'getFilters'
    ])
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
</style>
