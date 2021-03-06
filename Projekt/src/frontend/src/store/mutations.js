import stateConfig from '../config/formState.config'

export const setTicketList = (state, newList) => {
  state.ticketlist = newList
}

export const setUser = (state, userData) => {
  state.user = userData
}

export const setShowLandingPage = (state) => {
  state.showLandingPage = false
}

export const resetShowLandingPage = (state) => {
  state.showLandingPage = true
}

export const setFilters = (state, newFilter) => {
  state.filter = newFilter
}

export const setDraft = (state, formdata) => {
  state.draft = formdata
}

export const setOperationList = (state, list) => {
  state.operationList = list
}

/**
 * Mutation that sets the Default Filters based on inputs in LandingPage
 * like role and operation
 *
 * @param state : connection to VueX store
 */
export const setDefaultFilters = (state) => {
  let role = state.user.role
  let defFilter = {}
  switch (role) {
    case 'Sichter':
      defFilter = {
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
        s15: false
      }
      break
    case 'LdF' :
      defFilter = {
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
        s15: false
      }
      break
    case 'SGL' :
      defFilter = {
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
        s15: false
      }
      break
    case 'Fernmelder' :
      defFilter = {
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
        s13: false,
        s14: false,
        s15: false
      }
      break
    case 'Fachberater' :
      defFilter = {
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
        s15: false
      }
      break
    case 'Verbindungsstelle' :
      defFilter = {
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
        s15: false
      }
      break
    default :
      defFilter = {
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
      }
  }
  defFilter['search'] = ''
  defFilter['identification'] = ''
  if (state.user.operation.operationName !== '') {
    defFilter['operation'] = state.user.operation.operationName
  } else {
    defFilter['operation'] = 'Alle'
  }
  state.filter = defFilter
}

export const setFormConfig = (state, ticketState) => {
  // set input visibility config
  let visibility = {}
  Object.entries(stateConfig.formLayoutConfig.inputVisibility)
    .forEach((value) => {
      visibility[value[0]] = value[1][ticketState]
    })

  // set background color config
  let background = {}
  Object.entries(stateConfig.formLayoutConfig.backgroundColor)
    .forEach((value) => {
      background[value[0]] = value[1][ticketState]
    })

  // set button visible config
  let button = {}
  Object.entries(stateConfig.formLayoutConfig.buttonVisible)
    .forEach((value) => {
      button[value[0]] = value[1][ticketState]
    })

  // set state mapping config
  let mapping = {}
  Object.entries(stateConfig.stateMappingConfig)
    .forEach((value) => {
      mapping[value[0]] = value[1][ticketState]
    })

  // set tab-order config
  let baseConf = stateConfig.tabOrder.base
  let stateConf = stateConfig.tabOrder[ticketState]
  state.formConfig['tabOrder'] = Object.assign({}, baseConf, stateConf)

  state.formConfig['inputVisibility'] = visibility
  state.formConfig['background'] = background
  state.formConfig['buttonVisible'] = button
  state.formConfig['stateMapping'] = mapping
}
