export const setTicketList = (state, newList) => {
  state.ticketlist = newList
}

export const setUser = (state, userData) => {
  state.user.role = userData.role
  state.user.sender = userData.sender
  state.user.position = userData.position
  state.user.signature = userData.signature
}

export const setShowLandingPage = (state) => {
  state.showLandingPage = false
}
