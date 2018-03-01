import { quitstore } from '../api/QuitStoreAdapter'
import sparqlHelper from '../helper/SparqlHelper'

export const addFormData = (context, formData) => {
  let insertQuery = sparqlHelper.formDataInsertQuery(formData)
  quitstore.sendData(insertQuery).then(context.commit('saveTicket', formData))
}
