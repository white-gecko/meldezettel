export const setTicketlist = (state, newList) => {
  state.ticketlist = newList
}

export const setUser = (state, userData) => {
  state.user.operation = userData.operation
  state.user.role = userData.role
  state.user.sender = userData.sender
  state.user.position = userData.position
  state.user.identification = userData.identification
}

export const setShowLandingPage = (state) => {
  state.showLandingPage = false
}
