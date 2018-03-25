<template>
  <div class="flexContainerDashboardB">

    <div class="
        dashboard
        hasShadowDashboardA">
      <el-table :data="td" style="width: 100%" max-height="500">

        <el-table-column width="70">
          <template slot-scope="scope">
            <router-link v-bind:to="{name:'Create', params:{id: scope.$index }}"
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

        <el-table-column prop="hdzIncomingA"
                         label="Verfasser"
                         width="100"></el-table-column>

        <el-table-column prop="signature"
                         label="Sichter"
                         width="100"></el-table-column>

        <el-table-column prop="dateIncomingA"
                         label="Datum"
                         width="100"></el-table-column>

        <el-table-column prop="timeIncomingA"
                         label="Uhrzeit"
                         width="100"></el-table-column>

        <el-table-column prop="message"
                         label="Kurzinhalt"></el-table-column>

      </el-table>
    </div>

    <div class="
        sideMenuDashboard
        hasShadowDashboardA">

    </div>

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
