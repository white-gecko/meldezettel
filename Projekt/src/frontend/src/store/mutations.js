export const setTicketList = (state, newList) => {
  state.ticketlist = newList
}

export const setUser = (state, userData) => {
  console.log(JSON.stringify(userData))
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

export const setDraft = (state, fromdata) => {
  state.draft = fromdata
}

export const setOperationList = (state, list) => {
  state.operationList = list
}
