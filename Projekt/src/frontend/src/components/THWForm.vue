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
                             :tabindex="tabIndexConfig.topRadio"/>
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
                             :tabindex="tabIndexConfig.topPhone"/>
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
                             :tabindex="tabIndexConfig.topFax"/>
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
                             :tabindex="tabIndexConfig.topDFU"/>
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
                             :tabindex="tabIndexConfig.topCourier"/>
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
                           :tabindex="tabIndexConfig.incomingDate"/>
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
                           :placeholder="placeholders.primaryTime"
                           :disabled="other.tempAusgehend"
                           v-model="formdata.primaryTime"
                           :tabindex="tabIndexConfig.incomingTime"/>
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
                           :tabindex="tabIndexConfig.incomingHdZ"/>
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
                               :tabindex="tabIndexConfig.outboundAccDate"/>
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
                               :placeholder="placeholders.secondaryTime"
                               :disabled="other.tempEingehend"
                               v-model="formdata.secondaryTime"
                               :tabindex="tabIndexConfig.outboundAccTime"/>
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
                               :tabindex="tabIndexConfig.outboundAccHdZ"/>
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
                               :tabindex="tabIndexConfig.outboundTransDate"
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
                               :placeholder="placeholders.tertiaryTime"
                               :disabled="other.tempEingehend"
                               v-model="formdata.tertiaryTime"
                               :tabindex="tabIndexConfig.outboundTransTime"
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
                               :tabindex="tabIndexConfig.outboundTransHdZ"/>
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
                         :tabindex="tabIndexConfig.lbNumber"/>
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
                           :tabindex="tabIndexConfig.selectIncoming"/>
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
                           :tabindex="tabIndexConfig.selectOutbound"/>
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
                       :tabindex="tabIndexConfig.receiverName"/>
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
                           :tabindex="tabIndexConfig.midRadio"/>
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
                           :tabindex="tabIndexConfig.midPhone"/>
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
                           :tabindex="tabIndexConfig.midFax"/>
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
                           :tabindex="tabIndexConfig.midDFU"/>
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
                           :tabindex="tabIndexConfig.midCourier"/>
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
                             :tabindex="tabIndexConfig.callAnnouncement"/>
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
                             :tabindex="tabIndexConfig.callMessage"/>
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
                             :tabindex="tabIndexConfig.priorityInstant"/>
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
                             :tabindex="tabIndexConfig.priorityFlash"/>
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
                         :tabindex="tabIndexConfig.callNumber"/>
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
                         :tabindex="tabIndexConfig.address"/>
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
                           :tabindex="tabIndexConfig.conversationNote"/>
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
                          :tabindex="tabIndexConfig.content"/>
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
                       :tabindex="tabIndexConfig.sender"/>
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
                         :placeholder="placeholders.createTime"
                         v-model="formdata.createTime"
                         :tabindex="tabIndexConfig.timeCreate"/>
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
                         :tabindex="tabIndexConfig.identification"/>
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
                         :tabindex="tabIndexConfig.position"/>
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
                       :placeholder="placeholders.docketTime"
                       v-model="formdata.docketTime"
                       :tabindex="tabIndexConfig.ackTime"/>
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
                       :tabindex="tabIndexConfig.ackIdentification"/>
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
                             :tabindex="tabIndexConfig.stationLeader"/>
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
                               :tabindex="tabIndexConfig.stationS1"/>
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
                               :tabindex="tabIndexConfig.stationS2"/>
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
                               :tabindex="tabIndexConfig.stationS3"/>
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
                               :tabindex="tabIndexConfig.stationS4"/>
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
                               :tabindex="tabIndexConfig.stationS6"/>
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
                           :tabindex="tabIndexConfig.advisorTickA"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.advisorA"
                         :tabindex="tabIndexConfig.advisorA"/>
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
                           :tabindex="tabIndexConfig.advisorTickB"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.advisorB"
                         :tabindex="tabIndexConfig.advisorB"/>
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
                           :tabindex="tabIndexConfig.advisorTickC"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.advisorC"
                         :tabindex="tabIndexConfig.advisorC"/>
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
                           :tabindex="tabIndexConfig.advisorTickD"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.advisorD"
                         :tabindex="tabIndexConfig.advisorD"/>
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
                           :tabindex="tabIndexConfig.advisorTickE"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.advisorE"
                         :tabindex="tabIndexConfig.advisorE"/>
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
                           :tabindex="tabIndexConfig.connectionTickA"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.connectionA"
                         :tabindex="tabIndexConfig.connectionA"/>
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
                           :tabindex="tabIndexConfig.connectionTickB"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.connectionB"
                         :tabindex="tabIndexConfig.connectionB"/>
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
                           :tabindex="tabIndexConfig.connectionTickC"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.connectionC"
                         :tabindex="tabIndexConfig.connectionC"/>
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
                           :tabindex="tabIndexConfig.connectionTickD"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.connectionD"
                         :tabindex="tabIndexConfig.connectionD"/>
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
                           :tabindex="tabIndexConfig.connectionTickE"/>
                    <div class="formControl_indicator"
                         style="height: 40px"></div>
                  </label>
                  <input class="inputWithLabel"
                         style="
                         padding: 0 0 0 50px;
                          width: 100%;
                          border-style: none;"
                         v-model="formdata.connectionE"
                         :tabindex="tabIndexConfig.connectionE"/>
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
                          :tabindex="tabIndexConfig.annotations"/>
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
      <div class="outerWrapper"
           style="padding: 0 20px 10px 20px;">
        <div class="middleWrapper"
             style="padding: 0 0 5px 0">
          <div class="innerWrapper"
               style="padding: 10px 10px 0 10px">

            <div class="formButtonWrapper"
                 v-show="isNew">
              <div class="formButton"
                   @keyup.enter="
                    saveForm('accept');"
                   @click="
                    saveForm('accept');"
                   :tabindex="tabIndexConfig.buttonSend"
                   id="saveNewFormButton">
                <div class="formButtonLabel">
                  Abschicken
                </div>
              </div>
            </div>

            <div class="formButtonWrapper"
                 v-show="sendable">
              <div class="formButton"
                   @keyup.enter="
                    saveForm('accept');"
                   @click="
                    saveForm('accept');"
                   tabindex="6"
                   id="sendFormToNextPersonButton">
                <div class="formButtonLabel">
                  Weitersenden
                </div>
              </div>
            </div>

            <div class="formButtonWrapper"
                 v-show="toBePrinted">
              <div class="formButton"
                   @keyup.enter="
                    printTicket();"
                   @click="
                    printTicket();"
                   tabindex="6"
                   id="printFormButton">
                <div class="formButtonLabel">
                  Drucken
                </div>
              </div>
            </div>

            <div class="formButtonWrapper"
                 v-show="rejectable">
              <div class="formButton"
                   @keyup.enter="
                    saveForm('reject');"
                   @click="
                    saveForm('reject');"
                    id="rejectFormButton">
                <div class="formButtonLabel">
                  Abweisen
                </div>
              </div>
            </div>

            <div class="formButtonWrapper">
              <div class="formButton"
                   @keyup.enter="
                    formReset();
                    notifySuccess('Zurückgesetzt');"
                   @click="
                    formReset();
                    notifySuccess('Zurückgesetzt');"
                   :tabindex="tabIndexConfig.buttonReset"
                   id="resetFormButton">
                <div class="formButtonLabel">
                  Zurücksetzen
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { MessageBox, Notification } from 'element-ui'
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
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
        isEdit: false
      },

      placeholders: {
        primaryTime: '',
        secondaryTime: '',
        tertiaryTime: '',
        docketTime: '',
        createTime: ''
      },

      sent: false
    }
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.loadDocument(to.params.id)
    })
  },

  beforeRouteUpdate (to, from, next) {
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

  mounted () {
    this.interval = setInterval(this.updateTimePlaceholders, 500)
  },

  beforeDestroy () {
    clearInterval(this.interval)
  },

  methods: {
    ...mapMutations(['setDraft', 'setFormConfig']),
    ...mapActions([
      'saveNewFormAction',
      'updateFormDataAction',
      'loadFormDataAction',
      'getPDFAction'
    ]),
    ...mapGetters(['getDraft', 'getUser', 'getFormConfig']),

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
      let ss = today.getSeconds()
      if (hh < 10) {
        hh = '0' + hh
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      if (ss < 10) {
        ss = '0' + ss
      }
      let time = hh + ':' + mm + ':' + ss

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

    updateTimePlaceholders: function () {
      let today = new Date()
      // generate time
      let hh = today.getHours()
      let mm = today.getMinutes()
      let ss = today.getSeconds()
      if (hh < 10) {
        hh = '0' + hh
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      if (ss < 10) {
        ss = '0' + ss
      }
      let time = hh + ':' + mm + ':' + ss

      switch (this.formdata.ticketState) {
        case 7:
          this.placeholders.docketTime = time
          break
        case 13:
          this.placeholders.docketTime = time
          break
        case 10:
          this.placeholders.primaryTime = time
          break
        case 3:
          this.placeholders.secondaryTime = time
          break
        case 4:
          this.placeholders.tertiaryTime = time
          break
        case 0:
          this.placeholders.createTime = time
          break
      }
    },

    loadDefault: function () {
      this.setDefaultData(this.$options.data().formdata)
      if (!this.checkIfUserIsFernmelder()) {
        this.setIncomingOutgoing()
        this.autoFillValues()
        this.setFormConfig(this.$options.data().formdata.ticketState)
      }
      this.$data.formdata.inOperation = this.getUser().operation.operationID
    },

    loadDraft: function () {
      let draft = this.getDraft() || this.$options.data().formdata
      this.setDefaultData(draft)
      this.setIncomingOutgoing()
      this.autoFillValues()
      this.setFormConfig(draft.ticketState)
    },

    loadID: function (id) {
      this.loadFormDataAction(id)
        .then((formdata) => {
          this.setDefaultData(formdata)
          this.setIncomingOutgoing()
          this.$data.other.isEdit = true
          this.autoFillValues()
          this.setFormConfig(formdata.ticketState)
        })
        .catch((error) => {
          this.messageBoxError('', error.message)
            .then(this.$router.push({name: 'Home'}))
        })
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
        return true
      }
      return false
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
      let newState = this.getFormConfig().stateMapping[sendAction]
      this.formdata.ticketState = newState
    },

    formReset: function () {
      this.formdata = JSON.parse(JSON.stringify(this.default))
      if (this.formdata.ticketState % 10 === 0) {
        this.$data.formdata.inOperation = this.getUser().operation.operationID
        if (this.checkIfUserIsFernmelder()) {
          this.formdata.ticketState = 10
        }
      }
      this.autoFillValues()
      this.placeholders = this.$options.data().placeholders
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
      this.setFormConfig(this.formdata.ticketState)
      this.placeholders = this.$options.data().placeholders
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
      this.setFormConfig(this.formdata.ticketState)
      this.placeholders = this.$options.data().placeholders
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
      return this.$store.state.formConfig.inputVisibility.checkboxGroupTop
    },

    aufnahme: function () {
      return this.$store.state.formConfig.inputVisibility.aufnahme
    },

    annahmeBefoerderung: function () {
      return this.$store.state.formConfig.inputVisibility.annahmeBefoerderung
    },

    technischesBetriebsbuch: function () {
      return this.$store.state.formConfig.inputVisibility
        .technischesBetriebsbuch
    },

    gegenstelle: function () {
      return this.$store.state.formConfig.inputVisibility.gegenstelle
    },

    checkboxgroupMiddle: function () {
      return this.$store.state.formConfig.inputVisibility.checkboxgroupMiddle
    },

    durchsageSpruch: function () {
      return this.$store.state.formConfig.inputVisibility.durchsageSpruch
    },

    sofortBlitz: function () {
      return this.$store.state.formConfig.inputVisibility.sofortBlitz
    },

    rufnummer: function () {
      return this.$store.state.formConfig.inputVisibility.rufnummer
    },

    anschrift: function () {
      return this.$store.state.formConfig.inputVisibility.anschrift
    },

    gespraechsnotiz: function () {
      return this.$store.state.formConfig.inputVisibility.gespraechsnotiz
    },

    inhalt: function () {
      return this.$store.state.formConfig.inputVisibility.inhalt
    },

    absender: function () {
      return this.$store.state.formConfig.inputVisibility.absender
    },

    abfassungszeit: function () {
      return this.$store.state.formConfig.inputVisibility.abfassungszeit
    },

    zeichen: function () {
      return this.$store.state.formConfig.inputVisibility.zeichen
    },

    funktion: function () {
      return this.$store.state.formConfig.inputVisibility.funktion
    },

    quittung: function () {
      return this.$store.state.formConfig.inputVisibility.quittung
    },

    tel: function () {
      return this.$store.state.formConfig.inputVisibility.tel
    },

    vermerke: function () {
      return this.$store.state.formConfig.inputVisibility.vermerke
    },

    // Color switches

    isGreen: function () {
      return this.$store.state.formConfig.background.isGreen
    },

    isBlue: function () {
      return this.$store.state.formConfig.background.isBlue
    },

    isYellow: function () {
      return this.$store.state.formConfig.background.isYellow
    },

    isRed: function () {
      return this.$store.state.formConfig.background.isRed
    },

    // Button switches

    toBePrinted: function () {
      return this.$store.state.formConfig.buttonVisible.toBePrinted
    },

    rejectable: function () {
      return this.$store.state.formConfig.buttonVisible.rejectable
    },

    sendable: function () {
      return this.$store.state.formConfig.buttonVisible.sendable
    },

    isNew: function () {
      return this.$store.state.formConfig.buttonVisible.isNew
    },
    // End of visibility switches
    // =================================================
    tabIndexConfig: function () {
      return this.$store.state.formConfig.tabOrder
    }
  }
}
</script>

<style>
  .form {
    width: 100%;
    background-color: var(--formBlueColor);
    padding: 0 20px 20px 20px;
    font: var(--titleSize) var(--mainFont);
    color: var(--primaryTextColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .formWrapper {
    width: 80%;
    background-color: var(--semiLightNeutralColor);
    padding: 0 10px 20px 10px;
    margin: 0 0 20px 0;
    border-top: 20px solid var(--secondaryTextColor);
    font: var(--titleSize) var(--mainFont);
    color: var(--primaryTextColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .sideMenuForm {
    width: 20%;
    max-height: 250px;
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
    width: 25%;
    padding: 10px 10px 0 10px;
    margin: 0 5px 0 0;
  }
  .inputAnschrift {
    width: 50%;
    padding: 10px 10px 0 10px;
    margin: 0 5px 0 0;
  }
  .inputGESP {
    width: 25%;
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
    width: 40%;
    padding: 10px 10px 0 10px;
    margin: 0 5px 0 0;
  }
  .inputZeichen {
    width: 30%;
    padding: 10px 10px 0 10px;
    margin: 0 5px 0 0;
  }
  .inputFunktion {
    width: 30%;
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
  .formButtonWrapper {
    margin: 5px 0 0 0;
    border: 4px solid var(--middleNeutralColor);
  }
  .formButtonWrapper:hover {
    border: 4px solid var(--mainColor);
  }
  .formButton {
    height: 50px;
    width: 100%;
    background-color: var(--semiLightNeutralColor);
    padding: 0 0 0 0;
    border-left: 10px solid var(--formBlueColor);
    text-align: center;
    font: var(--titleSize) var(--mainFont);
    -webkit-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .formButton:hover {
    border-left: 10px solid var(--mainColor);
    cursor: pointer;
  }
  .formButtonLabel {
    height: 40px;
    width: 100%;
    padding: 10px 40px 0 40px;
    margin: 0 10px 0 10px;
    background-color: var(--middleNeutralColor);
    font: var(--titleSize) var(--mainFont);
    text-align: center;
    cursor: pointer;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  /* custom input */
  .inputWrapper {
    height: 100%;
    width: 100%;
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    border: 4px solid var(--middleNeutralColor);
    overflow: hidden;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .inputWrapper:hover div {
    background-color: var(--mainColor);
  }
  .inputWrapper:hover {
    border: 4px solid var(--mainColor);
  }
  .inputLabel {
    height: 40px;
    width: 40%;
    background-color: var(--middleNeutralColor);
    padding: 5px 10px 0 10px;
    margin: 0 0 0 0;
    font: var(--titleSize) var(--mainFont);
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
    font: var(--titleSize) var(--mainFont);
    -webkit-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .inputWithLabel:focus {
    background-color: var(--formHighlightColor)
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
    margin: 0 0.5% 0 0.5%;
    border: 4px solid var(--middleNeutralColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .formCheckbox:hover {
    border: 4px solid var(--mainColor);
  }
  .formControl {
    width: 100%;
    height: 40px;
    padding: 5px 10px 0 50px;
    background-color: var(--middleNeutralColor);
    text-align: center;
    font: var(--titleSize) var(--mainFont);
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
    background-color: rgba(0, 0, 0, 0.10);
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
