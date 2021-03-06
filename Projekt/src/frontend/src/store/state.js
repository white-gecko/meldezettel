export default {
  ticketlist: [],
  filter: {
    search: '',
    identification: '',
    operation: 'Alle',
    s1: false,
    s2: false,
    s3: false,
    s4: false,
    s5: false,
    s6: false,
    s7: false,
    s8: false,
    s9: false,
    s11: false,
    s12: false,
    s13: false,
    s14: false,
    s15: false
  },
  draft: undefined,
  user: {
    operation: {},
    role: '',
    sender: '',
    position: '',
    identification: ''
  },
  operationList: [],
  showLandingPage: true,
  // default config, state = 0
  formConfig: {
    background: {
      isBlue: true,
      isGreen: false,
      isYellow: false,
      isRed: false
    },
    buttonVisible: {
      isNew: true,
      rejectable: false,
      sendable: false,
      toBePrinted: false
    },
    inputVisibility: {
      abfassungszeit: true,
      absender: true,
      annahmeBefoerderung: false,
      anschrift: true,
      aufnahme: false,
      checkboxGroupTop: false,
      checkboxgroupMiddle: true,
      durchsageSpruch: false,
      funktion: true,
      gegenstelle: false,
      gespraechsnotiz: false,
      inhalt: true,
      quittung: false,
      rufnummer: true,
      sofortBlitz: false,
      technischesBetriebsbuch: false,
      tel: false,
      vermerke: true,
      zeichen: true
    },
    stateMapping: {
      accept: 1,
      reject: undefined
    },
    tabOrder: {
      ackIdentification: -1,
      ackTime: -1,
      address: 1,
      advisorA: -1,
      advisorB: -1,
      advisorC: -1,
      advisorD: -1,
      advisorE: -1,
      advisorTickA: -1,
      advisorTickB: -1,
      advisorTickC: -1,
      advisorTickD: -1,
      advisorTickE: -1,
      annotations: 1,
      buttonReset: 2,
      buttonSend: 2,
      callAnnouncement: -1,
      callMessage: -1,
      callNumber: 1,
      connectionA: -1,
      connectionB: -1,
      connectionC: -1,
      connectionD: -1,
      connectionE: -1,
      connectionTickA: -1,
      connectionTickB: -1,
      connectionTickC: -1,
      connectionTickD: -1,
      connectionTickE: -1,
      content: 1,
      conversationNote: -1,
      identification: 1,
      incomingDate: -1,
      incomingHdZ: -1,
      incomingTime: -1,
      lbNumber: -1,
      midCourier: 1,
      midDFU: 1,
      midFax: 1,
      midPhone: 1,
      midRadio: 1,
      outboundAccDate: -1,
      outboundAccHdZ: -1,
      outboundAccTime: -1,
      outboundTransDate: -1,
      outboundTransHdZ: -1,
      outboundTransTime: -1,
      position: 1,
      priorityFlash: -1,
      priorityInstant: -1,
      receiverName: -1,
      selectIncoming: -1,
      selectOutbound: -1,
      sender: 1,
      stationLeader: -1,
      stationS1: -1,
      stationS2: -1,
      stationS3: -1,
      stationS4: -1,
      stationS6: -1,
      timeCreate: 1,
      topCourier: -1,
      topDFU: -4,
      topFax: -3,
      topPhone: -2,
      topRadio: -1
    }
  }
}
