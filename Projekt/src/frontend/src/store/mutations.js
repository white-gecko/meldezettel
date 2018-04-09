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
