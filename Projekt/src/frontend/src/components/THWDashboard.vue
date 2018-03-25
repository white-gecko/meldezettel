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

    <el-table-column width="70">
      <template slot-scope="scope">
        <router-link v-bind:to="{name:'Create', params:{id: scope.$index }}" tag="el-button"><i class="el-icon-zoom-in"></i></router-link>
      </template>
    </el-table-column>

    <!-- Festlegen der zu verwendenden Werte aus dem VVD -->
    <el-table-column label="Status" width="100"></el-table-column>

    <el-table-column prop="numberTB" label="TB Nummer" width="130"></el-table-column>

    <el-table-column prop="hdzIncomingA" label="Verfasser" width="100"></el-table-column>

    <el-table-column prop="signature" label="Sichter" width="100"></el-table-column>

    <el-table-column prop="dateIncomingA" label="Datum" width="100"></el-table-column>

    <el-table-column prop="timeIncomingA" label="Uhrzeit" width="100"></el-table-column>

    <el-table-column prop="message" label="Kurzinhalt"></el-table-column>

  </el-table>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'
import { quitstore } from '../api/QuitStoreAdapter.js'
import { handleResponse } from '../sparql_help/response_to_formdata.js'
import sparql from '../sparql_help/sparql_queries.js'

import store from '../store/state.js'

export default {

  name: 'THWDashboard',

  docs: {},

  beforeRouteEnter (to, from, next) {
    let query = sparql.allDocumentsQuery()
    var callback = function (response) {
      next(vm => vm.setDocs(response))
    }
    quitstore.getData(query).then(callback)
  },

  beforeRouteUpdate (to, from, next) {
    let query = sparql.allDocumentsQuery()
    var callback = function (response) {
      this.setDocs(response)
      next()
    }
    quitstore.getData(query).then(callback)
  },

  data () {
    return {
      td: [{}],
      filter: {
        search: '',
        mission: 'Alle',
        created: true,
        inspected: false,
        onSituationMap: false,
        printable: false,
        archived: false
      }
    }
  },

  methods: {
    setDocs (d) {
      let formdatas = handleResponse(d.data)
      this.$data.td = formdatas
      store.ticketlist = formdatas
    },
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
    }
  },

  computed: {
    ...mapGetters({
      ticketlist: 'getAllTickets'
    }),

    ...mapMutations({
      setTicketlist: 'setTicketlist'
    }),

    tabledata: function () {
      let data = JSON.parse(JSON.stringify(this.ticketlist))

      // The times and dates need to be filtered to be displayed correctly
      for (let i = 0; i < data.length; i++) {
      // Retrieve all required date strings and convert them to a shorter form (german style)
        let tmpDate = new Date(data[i].dateIncomingA)
        data[i].dateIncomingA = tmpDate.toLocaleDateString()

        tmpDate = new Date(data[i].timeIncomingA)
        data[i].timeIncomingA = tmpDate.toLocaleTimeString()

        // If the message is longer than a threshold, shorten it and add dots to indicate
        if (data[i].message.length > 80) {
          data[i].message = data[i].message.slice(0, 77) + '...'
        }
      }

      return data
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
    margin-right: 5px;
    margin-left: 5px;
  }
</style>
