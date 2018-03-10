export const setRole = (state, newRole) => {
  state.role = newRole
}

export const saveTicket = (state, newTicket) => {
  state.ticketlist.push(newTicket)
}

export const setTicketlist = (state, newList) => {
  state.ticketlist = newList
}

export const setUserData = (state, userData) => {
  state.userData = userData
}