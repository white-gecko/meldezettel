<template>
<div>
  <el-form ref="form" :model="formdata" style="background:lightblue; padding: 0.5em 0.5em">

    <!-- ============================================================ -->
    <!-- Top area -->

    <el-row :gutter="15" type="flex" style="word-spacing: -1em">
      <el-col :span="14">
        <div class="grid-content bg-purple">
          <el-form-item>
            <el-checkbox-group v-model="formdata.typeTop">
              <el-checkbox label="Funk" name="typeTop" checked="true">
              </el-checkbox>
              <el-checkbox label="Telefon" name="typeTop">
              </el-checkbox>
              <el-checkbox label="Telefax" name="typeTop">
              </el-checkbox>
              <el-checkbox label="DFÜ" name="typeTop">
              </el-checkbox>
              <el-checkbox label="Kurier/Melder" name="typeTop">
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </el-col>

      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-form-item>
            <el-switch
              v-model="formdata.isAusgang"
              active-color="#13ce66"
              inactive-color="#1b62d8"
              active-text="Ausgehend"
              inactive-text="Eingehend">
            </el-switch>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="15" type="flex">
      <el-col :span="4">
        <div class="grid-content labelbox bg-purple">
          <el-form-item>
            {{ annahmeHeader }}
          </el-form-item>
        </div>
      </el-col>

      <el-col :span="7">
          <div class="grid-content">
            <el-form-item>
              <el-date-picker v-model="formdata.dateIncomingA" type="date" placeholder="Datum auswählen" format="dd.MM.yyyy">
              </el-date-picker>
            </el-form-item>
          </div>
      </el-col>

      <el-col :span="7">
          <div class="grid-content">
            <el-form-item>
              <el-time-picker v-model="formdata.timeIncomingA" placeholder="Uhrzeit auswählen">
              </el-time-picker>
            </el-form-item>
          </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content">
          <el-form-item>
            <el-input v-model="formdata.hdzIncomingA">
              <template slot="prepend">
                <span>Hdz</span>
              </template>
            </el-input>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="15" type="flex" v-if="this.formdata.isAusgang">
      <el-col :span="4">
        <div class="grid-content labelbox bg-purple">
          <el-form-item>
            Beförderung
          </el-form-item>
        </div>
      </el-col>

      <el-col :span="7">
          <div class="grid-content">
            <el-form-item>
              <el-date-picker v-model="formdata.dateIncomingA" type="date" placeholder="Datum auswählen">
              </el-date-picker>
            </el-form-item>
          </div>
      </el-col>

      <el-col :span="7">
          <div class="grid-content">
            <el-form-item>
              <el-time-picker v-model="formdata.timeIncomingA" placeholder="Uhrzeit auswählen">
              </el-time-picker>
            </el-form-item>
          </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content">
          <el-form-item>
            <el-input v-model="formdata.hdzIncomingA">
              <template slot="prepend">
                <span>Hdz</span>
              </template>
            </el-input>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <el-form-item>
            <el-input v-model="formdata.numberTB" placeholder="Nummer">
              <template slot="prepend">
                <span>Technisches Betriebsbuch</span>
              </template>
            </el-input>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="15" type="flex">
      <el-col :span=24>
        <el-form-item>
          <el-input v-model="formdata.nameR">
            <template slot="prepend">
              <span>Gegenstelle</span>
            </template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <!-- End of top area -->
    <!-- ============================================================ -->
    <!-- Beginning of middle area -->

    <hr style="height: 1px;color:#003399;background-color:#003399;">

    <el-row :gutter="15" type="flex">
      <el-col :span="24">
        <div class="grid-content bg-purple" style="word-spacing: 2em">
          <el-form-item>
            <el-checkbox-group v-model="formdata.typeMiddle">
              <el-checkbox label="Funk" name="typeMiddle" checked="true">
              </el-checkbox>
              <el-checkbox label="Telefon" name="typeMiddle">
              </el-checkbox>
              <el-checkbox label="Telefax" name="typeMiddle">
              </el-checkbox>
              <el-checkbox label="DFÜ" name="typeMiddle">
              </el-checkbox>
              <el-checkbox label="Kurier/Melder" name="typeMiddle">
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="15" type="flex" >
      <el-col :span="9">
        <div class="grid-content bg-purple" style="word-spacing: 0em">
          <el-form-item>
            <el-checkbox-group v-model="formdata.typeCall">
              <el-checkbox label="DURCHSAGE" name="typeCall">
              </el-checkbox>
              <el-checkbox label="Spruch" name="typeCall">
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </el-col>

      <el-col :span="9">
        <div class="grid-content bg-purple" style="word-spacing: 0em">
          <el-form-item>
            <el-checkbox-group v-model="formdata.priority">
              <el-checkbox label="Sofort" name="priority">
              </el-checkbox>
              <el-checkbox label="Blitz" name="priority">
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple" style="word-spacing: 0em">
          <el-form-item>
            <el-checkbox-group v-model="formdata.gNote">
              <el-checkbox label="GESPRÄCHSNOTIZ" name="type4">
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="15" type="flex">
      <el-col :span="6">
          <el-form-item>
            <el-input placeholder="" v-model="formdata.phone">
              <template slot="prepend">Ruf Nr.</template>
            </el-input>
          </el-form-item>
      </el-col>

      <el-col :span="18">
          <el-form-item>
            <el-input placeholder="" v-model="formdata.address">
              <template slot="prepend">Anschrift</template>
            </el-input>
          </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="15" type="flex">
      <el-col :span="24">
          <el-form-item>
            <el-input
              type="textarea"
              :rows="3"
              placeholder="Inhalt"
              :autosize="{ minRows: 5, maxRows: 13 }"
              v-model="formdata.message">
            </el-input>
          </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="15" type="flex">
      <el-col :span="8">
          <el-form-item label="" style="padding-left: 2px;">
            <el-time-picker v-model="formdata.createTime" placeholder="Abfassungszeit">
            </el-time-picker>
          </el-form-item>
      </el-col>

      <el-col :span="8">
          <el-form-item>
            <el-input placeholder="" v-model="formdata.signature">
              <template slot="prepend">Zeichen</template>
            </el-input>
          </el-form-item>
      </el-col>

      <el-col :span="8">
          <el-form-item>
            <el-input placeholder="" v-model="formdata.position">
              <template slot="prepend">Funktion</template>
            </el-input>
          </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="15" type="flex">
      <el-col :span="24">
          <el-form-item>
            <el-input placeholder="Einheit/Einrichtung/Stelle" v-model="formdata.sender">
              <template slot="prepend">Absender</template>
            </el-input>
          </el-form-item>
      </el-col>
    </el-row>

    <!-- End of middle area -->
    <!-- ============================================================ -->
    <!-- Beginning of bottom area -->

    <hr style="height: 1px;color:#003399;background-color:#003399;">

    <el-row :gutter="15" type="flex">
      <el-col :span="7">
        <el-form-item>
          <div class="grid-content bg-purple labelbox local-header">
            Quittung
          </div>
        </el-form-item>
      </el-col>
      <el-col :span="7">
          <el-form-item label="" style="padding-left: 2px;">
            <el-time-picker v-model="formdata.signatureTime" placeholder="Uhrzeit">
              <template slot="prefix">Zeichen</template>
            </el-time-picker>
          </el-form-item>
      </el-col>

      <el-col :span="10">
          <el-form-item>
            <el-input placeholder="" v-model="formdata.signatureB">
              <template slot="prepend">Zeichen</template>
            </el-input>
          </el-form-item>
      </el-col>

   </el-row>

   <el-row>

    <el-col :span= 8>
      <el-form-item>
        <div class="grid-content bg-purple labelbox has-margin">
          <span>TEL/EL/EAL/UEAL </span>
        </div>
      </el-form-item>
    </el-col>

    <el-col :span= 8>
      <el-form-item>
        <div class="grid-content bg-purple labelbox has-margin">
          <span>Fachberater </span>
        </div>
      </el-form-item>
    </el-col>

    <el-col :span= 8>
      <el-form-item>
        <div class="grid-content bg-purple labelbox has-margin">
          <span>Verb stellen</span>
        </div>
      </el-form-item>
    </el-col>

   </el-row>

   <el-row>
    <el-col :span=4>
      <div class="grid-content bg-purple has-margin">
        <el-form-item>
          <el-checkbox-group v-model="formdata.selectStation">
            <el-checkbox label="Leiter"> </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </div>
    </el-col>

    <el-col :span=4>

        <div class="grid-content bg-purple has-margin">
          <el-form-item>
            <el-checkbox-group v-model="formdata.selectStation">
              <el-checkbox label="S1"> </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>

        <div class="grid-content bg-purple has-margin">
          <el-form-item>
            <el-checkbox-group v-model="formdata.selectStation">
              <el-checkbox label="S2"> </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>

        <div class="grid-content bg-purple has-margin">
          <el-form-item>
            <el-checkbox-group v-model="formdata.selectStation">
              <el-checkbox label="S3"> </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>

        <div class="grid-content bg-purple has-margin">
          <el-form-item>
            <el-checkbox-group v-model="formdata.selectStation">
              <el-checkbox label="S4"> </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>

        <div class="grid-content bg-purple has-margin">
          <el-form-item>
            <el-checkbox-group v-model="formdata.selectStation">
              <el-checkbox label="S6"> </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>

    </el-col>

    <el-col :span=8>

      <div class="has-margin grid-content">
        <el-form-item>
          <el-input v-model="formdata.advisorA" type="text">
            <template slot="prepend">
              <input type="checkbox" v-model="formdata.advisorAchecked">
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class="has-margin grid-content">
        <el-form-item>
          <el-input v-model="formdata.advisorB" type="text">
            <template slot="prepend">
              <input type="checkbox" v-model="formdata.advisorBchecked">
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class="has-margin grid-content">
        <el-form-item>
          <el-input v-model="formdata.advisorC" type="text">
            <template slot="prepend">
              <input type="checkbox" v-model="formdata.advisorCchecked">
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class="has-margin grid-content">
        <el-form-item>
          <el-input v-model="formdata.advisorD" type="text">
            <template slot="prepend">
              <input type="checkbox" v-model="formdata.advisorDchecked">
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class="has-margin grid-content">
        <el-form-item>
          <el-input v-model="formdata.advisorE" type="text">
            <template slot="prepend">
              <input type="checkbox" v-model="formdata.advisorEchecked">
            </template>
          </el-input>
        </el-form-item>
      </div>

    </el-col>

    <el-col :span=8>

      <div class="has-margin grid-content">
        <el-form-item>
          <el-input v-model="formdata.verbA" type="text">
            <template slot="prepend">
              <input type="checkbox" v-model="formdata.verbAchecked">
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class="has-margin grid-content">
        <el-form-item>
          <el-input v-model="formdata.verbB" type="text">
            <template slot="prepend">
              <input type="checkbox" v-model="formdata.verbBchecked">
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class="has-margin grid-content">
        <el-form-item>
          <el-input v-model="formdata.verbC" type="text">
            <template slot="prepend">
              <input type="checkbox" v-model="formdata.verbCchecked">
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class="has-margin grid-content">
        <el-form-item>
          <el-input v-model="formdata.verbD" type="text">
            <template slot="prepend">
              <input type="checkbox" v-model="formdata.verbDchecked">
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class="has-margin grid-content">
        <el-form-item>
          <el-input v-model="formdata.verbE" type="text">
            <template slot="prepend">
              <input type="checkbox" v-model="formdata.verbEchecked">
            </template>
          </el-input>
        </el-form-item>
      </div>

    </el-col>

   </el-row>

    <el-row>
      <el-col :span="24">
        <el-form-item>
          <el-input>
            <template slot="prepend">
              <span>Vermerke</span>
            </template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-button @click="saveTicket(formdata)">Abschicken</el-button>
    <el-button @click="formReset()">Zurücksetzen</el-button>

  </el-form>
</div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {

  name: 'THWForm',

  data: () => {
    return {
      formdata: {
        typeTop: [],
        typeMiddle: [],
        priority: [],
        selectStation: [],

        advisorA: '',
        advisorB: '',
        advisorC: '',
        advisorD: '',
        advisorE: '',
        advisorAchecked: false,
        advisorBchecked: false,
        advisorCchecked: false,
        advisorDchecked: false,
        advisorEchecked: false,

        verbA: '',
        verbB: '',
        verbC: '',
        verbD: '',
        verbE: '',
        verbAchecked: false,
        verbBchecked: false,
        verbCchecked: false,
        verbDchecked: false,
        verbEchecked: false,

        gNote: false,
        isAusgang: false,
        dateIncomingA: '',
        timeIncomingA: '',
        hdzIncomingA: '',
        dateIncomingB: '',
        timeIncomingB: '',
        hdzIncomingB: '',
        numberTB: '',
        nameR: '',
        phone: '',
        address: '',
        message: '',
        createTime: '',
        signature: '',
        signatureB: '',
        signatureTime: '',
        position: ''
      }
    }
  },

  created () {
    document.addEventListener('focusin', this.focusIn)
    document.addEventListener('focusout', this.focusOut)
  },

  beforeDestroy () {
    document.removeEventListener('focusin', this.focusIn)
    document.removeEventListener('focusout', this.focusOut)
  },

  methods: {

    ...mapMutations(['saveTicket']),

    submit: function () {
      console.log(this.formdata)
    },

    formReset: function () {
      Object.assign(this.$data, this.$options.data())
    },

    focusIn (event) {
      const el = event.target
      if (el.type === 'text' || el.type === 'textarea') {
        el.classList.add('highlighted')
      }
    },

    focusOut (event) {
      const el = event.target
      if (el.type === 'text' || el.type === 'textarea') {
        el.classList.remove('highlighted')
      }
    }

  },

  computed: {

    annahmeHeader: function () {
      return this.formdata.isAusgang ? 'Annahme' : 'Aufnahme'
    }

  }

}

</script>

<style>
.el-row {
  margin-bottom: 15px;
  margin-top: 15px
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  /* background: #d3dce6 */
  background: white;
}
.grid-content {
  border-radius: 4px;
  border: 1px solid lightgrey;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.el-form-item {
  margin: 0;
}

.labelbox {
  padding: 0;
  background: #f5f7fa;
  color: #909399;
  vertical-align: center;
}

.has-margin {
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 2px;
}

.local-header {
  font-weight: bold;
}

.is-short {
  width: 80%;
  padding-left: 2em;
}

.highlighted {
  background-color: #b7ffa3;
}
</style>
