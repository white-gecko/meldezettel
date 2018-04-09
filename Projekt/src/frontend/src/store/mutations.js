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
 * @param context : connection to VueX store
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
        s13: true,
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
  if (state.user.operation.operationName !== '') {
    defFilter['operation'] = state.user.operation.operationName
  } else {
    defFilter['operation'] = 'Alle'
  }
  state.filter = defFilter
}
