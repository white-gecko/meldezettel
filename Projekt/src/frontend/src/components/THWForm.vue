<template>
<div>
      <el-form ref="form" :model="form">
  <el-row :gutter="20" type="flex" justify="center">
    <el-col :span="14"><div class="grid-content bg-purple">
        <el-form-item>
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="Funk" name="type">
            </el-checkbox>
            <el-checkbox label="Telefon" name="type">
            </el-checkbox>
            <el-checkbox label="Telefax" name="type">
            </el-checkbox>
            <el-checkbox label="DFÜ" name="type">
            </el-checkbox>
            <el-checkbox label="Kurier/Melder" name="type">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
    </div></el-col>
    <el-col :span="10">
      <div class="grid-content bg-purple">
        <el-form-item>
          <el-switch
            style="display: block"
            v-model="form.isEingang"
            active-color="#13ce66"
            inactive-color="#1b62d8"
            active-text="Ausgehend"
            inactive-text="Eingehend">
          </el-switch>
        </el-form-item>
       </div>
     </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="9">
      <div class="grid-content bg-purple">
          <h3 v-if="!form.isEingang">Aufnahmevermerk</h3>
          <h3 v-if="form.isEingang">Annahmevermerk</h3>
        <el-form-item>
          <el-date-picker v-model="form.value1" type="date" placeholder="Datum auswählen" format="dd.MM.yyyy">
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-time-picker v-model="form.value2" placeholder="Uhrzeit auswählen">
          </el-time-picker>
        </el-form-item>

        <el-form-item>
        <div class="is-short">
          <el-input placeholder="Hdz" v-model="value3">
          </el-input>
        </div>
        </el-form-item>
      </div>
     </el-col>
    
    <el-col :span="9">
      <div class="grid-content bg-purple">
          <h3>Beförderungsvermerk</h3>

        <el-form-item>
          <el-date-picker v-model="form.value1" type="date" placeholder="Datum auswählen" format="dd.MM.yyyy" :disabled="!form.isEingang">
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-time-picker v-model="form.value2" :disabled="!form.isEingang" placeholder="Uhrzeit auswählen">
          </el-time-picker>
        </el-form-item>

        <el-form-item>
        <div class="is-short">
          <el-input placeholder="Hdz" v-model="value3" :disabled="!form.isEingang">
          </el-input>
        </div>
        </el-form-item>
      </div>
    </el-col>
    
    <el-col :span="6">
      <div class="grid-content bg-purple" style="padding-left: 1em; padding-right: 1em">
        <h3>Technisches Betriebsbuch</h3>
        <el-form-item>
          <el-input placeholder="Nummer" v-model="value3">
          </el-input>
        </el-form-item>
        <el-form-item> </el-form-item>
        <el-form-item> </el-form-item>
      </div>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span=24>
      <el-form-item>
        <el-input v-model="value4" placeholder="Rufnahme der Gegenstelle / Spruchkopf"> </el-input>
      </el-form-item>
    </el-col>
  </el-row>
  </el-form>
</div>
</template>

<script>

export default {

  name: 'THWForm',

  data: () => {
    return {
      form: {
        type: [],
        resource: '',
        isEingang: true,
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      }
    }
  }

}

</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  /* background: #d3dce6 */;
  background: white;
  text-align: center;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  padding-top: 13px;
  border-radius: 4px;
  border: 1px solid lightgrey;
  min-height: 30px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el-form-item {
  margin: 0;
  min-height: 50px;
}

.el-switch {
  padding-top: 8px;
}

.is-short {
  text-align:center;
  padding: 0 5.3em;
}
</style>
