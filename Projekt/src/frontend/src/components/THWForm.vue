<template>
<div>
  <el-form ref='form' :model='formdata' style='background:lightblue; padding: 0.5em 0.5em'>

    <!-- ============================================================ -->
    <!-- Top area -->

    <el-row :gutter='15' type='flex' style='word-spacing: -1em'>
      <el-col :span='14'>
        <div class='grid-content bg-purple'>
          <el-form-item>
            <el-checkbox-group v-model='formdata.typeTop'>
              <el-checkbox label='Funk' name='typeTop'>
              </el-checkbox>
              <el-checkbox label='Telefon' name='typeTop'>
              </el-checkbox>
              <el-checkbox label='Telefax' name='typeTop'>
              </el-checkbox>
              <el-checkbox label='DFÜ' name='typeTop'>
              </el-checkbox>
              <el-checkbox label='Kurier/Melder' name='typeTop'>
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </el-col>

      <el-col :span='10'>
        <div class='grid-content bg-purple'>
          <el-form-item>
            <el-switch
              v-model='formdata.isAusgang'
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
              <el-date-picker v-model='formdata.dateIncomingA' type='date' placeholder='Datum auswählen' format='dd.MM.yyyy'>
              </el-date-picker>
            </el-form-item>
          </div>
      </el-col>

      <el-col :span='7'>
          <div class='grid-content'>
            <el-form-item>
              <el-time-picker v-model='formdata.timeIncomingA' placeholder='Uhrzeit auswählen'>
              </el-time-picker>
            </el-form-item>
          </div>
      </el-col>

      <el-col :span='6'>
        <div class='grid-content'>
          <el-form-item>
            <el-input v-model='formdata.hdzIncomingA'>
              <template slot='prepend'>
                <span>Hdz</span>
              </template>
            </el-input>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter='15' type='flex' v-if='this.formdata.isAusgang'>
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
              <el-date-picker v-model='formdata.dateIncomingB' type='date' placeholder='Datum auswählen'>
              </el-date-picker>
            </el-form-item>
          </div>
      </el-col>

      <el-col :span='7'>
          <div class='grid-content'>
            <el-form-item>
              <el-time-picker v-model='formdata.timeIncomingB' placeholder='Uhrzeit auswählen'>
              </el-time-picker>
            </el-form-item>
          </div>
      </el-col>

      <el-col :span='6'>
        <div class='grid-content'>
          <el-form-item>
            <el-input v-model='formdata.hdzIncomingB'>
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
          <el-input v-model='formdata.nameR'>
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
            <el-checkbox-group v-model='formdata.typeMiddle'>
              <el-checkbox label='Funk' name='typeMiddle'>
              </el-checkbox>
              <el-checkbox label='Telefon' name='typeMiddle'>
              </el-checkbox>
              <el-checkbox label='Telefax' name='typeMiddle'>
              </el-checkbox>
              <el-checkbox label='DFÜ' name='typeMiddle'>
              </el-checkbox>
              <el-checkbox label='Kurier/Melder' name='typeMiddle'>
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter='15' type='flex' >
      <el-col :span='9'>
        <div class='grid-content bg-purple' style='word-spacing: 0em'>
          <el-form-item>
            <el-checkbox-group v-model='formdata.typeCall'>
              <el-checkbox label='DURCHSAGE' name='typeCall'>
              </el-checkbox>
              <el-checkbox label='Spruch' name='typeCall'>
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </el-col>

      <el-col :span='9'>
        <div class='grid-content bg-purple' style='word-spacing: 0em'>
          <el-form-item>
            <el-checkbox-group v-model='formdata.priority'>
              <el-checkbox label='Sofort' name='priority'>
              </el-checkbox>
              <el-checkbox label='Blitz' name='priority'>
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </el-col>

      <el-col :span='6'>
        <div class='grid-content bg-purple' style='word-spacing: 0em'>
          <el-form-item>
            <el-checkbox-group v-model='formdata.gNote'>
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
            <el-input placeholder='' v-model='formdata.phone' tabindex='1'>
              <template slot='prepend'>Ruf Nr.</template>
            </el-input>
          </el-form-item>
      </el-col>

      <el-col :span='18'>
          <el-form-item>
            <el-input placeholder='' v-model='formdata.adress' tabindex='2'>
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
              v-model='formdata.message'
              tabindex='3'>
            </el-input>
          </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter='15' type='flex'>
      <el-col :span='8'>
          <el-form-item label='' style='padding-left: 2px;'>
            <el-time-picker v-model='formdata.createTime' placeholder='Abfassungszeit'>
            </el-time-picker>
          </el-form-item>
      </el-col>

      <el-col :span='8'>
          <el-form-item>
            <el-input placeholder='' v-model='formdata.signature'>
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
            <el-input placeholder='Einheit/Einrichtung/Stelle' v-model='formdata.sender' tabindex='5'>
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
            <el-time-picker v-model='formdata.signatureTime' placeholder='Uhrzeit'>
              <template slot='prefix'>Zeichen</template>
            </el-time-picker>
          </el-form-item>
      </el-col>

      <el-col :span='10'>
          <el-form-item>
            <el-input placeholder='' v-model='formdata.signatureB'>
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
          <el-checkbox-group v-model='formdata.selectStation'>
            <el-checkbox label='Leiter'> </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </div>
    </el-col>

    <el-col :span=4>

        <div class='grid-content bg-purple has-margin'>
          <el-form-item>
            <el-checkbox-group v-model='formdata.selectStation'>
              <el-checkbox label='S1'> </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>

        <div class='grid-content bg-purple has-margin'>
          <el-form-item>
            <el-checkbox-group v-model='formdata.selectStation'>
              <el-checkbox label='S2'> </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>

        <div class='grid-content bg-purple has-margin'>
          <el-form-item>
            <el-checkbox-group v-model='formdata.selectStation'>
              <el-checkbox label='S3'> </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>

        <div class='grid-content bg-purple has-margin'>
          <el-form-item>
            <el-checkbox-group v-model='formdata.selectStation'>
              <el-checkbox label='S4'> </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>

        <div class='grid-content bg-purple has-margin'>
          <el-form-item>
            <el-checkbox-group v-model='formdata.selectStation'>
              <el-checkbox label='S6'> </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>

    </el-col>

    <el-col :span=8>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.advisorA' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.advisorAchecked'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.advisorB' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.advisorBchecked'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.advisorC' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.advisorCchecked'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.advisorD' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.advisorDchecked'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.advisorE' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.advisorEchecked'>
            </template>
          </el-input>
        </el-form-item>
      </div>

    </el-col>

    <el-col :span=8>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.verbA' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.verbAchecked'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.verbB' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.verbBchecked'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.verbC' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.verbCchecked'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.verbD' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.verbDchecked'>
            </template>
          </el-input>
        </el-form-item>
      </div>

      <div class='has-margin grid-content'>
        <el-form-item>
          <el-input v-model='formdata.verbE' type='text'>
            <template slot='prepend'>
              <input type='checkbox' v-model='formdata.verbEchecked'>
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

    <el-button @click="addFormData(); notifySuccess('Abgeschickt')" tabindex="6">Abschicken</el-button>
    <el-button @click="formReset(); notifySuccess('Formular zurückgesetzt')">Zurücksetzen</el-button>

  </el-form>
</div>
</template>

<script>

import store from '../store/state.js'
import { Notification } from 'element-ui'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'THWForm',

  data: () => {
    return {
      formdata: {
        typeTop: ['Funk'],
        typeMiddle: ['Funk'],
        typeCall: [],
        priority: [],
        selectStation: [],
        typeCall: [],

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
        adress: '',
        message: '',
        createTime: '',
        signature: '',
        signatureB: '',
        signatureTime: '',
        position: '',
        sender: '',
        annotations: ''

      }
    }
  },

  // https://router.vuejs.org/en/advanced/navigation-guards.html
  // fetches data to be loaded into the form depending on the params
  beforeRouteEnter (to, from, next) {
    var id = to.params.id
    // check if an id param was supplied
    if (id === undefined) {
      next(vm => {
        // no id => load default values
        vm.setDefaultData(vm.$options.data())
      })
    // load existing document if id is valid
    } else if (store.ticketlist[id] !== undefined) {
      next(vm => {
        vm.setDefaultData({formdata: JSON.parse(JSON.stringify(store.ticketlist[id]))})
      })
    // abort navigation if document does not exist
    } else {
      alert('document not found')
      next(false)
    }
  },

  // same functionality as in beforeRouteEnter
  beforeRouteUpdate (to, from, next) {
    var id = to.params.id
    if (id === undefined) {
      this.setDefaultData(this.$options.data())
      next()
    } else if (store.ticketlist[id] !== undefined) {
      this.setDefaultData({formdata: JSON.parse(JSON.stringify(store.ticketlist[id]))})
      next()
    } else {
      alert('document not found')
      next(false)
    }
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
      console.log('test123')
      this.$store
        .dispatch('addFormData', this.formdata)
        .then(() => this.$router.push('home'))
        .catch((error) => alert(error))
    },

    submit: function () {
      store.ticketlist.push(JSON.parse(JSON.stringify(this.$data.formdata)))
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
