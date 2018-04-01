export const setTicketList = (state, newList) => {
  state.ticketlist = newList
}

export const setUser = (state, userData) => {
  state.user = userData
}

export const setShowLandingPage = (state) => {
  state.showLandingPage = false
}

export const setFilters = (state, newFilter) => {
  state.filters = newFilter
}

export const setDraft = (state, fromdata) => {
  state.draft = fromdata
}
