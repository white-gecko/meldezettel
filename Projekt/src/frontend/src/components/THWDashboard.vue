<template>
  <el-table :data="tabledata" style="width: 100%" max-height="250">
    <el-table-column width="150">
      <template slot-scope="scope">
        <el-button>Öffnen</el-button>
      </template>
    </el-table-column>
    <el-table-column prop="verfasser" label="Verfasser" width="150">
    </el-table-column>
    <el-table-column prop="datum" label="Datum" width="150">
    </el-table-column>
    <el-table-column prop="uhrzeit" label="Uhrzeit" width="150">
    </el-table-column>
    <el-table-column prop="kurzinhalt" label="Kurzinhalt">
    </el-table-column>
  </el-table>
</template>

<script>

export default {

  name: 'THWDashboard',

  data: () => {
    return {
      tabledata: [
        {verfasser: 'AS', datum: '17.12.2017', uhrzeit: '20:15', kurzinhalt: 'Baum umgestürzt'},
        {verfasser: 'FS', datum: '19.12.2017', uhrzeit: '21:15', kurzinhalt: 'Wasserleitung gebrochen'}
      ]
    }
  }
}

</script>
