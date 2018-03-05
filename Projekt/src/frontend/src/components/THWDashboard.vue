<template>
  <el-table :data="td" style="width: 100%" max-height="500">

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
  <!--
  <li v-for='doc in documents'>
    { doc.dateIncomingA } - { doc.timeIncomingA } - { doc.hdzIncomingA } - { doc.message }
  </li>-->
</template>

<script>

/*eslint-disable*/
import { mapGetters, mapMutations } from 'vuex'
import { quitstore } from '../api/QuitStoreAdapter.js'
import { handleResponse } from '../sparql_help/response_to_formdata.js'
import sparql from '../sparql_help/sparql_queries.js'

import store from '../store/state.js'

export default {

  name: 'THWDashboard',

  docs: {},

  beforeRouteEnter(to, from, next) {
    let query = sparql.allDocumentsQuery()
    var callback = function (response) {
      next(vm => vm.setDocs(response))
    }
    quitstore.getData(query).then(callback)
  },

  beforeRouteUpdate(to, from, next) {
    let query = sparql.allDocumentsQuery()
    var callback = function (response) {
      this.setDocs(response)
      next()
    }
    quitstore.getData(query).then(callback)
  },

  data () {
    return {
      td: [{}]
    }
  },

  methods: {
    setDocs (d) {
      console.log('----')
      //console.log()

      let formdatas = handleResponse(d.data)
      this.$data.td = formdatas
      store.ticketlist = formdatas
      console.log(this.$data.td)
    }
  },

  computed: {
    ...mapGetters({
      ticketlist: 'getAllTickets'
    }),

    ...mapMutations({
      setTicketlist: 'setTicketlist'
  })
,


tabledata: function () {
  //let query = sparql.allDocumentsQuery()

  //let response = quitstore.getData(query)
  //console.log(response)
  //console.log(response._v)
  // this.setTicketlist(handleResponse(response._v.data))

  // Deep copy to avoid overwriting
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
,

/*
data:{
  documents:[
    {
      dateIncomingA: '123',
      timeIncomingA: '456',
      hdzIncomingA: '678',
      message: 'test'
    },
    {
      dateIncomingA: '123',
      timeIncomingA: '456',
      hdzIncomingA: '678',
      message: 'test2'
    }]
}*/




  }
}

</script>
