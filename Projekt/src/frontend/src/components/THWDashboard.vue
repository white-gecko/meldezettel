<template>
  <el-table :data="ticketList" style="width: 100%" max-height="500">

    <el-table-column width="150">
      <template slot-scope="scope">
        <router-link v-bind:to="{
          name:'Create',
          params:{id: ticketList[scope.$index]['id'] }}"
                     tag="el-button">
          Öffnen
        </router-link>
      </template>
    </el-table-column>

    <!-- Festlegen der zu verwendenden Werte aus dem VVD -->
    <el-table-column prop="primaryHdZ"
                     label="Verfasser"
                     width="100"></el-table-column>

    <el-table-column :formatter="formatDate"
                     prop="primaryDate"
                     label="Datum"
                     width="100"></el-table-column>

    <el-table-column :formatter="formatTime"
                     prop="primaryTime"
                     label="Uhrzeit"
                     width="100"></el-table-column>

    <el-table-column :formatter="formatContent"
                     prop="content"
                     label="Kurzinhalt"></el-table-column>

  </el-table>
</template>

<script>
export default {
  name: 'THWDashboard',

  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.dispatch('updateTicketListAction')
        .catch(error => alert(error))
    })
    // vm.$store.dispatch('updateTicketListAction')
    //   .then(next => next())
    //   .catch((error) => {
    //     alert(error)
    //     next()
    //   })
  },

  beforeRouteUpdate (to, from, next) {
    next(false)
  },

  computed: {
    ticketList () {
      return this.$store.state.ticketlist
    }
  },

  methods: {
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
