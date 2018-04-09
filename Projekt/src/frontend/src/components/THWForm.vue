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
               :model="formdata"
               :class="{
                'is-blue': isBlue,
                'is-green': isGreen,
                'is-yellow': isYellow,
                'is-red': isRed
                }">

        <!--top-section-->
        <div class="
              outerWrapper
              hasMeasurmentsFormA
              flexContainerFormB">

          <div class="flexContainerFormA">

            <!--sectionTABC-->
            <div class="
                  middleWrapper
                  topTopLeft
                  flexContainerFormB">

              <!--checkbox-group (message-type)-->
              <div class="
                    innerWrapper
                    checkboxgroupMTTop">
                <div class="overlay" v-show="!checkboxGroupTop"></div>
                <div class="flexContainerFormC">

                  <div class="
                        formCheckbox
                        flexContainerFormA"
                       style="margin-left: 10px">
                    <label class="formControl formControl-checkbox">
                      Funk
                      <input type="checkbox"
                             v-model="formdata.topRadio"
                             :tabindex="other.tabIndexConf.topRadio"/>
                      <div class="formControl_indicator"></div>
                    </label>
                  </div>

                  <div class="
                        formCheckbox
                        flexContainerFormA">
                    <label class="formControl formControl-checkbox">
                      Telefon
                      <input type="checkbox"
                             v-model="formdata.topPhone"
                             :tabindex="other.tabIndexConf.topPhone"/>
                      <div class="formControl_indicator"></div>
                    </label>
                  </div>

                  <div class="
                        formCheckbox
                        flexContainerFormA">
                    <label class="formControl formControl-checkbox">
                      Telefax
                      <input type="checkbox"
                             v-model="formdata.topFax"
                             :tabindex="other.tabIndexConf.topFax"/>
                      <div class="formControl_indicator"></div>
                    </label>
                  </div>

                  <div class="
                        formCheckbox
                        flexContainerFormA">
                    <label class="formControl formControl-checkbox">
                      DFÜ
                      <input type="checkbox"
                             v-model="formdata.topDFU"
                             :tabindex="other.tabIndexConf.topDFU"/>
                      <div class="formControl_indicator"></div>
                    </label>
                  </div>

                  <div class="
                        formCheckbox
                        flexContainerFormA"
                       style="margin-right: 10px">
                    <label class="formControl formControl-checkbox">
                      Kurier/Melder
                      <input type="checkbox"
                             v-model="formdata.topCourier"
                             :tabindex="other.tabIndexConf.topCourier"/>
                      <div class="formControl_indicator"></div>
                    </label>
                  </div>

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
                        flexContainerFormA"
                       style="margin-left: 5px;">
                    <div class="inputSelectionHighlight"></div>
                    <label class="inputLabel"
                           for="primaryDate">
                      Datum
                    </label>
                    <input id="primaryDate"
                           class="
                            inputWithLabel
                            hasMinMaxA"
                           type="text"
                           :disabled="other.tempAusgehend"
                           v-model="formdata.primaryDate"
                           :tabindex="other.tabIndexConf.incomingDate"/>
                  </div>
                  <div class="
                        inputWrapper
                        flexContainerFormA"
                       style="margin-left: 5px;">
                    <div class="inputSelectionHighlight"></div>
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
                        flexContainerFormA"
                       style="margin-left: 5px;">
                    <div class="inputSelectionHighlight"></div>
                    <label class="inputLabel"
                           for="primaryHdZ">
                      HdZ
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
                  <div class="flexContainerFormC">
                    <div class="flexContainerFormB" style="padding-right: 5px">
                      <label class="headerFormB">Annahmevermerk</label>
                      <div class="
                        inputWrapper
                        flexContainerFormA"
                           style="margin-left: 5px;">
                        <div class="inputSelectionHighlight"></div>
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
                        flexContainerFormA"
                           style="margin-left: 5px;">
                        <div class="inputSelectionHighlight"></div>
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
                        flexContainerFormA"
                           style="margin-left: 5px;">
                        <div class="inputSelectionHighlight"></div>
                        <label class="inputLabel"
                               for="secondaryHdZ">
                          HdZ
                        </label>
                        <input id="secondaryHdZ"
                               class="
                                inputWithLabel
                                hasMinMaxA"
                               :disabled="other.tempEingehend"
                               v-model="formdata.secondaryHdZ"
                               :tabindex="other.tabIndexConf.outboundAccHdZ"/>
                      </div>
                    </div>
                    <div class="flexContainerFormB" style="padding-left: 5px">
                      <label class="headerFormB">Beförderungsvermerk</label>
                      <div class="
                        inputWrapper
                        flexContainerFormA"
                           style="margin-left: 5px;">
                        <div class="inputSelectionHighlight"></div>
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
                        flexContainerFormA"
                           style="margin-left: 5px;">
                        <div class="inputSelectionHighlight"></div>
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
                        flexContainerFormA"
                           style="
                            margin-left: 5px;">
                        <div class="inputSelectionHighlight"></div>
                        <label class="inputLabel"
                               for="tertiaryHdZ">
                          HdZ
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
                  topTopRight">

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
                     style="margin: 45px 0 45px 0; height: 48px">
                  <div class="inputSelectionHighlight"
                       style="height: 40px"></div>
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

                <div class="
                        formCheckbox
                        flexContainerFormA"
                     style="margin-left: 0">
                  <label class="formControl formControl-checkbox">
                    Eingehend
                    <input id="checkboxEingehendTop"
                           @change="checkIn()"
                           type="checkbox"
                           v-model="other.tempEingehend"
                           :disabled="formdata.ticketState % 10 != 0"
                           :tabindex="other.tabIndexConf.selectIncoming"/>
                    <div class="formControl_indicator"></div>
                  </label>
                </div>

                <div class="
                        formCheckbox
                        flexContainerFormA"
                     style="margin-left: 0">
                  <label class="formControl formControl-checkbox">
                    Ausgehend
                    <input id="checkboxAusgehendTop"
                           @change="checkOut();"
                           type="checkbox"
                           v-model="other.tempAusgehend"
                           :disabled="formdata.ticketState % 10 != 0"
                           :tabindex="other.tabIndexConf.selectOutbound"/>
                    <div class="formControl_indicator"></div>
                  </label>
                </div>

              </div>

            </div>

          </div>

          <!--sectionTF-->
          <div class="
                middleWrapper
                topBot">

            <!--input-complex ("Rufname Gegenstelle/Spruchkopf") -->
            <div class="
                    innerWrapper
                    inputRGS">
              <div class="overlay" v-show="!gegenstelle"></div>
              <div class="
                        inputWrapper
                        flexContainerFormA">
                <div class="inputSelectionHighlight"></div>
                <label class="inputLabel"
                       for="receiverName">
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
              hasMeasurmentsFormA
              flexContainerFormB">

          <!--sectionMABCDEF-->
          <div class="
                middleWrapper
                midTop
                flexContainerFormB">

            <!--checkbox-group (message-type)-->
            <div class="
                    innerWrapper
                    checkboxgroupMTMid">
              <div class="overlay" v-show="!checkboxgroupMiddle"></div>
              <div class="flexContainerFormC">

                <div class="
                        formCheckbox
                        flexContainerFormA"
                     style="margin-left: 10px">
                  <label class="formControl formControl-checkbox">
                    Funk
                    <input type="checkbox"
                           v-model="formdata.midRadio"
                           :tabindex="other.tabIndexConf.midRadio"/>
                    <div class="formControl_indicator"></div>
                  </label>
                </div>

                <div class="
                        formCheckbox
                        flexContainerFormA">
                  <label class="formControl formControl-checkbox">
                    Telefon
                    <input type="checkbox"
                           v-model="formdata.midPhone"
                           :tabindex="other.tabIndexConf.midPhone"/>
                    <div class="formControl_indicator"></div>
                  </label>
                </div>

                <div class="
                        formCheckbox
                        flexContainerFormA">
                  <label class="formControl formControl-checkbox">
                    Telefax
                    <input type="checkbox"
                           v-model="formdata.midFax"
                           :tabindex="other.tabIndexConf.midFax"/>
                    <div class="formControl_indicator"></div>
                  </label>
                </div>

                <div class="
                        formCheckbox
                        flexContainerFormA">
                  <label class="formControl formControl-checkbox">
                    DFÜ
                    <input type="checkbox"
                           v-model="formdata.midDFU"
                           :tabindex="other.tabIndexConf.midDFU"/>
                    <div class="formControl_indicator"></div>
                  </label>
                </div>

                <div class="
                        formCheckbox
                        flexContainerFormA"
                     style="margin-right: 10px">
                  <label class="formControl formControl-checkbox">
                    Kurier/Melder
                    <input type="checkbox"
                           v-model="formdata.midCourier"
                           :tabindex="other.tabIndexConf.midCourier"/>
                    <div class="formControl_indicator"></div>
                  </label>
                </div>

              </div>
            </div>

            <div class="flexContainerFormA">

              <!--checkbox-group ("Durchsage/Spruch")-->
              <div class="
                    innerWrapper
                    checkboxgroupDS">
                <div class="overlay" v-show="!durchsageSpruch"></div>
                <div class="flexContainerFormC">

                  <div class="
                        formCheckbox
                        flexContainerFormA"
                       style="margin-left: 10px">
                    <label class="formControl formControl-checkbox">
                      DURCHSAGE
                      <input type="checkbox"
                             v-model="formdata.callAnnouncement"
                             :tabindex="other.tabIndexConf.callAnnouncement"/>
                      <div class="formControl_indicator"></div>
                    </label>
                  </div>

                  <div class="
                        formCheckbox
                        flexContainerFormA"
                       style="margin-right: 10px">
                    <label class="formControl formControl-checkbox">
                      Spruch
                      <input type="checkbox"
                             v-model="formdata.callMessage"
                             :tabindex="other.tabIndexConf.callMessage"/>
                      <div class="formControl_indicator"></div>
                    </label>
                  </div>

                </div>
              </div>

              <!--checkbox-group ("Sofort/Blitz")-->
              <div class="
                    innerWrapper
                    checkboxgroupSB">
                <div class="overlay" v-show="!sofortBlitz"></div>
                <div class="flexContainerFormC">

                  <div class="
                        formCheckbox
                        flexContainerFormA"
                       style="margin-left: 10px">
                    <label class="formControl formControl-checkbox">
                      Sofort
                      <input type="checkbox"
                             v-model="formdata.priorityInstant"
                             :tabindex="other.tabIndexConf.priorityInstant"/>
                      <div class="formControl_indicator"></div>
                    </label>
                  </div>

                  <div class="
                        formCheckbox
                        flexContainerFormA"
                       style="margin-right: 10px">
                    <label class="formControl formControl-checkbox">
                      Blitz
                      <input type="checkbox"
                             v-model="formdata.priorityFlash"
                             :tabindex="other.tabIndexConf.priorityFlash"/>
                      <div class="formControl_indicator"></div>
                    </label>
                  </div>

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
                        flexContainerFormA"
                     style="height: 48px">
                  <div class="inputSelectionHighlight"
                       style="height: 40px"></div>
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
                        flexContainerFormA"
                     style="height: 48px">
                  <div class="inputSelectionHighlight"
                       style="height: 40px"></div>
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

                <div class="
                        formCheckbox
                        flexContainerFormA"
                     style="margin-left: 0">
                  <label class="formControl formControl-checkbox">
                    GESPRÄCHSNOTIZ
                    <input id="talkNote"
                           type="checkbox"
                           v-model="formdata.talkNote"
                           :tabindex="other.tabIndexConf.conversationNote"/>
                    <div class="formControl_indicator"></div>
                  </label>
                </div>

              </div>

            </div>

          </div>

          <!--sectionMG-->
          <div class="
                middleWrapper
                midMid">

            <!--input-complex ("Inhalt")-->
            <div class="
                    innerWrapper
                    inputInhalt">
              <div class="overlay" v-show="!inhalt"></div>
              <div class="
                        inputWrapper
                        flexContainerFormA">
                <div class="inputSelectionHighlight"></div>
                <textarea id="content"
                          style="
                            width: 100%;
                            min-height: 100px;
                            padding-top: 10px;"
                          placeholder="Inhalt"
                          class="inputWithLabel"
                          v-model="formdata.content"
                          :tabindex="other.tabIndexConf.content"/>
              </div>
            </div>

          </div>

          <!--sectionMHIJK-->
          <div class="
                middleWrapper
                midBot">

            <!--input-complex ("Absender")-->
            <div class="
                    innerWrapper
                    inputAbsender">
              <div class="overlay" v-show="!absender"></div>
              <div class="
                        inputWrapper
                        flexContainerFormA">
                <div class="inputSelectionHighlight"></div>
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
                  <div class="inputSelectionHighlight"
                       style="height: 40px"></div>
                  <label class="inputLabel"
                         style="
                          width: 55%;
                          min-width: 140px;"
                         for="createTime">
                    Abfassungszeit
                  </label>
                  <input id="createTime"
                         class="
                          inputWithLabel
                          hasMinMaxA"
                         style="width: 45%"
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
                  <div class="inputSelectionHighlight"
                       style="height: 40px"></div>
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
                  <div class="inputSelectionHighlight"
                       style="height: 40px"></div>
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
              hasMeasurmentsFormA
              flexContainerFormA">

          <!--sectionBABCD-->
          <div class="
                middleWrapper
                botLeft
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
                <div class="inputSelectionHighlight"></div>
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
                <div class="inputSelectionHighlight"></div>
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

                  <div class="
                        formCheckbox
                        flexContainerFormA"
                       style="margin-left: 0; width: 50%; height: 48px">
                    <label class="formControl formControl-checkbox">
                      Leiter
                      <input type="checkbox"
                             v-model="formdata.stationLeader"
                             :tabindex="other.tabIndexConf.stationLeader"/>
                      <div class="formControl_indicator"></div>
                    </label>
                  </div>

                  <div class="flexContainerFormB" style="width: 50%">

                    <div class="
                        formCheckbox
                        flexContainerFormA"
                         style="margin-left: 0;">
                      <label class="formControl formControl-checkbox">
                        S1
                        <input type="checkbox"
                               v-model="formdata.stationS1"
                               :tabindex="other.tabIndexConf.stationS1"/>
                        <div class="formControl_indicator"></div>
                      </label>
                    </div>

                    <div class="
                        formCheckbox
                        flexContainerFormA"
                         style="margin-left: 0;">
                      <label class="formControl formControl-checkbox">
                        S2
                        <input type="checkbox"
                               v-model="formdata.stationS2"
                               :tabindex="other.tabIndexConf.stationS2"/>
                        <div class="formControl_indicator"></div>
                      </label>
                    </div>

                    <div class="
                        formCheckbox
                        flexContainerFormA"
                         style="margin-left: 0;">
                      <label class="formControl formControl-checkbox">
                        S3
                        <input type="checkbox"
                               v-model="formdata.stationS3"
                               :tabindex="other.tabIndexConf.stationS3"/>
                        <div class="formControl_indicator"></div>
                      </label>
                    </div>

                    <div class="
                        formCheckbox
                        flexContainerFormA"
                         style="margin-left: 0;">
                      <label class="formControl formControl-checkbox">
                        S4
                        <input type="checkbox"
                               v-model="formdata.stationS4"
                               :tabindex="other.tabIndexConf.stationS4"/>
                        <div class="formControl_indicator"></div>
                      </label>
                    </div>

                    <div class="
                        formCheckbox
                        flexContainerFormA"
                         style="margin-left: 0;">
                      <label class="formControl formControl-checkbox">
                        S6
                        <input type="checkbox"
                               v-model="formdata.stationS6"
                               :tabindex="other.tabIndexConf.stationS6"/>
                        <div class="formControl_indicator"></div>
                      </label>
                    </div>

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
                        formCheckbox
                        flexContainerFormA"
                     style="
                      border: 4px solid var(--middleNeutralColor);
                      margin-left: 0;">
                  <label class="formControl formControl-checkbox"
                         style="
                          padding: 0 0 0 0;
                          border-style: none;">
                    <input type="checkbox"
                           v-model="formdata.advisorTickA"
                           :tabindex="other.tabIndexConf.advisorTickA"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.advisorA"
                         :tabindex="other.tabIndexConf.advisorA"/>
                </div>

                <div class="
                        formCheckbox
                        flexContainerFormA"
                     style="
                      border: 4px solid var(--middleNeutralColor);
                      margin-left: 0;">
                  <label class="formControl formControl-checkbox"
                         style="
                          padding: 0 0 0 0;
                          border-style: none;">
                    <input type="checkbox"
                           v-model="formdata.advisorTickB"
                           :tabindex="other.tabIndexConf.advisorTickB"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.advisorB"
                         :tabindex="other.tabIndexConf.advisorB"/>
                </div>

                <div class="
                        formCheckbox
                        flexContainerFormA"
                     style="
                      border: 4px solid var(--middleNeutralColor);
                      margin-left: 0;">
                  <label class="formControl formControl-checkbox"
                         style="
                          padding: 0 0 0 0;
                          border-style: none;">
                    <input type="checkbox"
                           v-model="formdata.advisorTickC"
                           :tabindex="other.tabIndexConf.advisorTickC"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.advisorC"
                         :tabindex="other.tabIndexConf.advisorC"/>
                </div>

                <div class="
                        formCheckbox
                        flexContainerFormA"
                     style="
                      border: 4px solid var(--middleNeutralColor);
                      margin-left: 0;">
                  <label class="formControl formControl-checkbox"
                         style="
                          padding: 0 0 0 0;
                          border-style: none;">
                    <input type="checkbox"
                           v-model="formdata.advisorTickD"
                           :tabindex="other.tabIndexConf.advisorTickD"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.advisorD"
                         :tabindex="other.tabIndexConf.advisorD"/>
                </div>

                <div class="
                        formCheckbox
                        flexContainerFormA"
                     style="
                      border: 4px solid var(--middleNeutralColor);
                      margin-left: 0;">
                  <label class="formControl formControl-checkbox"
                         style="
                          padding: 0 0 0 0;
                          border-style: none;">
                    <input type="checkbox"
                           v-model="formdata.advisorTickE"
                           :tabindex="other.tabIndexConf.advisorTickE"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
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
                        formCheckbox
                        flexContainerFormA"
                     style="
                      border: 4px solid var(--middleNeutralColor);
                      margin-left: 0;">
                  <label class="formControl formControl-checkbox"
                         style="
                          padding: 0 0 0 0;
                          border-style: none;">
                    <input type="checkbox"
                           v-model="formdata.connectionTickA"
                           :tabindex="other.tabIndexConf.connectionTickA"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.connectionA"
                         :tabindex="other.tabIndexConf.connectionA"/>
                </div>

                <div class="
                        formCheckbox
                        flexContainerFormA"
                     style="
                      border: 4px solid var(--middleNeutralColor);
                      margin-left: 0;">
                  <label class="formControl formControl-checkbox"
                         style="
                          padding: 0 0 0 0;
                          border-style: none;">
                    <input type="checkbox"
                           v-model="formdata.connectionTickB"
                           :tabindex="other.tabIndexConf.connectionTickB"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.connectionB"
                         :tabindex="other.tabIndexConf.connectionB"/>
                </div>

                <div class="
                        formCheckbox
                        flexContainerFormA"
                     style="
                      border: 4px solid var(--middleNeutralColor);
                      margin-left: 0;">
                  <label class="formControl formControl-checkbox"
                         style="
                          padding: 0 0 0 0;
                          border-style: none;">
                    <input type="checkbox"
                           v-model="formdata.connectionTickC"
                           :tabindex="other.tabIndexConf.connectionTickC"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.connectionC"
                         :tabindex="other.tabIndexConf.connectionC"/>
                </div>

                <div class="
                        formCheckbox
                        flexContainerFormA"
                     style="
                      border: 4px solid var(--middleNeutralColor);
                      margin-left: 0;">
                  <label class="formControl formControl-checkbox"
                         style="
                          padding: 0 0 0 0;
                          border-style: none;">
                    <input type="checkbox"
                           v-model="formdata.connectionTickD"
                           :tabindex="other.tabIndexConf.connectionTickD"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.connectionD"
                         :tabindex="other.tabIndexConf.connectionD"/>
                </div>

                <div class="
                        formCheckbox
                        flexContainerFormA"
                     style="
                      border: 4px solid var(--middleNeutralColor);
                      margin-left: 0;">
                  <label class="formControl formControl-checkbox"
                         style="
                          padding: 0 0 0 0;
                          border-style: none;">
                    <input type="checkbox"
                           v-model="formdata.connectionTickE"
                           :tabindex="other.tabIndexConf.connectionTickE"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.connectionE"
                         :tabindex="other.tabIndexConf.connectionE"/>
                </div>

              </div>

            </div>

          </div>

          <!--sectionBEFG-->
          <div class="
                middleWrapper
                botRight
                flexContainerFormB">

            <!--input-complex ("Vermerke")-->
            <div class="
                    innerWrapper
                    inputVermerke
                    flexContainerFormB">
              <div class="overlay" v-show="!vermerke"></div>
              <div class="
                        inputWrapper
                        flexContainerFormA">
                <div class="inputSelectionHighlight"></div>
                <textarea id="annotations"
                          style="
                            width: 100%;
                            height: 100%;
                            padding-top: 10px;"
                          placeholder="Vermerke"
                          class="inputWithLabel"
                          v-model="formdata.annotations"
                          :tabindex="other.tabIndexConf.annotations"/>
              </div>
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

      <!-- Depending on the state, different buttons need to be shown -->
      <!-- Submit new ticket -->
      <div class="
            formPageButton
            hasShadowFormA"
           @click="
          saveForm('accept');"
           :tabindex="other.tabIndexConf.buttonSend"
           v-show="isNew">
        Abschicken
      </div>

      <!-- Send ticket to next station -->
      <div class="
            formPageButton
            hasShadowFormA"
           @click="
            saveForm('accept');"
           tabindex="6"
           v-show="sendable">
        Weitersenden
      </div>

      <!-- Print ticket and archive -->
      <div class="
            formPageButton
            hasShadowFormA"
           @click="
            printTicket();"
           tabindex="6"
           v-show="toBePrinted">
        Drucken
      </div>

      <!-- Reject ticket due to flaws -->
      <div class="
            formPageButton
            hasShadowFormA"
           @click="
            saveForm('reject');"
           v-show="rejectable">
        Abweisen
      </div>

      <!-- Reset all inputs (only while new) -->
      <div class="
            formPageButton
            hasShadowFormA"
           @click="
            formReset();
            notifySuccess('Formular zurückgesetzt')"
           :tabindex="other.tabIndexConf.buttonReset">
        Zurücksetzen
      </div>

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

        topRadio: false,
        topPhone: false,
        topFax: false,
        topDFU: false,
        topCourier: false,
        numberTB: '',
        outgoing: true,
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
        midRadio: false,
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
        tempEingehend: false,
        tempAusgehend: true,
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
    // @TODO Clicking new document after opening an other to fix
    this.other.isEdit = false
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
      'loadFormDataAction',
      'getPDFAction'
    ]),
    ...mapGetters(['getDraft', 'getUser']),

    autoFillValues: function () {
      // import user from vuex
      let user = this.$store.state.user
      // generate date
      let today = new Date()
      let dd = today.getDate()
      let mm = today.getMonth() + 1 // January is 0!
      let yyyy = today.getFullYear()
      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      let date = dd + '.' + mm + '.' + yyyy

      switch (this.formdata.ticketState) {
        case 13:
          if (this.formdata.docketIdentification === '') {
            this.formdata.docketIdentification = user.identification
          }
          break
        case 7:
          if (this.formdata.docketIdentification === '') {
            this.formdata.docketIdentification = user.identification
          }
          break
        case 10:
          if (this.formdata.primaryDate === '') {
            this.formdata.primaryDate = date
          }
          if (this.formdata.primaryHdZ === '') {
            this.formdata.primaryHdZ = user.identification
          }
          this.formdata.topRadio = true
          this.formdata.midRadio = false
          this.formdata.sender = ''
          this.formdata.position = ''
          this.formdata.identification = ''
          break
        case 3:
          if (this.formdata.secondaryDate === '') {
            this.formdata.secondaryDate = date
          }
          if (this.formdata.secondaryHdZ === '') {
            this.formdata.secondaryHdZ = user.identification
          }
          break
        case 4:
          if (this.formdata.tertiaryDate === '') {
            this.formdata.tertiaryDate = date
          }
          if (this.formdata.tertiaryHdZ === '') {
            this.formdata.tertiaryHdZ = user.identification
          }
          break
        case 0:
          if (this.formdata.sender === '') {
            this.formdata.sender = user.sender
          }
          if (this.formdata.identification === '') {
            this.formdata.identification = user.identification
          }
          if (this.formdata.position === '') {
            if (user.role === 'SGL') {
              this.formdata.position = user.position
            } else {
              this.formdata.position = user.role
            }
          }
          this.formdata.midRadio = true
          this.formdata.topRadio = false
          this.formdata.primaryDate = ''
          this.formdata.primaryHdZ = ''
          break
      }
    },

    autoFillTime: function () {
      let today = new Date()
      // generate time
      let hh = today.getHours()
      let mm = today.getMinutes()
      if (hh < 10) {
        hh = '0' + hh
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      let time = hh + ':' + mm

      switch (this.formdata.ticketState) {
        case 7:
          if (this.formdata.docketTime === '') {
            this.formdata.docketTime = time
          }
          break
        case 13:
          if (this.formdata.docketTime === '') {
            this.formdata.docketTime = time
          }
          break
        case 10:
          if (this.formdata.primaryTime === '') {
            this.formdata.primaryTime = time
          }
          break
        case 3:
          if (this.formdata.secondaryTime === '') {
            this.formdata.secondaryTime = time
          }
          break
        case 4:
          if (this.formdata.tertiaryTime === '') {
            this.formdata.tertiaryTime = time
          }
          break
        case 0:
          if (this.formdata.createTime === '') {
            this.formdata.createTime = time
          }
          break
      }
    },

    loadDefault: function () {
      this.setDefaultData(this.$options.data().formdata)
      this.$data.formdata.inOperation = this.getUser().operation.operationId
      this.checkIfUserIsFernmelder()
      this.setIncomingOutgoing()
      this.autoFillValues()
      this.$data.formdata.inOperation = this.getUser().operation.operationID
    },

    loadDraft: function () {
      let draft = this.getDraft() || this.$options.data().formdata
      this.setDefaultData(draft)
      this.setIncomingOutgoing()
      this.autoFillValues()
    },

    loadID: function (id) {
      this.loadFormDataAction(id)
        .then((formdata) => {
          this.setDefaultData(formdata)
          this.setIncomingOutgoing()
          this.$data.other.isEdit = true
          this.autoFillValues()
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
      if (id === undefined) {
        this.loadDefault()
      } else if (id === 'draft') {
        this.loadDraft()
      } else {
        this.loadID(id)
      }
    },
    // checks if user is Fernmelder to set Eingehend as default value
    checkIfUserIsFernmelder: function () {
      if (this.$store.state.user.role === 'Fernmelder') {
        this.other.tempEingehend = true
        this.checkIn()
      }
    },

    setIncomingOutgoing: function () {
      if (this.formdata.outgoing) {
        this.other.tempAusgehend = true
        this.other.tempEingehend = false
      } else {
        this.other.tempAusgehend = false
        this.other.tempEingehend = true
      }
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

    saveForm: function (action) {
      if (this.sent === false) {
        this.sent = true
        this.autoFillTime()
        this.mapState(action)
        if (this.other.isEdit) {
          this.updateFormDataAction(this.$data.formdata)
            .then(() => {
              if (action === 'accept') {
                this.notifySuccess('Abgeschickt')
              } else if (action === 'reject') {
                this.notifySuccess('Zurückgeschickt')
              }
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

    printTicket: function () {
      this.openPDF()
      this.saveForm('accept')
    },

    mapState: function (sendAction) {
      let currentState = this.formdata.ticketState
      let newState = currentState
      if (sendAction === 'reject') {
        switch (currentState) {
          case 1:
            newState = 2
            break
          case 3:
            newState = 2
            break
          case 5:
            newState = 6
            break
          case 7:
            newState = 6
            break
          case 11:
            newState = 12
            break
          case 13:
            newState = 12
            break
        }
      } else if (sendAction === 'accept') {
        switch (currentState) {
          case 0:
            newState = 1
            break
          case 1:
            newState = 3
            break
          case 2:
            newState = 1
            break
          case 3:
            newState = 4
            break
          case 4:
            newState = 5
            break
          case 5:
            newState = 7
            break
          case 6:
            newState = 5
            break
          case 7:
            newState = 8
            break
          case 8:
            newState = 9
            break
          case 10:
            newState = 11
            break
          case 11:
            newState = 13
            break
          case 12:
            newState = 11
            break
          case 13:
            newState = 14
            break
          case 14:
            newState = 15
            break
        }
      }
      this.formdata.ticketState = newState
    },

    formReset: function () {
      this.formdata = JSON.parse(JSON.stringify(this.default))
    },

    openPDF: function () {
      this.getPDFAction(this.formdata)
        .catch((error) => this.notifyError('', error.message))
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
        this.formdata.ticketState = 10
      } else {
        this.other.tempAusgehend = true
        this.formdata.outgoing = true
        this.formdata.ticketState = 0
      }
      this.autoFillValues()
    },

    checkOut () {
      if (this.other.tempAusgehend) {
        this.other.tempEingehend = false
        this.formdata.outgoing = true
        this.formdata.ticketState = 0
      } else {
        this.other.tempEingehend = true
        this.formdata.outgoing = false
        this.formdata.ticketState = 10
      }
      this.autoFillValues()
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

    toBePrinted: function () {
      return [8, 9, 14, 15].indexOf(
        this.formdata.ticketState) !== -1
    },

    rejectable: function () {
      return [1, 7, 3, 5, 11, 13].indexOf(
        this.formdata.ticketState) !== -1
    },

    sendable: function () {
      return [1, 2, 3, 4, 5, 6, 7, 11, 12, 13].indexOf(
        this.formdata.ticketState) !== -1
    },

    isNew: function () {
      return [0, 10].indexOf(
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
    width: 100%;
    background-color: var(--formBlueColor);
    padding: 0 20px 20px 20px;
    font: var(--bigTitleSize) var(--mainFont);
    color: var(--primaryTextColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .formWrapper {
    width: 80%;
    background-color: var(--semiLightNeutralColor);
    padding: 0 10px 20px 10px;
    margin: 0 50px 20px 0;
    border-top: 20px solid var(--secondaryTextColor);
    font: var(--bigTitleSize) var(--mainFont);
    color: var(--primaryTextColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .sideMenuForm {
    width: 20%;
    background-color: var(--semiLightNeutralColor);
    padding: 0 0 20px 10px;
    margin: 0 0 0 2%;
    border-top: 20px solid var(--secondaryTextColor);
    font: var(--bigTitleSize) var(--mainFont);
    color: var(--primaryTextColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .checkboxLabel {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    cursor: pointer;
  }

  /* section-wrappers (middle wrapper) */
  .topTopLeft {
    width: 80%;
    padding: 0 5px 5px 0;
    margin: 0 0 0 0;
  }
  .topTopRight {
    width: 20%;
    height: 200px;
    background-color: var(--semiLightNeutralColor);
    padding: 0 10px 0 0;
    margin: 0 0 0 0;
    font: var(--bigTitleSize) var(--mainFont);
    color: var(--primaryTextColor);
    position: sticky;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .checkboxLabel {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    cursor: pointer;
  }

  /* section-wrappers (middle wrapper) */
  .topTopLeft {
    width: 80%;
    padding: 0 5px 5px 0;
    margin: 0 0 0 0;
  }
  .topTopRight {
    height: 100%;
    width: 20%;
    background-color: var(--middleNeutralColor);
    padding: 0 0 5px 0;
    margin: 0 0 0 0;
  }
  .topBot {
    width: 100%;
    padding: 0 0 5px 0;
    margin: 0 0 0 0;
  }
  .midTop {
    width: 100%;
    padding: 0 0 5px 0;
    margin: 0 0 0 0;
  }
  .midMid {
    width: 100%;
    padding: 0 0 5px 0;
    margin: 0 0 0 0;
  }
  .midBot {
    width: 100%;
    padding: 0 0 5px 0;
    margin: 0 0 0 0;
  }
  .botLeft {
    width: 70%;
    padding: 0 5px 5px 0;
    margin: 0 0 0 0;
  }
  .botRight {
    width: 30%;
    padding: 0 0 5px 0;
    margin: 0 0 0 0;
  }

  /* complex/elemnet-wrappers (inner wrapper) */
  /* top-section */
  .checkboxgroupMTTop {
    width: 100%;
    padding: 10px 0 0 0;
    margin: 0 0 5px 0;
  }
  .inputIncoming {
    width: 33%;
    padding: 10px 10px 0 10px;
    margin: 0 5px 0 0;
  }
  .inputOutgoing {
    width: 67%;
    padding: 10px 15px 0 10px;
    margin: 0 0 0 0;
  }
  .inputTB {
    height: 100%;
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 0 0 0;
  }
  .inputRGS {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 0 0 0;
  }

  /*mid-section*/
  .checkboxgroupMTMid {
    width: 100%;
    padding: 10px 0 0 0;
    margin: 0 0 5px 0;
  }
  .checkboxgroupDS {
    width: 100%;
    padding: 10px 0 0 0;
    margin: 0 5px 5px 0;
  }
  .checkboxgroupSB {
    width: 100%;
    padding: 10px 0 0 0;
    margin: 0 0 5px 0;
  }
  .inputRufnr {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 5px 0 0;
  }
  .inputAnschrift {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 5px 0 0;
  }
  .inputGESP {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 0 0 0;
  }
  .inputInhalt {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 0 0 0;
  }
  .inputAbsender {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 0 5px 0;
  }
  .inputAbZeit {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 5px 0 0;
  }
  .inputZeichen {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 5px 0 0;
  }
  .inputFunktion {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 0 0 0;
  }

  /*bot-section*/
  .inputQuittung {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 0 5px 0;
  }
  .checkboxgroupTEL {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 5px 0 0;
  }
  .checkboxgroupFachberater {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 5px 0 0;
  }
  .checkboxgroupVerb {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 0 0 0;
  }
  .inputVermerke {
    width: 100%;
    padding: 10px 10px 0 10px;
    margin: 0 0 0 0;
  }

  /* custom-header(s) */
  .headerFormA {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
  }
  .headerFormB {
    padding: 0 0 0 0;
    margin: 0 0 0 5px;
  }

  /* custom button */
  .formPageButton {
    height: 48px;
    width: 100%;
    background-color: var(--semiLightNeutralColor);
    padding: 9px 0 0 0;
    margin: 0 0 30px 0;
    position: relative;
    right: 10px;
    border-left: var(--formBlueColor);
    border-left-style: solid;
    border-left-width: 10px;
    text-align: center;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .formPageButton:hover {
    border-left: var(--mainColor);
    border-left-style: solid;
    border-left-width: 10px;
    cursor: pointer;
  }

  /* custom input */
  .inputWrapper {
    height: 100%;
    width: 100%;
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    border: 4px solid var(--middleNeutralColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .inputWrapper:hover div {
    background-color: var(--mainColor);
  }
  .inputLabel {
    height: 40px;
    width: 40%;
    background-color: var(--middleNeutralColor);
    padding: 5px 10px 0 10px;
    margin: 0 0 0 0;
    overflow: visible;
    overflow-wrap: break-word;
    text-align: center;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .inputWithLabel {
    width: 60%;
    height: 40px;
    padding: 0 0 0 10px;
    margin: 0 0 0 0;
    background-color: var(--semiLightNeutralColor);
    border: 0 none;
    -webkit-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .inputSelectionHighlight {
    height: auto;
    min-width: 10px;
    width: 10px;
    background-color: var(--formBlueColor);
  }

  /* custom checkbox */
  .formCheckbox {
    width: 100%;
    margin: 0 1% 0 1%;
    border: 4px solid var(--middleNeutralColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .formControl {
    width: 100%;
    height: 40px;
    padding: 5px 10px 0 50px;
    background-color: var(--middleNeutralColor);
    text-align: center;
    display: block;
    position: relative;
    cursor: pointer;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .formControl input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .formControl_indicator {
    height: 40px;
    width: 40px;
    background: var(--formBlueColor);
    position: absolute;
    top: 0;
    left: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .formCheckbox:hover div {
    background-color: var(--mainColor);
  }
  .formControl input:checked ~ .formControl_indicator {
    background: var(--mainColor);
  }
  .formControl_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
  }
  .formControl input:checked ~ .formControl_indicator:after {
    display: block;
  }
  .formControl-checkbox .formControl_indicator:after {
    left: 13px;
    top: 4px;
    width: 10px;
    height: 20px;
    border: solid var(--semiLightNeutralColor);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  /* basic measurements for elemnts that don't have general wrapper classes */
  .hasMeasurmentsFormA {
    width: 100%;
    padding: 0 0 10px 0;
    margin: 0 0 0 0;
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
  }

  .is-blue {
    background: var(--formBlueColor);
  }

  .is-red {
    background: var(--formRedColor);
  }

  .is-yellow {
    background: var(--formYellowColor);
  }

  /* element settings */
  input {
    margin: 0;
    padding: 0;
  }
  textarea {
    resize: none;
    font-size: var(--bodySize);
  }
</style>
