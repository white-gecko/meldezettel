<template>
  <div class="flexContainerFormA"
       style="flex-wrap: nowrap">
    <!--main-form-->
    <div class="
          formWrapper
          hasShadowFormA">
      <el-form ref="form" :model="formdata"
      :class="{
        'is-blue': isBlue,
        'is-green': isGreen,
        'is-yellow': isYellow,
        'is-red': isRed,
        'form, flexContainerFormB': true
        }">

        <!--top-section-->
        <div class="
              outerWrapper
              hasMarginFormA
              hasPaddingFormA
              flexContainerFormB"
             style="padding-top: 5px">

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
                    checkboxgroupMTTop">
                <div class="overlay" v-show="!checkboxGroupTop"></div>
                <div class="flexContainerFormC">
                  <label>
                    <input id="radioTop"
                           type="checkbox"
                           v-model="formdata.topRadio"
                           :tabindex="other.tabIndexConf.topRadio"/>
                    Funk
                  </label>
                  <label>
                    <input id="phoneTop"
                           type="checkbox"
                           v-model="formdata.topPhone"
                           :tabindex="other.tabIndexConf.topPhone"/>
                    Telefon
                  </label>
                  <label>
                    <input id="faxTop"
                           type="checkbox"
                           v-model="formdata.topFax"
                           :tabindex="other.tabIndexConf.topFax"/>
                    Telefax
                  </label>
                  <label>
                    <input id="DFUTop"
                           type="checkbox"
                           v-model="formdata.topDFU"
                           :tabindex="other.tabIndexConf.topDFU"/>
                    DFÜ
                  </label>
                  <label>
                    <input id="courierTop"
                           type="checkbox"
                           v-model="formdata.topCourier"
                           :tabindex="other.tabIndexConf.topCourier"/>
                    Kurier/Melder
                  </label>
                </div>
              </div>

              <div class="flexContainerFormA">

                <!--input-complex ("Eingehend")-->
                <div class="
                    innerWrapper
                    inputIncoming
                    flexContainerFormB">
                  <div class="overlay" v-show="!aufnahme"></div>
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
                           class="
                            inputWithLabel
                            hasMinMaxA"
                           :disabled="other.tempAusgehend"
                           v-model="formdata.primaryDate"
                           :tabindex="other.tabIndexConf.incomingDate"/>
                  </div>
                  <div class="
                        inputWrapper
                        flexContainerFormA">
                    <label class="inputLabel"
                           for="primaryTime">
                      Zeit
                    </label>
                    <input id="primaryTime"
                           class="
                            inputWithLabel
                            hasMinMaxA"
                           :disabled="other.tempAusgehend"
                           v-model="formdata.primaryTime"
                           :tabindex="other.tabIndexConf.incomingTime"/>
                  </div>
                  <div class="
                        inputWrapper
                        flexContainerFormA">
                    <label class="inputLabel"
                           for="primaryHdZ">
                      Hdz
                    </label>
                    <input id="primaryHdZ"
                           class="
                            inputWithLabel
                            hasMinMaxA"
                           :disabled="other.tempAusgehend"
                           v-model="formdata.primaryHdZ"
                           :tabindex="other.tabIndexConf.incomingHdZ"/>
                  </div>
                </div>

                <!--input-complex ("Ausgehend")-->
                <div class="
                    innerWrapper
                    inputOutgoing
                    flexContainerFormB">
                  <div class="overlay" v-show="!annahmeBefoerderung"></div>
                  <label class="headerFormA">Ausgehend</label>
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
                               class="
                                inputWithLabel
                                hasMinMaxA"
                               :disabled="other.tempEingehend"
                               v-model="formdata.secondaryDate"
                               :tabindex="other.tabIndexConf.outboundAccDate"/>
                      </div>
                      <div class="
                        inputWrapper
                        flexContainerFormA">
                        <label class="inputLabel"
                               for="secondaryTime">
                          Zeit
                        </label>
                        <input id="secondaryTime"
                               class="
                                inputWithLabel
                                hasMinMaxA"
                               :disabled="other.tempEingehend"
                               v-model="formdata.secondaryTime"
                               :tabindex="other.tabIndexConf.outboundAccTime"/>
                      </div>
                      <div class="
                        inputWrapper
                        flexContainerFormA">
                        <label class="inputLabel"
                               for="secondaryHdZ">
                          Hdz
                        </label>
                        <input id="secondaryHdZ"
                               class="
                                inputWithLabel
                                hasMinMaxA"
                               :disabled="other.tempEingehend"
                               v-model="formdata.primaryHdZ"
                               :tabindex="other.tabIndexConf.outboundAccHdZ"/>
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
                               class="
                                inputWithLabel
                                hasMinMaxA"
                               :disabled="other.tempEingehend"
                               v-model="formdata.tertiaryDate"
                               :tabindex="other.tabIndexConf.outboundTransDate"
                        />
                      </div>
                      <div class="
                        inputWrapper
                        flexContainerFormA">
                        <label class="inputLabel"
                               for="tertiaryTime">
                          Zeit
                        </label>
                        <input id="tertiaryTime"
                               class="
                                inputWithLabel
                                hasMinMaxA"
                               :disabled="other.tempEingehend"
                               v-model="formdata.tertiaryTime"
                               :tabindex="other.tabIndexConf.outboundTransTime"
                        />
                      </div>
                      <div class="
                        inputWrapper
                        flexContainerFormA">
                        <label class="inputLabel"
                               for="tertiaryHdZ">
                          Hdz
                        </label>
                        <input id="tertiaryHdZ"
                               class="
                                inputWithLabel
                                hasMinMaxA"
                               :disabled="other.tempEingehend"
                               v-model="formdata.tertiaryHdZ"
                               :tabindex="other.tabIndexConf.outboundTransHdZ"/>
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
                    inputTB
                    flexContainerFormB">
                <div class="overlay" v-show="!technischesBetriebsbuch"></div>
                <label class="headerFormA">Technisches Betriebsbuch</label>
                <div class="
                        inputWrapper
                        flexContainerFormA"
                     style="margin: 30px 0 0 20px;">
                  <label class="inputLabel"
                         for="numberTB">
                    Nr.
                  </label>
                  <input id="numberTB"
                         class="
                          inputWithLabel
                          hasMinMaxA"
                         v-model="formdata.numberTB"
                         :tabindex="other.tabIndexConf.lbNumber"/>
                </div>
                <label style="margin: 30px 0 0 20px;">
                  <input id="checkboxEingehendTop"
                         @change="checkIn()"
                         type="checkbox"
                         v-model="other.tempEingehend"
                         :tabindex="other.tabIndexConf.selectIncoming"/>
                  Eingehend
                </label>
                <label style="margin: 30px 0 0 20px;">
                  <input id="checkboxAusgehendTop"
                         @change="checkOut();"
                         type="checkbox"
                         v-model="other.tempAusgehend"
                         :tabindex="other.tabIndexConf.selectOutbound"/>
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

            <!--input-complex ("Rufname Gegenstelle/Spruchkopf") -->
            <div class="
                    innerWrapper
                    inputRGS">
              <div class="overlay" v-show="!gegenstelle"></div>
              <div class="
                        inputWrapper
                        flexContainerFormA">
                <label class="inputLabel"
                       for="receiverName"
                       style="min-width: 270px">
                  Rufname der Gegenstelle/Spruchkopf
                </label>
                <input id="receiverName"
                       class="
                        inputWithLabel
                        hasMinMaxB"
                       v-model="formdata.receiverName"
                       :tabindex="other.tabIndexConf.receiverName"/>
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
                    checkboxgroupMTMid">
              <div class="overlay" v-show="!checkboxgroupMiddle"></div>
              <div class="flexContainerFormC">
                <label>
                  <input id="radioMid"
                         type="checkbox"
                         v-model="formdata.midRadio"
                         :tabindex="other.tabIndexConf.midRadio"/>
                  Funk
                </label>
                <label>
                  <input id="phoneMid"
                         type="checkbox"
                         v-model="formdata.midPhone"
                         :tabindex="other.tabIndexConf.midPhone"/>
                  Telefon
                </label>
                <label>
                  <input id="faxMid"
                         type="checkbox"
                         v-model="formdata.midFax"
                         :tabindex="other.tabIndexConf.midFax"/>
                  Telefax
                </label>
                <label>
                  <input id="DFUMid"
                         type="checkbox"
                         v-model="formdata.midDFU"
                         :tabindex="other.tabIndexConf.midDFU"/>
                  DFÜ
                </label>
                <label>
                  <input id="courierMid"
                         type="checkbox"
                         v-model="formdata.midCourier"
                         :tabindex="other.tabIndexConf.midCourier"/>
                  Kurier/Melder
                </label>
              </div>
            </div>

            <div class="flexContainerFormA">

              <!--checkbox-group ("Durchsage/Spruch")-->
              <div class="
                    innerWrapper
                    checkboxgroupDS">
                <div class="overlay" v-show="!durchsageSpruch"></div>
                <div class="flexContainerFormC">
                  <label>
                    <input id="callAnnouncement"
                           type="checkbox"
                           v-model="formdata.callAnnouncement"
                           :tabindex="other.tabIndexConf.callAnnouncement"/>
                    DURCHSAGE
                  </label>
                  <label>
                    <input id="callMessage"
                           type="checkbox"
                           v-model="formdata.callMessage"
                           :tabindex="other.tabIndexConf.callMessage"/>
                    Spruch
                  </label>
                </div>
              </div>

              <!--checkbox-group ("Sofort/Blitz")-->
              <div class="
                    innerWrapper
                    checkboxgroupSB">
                <div class="overlay" v-show="!sofortBlitz"></div>
                <div class="flexContainerFormC">
                  <label>
                    <input id="priorityInstant"
                           type="checkbox"
                           v-model="formdata.priorityInstant"
                           :tabindex="other.tabIndexConf.priorityInstant"/>
                    Sofort
                  </label>
                  <label>
                    <input id="priorityFlash"
                           type="checkbox"
                           v-model="formdata.priorityFlash"
                           :tabindex="other.tabIndexConf.priorityFlash"/>
                    Blitz
                  </label>
                </div>
              </div>

            </div>

            <div class="flexContainerFormA">

              <!--input-complex ("Rufnr.")-->
              <div class="
                    innerWrapper
                    inputRufnr">
                <div class="overlay" v-show="!rufnummer"></div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <label class="inputLabel"
                         for="callNumber">
                    Ruf Nr.
                  </label>
                  <input id="callNumber"
                         class="
                          inputWithLabel
                          hasMinMaxC"
                         v-model="formdata.callNumber"
                         :tabindex="other.tabIndexConf.callNumber"/>
                </div>
              </div>

              <!--input-complex ("Anschrift")-->
              <div class="
                    innerWrapper
                    inputAnschrift">
                <div class="overlay" v-show="!anschrift"></div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <label class="inputLabel"
                         for="address">
                    Anschrift
                  </label>
                  <input id="address"
                         class="
                          inputWithLabel
                          hasMinMaxC"
                         v-model="formdata.address"
                         :tabindex="other.tabIndexConf.address"/>
                </div>
              </div>

              <!--input-complex ("Gesprächsnotiz")-->
              <div class="
                    innerWrapper
                    inputGESP">
                <div class="overlay"
                     v-show="!gespraechsnotiz"></div>
                <label>
                  <input id="talkNote"
                         type="checkbox"
                         v-model="formdata.talkNote"
                         :tabindex="other.tabIndexConf.conversationNote"/>
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
                    inputInhalt">
              <div class="overlay" v-show="!inhalt"></div>
              <div class="
                        inputWrapper
                        flexContainerFormA"
                   style="height: auto">
                <textarea id="content"
                          placeholder="Inhalt"
                          rows="5"
                          class="
                            inputWithLabel
                            hasMinMaxD"
                          v-model="formdata.content"
                          :tabindex="other.tabIndexConf.content"/>
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
                    inputAbsender">
              <div class="overlay" v-show="!absender"></div>
              <div class="
                        inputWrapper
                        flexContainerFormA">
                <label class="inputLabel"
                       for="sender">
                  Absender
                </label>
                <input id="sender"
                       placeholder="Einheit/Einrichtung/Stelle"
                       class="
                        inputWithLabel
                        hasMinMaxE"
                       v-model="formdata.sender"
                       :tabindex="other.tabIndexConf.sender"/>
              </div>
            </div>

            <div class="flexContainerFormA">

              <!--input-complex ("Abfassungszeit")-->
              <div class="
                    innerWrapper
                    inputAbZeit">
                <div class="overlay" v-show="!abfassungszeit"></div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <label class="inputLabel"
                         for="createTime">
                    Abfassungszeit
                  </label>
                  <input id="createTime"
                         class="
                          inputWithLabel
                          hasMinMaxA"
                         v-model="formdata.createTime"
                         :tabindex="other.tabIndexConf.timeCreate"/>
                </div>
              </div>

              <!--input-complex ("Zeichen")-->
              <div class="
                    innerWrapper
                    inputZeichen">
                <div class="overlay" v-show="!zeichen"></div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <label class="inputLabel"
                         for="identification">
                    Zeichen
                  </label>
                  <input id="identification"
                         class="
                          inputWithLabel
                          hasMinMaxF"
                         v-model="formdata.identification"
                         :tabindex="other.tabIndexConf.identification"/>
                </div>
              </div>

              <!--input-complex ("Funktion")-->
              <div class="
                    innerWrapper
                    inputFunktion">
                <div class="overlay" v-show="!funktion"></div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <label class="inputLabel"
                         for="position">
                    Funktion
                  </label>
                  <input id="position"
                         class="
                          inputWithLabel
                          hasMinMaxF"
                         v-model="formdata.position"
                         :tabindex="other.tabIndexConf.position"/>
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
                    inputQuittung
                    flexContainerFormB">
              <div class="overlay" v-show="!quittung"></div>
              <label class="headerFormA">Quittung</label>
              <div class="
                        inputWrapper
                        flexContainerFormA">
                <label class="inputLabel"
                       for="docketTime">
                  Zeit
                </label>
                <input id="docketTime"
                       class="
                        inputWithLabel
                        hasMinMaxG"
                       v-model="formdata.docketTime"
                       :tabindex="other.tabIndexConf.ackTime"/>
              </div>
              <div class="
                        inputWrapper
                        flexContainerFormA">
                <label class="inputLabel"
                       for="position">
                  Zeichen
                </label>
                <input id="docketIdentification"
                       class="
                        inputWithLabel
                        hasMinMaxG"
                       v-model="formdata.docketIdentification"
                       :tabindex="other.tabIndexConf.ackIdentification"/>
              </div>
            </div>

            <div class="flexContainerFormA">

              <!--input-complex ("TEL/EL/...")-->
              <div class="
                    innerWrapper
                    checkboxgroupTEL
                    flexContainerFormB">
                <div class="overlay" v-show="!tel"></div>
                <label class="headerFormA">TEL/EL/EAL/UEAL</label>
                <div class="flexContainerFormA">
                  <div class="flexContainerFormB">
                    <label class="checkboxLabel">
                      <input id="stationLeader"
                             type="checkbox"
                             v-model="formdata.stationLeader"
                             :tabindex="other.tabIndexConf.stationLeader"/>
                      Leiter
                    </label>
                  </div>
                  <div class="flexContainerFormB">
                    <label class="checkboxLabel">
                      <input id="stationS1"
                             type="checkbox"
                             v-model="formdata.stationS1"
                             :tabindex="other.tabIndexConf.stationS1"/>
                      S1
                    </label>
                    <label class="checkboxLabel">
                      <input id="stationS2"
                             type="checkbox"
                             v-model="formdata.stationS2"
                             :tabindex="other.tabIndexConf.stationS2"/>
                      S2
                    </label>
                    <label class="checkboxLabel">
                      <input id="stationS3"
                             type="checkbox"
                             v-model="formdata.stationS3"
                             :tabindex="other.tabIndexConf.stationS3"/>
                      S3
                    </label>
                    <label class="checkboxLabel">
                      <input id="stationS4"
                             type="checkbox"
                             v-model="formdata.stationS4"
                             :tabindex="other.tabIndexConf.stationS4"/>
                      S4
                    </label>
                    <label class="checkboxLabel">
                      <input id="stationS6"
                             type="checkbox"
                             v-model="formdata.stationS6"
                             :tabindex="other.tabIndexConf.stationS6"/>
                      S5
                    </label>
                  </div>
                </div>
              </div>

              <!--input-complex ("Fachberater")-->
              <div class="
                    innerWrapper
                    checkboxgroupFachberater
                    flexContainerFormB">
                <div class="overlay" v-show="!tel"></div>
                <label class="headerFormA">Fachberater</label>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="advisorTickA"
                         type="checkbox"
                         v-model="formdata.advisorTickA"
                         :tabindex="other.tabIndexConf.advisorTickA"/>
                  <input id="advisorA"
                         class="
                          inputWithLabel
                          hasMinMaxH"
                         v-model="formdata.advisorA"
                         :tabindex="other.tabIndexConf.advisorA"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="advisorTickB"
                         type="checkbox"
                         v-model="formdata.advisorTickB"
                         :tabindex="other.tabIndexConf.advisorTickB"/>
                  <input id="advisorB"
                         class="
                          inputWithLabel
                          hasMinMaxH"
                         v-model="formdata.advisorB"
                         :tabindex="other.tabIndexConf.advisorB"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="advisorTickC"
                         type="checkbox"
                         v-model="formdata.advisorTickC"
                         :tabindex="other.tabIndexConf.advisorTickC"/>
                  <input id="advisorC"
                         class="
                          inputWithLabel
                          hasMinMaxH"
                         v-model="formdata.advisorC"
                         :tabindex="other.tabIndexConf.advisorC"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="advisorTickD"
                         type="checkbox"
                         v-model="formdata.advisorTickD"
                         :tabindex="other.tabIndexConf.advisorTickD"/>
                  <input id="advisorD"
                         class="
                          inputWithLabel
                          hasMinMaxH"
                         v-model="formdata.advisorD"
                         :tabindex="other.tabIndexConf.advisorD"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="advisorTickE"
                         type="checkbox"
                         v-model="formdata.advisorTickE"
                         :tabindex="other.tabIndexConf.advisorTickE"/>
                  <input id="advisorE"
                         class="
                          inputWithLabel
                          hasMinMaxH"
                         v-model="formdata.advisorE"
                         :tabindex="other.tabIndexConf.advisorE"/>
                </div>
              </div>

              <!--input-complex ("Verb. stellen")-->
              <div class="
                    innerWrapper
                    checkboxgroupVerb
                    flexContainerFormB">
                <div class="overlay" v-show="!tel"></div>
                <label class="headerFormA">Verb. stellen</label>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="connectionTickA"
                         type="checkbox"
                         v-model="formdata.connectionTickA"
                         :tabindex="other.tabIndexConf.connectionTickA"/>
                  <input id="connectionA"
                         class="
                          inputWithLabel
                          hasMinMaxH"
                         v-model="formdata.connectionA"
                         :tabindex="other.tabIndexConf.connectionA"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="connectionTickB"
                         type="checkbox"
                         v-model="formdata.connectionTickB"
                         :tabindex="other.tabIndexConf.connectionTickB"/>
                  <input id="connectionB"
                         class="
                          inputWithLabel
                          hasMinMaxH"
                         v-model="formdata.connectionB"
                         :tabindex="other.tabIndexConf.connectionB"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="connectionTickC"
                         type="checkbox"
                         v-model="formdata.connectionTickC"
                         :tabindex="other.tabIndexConf.connectionTickC"/>
                  <input id="connectionC"
                         class="
                          inputWithLabel
                          hasMinMaxH"
                         v-model="formdata.connectionC"
                         :tabindex="other.tabIndexConf.connectionC"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="connectionTickD"
                         type="checkbox"
                         v-model="formdata.connectionTickD"
                         :tabindex="other.tabIndexConf.connectionTickD"/>
                  <input id="connectionD"
                         class="
                          inputWithLabel
                          hasMinMaxH"
                         v-model="formdata.connectionD"
                         :tabindex="other.tabIndexConf.connectionD"/>
                </div>
                <div class="
                        inputWrapper
                        flexContainerFormA">
                  <input id="connectionTickE"
                         type="checkbox"
                         v-model="formdata.connectionTickE"
                         :tabindex="other.tabIndexConf.connectionTickE"/>
                  <input id="connectionE"
                         class="
                          inputWithLabel
                          hasMinMaxH"
                         v-model="formdata.connectionE"
                         :tabindex="other.tabIndexConf.connectionE"/>
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
                    inputVermerke
                    flexContainerFormB">
              <div class="overlay" v-show="!vermerke"></div>
              <label class="headerFormA">Vermerke</label>
              <textarea id="annotations"
                        cols="35"
                        class="
                          inputWithLabel
                          hasMinMaxI"
                        v-model="formdata.annotations"
                        :tabindex="other.tabIndexConf.annotations"/>
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
                  saveForm()"
                  :tabindex="other.tabIndexConf.buttonSend">
        Abschicken
      </el-button>
      <el-button @click="
                  formReset();
                  notifySuccess('Formular zurückgesetzt')"
                 :tabindex="other.tabIndexConf.buttonReset">
        Zurücksetzen
      </el-button>

      <!-- Just for development -->
      <label for="stateselect"> Select ticket state: </label>
      <select v-model.number="formdata.ticketState" id="stateselect">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
      </select>
      <!-- ----------------- -->
    </div>
  </div>
</template>

<script>
import { MessageBox, Notification } from 'element-ui'
import { mapMutations, mapActions, mapGetters } from 'vuex'
import ElHeader from 'element-ui/packages/header/src/main'
import ElRow from 'element-ui/packages/row/src/row'
import ElContainer from 'element-ui/packages/container/src/main'
import ElMain from 'element-ui/packages/main/src/main'
import config from '../status.config'

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
        documentID: '',
        inOperation: '',

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

        annotations: '',

        ticketState: 0
      },

      other: {
        tempEingehend: true,
        tempAusgehend: false,
        isEdit: false,
        tabIndexConf: {}
      },

      sent: false
    }
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.loadDocument(to.params.id)
      vm.setTabIndexConf()
    })
  },

  beforeRouteUpdate (to, from, next) {
    if (from.params.id === undefined) {
      this.askSaveDraft()
        .then(() => {
          this.loadDocument(to.params.id)
          next()
        })
    } else {
      this.loadDocument(to.params.id)
      next()
    }
  },

  beforeRouteLeave (to, from, next) {
    if (from.params.id === undefined && this.sent === false) {
      this.askSaveDraft()
        .then(() => next())
    } else {
      next()
    }
  },

  methods: {
    ...mapMutations(['setDraft']),
    ...mapActions([
      'saveNewFormAction',
      'updateFormDataAction',
      'loadFormDataAction'
    ]),
    ...mapGetters(['getDraft', 'getUser']),

    loadDefault: function () {
      this.setDefaultData(this.$options.data().formdata)
      this.$data.formdata.inOperation = this.getUser().operation.operationId
    },

    loadDraft: function () {
      let draft = this.getDraft() || this.$options.data().formdata
      this.setDefaultData(draft)
    },

    loadID: function (id) {
      this.loadFormDataAction(id)
        .then((formdata) => {
          this.setDefaultData(formdata)
          this.$data.other.isEdit = true
        })
        .catch((error) => {
          this.messageBoxError('', error.message)
            .then(this.$router.push({name: 'Home'}))
        })
    },

    /**
     * Sets the the tabIndexConf Property
     */
    setTabIndexConf: function () {
      const baseConf = config.tabOrder.base
      const state = this.formdata.ticketState
      const stateConf = config.tabOrder[state]
      // create state-specific tabindex config
      this.other.tabIndexConf = {}
      const result = Object.assign({}, baseConf, stateConf)
      this.other.tabIndexConf = result
    },

    loadDocument: function (id) {
      if (id === undefined) this.loadDefault()
      else if (id === 'draft') this.loadDraft()
      else this.loadID(id)
    },

    askSaveDraft: function () {
      return new Promise((resolve, reject) => {
        this.dialog(
          '',
          'Soll das Formular als Entwurf gespeichert werden?')
          .then(() => {
            this.setDraft(this.formdata)
            return resolve()
          })
          .catch(() => {
            return resolve()
          })
      })
    },

    saveForm: function () {
      if (this.sent === false) {
        this.sent = true
        if (this.other.isEdit) {
          this.updateFormDataAction(this.$data.formdata)
            .then(() => {
              this.notifySuccess('Abgeschickt')
              this.$router.push({name: 'Home'})
            })
            .catch(error => {
              this.sent = false
              console.error(error)
              this.messageBoxError('', 'Fehler beim Versenden des Dokuments')
            })
        } else {
          this.saveNewFormAction(this.formdata)
            .then(() => {
              this.notifySuccess('Abgeschickt')
              this.$router.push({name: 'Home'})
            })
            .catch(error => {
              this.sent = false
              console.error(error)
              this.messageBoxError('', 'Fehler beim Versenden des Dokuments')
            })
        }
      } else {
        this.notifyError('', 'Dokument wurde bereits versendet')
      }
    },

    formReset: function () {
      this.formdata = JSON.parse(JSON.stringify(this.default))
    },

    setDefaultData: function (value) {
      this.default = value
      this.formReset()
    },

    dialog: function (title, message) {
      return MessageBox({
        title: title,
        message: message,
        confirmButtonText: 'Ja',
        showCancelButton: true,
        cancelButtonText: 'Nein',
        showClose: false,
        closeOnPressEscape: false,
        closeOnClickModal: false,
        modal: true
      })
    },

    messageBoxError: function (title, message) {
      return MessageBox({
        title: title,
        message: message,
        type: 'error',
        confirmButtonText: 'Ok',
        showClose: false,
        closeOnPressEscape: false,
        closeOnClickModal: false,
        modal: true
      })
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

    notifyError (title, message) {
      Notification({
        title: title,
        message: message,
        duration: 1200,
        type: 'error',
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
  },

  computed: {

    // =================================================
    // Beginning of visibility switches
    //
    // Each property checks if a certain state is
    // selected and decides whether or not the
    // overlay should be shown or another button
    // should be rendered

    // Overlay switches
    // true means component is relevant for current state,
    // so the overlay may NOT be shown (and vice versa)

    checkboxGroupTop: function () {
      return [10, 3, 5, 12, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    aufnahme: function () {
      return [10, 12, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    annahmeBefoerderung: function () {
      return [3, 5, 4, 6, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    technischesBetriebsbuch: function () {
      return [3, 5, 11, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    gegenstelle: function () {
      return [10, 3, 5, 12, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    checkboxgroupMiddle: function () {
      return [0, 2, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    durchsageSpruch: function () {
      return [14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    sofortBlitz: function () {
      return [1, 7, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    rufnummer: function () {
      return [10, 0, 12, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    anschrift: function () {
      return [10, 0, 2, 12, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    gespraechsnotiz: function () {
      return [10, 12, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    inhalt: function () {
      return [10, 0, 2, 12, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    absender: function () {
      return [10, 0, 2, 12, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    abfassungszeit: function () {
      return [0, 2, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    zeichen: function () {
      return [0, 2, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    funktion: function () {
      return [0, 2, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    quittung: function () {
      return [1, 7, 13, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    tel: function () {
      return [1, 7, 13, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    vermerke: function () {
      return [10, 0, 1, 7, 13, 3, 5, 11, 4, 6,
        2, 12, 14, 8, 15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    // Color switches

    isGreen: function () {
      return [1, 2, 3, 4, 5, 6, 7].indexOf(
        this.formdata.ticketState) !== -1
    },

    isBlue: function () {
      return [10, 0, 13, 11, 12].indexOf(
        this.formdata.ticketState) !== -1
    },

    isYellow: function () {
      return [14, 8].indexOf(
        this.formdata.ticketState) !== -1
    },

    isRed: function () {
      return [15, 9].indexOf(
        this.formdata.ticketState) !== -1
    },

    // Button switches

    sendButtonText: function () {
      let state = this.formdata.ticketState
      if (state === 8 || state === 14) {
        return 'Drucken'
      } else {
        return 'Abschicken'
      }
    },

    rejectable: function () {
      return [1, 7, 13, 3, 5, 11].indexOf(
        this.formdata.ticketState) !== -1
    }
    // End of visibility switches
    // =================================================
  },
  // watch for changes in the formdata object, trigger setTabIndexConf()
  watch: {
    formdata: {
      handler: function (oldVal, newVal) {
        this.setTabIndexConf()
      },
      deep: true
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
    padding: 10px 0 20px 0;
  }
  .formWrapper {
    background-color: var(--semiLightNeutralColor);
    width: 80%;
    overflow: visible;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--primaryTextColor);
  }
  .sideMenuForm {
    background-color: var(--semiLightNeutralColor);
    width: 20%;
    overflow: visible;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--primaryTextColor);
    padding: 50px 0 20px 0;
    margin-left: 40px;
  }
  .inputWrapper {
    margin: 0 10px 0 20px;
    height: 40px;
  }
  .inputLabel {
    background-color: var(--darkNeutralColor);
    white-space: nowrap;
    min-width: 60px;
    padding: 10px 10px 0 10px;
  }
  .checkboxLabel {
    padding: 10px 15px 14px 10px;
    cursor: pointer;
  }
  .inputWithLabel {
    background-color: var(--semiLightNeutralColor);
    padding-left: 10px;
    border: var(--darkNeutralColor);
    border-style: solid;
    border-width:2px;
  }
  .headerFormA {
    padding: 10px 0 10px 10px;
    white-space: nowrap;
  }
  .headerFormB {
    padding: 0 0 10px 20px;
  }

  /*top-section*/
  .checkboxgroupMTTop {
    margin: 0 5px 5px 5px;
    padding: 10px 0 10px 0;
    max-width: 787.85px;
  }
  .inputIncoming {
    margin: 0 5px 5px 5px;
    padding: 0 0 0 0;
    max-width: 260.93px;
  }
  .inputOutgoing {
    margin: 0 5px 5px 0;
    padding: 0 0 0 0;
    max-width: 521.9px;
  }
  .inputTB {
    margin: 0 5px 5px 0;
    padding: 0 0 0 0;
    height: 223px;
    max-width: 256.367px;
  }
  .inputRGS {
    margin: 0 5px 5px 5px;
    padding: 0 0 0 0;
    max-width: 1049.22px;
  }

  /*mid-section*/
  .checkboxgroupMTMid {
    margin: 0 5px 5px 5px;
    padding: 10px 0 10px 0;
    max-width: 1049.22px;
  }
  .checkboxgroupDS {
    margin: 0 5px 5px 5px;
    padding: 5px 0 10px 0;
    max-width: 563.1px;
  }
  .checkboxgroupSB {
    margin: 0 5px 5px 0;
    padding: 5px 0 10px 0;
    max-width: 481.177px;
  }
  .inputRufnr {
    margin: 0 5px 5px 5px;
    padding: 0 0 0 0;
    max-width: 355.733px;
  }
  .inputAnschrift {
    margin: 0 5px 5px 0;
    padding: 0 0 0 0;
    max-width: 397.75px;
  }
  .inputGESP {
    margin: 0 5px 5px 0;
    padding: 10px 0 0 35px;
    max-width: 285.733px;
  }
  .inputInhalt {
    margin: 0 5px 5px 5px;
    padding: 0 0 0 0;
    max-width: 1049.22px;
  }
  .inputAbsender {
    margin: 0 5px 5px 5px;
    padding: 0 0 0 0;
    max-width: 1049.22px;
  }
  .inputAbZeit {
    margin: 0 5px 5px 5px;
    padding: 0 0 0 0;
    max-width: 376.783px;
  }
  .inputZeichen {
    margin: 0 5px 5px 0;
    padding: 0 0 0 0;
    max-width: 330.75px;
  }
  .inputFunktion {
    margin: 0 5px 5px 0;
    padding: 0 0 0 0;
    max-width: 331.683px;
  }

  /*bot-section*/
  .inputQuittung {
    margin: 0 5px 5px 5px;
    padding: 0 0 0 0;
    max-width: 716.383px;
  }
  .checkboxgroupTEL {
    margin: 0 5px 5px 5px;
    padding: 0 15px 0 0;
    max-width: 161px;
  }
  .checkboxgroupFachberater {
    margin: 0 5px 5px 0;
    padding: 0 0 0 0;
    max-width: 272.683px;
  }
  .checkboxgroupVerb {
    margin: 0 5px 5px 0;
    padding: 0 0 0 0;
    max-width: 272.7px;
  }
  .inputVermerke {
    margin: 0 5px 5px 0;
    padding: 0 20px 0 0;
    max-width: 327.833px;
  }

  /*
  space:
    different settings for spacing
   */
  .hasMarginFormA {
    margin: 0 20px 0px 20px;
  }
  .hasPaddingFormA {
    padding: 0 10px 10px 10px;
  }

  .hasMarginFormB {
    margin: 0 0 0 0;
  }
  .hasPaddingFormB {
    padding:  0 0 0 0;
  }

  /*
  border-settings:
    different border styles
  */

  /*
  min-max-settings:
  */
  .hasMinMaxA {
    min-width: 50px;
    width: 55%;
  }
  .hasMinMaxB {
    min-width: 50px;
    width: 69.3%;
  }
  .hasMinMaxC {
    min-width: 50px;
    width: 72%;
  }
  .hasMinMaxD {
    min-width: 50px;
    width: 97.6%;
  }
  .hasMinMaxE {
    min-width: 50px;
    width: 89%;
  }
  .hasMinMaxF {
    min-width: 50px;
    width: 65.5%;
  }
  .hasMinMaxG {
    min-width: 50px;
    width: 84.5%;
  }
  .hasMinMaxH {
    min-width: 50px;
    width: 83%;
  }
  .hasMinMaxI {
    min-width: 50px;
    width: 90%;
    margin-left: 20px;
    height: 100%;
  }

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
    align-content: stretch;
  }
  .flexContainerFormB {
    display: flex;
    flex-direction: column;
  }
  .flexContainerFormC {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .testSquare {
    background-color: yellow;
    width: 100px;
    height: 50px;
    margin: 10px;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.15);
    pointer-events: none;
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .is-green {
    background: var(--formGreenColor);
    border-left-color: var(--formGreenColor);
  }

  .is-blue {
    background: var(--formBlueColor);
    border-left-color: var(--formBlueColor);
  }

  .is-red {
    background: var(--formRedColor);
    border-left-color: var(--formRedColor);
  }

  .is-yellow {
    background: var(--formYellowColor);
    border-left-color: var(--formYellowColor);
  }

  input {
    margin: 0;
    padding: 0;
  }
  textarea {
    resize: none;
    font-size: var(--bodySize);
  }
</style>
