import expect from 'expect'
import store from '@/store/index.js'

describe('mutations', () => {

  it('updates the ticketlist', () => {

    // Set a random key to avoid cheating
    let id = Math.floor(Math.random() * 12345)
    let newList = { firstKey: id }

    store.commit('setTicketList', newList)
    expect(store.state.ticketlist).toBe(newList)
  })

  it('sets the current user', () => {

    let testUser = {
      operation: {},
      role: 'Betatester',
      sender: 'maybe',
      position: 'high on top',
      identification: 'yes'
    }

    store.commit('setUser', testUser)
    expect(store.state.user).toBe(testUser)

  })

  it('it hides the Landing Page ', () => {

    store.commit('setShowLandingPage')
    expect(store.state.showLandingPage).toBeFalsy()

  })

  it('it shows the Landing Page ', () => {

    store.commit('resetShowLandingPage')
    expect(store.state.showLandingPage).toBeTruthy()

  })

  it('sets the filter', () => {

    let testFilter = {
      'search': 'test',
      'operation': 'testOp'
    }

    store.commit('setFilters', testFilter)
    expect(store.state.filter).toEqual(testFilter);
  })

  it('sets the draft', () => {

    let testFormdata = [
        'this', 'is', 'a', 'dummy'
    ]

    store.commit('setDraft', testFormdata)
    expect(store.state.draft).toEqual(testFormdata)
  })

  it ('sets the operation list', () => {

    let testList = [
        'this', 'is', 'a', 'dummy'
    ]

    store.commit('setOperationList', testList)
    expect(store.state.operationList).toEqual(testList)

  })

  it ('sets the default filters', () => {

    let sichterUser = {
      'role': 'Sichter',
      'operation': {
        'operationName': 'testOper'
      }
     }

    let sichterFilter = {
        s1: true,
        s2: false,
        s3: false,
        s4: false,
        s5: false,
        s6: false,
        s7: true,
        s8: false,
        s9: false,
        s11: false,
        s12: false,
        s13: true,
        s14: false,
        s15: false,
        search: '',
        operation: sichterUser.operation.operationName
    }

    let ldfUser = {
      'role': 'LdF',
      'operation': {
        'operationName': 'testOper'
      }
     }

    let ldfFilter = {
        s1: false,
        s2: false,
        s3: true,
        s4: false,
        s5: true,
        s6: false,
        s7: false,
        s8: false,
        s9: false,
        s11: true,
        s12: false,
        s13: false,
        s14: false,
        s15: false,
        search: '',
        operation: ldfUser.operation.operationName
    }

    let sglUser = {
      'role': 'SGL',
      'operation': {
        'operationName': 'testOper'
      }
     }

    let sglFilter = {
        s1: false,
        s2: true,
        s3: false,
        s4: false,
        s5: false,
        s6: false,
        s7: false,
        s8: true,
        s9: false,
        s11: false,
        s12: false,
        s13: false,
        s14: true,
        s15: false,
        search: '',
        operation: sglUser.operation.operationName
    }

    let fmUser = {
      'role': 'Fernmelder',
      'operation': {
        'operationName': 'testOper'
      }
     }

    let fmFilter = {
        s1: false,
        s2: false,
        s3: false,
        s4: true,
        s5: false,
        s6: true,
        s7: false,
        s8: false,
        s9: false,
        s11: false,
        s12: true,
        s13: true,
        s14: false,
        s15: false,
        search: '',
        operation: fmUser.operation.operationName
    }

    let fbUser = {
      'role': 'Fachberater',
      'operation': {
        'operationName': 'testOper'
      }
     }

    let fbFilter = {
        s1: false,
        s2: false,
        s3: false,
        s4: false,
        s5: false,
        s6: false,
        s7: false,
        s8: true,
        s9: false,
        s11: false,
        s12: false,
        s13: false,
        s14: true,
        s15: false,
        search: '',
        operation: fbUser.operation.operationName
    }

    let vbUser = {
      'role': 'Verbindungsstelle',
      'operation': {
        'operationName': 'testOper'
      }
     }

    let vbFilter = {
        s1: false,
        s2: false,
        s3: false,
        s4: false,
        s5: false,
        s6: false,
        s7: false,
        s8: true,
        s9: false,
        s11: false,
        s12: false,
        s13: false,
        s14: true,
        s15: false,
        search: '',
        operation: vbUser.operation.operationName
    }

    let dUser = {
      'role': '',
      'operation': {
        'operationName': ''
      }
     }

    let dFilter = {
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
        s15: false,
        search: '',
        operation: 'Alle'
    }

    // Testing all different filters

    store.commit('setUser', sichterUser)
    store.commit('setDefaultFilters')
    expect(store.state.filter).toEqual(sichterFilter)

    store.commit('setUser', ldfUser)
    store.commit('setDefaultFilters')
    expect(store.state.filter).toEqual(ldfFilter)

    store.commit('setUser', sglUser)
    store.commit('setDefaultFilters')
    expect(store.state.filter).toEqual(sglFilter)

    store.commit('setUser', fmUser)
    store.commit('setDefaultFilters')
    expect(store.state.filter).toEqual(fmFilter)

    store.commit('setUser', fbUser)
    store.commit('setDefaultFilters')
    expect(store.state.filter).toEqual(fbFilter)

    store.commit('setUser', vbUser)
    store.commit('setDefaultFilters')
    expect(store.state.filter).toEqual(vbFilter)

    store.commit('setUser', dUser)
    store.commit('setDefaultFilters')
    expect(store.state.filter).toEqual(dFilter)
  })

  it('sets the form configuration', () => {

    store.commit('setFormConfig', 's0')
    expect(store.state.formConfig.tabOrder).toBeDefined()
    expect(store.state.formConfig.inputVisibility).toBeDefined()
    expect(store.state.formConfig.background).toBeDefined()
    expect(store.state.formConfig.buttonVisible).toBeDefined()
    expect(store.state.formConfig.stateMapping).toBeDefined()

  })
})
