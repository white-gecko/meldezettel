<template>
<div>
  <el-form
    ref='form' :model='formdata'
    style='background:lightblue; padding: 0.5em 0.5em'>

    <!-- ============================================================ -->
    <!-- Top area -->

    <el-row :gutter='15' type='flex' style='word-spacing: -1em'>
      <el-col :span='14'>
        <div class='grid-content bg-purple'>
          <el-form-item>
            <el-checkbox label='Funk' v-model="formdata.topRadio">
            </el-checkbox>
            <el-checkbox label='Telefon' v-model="formdata.topPhone">
            </el-checkbox>
            <el-checkbox label='Telefax' v-model="formdata.topFax">
            </el-checkbox>
            <el-checkbox label='DFÜ' v-model="formdata.topDFU">
            </el-checkbox>
            <el-checkbox label='Kurier/Melder' v-model="formdata.topCourier">
            </el-checkbox>
          </el-form-item>
        </div>
      </el-col>

      <el-col :span='10'>
        <div class='grid-content bg-purple'>
          <el-form-item>
            <el-switch
              v-model='formdata.outgoing'
              active-color='#13ce66'
              inactive-color='#1b62d8'
              active-text='Ausgehend'
              inactive-text='Eingehend'>
            </el-switch>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter='15' type='flex'>
      <el-col :span='4'>
        <div class='grid-content labelbox bg-purple'>
          <el-form-item>
            {{ annahmeHeader }}
          </el-form-item>
        </div>
      </el-col>

      <el-col :span='7'>
          <div class='grid-content'>
            <el-form-item>
              <el-date-picker
                v-model='formdata.primaryDate'
                type='date'
                placeholder='Datum auswählen'
                format='dd.MM.yyyy'>
              </el-date-picker>
            </el-form-item>
          </div>
      </el-col>

      <el-col :span='7'>
          <div class='grid-content'>
            <el-form-item>
              <el-time-picker
                v-model='formdata.primaryTime'
                placeholder='Uhrzeit auswählen'
                format='HH:mm'>
              </el-time-picker>
            </el-form-item>
          </div>
      </el-col>

      <el-col :span='6'>
        <div class='grid-content'>
          <el-form-item>
            <el-input v-model='formdata.primaryHdZ'>
              <template slot='prepend'>
                <span>Hdz</span>
              </template>
            </el-input>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter='15' type='flex' v-if='this.formdata.outgoing'>
      <el-col :span='4'>
        <div class='grid-content labelbox bg-purple'>
          <el-form-item>
            Beförderung
          </el-form-item>
        </div>
      </el-col>

      <el-col :span='7'>
          <div class='grid-content'>
            <el-form-item>
              <el-date-picker
                v-model='formdata.secondaryDate'
                type='date'
                placeholder='Datum auswählen'
                format='dd.MM.yyyy'>
              </el-date-picker>
            </el-form-item>
          </div>
      </el-col>

      <el-col :span='7'>
          <div class='grid-content'>
            <el-form-item>
              <el-time-picker
                v-model='formdata.secondaryTime'
                placeholder='Uhrzeit auswählen'
                format='HH:mm'>
              </el-time-picker>
            </el-form-item>
          </div>
      </el-col>

      <el-col :span='6'>
        <div class='grid-content'>
          <el-form-item>
            <el-input v-model='formdata.secondaryHdZ'>
              <template slot='prepend'>
                <span>Hdz</span>
              </template>
            </el-input>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span='24'>
        <div class='grid-content'>
          <el-form-item>
            <el-input v-model='formdata.numberTB' placeholder='Nummer'>
              <template slot='prepend'>
                <span>Technisches Betriebsbuch</span>
              </template>
            </el-input>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter='15' type='flex'>
      <el-col :span=24>
        <el-form-item>
          <el-input v-model='formdata.receiverName'>
            <template slot='prepend'>
              <span>Gegenstelle</span>
            </template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <!-- End of top area -->
    <!-- ============================================================ -->
    <!-- Beginning of middle area -->

    <hr style='height: 1px;color:#003399;background-color:#003399;'>

    <el-row :gutter='15' type='flex'>
      <el-col :span='24'>
        <div class='grid-content bg-purple' style='word-spacing: 2em'>
          <el-form-item>
            <el-checkbox label='Funk' v-model="formdata.midRadio">
            </el-checkbox>
            <el-checkbox label='Telefon' v-model="formdata.midPhone">
            </el-checkbox>
            <el-checkbox label='Telefax' v-model="formdata.midFax">
            </el-checkbox>
            <el-checkbox label='DFÜ' v-model="formdata.midDFU">
            </el-checkbox>
            <el-checkbox label='Kurier/Melder' v-model="formdata.midCourier">
            </el-checkbox>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter='15' type='flex' >
      <el-col :span='9'>
        <div class='grid-content bg-purple' style='word-spacing: 0em'>
          <el-form-item>
            <el-checkbox label='DURCHSAGE' v-model="formdata.callAnnouncement">
            </el-checkbox>
            <el-checkbox label='Spruch' v-model="formdata.callMessage">
            </el-checkbox>
          </el-form-item>
        </div>
      </el-col>

      <el-col :span='9'>
        <div class='grid-content bg-purple' style='word-spacing: 0em'>
          <el-form-item>
              <el-checkbox label='Sofort' v-model="formdata.priorityInstant">
              </el-checkbox>
              <el-checkbox label='Blitz' v-model="formdata.priorityFlash">
              </el-checkbox>
          </el-form-item>
        </div>
      </el-col>

      <el-col :span='6'>
        <div class='grid-content bg-purple' style='word-spacing: 0em'>
          <el-form-item>
            <el-checkbox-group v-model='formdata.talkNote'>
              <el-checkbox label='GESPRÄCHSNOTIZ' name='type4'>
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter='15' type='flex'>
      <el-col :span='6'>
          <el-form-item>
            <el-input placeholder='' v-model='formdata.callNumber' tabindex='1'>
              <template slot='prepend'>Ruf Nr.</template>
            </el-input>
          </el-form-item>
      </el-col>

      <el-col :span='18'>
          <el-form-item>
            <el-input placeholder='' v-model='formdata.address' tabindex='2'>
              <template slot='prepend'>Anschrift</template>
            </el-input>
          </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter='15' type='flex'>
      <el-col :span='24'>
          <el-form-item>
            <el-input
              type='textarea'
              :rows='3'
              placeholder='Inhalt'
              :autosize='{ minRows: 5, maxRows: 13 }'
              v-model='formdata.content'
              tabindex='3'>
            </el-input>
          </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter='15' type='flex'>
      <el-col :span='8'>
          <el-form-item label='' style='padding-left: 2px;'>
            <el-time-picker
              v-model='formdata.createTime'
              placeholder='Abfassungszeit'
              format='HH:mm'>
            </el-time-picker>
          </el-form-item>
      </el-col>

      <el-col :span='8'>
          <el-form-item>
            <el-input placeholder='' v-model='formdata.identification'>
              <template slot='prepend'>Zeichen</template>
            </el-input>
          </el-form-item>
      </el-col>

      <el-col :span='8'>
          <el-form-item>
            <el-input placeholder='' v-model='formdata.position' tabindex='4'>
              <template slot='prepend'>Funktion</template>
            </el-input>
          </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter='15' type='flex'>
      <el-col :span='24'>
          <el-form-item>
            <el-input
              placeholder='Einheit/Einrichtung/Stelle'
              v-model='formdata.sender'
              tabindex='5'>
              <template slot='prepend'>Absender</template>
            </el-input>
          </el-form-item>
      </el-col>
    </el-row>

    <!-- End of middle area -->
    <!-- ============================================================ -->
    <!-- Beginning of bottom area -->

    <hr style='height: 1px;color:#003399;background-color:#003399;'>

    <el-row :gutter='15' type='flex'>
      <el-col :span='7'>
        <el-form-item>
          <div class='grid-content bg-purple labelbox local-header'>
            Quittung
          </div>
        </el-form-item>
      </el-col>
      <el-col :span='7'>
          <el-form-item label='' style='padding-left: 2px;'>
            <el-time-picker
              v-model='formdata.docketTime'
              placeholder='Uhrzeit'
              format='HH:mm'>
              <template slot='prefix'>Zeichen</template>
            </el-time-picker>
          </el-form-item>
      </el-col>

      <el-col :span='10'>
          <el-form-item>
            <el-input placeholder='' v-model='formdata.docketIdentification'>
              <template slot='prepend'>Zeichen</template>
            </el-input>
          </el-form-item>
      </el-col>

   </el-row>

   <el-row>

    <el-col :span= 8>
      <el-form-item>
        <div class='grid-content bg-purple labelbox has-margin'>
          <span>TEL/EL/EAL/UEAL </span>
        </div>
      </el-form-item>
    </el-col>

    <el-col :span= 8>
      <el-form-item>
        <div class='grid-content bg-purple labelbox has-margin'>
          <span>Fachberater </span>
        </div>
      </el-form-item>
    </el-col>

    <el-col :span= 8>
      <el-form-item>
        <div class='grid-content bg-purple labelbox has-margin'>
          <span>Verb. stellen</span>
        </div>
      </el-form-item>
    </el-col>

   </el-row>

   <el-row>
    <el-col :span=4>
      <div class='grid-content bg-purple has-margin'>
        <el-form-item>
          <el-checkbox
            label='Leiter'
            v-model="formdata.stationLeader">
          </el-checkbox>
        </el-form-item>
      </div>
    </el-col>

    <el-col :span=4>

        <div class='grid-content bg-purple has-margin'>
          <el-form-item>
            <el-checkbox label='S1' v-model="formdata.stationS1"> </el-checkbox>
          </el-form-item>
        </div>

        <div class='grid-content bg-purple has-margin'>
          <el-form-item>
            <el-checkbox label='S2' v-model="formdata.stationS2"> </el-checkbox>
          </el-form-item>
        </div>

        <div class='grid-content bg-purple has-margin'>
          <el-form-item>
            <el-checkbox label='S3' v-model="formdata.stationS3"> </el-checkbox>
          </el-form-item>
        </div>

        <div class='grid-content bg-purple has-margin'>
          <el-form-item>
            <el-checkbox label='S4' v-model="formdata.stationS4"> </el-checkbox>
          </el-form-item>
        </div>

        <div class='grid-content bg-purple has-margin'>
          <el-form-item>
            <el-checkbox label='S6' v-model="formdata.stationS6"> </el-checkbox>
          </el-form-item>
        </div>

    </el-col>

    <el-col :span=8>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.advisorA' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.advisorTickA'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.advisorB' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.advisorTickB'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.advisorC' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.advisorTickC'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.advisorD' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.advisorTickD'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.advisorE' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.advisorTickE'>
            </template>
          </el-input>
        </el-form-item>
      </div>

    </el-col>

    <el-col :span=8>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.connectionA' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.connectionTickA'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.connectionB' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.connectionTickB'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.connectionC' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.connectionTickC'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.connectionD' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.connectionTickD'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.connectionE' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.connectionTickE'>
            </template>
          </el-input>
        </el-form-item>
      </div>

    </el-col>

   </el-row>

    <el-row>
      <el-col :span='24'>
        <el-form-item>
          <el-input v-model='formdata.annotations'>
            <template slot='prepend'>
              <span>Vermerke</span>
            </template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-button
      @click="addFormData(); notifySuccess('Abgeschickt')"
      tabindex="6">Abschicken
    </el-button>
    <el-button
      @click="formReset(); notifySuccess('Formular zurückgesetzt')"
      >Zurücksetzen
    </el-button>

  </el-form>
</div>
</template>

<script>

import { Notification } from 'element-ui'
import { mapMutations, mapActions } from 'vuex'
import { quitstore } from '../api/QuitStoreAdapter.js'
import { parseResponse } from '../sparql_help/sparql_response.js'
import sparql from '../sparql_help/sparql_queries.js'

export default {
  name: 'THWForm',

  data: () => {
    return {
      formdata: {
        topRadio: true,
        topPhone: false,
        topFax: false,
        topDFU: false,
        topCourier: false,
        numberTB: '',
        outgoing: false,
        receiverName: '',

        primaryDate: '',
        primaryTime: '',
        primaryHdZ: '',
        secondaryDate: '',
        secondaryTime: '',
        secondaryHdZ: '',

        midRadio: true,
        midPhone: false,
        midFax: false,
        midDFU: false,
        midCourier: false,

        callAnnouncement: false,
        callMessage: false,

        priorityInstant: false,
        priorityFlash: false,

        address: '',
        callNumber: '',
        talkNote: false,
        content: '',
        sender: '',
        createTime: '',
        identification: '',
        position: '',

        docketIdentification: '',
        docketTime: '',

        stationLeader: false,
        stationS1: false,
        stationS2: false,
        stationS3: false,
        stationS4: false,
        stationS6: false,

        advisorA: '',
        advisorB: '',
        advisorC: '',
        advisorD: '',
        advisorE: '',
        advisorTickA: false,
        advisorTickB: false,
        advisorTickC: false,
        advisorTickD: false,
        advisorTickE: false,

        connectionA: '',
        connectionB: '',
        connectionC: '',
        connectionD: '',
        connectionE: '',
        connectionTickA: false,
        connectionTickB: false,
        connectionTickC: false,
        connectionTickD: false,
        connectionTickE: false,

        annotations: ''

      }
    }
  },

  // load formdata before entering
  beforeRouteEnter (to, from, next) {
    var id = to.params.id

    if (id === undefined) {
      next(vm => {
        // no id => load default values
        vm.setDefaultData(vm.$options.data())
      })
    } else {
      let query = sparql.formQuery(id)

      // query quitstore for the requested id
      quitstore.getData(query)
        .then((response) => {
          response = parseResponse(response.data)
          if (response.length > 0) {
            // response length > 0 -> load document
            next(vm => {
              let data = {}
              // data is in the form [{p: 'predicateName', o: 'predicateValue'},...] -> convert to {'predicateName': predicateValue, ...}
              for (let predicate of response) {
                data[predicate.p] = predicate.o
              }
              vm.setDefaultData({'formdata': data})
            })
          } else {
            // response length == 0 -> no triples for the document id can be found
            alert('document not found')
            next(false)
          }
        })
        .catch((error) => {
          // something went wrong
          alert('Error trying to load document')
          console.error(error)
        })
    }
  },

  beforeRouteUpdate (to, from, next) {
    next(false)
  },

  created () {
    document.addEventListener('focusin', this.focusIn)
    document.addEventListener('focusout', this.focusOut)
    console.log(this)
  },

  beforeDestroy () {
    document.removeEventListener('focusin', this.focusIn)
    document.removeEventListener('focusout', this.focusOut)
  },

  methods: {
    ...mapMutations(['saveTicket']),
    ...mapActions(['addFormData']),

    addFormData: function () {
      console.log(this.$data.formdata)
      this.$store
        .dispatch('addFormData', this.formdata)
        .then(() => this.$router.push('home'))
        .catch((error) => alert(error))
    },

    formReset: function () {
      this.$data.formdata = JSON.parse(JSON.stringify(this.default.formdata))
    },

    setDefaultData: function (value) {
      this.default = value
      this.formReset()
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
    annahmeHeader: function () {
      return this.formdata.isAusgang ? 'Annahme' : 'Aufnahme'
    }
  }
}
</script>

<style>
.el-row {
  margin-bottom: 15px;
  margin-top: 15px;
}
.el-col {
  border-radius: 4px
}
.bg-purple {
  /* background: #d3dce6 */
  background: white
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
