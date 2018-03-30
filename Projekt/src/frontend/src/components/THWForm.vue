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
                  <label class="headerFormA">Eingehend</label>
                  <label class="headerFormB">Aufnahmevermerk</label>
                  <div class="
                        inputWrapper
                        flexContainerFormA">
                    <label class="inputLabel"
                           for="primaryDate">
                      Datum
                    </label>
                    <input id="primaryDate"
                           class="inputWithLabel"
                           :disabled="other.tempAusgehend"
                           v-model="formdata.primaryDate"/>
                  </div>
                  <div class="
                        inputWrapper
                        flexContainerFormA">
                    <label class="inputLabel"
                           for="primaryTime">
                      Zeit
                    </label>
                    <input id="primaryTime"
                           class="inputWithLabel"
                           :disabled="other.tempAusgehend"
                           v-model="formdata.primaryTime"/>
                  </div>
                  <div class="
                        inputWrapper
                        flexContainerFormA">
                    <label class="inputLabel"
                           for="primaryHdZ">
                      Hdz
                    </label>
                    <input id="primaryHdZ"
                           class="inputWithLabel"
                           :disabled="other.tempAusgehend"
                           v-model="formdata.primaryHdZ"/>
                  </div>
                </div>

                <!--input-complex ("Ausgehend")-->
                <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC
                    flexContainerFormB">
                  <label class="headerFormA">Eingehend</label>
                  <div class="flexContainerFormA">
                    <div class="flexContainerFormB">
                      <label class="headerFormB">Annahmevermerk</label>
                      <div class="
                        inputWrapper
                        flexContainerFormA">
                        <label class="inputLabel"
                               for="secondaryDate">
                          Datum
                        </label>
                        <input id="secondaryDate"
                               class="inputWithLabel"
                               :disabled="other.tempEingehend"
                               v-model="formdata.secondaryDate"/>
                      </div>
                      <div class="
                        inputWrapper
                        flexContainerFormA">
                        <label class="inputLabel"
                               for="secondaryTime">
                          Zeit
                        </label>
                        <input id="secondaryTime"
                               class="inputWithLabel"
                               :disabled="other.tempEingehend"
                               v-model="formdata.secondaryTime"/>
                      </div>
                      <div class="
                        inputWrapper
                        flexContainerFormA">
                        <label class="inputLabel"
                               for="secondaryHdZ">
                          Hdz
                        </label>
                        <input id="secondaryHdZ"
                               class="inputWithLabel"
                               :disabled="other.tempEingehend"
                               v-model="formdata.primaryHdZ"/>
                      </div>
                    </div>
                    <div class="flexContainerFormB">
                      <label class="headerFormB">Beförderungsvermerk</label>
                      <div class="
                        inputWrapper
                        flexContainerFormA">
                        <label class="inputLabel"
                               for="tertiaryDate">
                          Datum
                        </label>
                        <input id="tertiaryDate"
                               class="inputWithLabel"
                               :disabled="other.tempEingehend"
                               v-model="formdata.tertiaryDate"/>
                      </div>
                      <div class="
                        inputWrapper
                        flexContainerFormA">
                        <label class="inputLabel"
                               for="tertiaryTime">
                          Zeit
                        </label>
                        <input id="tertiaryTime"
                               class="inputWithLabel"
                               :disabled="other.tempEingehend"
                               v-model="formdata.tertiaryTime"/>
                      </div>
                      <div class="
                        inputWrapper
                        flexContainerFormA">
                        <label class="inputLabel"
                               for="tertiaryHdZ">
                          Hdz
                        </label>
                        <input id="tertiaryHdZ"
                               class="inputWithLabel"
                               :disabled="other.tempEingehend"
                               v-model="formdata.tertiaryHdZ"/>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <!--sectionTDE-->
            <div class="
                  middleWrapper
                  hasMarginFormB
                  hasPaddingFormB">

              <!--input-complex ("Technisches Betriebsbuch")-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC
                    flexContainerFormB">
                <label class="headerFormA">Technisches Betriebsbuch</label>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <label class="inputLabel"
                         for="numberTB">
                    Nr.
                  </label>
                  <input id="numberTB"
                         class="inputWithLabel"
                         v-model="formdata.numberTB"/>
                </div>
                <label>
                  <input id="checkboxEingehendTop"
                         @change="checkIn();"
                         type="checkbox"
                         v-model="other.tempEingehend"/>
                  Eingehend
                </label>
                <label>
                  <input id="checkboxAusgehendTop"
                         @change="checkOut();"
                         type="checkbox"
                         v-model="other.tempAusgehend"/>
                  Ausgehend
                </label>
              </div>

            </div>

          </div>

          <!--sectionTF-->
          <div class="
                middleWrapper
                hasMarginFormB
                hasPaddingFormB">

            <!--input-complex ("Rufnahme Gegenstelle/Spruchkopf") -->
            <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
              <div class="
                        inputWrapper
                        flexContainerFormA">
                <label class="inputLabel"
                       for="receiverName">
                  Rufnahme der Gegenstelle/Spruchkopf
                </label>
                <input id="receiverName"
                       class="inputWithLabel"
                       v-model="formdata.receiverName"/>
              </div>
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

            <!--checkboxgroup (message-type)-->
            <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
              <el-form-item class="flexContainerFormA">
                <label>
                  <input id="radioMid"
                         type="checkbox"
                         v-model="formdata.midRadio"/>
                  Funk
                </label>
                <label>
                  <input id="phoneMid"
                         type="checkbox"
                         v-model="formdata.midPhone"/>
                  Telefon
                </label>
                <label>
                  <input id="faxMid"
                         type="checkbox"
                         v-model="formdata.midFax"/>
                  Telefax
                </label>
                <label>
                  <input id="DFUMid"
                         type="checkbox"
                         v-model="formdata.midDFU"/>
                  DFÜ
                </label>
                <label>
                  <input id="courierMid"
                         type="checkbox"
                         v-model="formdata.midCourier"/>
                  Kurier/Melder
                </label>
              </el-form-item>
            </div>

            <div class="flexContainerFormA">

              <!--checkbox-group ("Durchsage/Spruch")-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <el-form-item class="flexContainerFormA">
                  <label>
                    <input id="callAnnouncement"
                           type="checkbox"
                           v-model="formdata.callAnnouncement"/>
                    DURCHSAGE
                  </label>
                  <label>
                    <input id="callMessage"
                           type="checkbox"
                           v-model="formdata.callMessage"/>
                    Spruch
                  </label>
                </el-form-item>
              </div>

              <!--checkbox-group ("Sofort/Blitz")-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <el-form-item class="flexContainerFormA">
                  <label>
                    <input id="priorityInstant"
                           type="checkbox"
                           v-model="formdata.priorityInstant"/>
                    Sofort
                  </label>
                  <label>
                    <input id="priorityFlash"
                           type="checkbox"
                           v-model="formdata.priorityFlash"/>
                    Blitz
                  </label>
                </el-form-item>
              </div>

            </div>

            <div class="flexContainerFormA">

              <!--input-complex ("Rufnr.")-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <label class="inputLabel"
                         for="callNumber">
                    Ruf Nr.
                  </label>
                  <input id="callNumber"
                         class="inputWithLabel"
                         v-model="formdata.callNumber"/>
                </div>
              </div>

              <!--input-complex ("Anschrift")-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <label class="inputLabel"
                         for="address">
                    Anschrift
                  </label>
                  <input id="address"
                         class="inputWithLabel"
                         v-model="formdata.address"/>
                </div>
              </div>

              <!--input-complex ("Gesprächsnotiz")-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <label>
                  <input id="talkNote"
                         type="checkbox"
                         v-model="formdata.talkNote"/>
                  GESPRÄCHSNOTIZ
                </label>
              </div>

            </div>

          </div>

          <!--sectionMG-->
          <div class="
                middleWrapper
                hasMarginFormB
                hasPaddingFormB">

            <!--input-complex ("Inhalt")-->
            <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
              <div class="
                        inputWrapper
                        flexContainerFormA">
                <textarea id="content"
                          rows="5"
                          cols="10"
                          placeholder="Inhalt"
                          class="inputWithLabel"
                          v-model="formdata.content"/>
              </div>
            </div>

          </div>

          <!--sectionMHIJK-->
          <div class="
                middleWrapper
                hasMarginFormB
                hasPaddingFormB">

            <!--input-complex ("Absender")-->
            <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
              <div class="
                        inputWrapper
                        flexContainerFormA">
                <label class="inputLabel"
                       for="sender">
                  Absender
                </label>
                <input id="sender"
                       placeholder="Einheit/Einrichtung/Stelle"
                       class="inputWithLabel"
                       v-model="formdata.sender"/>
              </div>
            </div>

            <div class="flexContainerFormA">

              <!--input-complex ("Abfassungszeit")-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <label class="inputLabel"
                         for="createTime">
                    Abfassungszeit
                  </label>
                  <input id="createTime"
                         class="inputWithLabel"
                         v-model="formdata.createTime"/>
                </div>
              </div>

              <!--input-complex ("Zeichen")-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <label class="inputLabel"
                         for="identification">
                    Zeichen
                  </label>
                  <input id="identification"
                         class="inputWithLabel"
                         v-model="formdata.identification"/>
                </div>
              </div>

              <!--input-complex ("Funktion")-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <label class="inputLabel"
                         for="position">
                    Funktion
                  </label>
                  <input id="position"
                         class="inputWithLabel"
                         v-model="formdata.position"/>
                </div>
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

            <!--input-complex ("Quittung")-->
            <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC">
              <label class="headerFormA">Quittung</label>
              <div class="
                        inputWrapper
                        flexContainerFormA">
                <label class="inputLabel"
                       for="docketTime">
                  Zeit
                </label>
                <input id="docketTime"
                       class="inputWithLabel"
                       v-model="formdata.docketTime"/>
              </div>
              <div class="
                        inputWrapper
                        flexContainerFormA">
                <label class="inputLabel"
                       for="position">
                  Zeichen
                </label>
                <input id="docketIdentification"
                       class="inputWithLabel"
                       v-model="formdata.docketIdentification"/>
              </div>
            </div>

            <div class="flexContainerFormA">

              <!--input-complex ("TEL/EL/...")-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC
                    flexContainerFormB">
                <label class="headerFormA">TEL/EL/EAL/UEAL</label>
                <div class="flexContainerFormA">
                  <div class="flexContainerFormB">
                    <label>
                      <input id="stationLeader"
                             type="checkbox"
                             v-model="formdata.stationLeader"/>
                      Leiter
                    </label>
                  </div>
                  <div class="flexContainerFormB">
                    <label>
                      <input id="stationS1"
                             type="checkbox"
                             v-model="formdata.stationS1"/>
                      S1
                    </label>
                    <label>
                      <input id="stationS2"
                             type="checkbox"
                             v-model="formdata.stationS2"/>
                      S2
                    </label>
                    <label>
                      <input id="stationS3"
                             type="checkbox"
                             v-model="formdata.stationS3"/>
                      S3
                    </label>
                    <label>
                      <input id="stationS4"
                             type="checkbox"
                             v-model="formdata.stationS4"/>
                      S4
                    </label>
                    <label>
                      <input id="stationS6"
                             type="checkbox"
                             v-model="formdata.stationS6"/>
                      S5
                    </label>
                  </div>
                </div>
              </div>

              <!--input-complex ("Fachberater")-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC
                    flexContainerFormB">
                <label class="headerFormA">Fachberater</label>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="advisorTickA"
                         type="checkbox"
                         v-model="formdata.advisorTickA"/>
                  <input id="advisorA"
                         class="inputWithLabel"
                         v-model="formdata.advisorA"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="advisorTickB"
                         type="checkbox"
                         v-model="formdata.advisorTickB"/>
                  <input id="advisorB"
                         class="inputWithLabel"
                         v-model="formdata.advisorB"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="advisorTickC"
                         type="checkbox"
                         v-model="formdata.advisorTickC"/>
                  <input id="advisorC"
                         class="inputWithLabel"
                         v-model="formdata.advisorC"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="advisorTickD"
                         type="checkbox"
                         v-model="formdata.advisorTickD"/>
                  <input id="advisorD"
                         class="inputWithLabel"
                         v-model="formdata.advisorD"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="advisorTickE"
                         type="checkbox"
                         v-model="formdata.advisorTickE"/>
                  <input id="advisorE"
                         class="inputWithLabel"
                         v-model="formdata.advisorE"/>
                </div>
              </div>

              <!--input-complex ("Verb. stellen")-->
              <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC
                    flexContainerFormB">
                <label class="headerFormA">Verb. stellen</label>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="connectionTickA"
                         type="checkbox"
                         v-model="formdata.connectionTickA"/>
                  <input id="connectionA"
                         class="inputWithLabel"
                         v-model="formdata.connectionA"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="connectionTickB"
                         type="checkbox"
                         v-model="formdata.connectionTickB"/>
                  <input id="connectionB"
                         class="inputWithLabel"
                         v-model="formdata.connectionB"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="connectionTickC"
                         type="checkbox"
                         v-model="formdata.connectionTickC"/>
                  <input id="connectionC"
                         class="inputWithLabel"
                         v-model="formdata.connectionC"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="connectionTickD"
                         type="checkbox"
                         v-model="formdata.connectionTickD"/>
                  <input id="connectionD"
                         class="inputWithLabel"
                         v-model="formdata.connectionD"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="connectionTickE"
                         type="checkbox"
                         v-model="formdata.connectionTickE"/>
                  <input id="connectionE"
                         class="inputWithLabel"
                         v-model="formdata.connectionE"/>
                </div>
              </div>

            </div>

          </div>

          <!--sectionBEFG-->
          <div class="
                middleWrapper
                hasMarginFormB
                hasPaddingFormB
                flexContainerFormB">

            <!--input-complex ("Vermerke")-->
            <div class="
                    innerWrapper
                    hasMarginFormC
                    hasPaddingFormC
                    flexContainerFormB">
              <label class="headerFormA">Vermerke</label>
              <textarea id="annotations"
                        rows="5"
                        cols="10"
                        class="inputWithLabel"
                        v-model="formdata.annotations"/>
            </div>

          </div>

        </div>

      </el-form>
    </div>

    <!-- side-menu -->
    <div class="
          sideMenuForm
          hasShadowFormA
          flexContainerFormB">
      <el-button @click="
                  addFormData();
                  notifySuccess('Abgeschickt')"
                 tabindex="6">
        Abschicken
      </el-button>
      <el-button @click="
                  formReset();
                  notifySuccess('Formular zurückgesetzt')">
        Zurücksetzen
      </el-button>
    </div>
  </div>
</template>

<script>
import { Notification } from 'element-ui'
import { mapMutations, mapActions } from 'vuex'
import ElHeader from 'element-ui/packages/header/src/main'
import ElRow from 'element-ui/packages/row/src/row'
import ElContainer from 'element-ui/packages/container/src/main'
import ElMain from 'element-ui/packages/main/src/main'

export default {
  components: {
    ElMain,
    ElContainer,
    ElRow,
    ElHeader
  },
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
    let id = to.params.id

    if (id === undefined) {
      next(vm => {
        // no id => load default values
        vm.setDefaultData(vm.$options.data())
      })
    } else {
      next(vm => {
        vm.$store.dispatch('loadFormDataAction', id)
          .then(formData => {
            vm.$data.formdata = formData.formdata
          })
          .catch(error => {
            alert(error)
            next(false)
          })
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

    saveNewForm: function () {
      this.$store
        .dispatch('saveNewFormAction', this.formdata)
        .then(() => this.$router.push('home'))
        .catch(error => alert(error))
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
  .inputWrapper {
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 10px;
    height: 40px
  }
  .inputLabel {
    background-color: var(--darkNeutralColor);
    min-width: 60px;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
  }
  .inputWithLabel {
    border: var(--darkNeutralColor);
    border-style: solid;
    max-width: 60px;
    padding-left: 10px;
  }
  .headerFormA {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
  }
  .headerFormB {
    padding-bottom: 10px;
    padding-left: 20px;
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
