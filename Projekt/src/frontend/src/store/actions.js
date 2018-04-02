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
  let getAllDataQuery = queryHelper.dashboardQuery()
  quitstore.getData(getAllDataQuery)
    .then(response => {
      let responseData = parseResponse(response)
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
        let formdata = oldFormData.formdata
        let deleteOldDataQuery = queryHelper.formdataToDeleteQuery(formdata)
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
