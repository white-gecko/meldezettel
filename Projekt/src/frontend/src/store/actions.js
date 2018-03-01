import { quitstore } from '../api/QuitStoreAdapter'
import sparqlHelper from '../helper/SparqlHelper'

export const addFormData = (context, formData) => {
  // let insertQuery = sparqlHelper.formDataInsertQuery(formData)
  let exQuery = `
  INSERT DATA {
    GRAPH <http://example.org/> {
      <http://example.org/User> <http://example.org/Name> <http://example.org/Rainer> .
      <http://example.org/User> <http://example.org/Name> <http://example.org/Peter> .
    }
  }
  `
  // console.log(insertQuery)
  return new Promise((resolve, reject) => {
    quitstore.sendData(exQuery).then(context.commit('saveTicket', formData))
  })
}
