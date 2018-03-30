import { quitstore } from '../api/QuitStoreAdapter'
import Sparql from '../sparql_help/sparql_queries'

/**
 * Action used to perform an async POST request to the QuitStore
 * containing the current form data
 *
 * @param context - vuex store context
 * @param {object} formData - current form data object */
export const addFormData = (context, formData) => {
  let insertQuery = Sparql.formdataToInsertQuery(formData)

  return quitstore.sendData(insertQuery)
}

/**
 * Action used to set the ticketlist used in THWDashboard.vue
 *
 * @param {Object} context - vuex store context
 * @param {Array} newList - array of thw documents
 */
export const setTicketlist = (context, newList) => {
  context.state.ticketlist = newList
}
