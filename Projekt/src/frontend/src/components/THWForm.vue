documentID: 0,
<template>
  <div class="flexContainerFormA">
    <!-- main-form -->
    <div class="
          formWrapper
          hasShadowFormA">
      <el-form class="
              form
              flexContainerFormB"
               ref="form"
               :model="formdata">
        <div class="
              outerWrapper
              hasMarginFormA
              hasPaddingFormA">
          <div class="testSquare"></div>
        </div>
        <div class="
              outerWrapper
              hasMarginFormA
              hasPaddingFormA">
          <div class="testSquare"></div>
        </div>
        <div class="
              outerWrapper
              hasMarginFormA
              hasPaddingFormA">
          <div class="testSquare"></div>
        </div>
      </el-form>
    </div>
    <!-- side-menu -->
    <div class="
          sideMenuForm
          hasShadowFormA">

    </div>
  </div>
</template>

<script>
import { Notification } from 'element-ui'
import { mapMutations, mapActions } from 'vuex'
import { quitstore } from '../api/QuitStoreAdapter.js'
import { parseResponse } from '../sparql_help/sparql_response.js'
import sparql from '../sparql_help/sparql_queries.js'
import ElHeader from 'element-ui/packages/header/src/main'
import ElRow from 'element-ui/packages/row/src/row'
import ElContainer from 'element-ui/packages/container/src/main'
import ElMain from 'element-ui/packages/main/src/main'

export default {

  components: {
    ElMain,
    ElContainer,
    ElRow,
    ElHeader},
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
        tertiaryDate: '',
        tertiaryTime: '',
        tertiaryHdZ: '',
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

      },

      other: {
        tempEingehend: true,
        tempAusgehend: false
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
  },

  beforeDestroy () {
    document.removeEventListener('focusin', this.focusIn)
    document.removeEventListener('focusout', this.focusOut)
  },

  methods: {

    ...mapMutations(['saveTicket']),
    ...mapActions(['addFormData']),

    addFormData: function () {
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
    },

    checkIn () {
      if (this.other.tempEingehend) {
        this.other.tempAusgehend = false
        this.formdata.outgoing = false
      }
    },

    checkOut () {
      if (this.other.tempAusgehend) {
        this.other.tempEingehend = false
        this.formdata.outgoing = true
      }
    }
  }

}

</script>

<style>
  .form {
    background-color: var(--formBlueColor);
    overflow: visible;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--primaryTextColor);
  }
  .formWrapper {
    background-color: var(--semiLightNeutralColor);
    width: 80%;
    overflow: visible;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--primaryTextColor);
    padding-top: 50px;
    padding-bottom: 20px;
  }
  .sideMenuForm {
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
  space:
    different settings for spacing
   */
  .hasMarginFormA {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  .hasPaddingFormA {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .hasMarginFormB {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  .hasPaddingFormB {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .hasMarginFormC {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  .hasPaddingFormC {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  /*border-settings:
    different border styles
  */

  /*
 shadow-settings:
 different shadow settings
  */
  .hasShadowFormA {
    box-shadow: 0px 5px 10px 0px var(--lightShadowColor);
  }
  .hasShadowFormB {
    box-shadow: 0px 10px 20px 1px var(--lightShadowColor);
  }

  /*
  flex-settings:
    different settings for the flex attribute
  */
  .flexContainerFormA {
    display: flex;
    flex-direction: row;
  }
  .flexContainerFormB {
    display: flex;
    flex-direction: column;
  }

  .testSquare{
    background-color: yellow;
    width: 100px;
    height: 50px;
  }
</style>
