<template>
  <el-table :data="tabledata" style="width: 100%" max-height="500">

    <!-- Spalte mit Button zum Laden des Tickets in die Bearbeitungsmaske (TODO)-->
    <el-table-column width="150">
      <template slot-scope="scope">
        <el-button>Öffnen</el-button>
      </template>
    </el-table-column>
    
    <!-- Festlegen der zu verwendenden Werte aus dem VVD -->
    <el-table-column prop="hdzIncomingA" label="Verfasser" width="100">
    </el-table-column>
    
    <el-table-column prop="dateIncomingA" label="Datum" width="100">
    </el-table-column>
    
    <el-table-column prop="timeIncomingA" label="Uhrzeit" width="100">
    </el-table-column>
    
    <el-table-column prop="message" label="Kurzinhalt">
    </el-table-column>
  </el-table>
</template>

<script>

import { mapGetters } from 'vuex'

export default {

  name: 'THWDashboard',

  computed: {

    ...mapGetters({
      ticketlist: 'getAllTickets'
    }),

    tabledata: function () {
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

  }
}

</script>
