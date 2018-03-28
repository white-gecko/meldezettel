documentID: 0,
<template>
  <div class="flexContainerFormA">
    <!--main-form-->
    <div class="
          formWrapper
          hasShadowFormA">
      <el-form class="
              form
              flexContainerFormB"
               ref="form"
               :model="formdata">

        <!--top-section-->
        <div class="
              outerWrapper
              hasMarginFormA
              hasPaddingFormA
              flexContainerFormB">

          <div class="flexContainerFormA">

            <!--sectionTABC-->
            <div class="
                  middleWrapper
                  hasMarginFormB
                  hasPaddingFormB
                  flexContainerFormB">

              <!--checkbox-group (message-type)-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <el-form-item class="flexContainerFormA">
                  <label>
                    <input id="radioTop"
                           type="checkbox"
                           v-model="formdata.topRadio"/>
                    Funk
                  </label>
                  <label>
                    <input id="phoneTop"
                           type="checkbox"
                           v-model="formdata.topPhone"/>
                    Telefon
                  </label>
                  <label>
                    <input id="faxTop"
                           type="checkbox"
                           v-model="formdata.topFax"/>
                    Telefax
                  </label>
                  <label>
                    <input id="DFUTop"
                           type="checkbox"
                           v-model="formdata.topDFU"/>
                    DFÜ
                  </label>
                  <label>
                    <input id="courierTop"
                           type="checkbox"
                           v-model="formdata.topCourier"/>
                    Kurier/Melder
                  </label>
                </el-form-item>
              </div>

              <div class="flexContainerFormA">

                <!--input-complex ("Eingehend")-->
                <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC
                    flexContainerFormB">
                  <label>Eingehend</label>
                  <label>Aufnahmevermerk</label>
                  <div class="flexContainerFormA">
                    <label class="inputLabel"
                           for="dateIncomingTop">
                      Datum
                    </label>
                    <input id="dateIncomingTop"/>
                  </div>
                </div>

                <!--TC-->
                <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                  <div class="testSquare"></div>
                </div>

              </div>

            </div>

            <!--sectionTDE-->
            <div class="
                  middleWrapper
                  hasMarginFormB
                  hasPaddingFormB
                  flexContainerFormB">

              <!--TD-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="testSquare"></div>
              </div>

              <!--TE-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="testSquare"></div>
              </div>

            </div>

          </div>

          <!--sectionTF-->
          <div class="
                middleWrapper
                hasMarginFormB
                hasPaddingFormB">

            <!--TF-->
            <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
              <div class="testSquare"></div>
            </div>

          </div>

        </div>

        <!--mid-section-->
        <div class="
              outerWrapper
              hasMarginFormA
              hasPaddingFormA
              flexContainerFormB">

          <!--sectionMABCDEF-->
          <div class="
                middleWrapper
                hasMarginFormB
                hasPaddingFormB
                flexContainerFormB">

            <!--MA-->
            <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
              <div class="testSquare"></div>
            </div>

            <div class="flexContainerFormA">

              <!--MB-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="testSquare"></div>
              </div>

              <!--MC-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="testSquare"></div>
              </div>

            </div>

            <div class="flexContainerFormA">

              <!--MD-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="testSquare"></div>
              </div>

              <!--ME-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="testSquare"></div>
              </div>

              <!--MF-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="testSquare"></div>
              </div>

            </div>

          </div>

          <!--sectionMG-->
          <div class="
                middleWrapper
                hasMarginFormB
                hasPaddingFormB">

            <!--MG-->
            <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
              <div class="testSquare"></div>
            </div>

          </div>

          <!--sectionMHIJK-->
          <div class="
                middleWrapper
                hasMarginFormB
                hasPaddingFormB">

            <!--MH-->
            <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
              <div class="testSquare"></div>
            </div>

            <div class="flexContainerFormA">

              <!--MI-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="testSquare"></div>
              </div>

              <!--MJ-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="testSquare"></div>
              </div>

              <!--MK-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="testSquare"></div>
              </div>

            </div>

          </div>

        </div>

        <!--bot-section-->
        <div class="
              outerWrapper
              hasMarginFormA
              hasPaddingFormA
              flexContainerFormA">

          <!--sectionBABCD-->
          <div class="
                middleWrapper
                hasMarginFormB
                hasPaddingFormB
                flexContainerFormB">

            <!--BA-->
            <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
              <div class="testSquare"></div>
            </div>

            <div class="flexContainerFormA">

              <!--BB-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="testSquare"></div>
              </div>

              <!--BC-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="testSquare"></div>
              </div>

              <!--BD-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="testSquare"></div>
              </div>

            </div>

          </div>

          <!--sectionBEFG-->
          <div class="
                middleWrapper
                hasMarginFormB
                hasPaddingFormB
                flexContainerFormB">

            <!--BE-->
            <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
              <div class="testSquare"></div>
            </div>

          </div>

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
  .inputLabel {
    background-color: var(--darkNeutralColor);
    padding-top: 4px;
  }

  /*
  space:
    different settings for spacing
   */
  .hasMarginFormA {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .hasPaddingFormA {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .hasMarginFormB {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .hasPaddingFormB {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .hasMarginFormC {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
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
    margin: 10px;
  }
</style>
