<template>
  <div>
    <el-form ref="form" :model="formdata" style="
      border-top: var(--regularTextColor)
      border-top-style: solid
      border-top-width: 30px
      border-bottom-left-radius: 20px
      border-bottom-right-radius: 20px
      border-top-left-radius: 10px
      border-top-right-radius: 10px
      padding-bottom: 20px">
      <el-row>
        <el-col :span="24">

          <!-- section: top -->
          <div class="
                outerWrapper
                hasPaddingLeftRightA
                hasPaddingTopBottomA
                hasMarginLeftRightA
                hasMarginTopBottomA">
            <el-row>
              <el-col :span="16">

                <!-- subsection: top/left -->
                <div class="
                      middleWrapper
                      hasPaddingLeftRightB
                      hasPaddingTopBottomB
                      hasMarginLeftRightB
                      hasMarginTopBottomB">
                  <el-row>

                    <!-- element: checkbox-group (message-type) -->
                    <div class="
                          innerWrapper
                          hasPaddingLeftRightC
                          hasPaddingTopBottomC
                          hasMarginLeftRightC
                          hasMarginTopBottomC
                          flexContainerA">
                      <el-form-item class="
                                      flexContainerA
                                      flexChildA">
                        <el-checkbox class="flexChildA"
                                     label='Funk'
                                     v-model="formdata.topRadio">
                        </el-checkbox>
                        <el-checkbox class="flexChildA"
                                     label='Telefon'
                                     v-model="formdata.topPhone">
                        </el-checkbox>
                        <el-checkbox class="flexChildA"
                                     label='Telefax'
                                     v-model="formdata.topFax">
                        </el-checkbox>
                        <el-checkbox class="flexChildA"
                                     label='DFÜ'
                                     v-model="formdata.topDFU">
                        </el-checkbox>
                        <el-checkbox class="flexChildA"
                                     label='Kurier/Melder'
                                     v-model="formdata.topCourier">
                        </el-checkbox>
                      </el-form-item>
                    </div>

                  </el-row>
                  <el-row>
                    <el-col :span="9">

                      <!-- element: input-complex ("Eingehend") -->
                      <div class="
                            innerWrapper
                            hasPaddingLeftRightC
                            hasPaddingTopBottomC
                            hasMarginLeftRightC
                            hasMarginTopBottomC">
                        <el-container>
                          <el-header style="height: 10px">Eingehend</el-header>
                          <el-main>
                            <el-container>
                              <el-header class="hasPaddingLeftRightB"
                                         style="
                                  height: 20px
                                  font-size: var(--bodySize)
                                  color: var(--secondaryTextColor)">
                                Aufnahmevermerk
                              </el-header>
                              <el-main class="flexContainerB">
                                <!-- date-input  -->
                                <el-form-item class="
                                  flexChildA
                                  hasPaddingLeftRightB">
                                  <el-input :disabled="other.tempAusgehend"
                                            v-model="formdata.primaryDate">
                                    <div slot="prepend" style="width: 42px">
                                      <span>Datum</span>
                                    </div>
                                  </el-input>
                                </el-form-item>
                                <!-- time-input  -->
                                <el-form-item class="
                                                flexChildA
                                                hasPaddingLeftRightB">
                                  <el-input :disabled="other.tempAusgehend"
                                            v-model="formdata.primaryTime">
                                    <div slot="prepend" style="width: 42px">
                                      <span>Zeit</span>
                                    </div>
                                  </el-input>
                                </el-form-item>
                                <!-- Hdz-input  -->
                                <el-form-item class="
                                                flexChildA
                                                hasPaddingLeftRightB">
                                  <el-input :disabled="other.tempAusgehend"
                                            v-model="formdata.primaryHdZ">
                                    <div slot="prepend" style="width: 42px">
                                      <span>Hdz</span>
                                    </div>
                                  </el-input>
                                </el-form-item>

                              </el-main>
                            </el-container>
                          </el-main>
                        </el-container>
                      </div>

                    </el-col>
                    <el-col :span="15">

                      <!-- element: input-complex ("Ausgehend") -->
                      <div class="
                            innerWrapper
                            hasPaddingLeftRightC
                            hasPaddingTopBottomC
                            hasMarginLeftRightC
                            hasMarginTopBottomC">
                        <el-container>
                          <el-header style="height: 10px">Ausgehend</el-header>
                          <el-main>
                            <el-col :span="12">
                              <el-container>
                                <el-header class="hasPaddingLeftRightB"
                                           style="
                                    height: 20px
                                    font-size: var(--bodySize)
                                    color: var(--secondaryTextColor)">
                                  Annahmevermerk
                                </el-header>
                                <el-main class="flexContainerB">
                                  <!-- date-input  -->
                                  <el-form-item class="
                                                  flexChildA
                                                  hasPaddingLeftRightB">
                                    <el-input :disabled="other.tempEingehend"
                                              v-model="formdata.secondaryDate">
                                      <div slot="prepend" style="width: 42px">
                                        <span>Datum</span>
                                      </div>
                                    </el-input>
                                  </el-form-item>
                                  <!-- time-input  -->
                                  <el-form-item class="
                                                  flexChildA
                                                  hasPaddingLeftRightB">
                                    <el-input :disabled="other.tempEingehend"
                                              v-model="formdata.secondaryTime">
                                      <div slot="prepend" style="width: 42px">
                                        <span>Zeit</span>
                                      </div>
                                    </el-input>
                                  </el-form-item>
                                  <!-- Hdz-input  -->
                                  <el-form-item class="
                                                  flexChildA
                                                   hasPaddingLeftRightB">
                                    <el-input :disabled="other.tempEingehend"
                                              v-model="formdata.secondaryHdZ">
                                      <div slot="prepend" style="width: 42px">
                                        <span>Hdz</span>
                                      </div>
                                    </el-input>
                                  </el-form-item>
                                </el-main>
                              </el-container>
                            </el-col>
                            <el-col :span="12">
                              <el-container>
                                <el-header class="hasPaddingLeftRightB"
                                           style="
                                    height: 20px
                                    font-size: var(--bodySize)
                                    color: var(--secondaryTextColor)">
                                  Beförderungsvermerk
                                </el-header>
                                <el-main class="flexContainerB">
                                  <!-- date-input  -->
                                  <el-form-item class="
                                                  flexChildA
                                                  hasPaddingLeftRightB">
                                    <el-input :disabled="other.tempEingehend"
                                              v-model="formdata.tertiaryDate">
                                      <div slot="prepend" style="width: 42px">
                                        <span>Datum</span>
                                      </div>
                                    </el-input>
                                  </el-form-item>
                                  <!-- time-input  -->
                                  <el-form-item class="
                                                  flexChildA
                                                  hasPaddingLeftRightB">
                                    <el-input :disabled="other.tempEingehend"
                                              v-model="formdata.tertiaryTime">
                                      <div slot="prepend" style="width: 42px">
                                        <span>Zeit</span>
                                      </div>
                                    </el-input>
                                  </el-form-item>
                                  <!-- Hdz-input  -->
                                  <el-form-item class="
                                                  flexChildA
                                                  hasPaddingLeftRightB">
                                    <el-input :disabled="other.tempEingehend"
                                              v-model="formdata.tertiaryHdZ">
                                      <div slot="prepend" style="width: 42px">
                                        <span>Hdz</span>
                                      </div>
                                    </el-input>
                                  </el-form-item>
                                </el-main>
                              </el-container>
                            </el-col>
                          </el-main>
                        </el-container>
                      </div>

                    </el-col>
                  </el-row>
                </div>

              </el-col>
              <el-col :span="8">

                <!-- subsection: top/right-->
                <div class="
                middleWrapper
                hasPaddingLeftRightB
                hasPaddingTopBottomB
                hasMarginLeftRightB
                hasMarginTopBottomB">

                  <!-- element: input-complex ("Technisches Betriebsbuch") -->
                  <div class="
                      innerWrapper
i                     hasPaddingLeftRightC
                      hasPaddingTopBottomC
                      hasMarginLeftRightC
                      hasMarginTopBottomC">
                    <el-container>
                      <el-header style="height: 55px">
                        Technisches Betriebsbuch
                      </el-header>
                      <el-main class="flexContainerB">
                        <!-- nr.-input -->
                        <el-form-item class="flexChildA
                          hasPaddingLeftRightB"
                                      style="margin-bottom: 15px">
                          <el-input v-model="formdata.numberTB">
                            <template slot="prepend">
                              <span>Nr.</span>
                            </template>
                          </el-input>
                        </el-form-item>
                        <!-- checkbox "Eingehend" -->
                        <el-form-item class="flexChildA
                          hasPaddingLeftRightB"
                                      style="margin-bottom: 44px">
                          <el-checkbox @change="checkIn()"
                                       v-model="other.tempEingehend"
                                       id="in"
                                       label="Eingehend"
                                       name="typeTop"
                                       border>
                          </el-checkbox>
                        </el-form-item>
                        <!-- checkbox "Ausgehend" -->
                        <el-form-item class="flexChildA
                          hasPaddingLeftRightB"
                                      style="padding-bottom: 20px">
                          <el-checkbox @change="checkOut()"
                                       v-model="other.tempAusgehend"
                                       id="out"
                                       label="Ausgehend"
                                       name="typeTop"
                                       border>
                          </el-checkbox>
                        </el-form-item>
                      </el-main>
                    </el-container>
                  </div>

                </div>

              </el-col>
            </el-row>
            <el-row>

              <!-- subsection: bot/center-->
              <div class="
              middleWrapper
              hasPaddingLeftRightB
              hasPaddingTopBottomB
              hasMarginLeftRightB
              hasMarginTopBottomB">

                <!-- element: input-complex
                ("Rufnahme Gegenstelle/Spruchkopf") -->
                <div class="
                      innerWrapper
                      hasPaddingLeftRightC
                      hasPaddingTopBottomC
                      hasMarginLeftRightC
                      hasMarginTopBottomC">
                  <!-- "Rufnahme/..."-input -->
                  <el-form-item>
                    <el-input v-model="formdata.receiverName">
                      <template slot="prepend">
                        <span>Rufnahme der Gegenstelle/Spruchkopf</span>
                      </template>
                    </el-input>
                  </el-form-item>
                </div>

              </div>

            </el-row>
          </div>

        </el-col>
      </el-row>
      <el-row>

        <!-- section: mid -->
        <div class="
          outerWrapper
          hasPaddingLeftRightA
          hasPaddingTopBottomA
          hasMarginLeftRightA
          hasMarginTopBottomA">
          <el-row>

            <!-- subsection: top-->
            <div class="
                middleWrapper
                hasPaddingLeftRightB
                hasPaddingTopBottomB
                hasMarginLeftRightB
                hasMarginTopBottomB">
              <el-row>

                <!-- element: checkboxgroup (message-type) -->
                <div class="
                      innerWrapper
                      hasPaddingLeftRightC
                      hasPaddingTopBottomC
                      hasMarginLeftRightC
                      hasMarginTopBottomC">
                  <el-form-item class="flexContainerA">
                    <el-checkbox class="flexChildA"
                                 label='Funk'
                                 v-model="formdata.midRadio"></el-checkbox>
                    <el-checkbox class="flexChildA"
                                 label='Telefon'
                                 v-model="formdata.midPhone"></el-checkbox>
                    <el-checkbox class="flexChildA"
                                 label='Telefax'
                                 v-model="formdata.midFax"></el-checkbox>
                    <el-checkbox class="flexChildA"
                                 label='DFÜ'
                                 v-model="formdata.midDFU"></el-checkbox>
                    <el-checkbox class="flexChildA"
                                 label='Kurier/Melder'
                                 v-model="formdata.midCourier"></el-checkbox>
                  </el-form-item>
                </div>

              </el-row>
              <el-row>
                <el-col :span="12">

                  <!-- element: checkbox-group ("Durchsage/Spruch") -->
                  <div class="
                      innerWrapper
                      hasPaddingLeftRightC
                      hasPaddingTopBottomC
                      hasMarginLeftRightC
                      hasMarginTopBottomC">
                    <el-form-item class="flexContainerA">
                      <el-checkbox class="flexChildA"
                                   label="DURCHSAGE"
                                   v-model="formdata.callAnnouncement"
                                   name="typeCall"></el-checkbox>
                      <el-checkbox class="flexChildA"
                                   label="Spruch"
                                   v-model="formdata.callMessage"
                                   name="typeCall"></el-checkbox>
                    </el-form-item>
                  </div>

                </el-col>
                <el-col :span="12">

                  <!-- element: checkbox-group ("Sofort/Blitz") -->
                  <div class="
                      innerWrapper
                      hasPaddingLeftRightC
                      hasPaddingTopBottomC
                      hasMarginLeftRightC
                      hasMarginTopBottomC">
                    <el-form-item class="flexContainerA">
                      <el-checkbox class="flexChildA"
                                   label="Sofort"
                                   v-model="formdata.priorityInstant"
                                   name="priority"></el-checkbox>
                      <el-checkbox class="flexChildA"
                                   label="Blitz"
                                   v-model="formdata.priorityFlash"
                                   name="priority"></el-checkbox>
                    </el-form-item>
                  </div>

                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">

                  <!-- element: input-complex ("Rufnr.") -->
                  <div class="
                      innerWrapper
                      hasPaddingLeftRightC
                      hasPaddingTopBottomC
                      hasMarginLeftRightC
                      hasMarginTopBottomC">
                    <el-form-item>
                      <el-input v-model='formdata.callNumber' tabindex="1">
                        <template slot="prepend">Ruf Nr.</template>
                      </el-input>
                    </el-form-item>
                  </div>

                </el-col>
                <el-col :span="16">

                  <!-- element: input-complex ("Anschrift") -->
                  <div class="
                      innerWrapper
                      hasPaddingLeftRightC
                      hasPaddingTopBottomC
                      hasMarginLeftRightC
                      hasMarginTopBottomC">
                    <el-form-item>
                      <el-input v-model='formdata.address' tabindex="2">
                        <template slot="prepend">Anschrift</template>
                      </el-input>
                    </el-form-item>
                  </div>

                </el-col>
                <el-col :span="4">

                  <!-- element: input-complex ("Gesprächsnotiz") -->
                  <div class="
                      innerWrapper
                      hasPaddingLeftRightC
                      hasPaddingTopBottomC
                      hasMarginLeftRightC
                      hasMarginTopBottomC">
                    <el-form-item>
                      <el-checkbox label="GESPRÄCHSNOTIZ"
                                   v-model='formdata.talkNote'
                                   name="type4"></el-checkbox>
                    </el-form-item>
                  </div>

                </el-col>
              </el-row>
            </div>

          </el-row>
          <el-row>

            <!-- subsection: middle-->
            <div class="
                middleWrapper
                hasPaddingLeftRightB
                hasPaddingTopBottomB
                hasMarginLeftRightB
                hasMarginTopBottomB">
              <el-row>

                <!-- element: input-complex ("Inhalt") -->
                <div class="
                      innerWrapper
                      hasPaddingLeftRightC
                      hasPaddingTopBottomC
                      hasMarginLeftRightC
                      hasMarginTopBottomC">
                  <el-form-item>
                    <el-input
                      type="textarea"
                      :rows="3"
                      placeholder="Inhalt"
                      :autosize="{ minRows: 5, maxRows: 13 }"
                      v-model='formdata.content'
                      tabindex="3">
                    </el-input>
                  </el-form-item>
                </div>

              </el-row>
            </div>

          </el-row>
          <el-row>

            <!-- subsection: bot-->
            <div class="
                middleWrapper
                hasPaddingLeftRightB
                hasPaddingTopBottomB
                hasMarginLeftRightB
                hasMarginTopBottomB">
              <el-row>

                <!-- element: input-complex ("Absender") -->
                <div class="
                      innerWrapper
                      hasPaddingLeftRightC
                      hasPaddingTopBottomC
                      hasMarginLeftRightC
                      hasMarginTopBottomC">
                  <el-form-item>
                    <el-input placeholder="Einheit/Einrichtung/Stelle"
                              v-model="formdata.sender"
                              tabindex="5">
                      <template slot="prepend">Absender</template>
                    </el-input>
                  </el-form-item>
                </div>

              </el-row>
              <el-row>
                <el-col :span="8">

                  <!-- element: input-complex ("Abfassungszeit") -->
                  <div class="
                        innerWrapper
                        hasPaddingLeftRightC
                        hasPaddingTopBottomC
                        hasMarginLeftRightC
                        hasMarginTopBottomC">
                    <el-form-item>
                      <el-input v-model="formdata.createTime">
                        <template slot="prepend">Abfassungszeit</template>
                      </el-input>
                    </el-form-item>
                  </div>

                </el-col>
                <el-col :span="8">

                  <!-- element: input-complex ("Zeichen") -->
                  <div class="
                        innerWrapper
                        hasPaddingLeftRightC
                        hasPaddingTopBottomC
                        hasMarginLeftRightC
                        hasMarginTopBottomC">
                    <el-form-item>
                      <el-input v-model="formdata.identification">
                        <template slot="prepend">Zeichen</template>
                      </el-input>
                    </el-form-item>
                  </div>

                </el-col>
                <el-col :span="8">

                  <!-- element: input-complex ("Funktion") -->
                  <div class="
                        innerWrapper
                        hasPaddingLeftRightC
                        hasPaddingTopBottomC
                        hasMarginLeftRightC
                        hasMarginTopBottomC">
                    <el-form-item>
                      <el-input v-model="formdata.position" tabindex="4">
                        <template slot="prepend">Funktion</template>
                      </el-input>
                    </el-form-item>
                  </div>

                </el-col>
              </el-row>
            </div>

          </el-row>
        </div>

      </el-row>
      <el-row>

        <!-- section: bot -->
        <div class="
              outerWrapper
              hasPaddingLeftRightA
              hasPaddingTopBottomA
              hasMarginLeftRightA
              hasMarginTopBottomA"
             style="
              border-bottom-left-radius: 20px
              border-bottom-right-radius: 20px">
          <el-row>
            <el-col :span="16">

              <!-- subsection: left-->
              <div class="
                    middleWrapper
                    hasPaddingLeftRightB
                    hasPaddingTopBottomB
                    hasMarginLeftRightB
                    hasMarginTopBottomB">
                <el-row>

                  <!-- element: input-complex ("Quittung") -->
                  <div class="
                        innerWrapper
                        hasPaddingLeftRightC
                        hasPaddingTopBottomC
                        hasMarginLeftRightC
                        hasMarginTopBottomC">
                    <el-container>
                      <el-header style="height: 20px">Quittung</el-header>
                      <el-main class="flexContainerA">
                        <!-- time-input  -->
                        <el-form-item class="flexChildA" >
                          <el-input v-model='formdata.docketTime'
                                    placeholder="Uhrzeit auswählen">
                            <template slot="prepend">Zeit</template>
                          </el-input>
                        </el-form-item>
                        <!-- "Zeichen"-input  -->
                        <el-form-item class="flexChildA">
                          <el-input v-model='formdata.docketIdentification'>
                            <template slot="prepend">Zeichen</template>
                          </el-input>
                        </el-form-item>
                      </el-main>
                    </el-container>
                  </div>

                </el-row>
                <el-row>
                  <el-col :span="8">

                    <!-- element: input-complex ("TEL/EL/...") -->
                    <div class="
                          innerWrapper
                          hasPaddingLeftRightC
                          hasPaddingTopBottomC
                          hasMarginLeftRightC
                          hasMarginTopBottomC"
                         style="padding-bottom: 17.5px">
                      <el-container>
                        <el-header style="height: 20px">
                          TEL/EL/EAL/UEAL
                        </el-header>
                        <el-main class="flexContainerA">
                          <!-- BOTTOM-part LEFT checkbox "Leiter"  -->
                          <el-form-item class="flexChildA">
                            <el-checkbox label="Leiter"
                                         v-model="formdata.stationLeader">
                            </el-checkbox>
                          </el-form-item>
                          <!-- BOTTOM-part LEFT checkbox "S1/S2/..." -->
                          <div class="
                                flexChildA
                                flexContainerB">
                            <el-form-item class="flexChildA">
                              <el-checkbox label="S1"
                                           v-model="formdata.stationS1">
                              </el-checkbox>
                            </el-form-item>
                            <el-form-item class="flexChildA">
                              <el-checkbox label="S2"
                                           v-model="formdata.stationS2">
                              </el-checkbox>
                            </el-form-item>
                            <el-form-item class="flexChildA">
                              <el-checkbox label="S3"
                                           v-model="formdata.stationS3">
                              </el-checkbox>
                            </el-form-item>
                            <el-form-item class="flexChildA">
                              <el-checkbox label="S4"
                                           v-model="formdata.stationS4">
                              </el-checkbox>
                            </el-form-item>
                            <el-form-item class="flexChildA">
                              <el-checkbox label="S6"
                                           v-model="formdata.stationS6">
                              </el-checkbox>
                            </el-form-item>
                          </div>
                        </el-main>
                      </el-container>
                    </div>

                  </el-col>
                  <el-col :span="8">

                    <!-- element: input-complex ("Fachberater") -->
                    <div class="
                          innerWrapper
                          hasPaddingLeftRightC
                          hasPaddingTopBottomC
                          hasMarginLeftRightC
                          hasMarginTopBottomC">
                      <el-container class="flexContainerA">
                        <el-header class="flexChildA"
                                   style="height: 20px">
                          Fachberater
                        </el-header>
                        <el-main class="
                                  flexChildA
                                  flexContainerB">
                          <el-form-item class="flexChildA">
                            <el-input v-model="formdata.advisorA" type="text">
                              <template slot="prepend">
                                <input type="checkbox"
                                       v-model='formdata.advisorTickA'>
                              </template>
                            </el-input>
                          </el-form-item>
                          <el-form-item class="flexChildA">
                            <el-input v-model="formdata.advisorB" type="text">
                              <template slot="prepend">
                                <input type="checkbox"
                                       v-model='formdata.advisorTickB'>
                              </template>
                            </el-input>
                          </el-form-item>
                          <el-form-item class="flexChildA">
                            <el-input v-model="formdata.advisorC" type="text">
                              <template slot="prepend">
                                <input type="checkbox"
                                       v-model='formdata.advisorTickC'>
                              </template>
                            </el-input>
                          </el-form-item>
                          <el-form-item class="flexChildA">
                            <el-input v-model="formdata.advisorD" type="text">
                              <template slot="prepend">
                                <input type="checkbox"
                                       v-model='formdata.advisorTickD'>
                              </template>
                            </el-input>
                          </el-form-item>
                          <el-form-item class="flexChildA">
                            <el-input v-model="formdata.advisorE" type="text">
                              <template slot="prepend">
                                <input type="checkbox"
                                       v-model='formdata.advisorTickE'>
                              </template>
                            </el-input>
                          </el-form-item>
                        </el-main>
                      </el-container>
                    </div>

                  </el-col>
                  <el-col :span="8">

                    <!-- element: input-complex ("Verb. stellen") -->
                    <div class="
                          innerWrapper
                          hasPaddingLeftRightC
                          hasPaddingTopBottomC
                          hasMarginLeftRightC
                          hasMarginTopBottomC">
                      <el-container class="flexContainerA">
                        <el-header class="flexChildA"
                                   style="height: 20px">
                          Verb. stellen
                        </el-header>
                        <el-main class="
                                  flexChildA
                                  flexContainerB">
                          <el-form-item class="flexChildA">
                            <el-input v-model='formdata.connectionA'
                                      type="text">
                              <template slot="prepend">
                                <input type="checkbox"
                                       v-model='formdata.connectionTickA'>
                              </template>
                            </el-input>
                          </el-form-item>
                          <el-form-item class="flexChildA">
                            <el-input v-model='formdata.connectionB'
                                      type="text">
                              <template slot="prepend">
                                <input type="checkbox"
                                       v-model='formdata.connectionTickB'>
                              </template>
                            </el-input>
                          </el-form-item>
                          <el-form-item class="flexChildA">
                            <el-input v-model='formdata.connectionC'
                                      type="text">
                              <template slot="prepend">
                                <input type="checkbox"
                                       v-model='formdata.connectionTickC'>
                              </template>
                            </el-input>
                          </el-form-item>
                          <el-form-item class="flexChildA">
                            <el-input v-model='formdata.connectionD'
                                      type="text">
                              <template slot="prepend">
                                <input type="checkbox"
                                       v-model='formdata.connectionTickD'>
                              </template>
                            </el-input>
                          </el-form-item>
                          <el-form-item class="flexChildA">
                            <el-input v-model='formdata.connectionE'
                                      type="text">
                              <template slot="prepend">
                                <input type="checkbox"
                                       v-model='formdata.connectionTickE'>
                              </template>
                            </el-input>
                          </el-form-item>
                        </el-main>
                      </el-container>
                    </div>

                  </el-col>
                </el-row>
              </div>

            </el-col>
            <el-col :span="8">

              <!-- subsection: right-->
              <div class="
                    middleWrapper
                    hasPaddingLeftRightB
                    hasPaddingTopBottomB
                    hasMarginLeftRightB
                    hasMarginTopBottomB">
                <el-row>
                  <el-row>

                    <!-- element: input-complex ("Vermerke") -->
                    <div class="
                          innerWrapper
                          hasPaddingLeftRightC
                          hasPaddingTopBottomC
                          hasMarginLeftRightC
                          hasMarginTopBottomC"
                         style="padding-bottom: 15px">
                      <el-container>
                        <el-header style="height: 20px">Vermerke</el-header>
                        <el-main>
                          <el-form-item>
                            <el-input
                              type="textarea"
                              :rows="3"
                              :autosize="{ minRows: 12, maxRows: 12 }"
                              v-model='formdata.annotations'
                              tabindex="3">
                            </el-input>
                          </el-form-item>
                        </el-main>
                      </el-container>
                    </div>

                  </el-row>
                  <el-row>
                    <el-col :span="12">

                      <!-- element: button ("Abschicken") -->
                      <div class="
                            innerWrapper
                            hasPaddingLeftRightC
                            hasPaddingTopBottomC
                            hasMarginLeftRightC
                            hasMarginTopBottomC">
                        <el-button @click="
                                    saveNewForm()
                                    notifySuccess('Abgeschickt')"
                                   tabindex="6">
                          Abschicken
                        </el-button>
                      </div>

                    </el-col>
                    <el-col :span="12">

                      <!-- element: button ("Zurücksetzen") -->
                      <div class="
                            innerWrapper
                            hasPaddingLeftRightC
                            hasPaddingTopBottomC
                            hasMarginLeftRightC
                            hasMarginTopBottomC">
                        <el-button @click="
                                    formReset()
                                    notifySuccess('Formular zurückgesetzt')">
                          Zurücksetzen
                        </el-button>
                      </div>

                    </el-col>
                  </el-row>
                </el-row>
              </div>

            </el-col>
          </el-row>
        </div>

      </el-row>
    </el-form>
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
:root {
  /*main colors*/
}

/*
  space:
    different settings for spacing
   */
.hasMarginLeftRightA {
  margin-left: 25px;
  margin-right: 25px;
}
.hasMarginLeftRightB {
  margin-left: 0px;
  margin-right: 0px;
}
.hasMarginLeftRightC {
  margin-left: 5px;
  margin-right: 5px;
}

.hasMarginTopBottomA {
  margin-top: 0px;
  margin-bottom: 0px;
}
.hasMarginTopBottomB {
  margin-top: 0px;
  margin-bottom: 0px;
}
.hasMarginTopBottomC {
  margin-top: 0px;
  margin-bottom: 10px;
}

.hasPaddingLeftRightA {
  padding-left: 20px;
  padding-right: 20px;
}
.hasPaddingLeftRightB {
  padding-left: 10px;
  padding-right: 10px;
}
.hasPaddingLeftRightC {
  padding-left: 10px;
  padding-right: 20px;
}

.hasPaddingTopBottomA {
  padding-top: 0px;
  padding-bottom: 0px;
}
.hasPaddingTopBottomB {
  padding-top: 0px;
  padding-bottom: 0.5px;
}
.hasPaddingTopBottomC {
  padding-top: 5px;
  padding-bottom: 5px;
}
.hasPaddingTopBottomTEMP1 {
  padding-top: 20px;
  padding-bottom: 24px;
}

/*border-settings:
    different border styles
  */
.hasBorderBotA {
  border-bottom: var(--formBlueColor);
  border-bottom-style: solid;
  border-bottom-width: 10px;
}

/*
  flex-settings:
    different settings for the flex attribute
  */
.flexContainerA {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
}
.flexContainerB {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
}
.flexChildA {
  flex-grow: 1;
}

/*
  el-components:
    specific settings for el-components, that differ from the default ones
  */
.el-form {
  background: var(--formBlueColor);
}
.Notification {
  font-family: var(--mainFont);
  color: var(--regularTextColor);
}

/*temp*/
.testSquare {
  background-color: yellow;
  height: 100px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
