<template>
  <el-table :data="tabledata" style="width: 100%" max-height="500">

    <el-table-column width="150">
      <template slot-scope="scope">
        <router-link v-bind:to="{name:'Create', params:{id: scope.$index }}" tag="el-button">Öffnen</router-link>
      </template>
    </el-table-column>

    <!-- Festlegen der zu verwendenden Werte aus dem VVD -->
    <el-table-column prop="hdzIncomingA" label="Verfasser" width="100"></el-table-column>

    <el-table-column prop="dateIncomingA" label="Datum" width="100"></el-table-column>

    <el-table-column prop="timeIncomingA" label="Uhrzeit" width="100"></el-table-column>

    <el-table-column prop="message" label="Kurzinhalt"></el-table-column>

  </el-table>
</template>

<script>

import { quitstore } from '../api/QuitStoreAdapter.js'
import { handleResponse } from '../sparql_help/response_to_formdata.js'
import sparql from '../sparql_help/sparql_queries.js'

export default {

  name: 'THWDashboard',

  beforeRouteEnter (to, from, next) {
    let query = sparql.allDocumentsQuery()

    quitstore.getData(query)
      .then((response) => {
        next(vm => {
          let data = handleResponse(response.data)
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
    let query = sparql.allDocumentsQuery()

    quitstore.getData(query)
      .then((response) => {
        let data = handleResponse(response.data)
        this.setData(data)
        this.$store.dispatch('setTicketlist', data)
        next()
      })
      .catch((error) => {
        alert(error)
        next()
      })
  },

  data () {
    return {
      tabledata: [{}]
    }
  },

  methods: {
    setData (data) {
      this.$data.tabledata = data
    }
  }
}

</script>
