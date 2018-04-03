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

/**
 *
 * @param context
 * @param formData
 * @returns {Promise<any>}
 */
export const updateFormDataAction = (context, formData) => {
  return new Promise((resolve, reject) => {
    loadFormDataAction(null, formData.documentID)

      .then(oldFormData => {
        let deleteOldDataQuery = queryHelper.formdataToDeleteQuery(oldFormData)
        quitstore.sendData(deleteOldDataQuery)

          .then(() => {
            let insertNewDataQuery = queryHelper.formdataToInsertQuery(formData)
            quitstore.sendData(insertNewDataQuery)

              .then(() => {
                return resolve()
              })
              // Catch errors that were thrown when trying to send new data
              .catch(error => {
                return reject(new Error(error))
              })
            // Catch errors that were thrown when trying to send delete query
          }).catch(error => {
            console.log('Unable to delete data. Error Msg:\n' + error)
            return reject(new Error(error))
          })
        // Catch errors that were thrown when trying to get old form data
      }).catch(error => {
        console.log('Unable to load form data. Error Msg:\n' + error)
        return reject(new Error(error))
      })
  })
}

export const setFilters = (context, newFilter) => {
  context.state.filter = newFilter
}

export const setDefaultFilters = (context) => {
  let role = context.state.user.role
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
  defFilter['operation'] = 'Alle'
  context.commit('setFilters', defFilter)
}

/**
 * @param context - vuex store context
 * @param {object} newOperation - current new operation to be stored */
export const handleOperation = (context, newOperation) => {
  let operationInsertQuery = queryHelper.operationToInsertQuery(newOperation)

  return quitstore.sendData(operationInsertQuery)
}
