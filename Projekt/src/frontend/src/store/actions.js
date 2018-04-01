import { quitstore } from '../api/QuitStoreAdapter'
import queryHelper from '../sparql_help/sparql_queries'
import { parseResponse } from '../sparql_help/sparql_response'

/**
 * Action used to perform an async POST request to the QuitStore
 * containing the current form data
 *
 * @param context - vuex store context
 * @param {object} formData - current form data object */
export const addFormData = (context, formData) => {
  let insertQuery = queryHelper.formdataToInsertQuery(formData)

  return quitstore.sendData(insertQuery)
}

/**
 *
 * @param context
 * @param formData
 * @returns {*|Promise}
 */
export const saveNewFormAction = (context, formData) => {
  let insertQuery = queryHelper.formdataToInsertQuery(formData)

  return quitstore.sendData(insertQuery)
}

/**
 *
 * @param context
 */
export const updateTicketListAction = (context) => {
  let filters = context.state.filter
  let getAllDataQuery = queryHelper.dashboardQuery(filters)
  quitstore.getData(getAllDataQuery)
    .then(response => {
      let responseData = parseResponse(response)
      let formatted = []
      for (let i = 0; i < responseData.length; i++) {
        let row = responseData[i]
        if (responseData[i].ticketState < 10) {
          row.creator = responseData[i].identification
          row.date = responseData[i].tertiaryDate
          row.time = responseData[i].tertiaryTime
        } else {
          row.creator = responseData[i].primaryHdZ
          row.date = responseData[i].primaryDate
          row.time = responseData[i].primaryTime
        }
        formatted.push(row)
      }
      responseData = formatted
      context.commit('setTicketList', responseData)
    })
    .catch(error => console.log(error))
}

/**
 *
 * @param context
 * @param id
 * @returns {Promise<any>}
 */
export const loadFormDataAction = (context, id) => {
  return new Promise((resolve, reject) => {
    let getFormDataQuery = queryHelper.formQuery(id)

    quitstore.getData(getFormDataQuery)
      .then(response => {
        let formDataObj = parseResponse(response)
        if (formDataObj.length > 0) {
          // response length > 0 -> load document
          let formData = {}
          // data is in the form [{p: 'predicateName', o: 'predicateValue'},...]
          // -> convert to {'predicateName': predicateValue, ...}
          for (let pred of formDataObj) {
            formData[pred.p] = pred.o
          }
          formData['documentID'] = id
          return resolve(formData)
        } else {
          // response length == 0 -> no triples for the document id can be found
          return reject(new Error('Dokument konnte nicht gefunden werden'))
        }
      })
      .catch((error) => {
        console.error(error)
        return reject(new Error('Fehler beim laden des Dokuments'))
      })
  })
}

export const updateFormDataAction = (context, formData) => {
  /* @TODO implement action once delete query is available */
}

export const setFilters = (context, newFilter) => {
  context.state.filters = newFilter
}
