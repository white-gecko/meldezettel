import { quitstore } from '../api/QuitStoreAdapter'
import sparqlHelper from '../sparql_help/sparql_queries'

export const addFormData = (context, formData) => {
  let insertQuery = sparqlHelper.formdataToInsertQuery(formData)
  // let exQuery = `
  // INSERT DATA {
  //   GRAPH <http://example.org/> {
  //     <http://example.org/User> <http://example.org/Name> <http://example.org/Rainer> .
  //     <http://example.org/User> <http://example.org/Name> <http://example.org/Peter> .
  //   }
  // }
  // `
  return quitstore.sendData(insertQuery)
    .then(() => console.log('yay'))
  //  .then(context.commit('saveTicket', formData))
}
