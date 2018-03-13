export const setRole = (state, newRole) => {
  state.role = newRole
}

export const saveTicket = (state, newTicket) => {
  state.ticketlist.push(newTicket)
}

export const setTicketlist = (state, newList) => {
  state.ticketlist = newList
}

export const setUser = (state, userData) => {
  state.user.role = userData.role
  state.user.sender = userData.sender
  state.user.position = userData.position
  state.user.signature = userData.signature
}
