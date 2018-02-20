export const setRole = (state, newRole) => {
  state.role = newRole
}

export const saveTicket = (state, newTicket) => {
  state.ticketlist.push(newTicket)
}
