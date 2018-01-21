<template>
<div>
  <el-form :inline="true" :model="formdata" class="demo-form-inline">
    <el-form-item label="Rolle">
      <el-select v-model="formdata.role" placeholder="Bitte Rolle auswählen...">
        <el-option label="Funker" value="funker"></el-option>
        <el-option label="Sichter" value="sichter"></el-option>
        <el-option label="Leiter des Fernmeldebetriebs (LdF)" value="ldf"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</div>
</template>

<script>

export default {

  name: 'THWRoleSelect',

  data: () => {
    return {
      formdata: {
        role: ''
      }
    }
  }

}

</script>
