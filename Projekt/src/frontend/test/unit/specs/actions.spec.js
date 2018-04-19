'use strict'
// use mocked QuitStoreAdapter to avoid real network requests
import {getPDFAction} from '../../../src/store/actions'

jest.mock('@/api/QuitStoreAdapter')
// use mocked SPARQL-Query helper to decouple testing functionality
jest.mock('@/sparql_help/sparql_queries')
jest.mock('@/sparql_help/sparql_response')

import expect from 'expect'
import store from '@/store/index.js'

describe('actions', () => {

  it('saves the formdata to the quitstore', () => {
    let formDataStub = {
      documentID: 'TESTID',
      inOperation: 'test',
      topRadio: false,
      topPhone: false,
      topFax: false,
      topDFU: false,
      topCourier: false,
      numberTB: '1',
      outgoing: true,
      receiverName: 'Betty',
      primaryDate: 'today',
      primaryTime: 'now',
      primaryHdZ: 'BY',
      secondaryDate: 'tomorrow',
      secondaryTime: 'later',
      secondaryHdZ: 'KH',
      tertiaryDate: 'yesterday',
      tertiaryTime: 'earlier',
      tertiaryHdZ: 'RJ',
      midRadio: false,
      midPhone: false,
      midFax: false,
      midDFU: false,
      midCourier: false,
      callAnnouncement: false,
      callMessage: false,
      priorityInstant: false,
      priorityFlash: false,
      address: 'here',
      callNumber: '1234',
      talkNote: false,
      content: 'testtesttest',
      sender: 'Beta',
      createTime: 'ack',
      identification: 'knack',
      position: 'rack',
      docketIdentification: 'hack',
      docketTime: 'mack',
      stationLeader: false,
      stationS1: false,
      stationS2: false,
      stationS3: false,
      stationS4: false,
      stationS6: false,
      advisorA: 'no',
      advisorB: 'non',
      advisorC: 'nein',
      advisorD: 'niet',
      advisorE: 'mhmh',
      advisorTickA: false,
      advisorTickB: false,
      advisorTickC: false,
      advisorTickD: false,
      advisorTickE: false,
      connectionA: 'ägypten',
      connectionB: 'frankreich',
      connectionC: 'italien',
      connectionD: 'israel',
      connectionE: 'moldawien',
      connectionTickA: false,
      connectionTickB: false,
      connectionTickC: false,
      connectionTickD: false,
      connectionTickE: false,
      annotations: 'nothing to look at',
      ticketState: 2
    }

    store.dispatch('saveNewFormAction', formDataStub)
      .then(data => {
        expect(data).toEqual('SUCCESS')
      })
  })

  it('updates the ticket list', () => {
    store.dispatch('updateTicketListAction')
  })

  it('loads the form data', () => {
    store.dispatch('loadFormDataAction')
  })

  it('updates the form data', () => {
    store.dispatch('updateFormDataAction')
  })

  it('get the operations', () => {
    store.dispatch('getOperationsAction')
  })

  it('adds new operation', () => {
    store.dispatch('handleOperation')
  })

  it('retrieves PDF', () => {
    store.dispatch('getPDFAction')
  })
})

