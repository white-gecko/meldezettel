import { quitstore } from '../api/QuitStoreAdapter'
import { printservice } from '../api/PrintServiceAdapter'
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
 * Action which writes a newly created document into QuitStore
 *
 * @param context : connection to VueX store
 * @param formData : object that will be inserted
 * @returns {*|Promise} : Promise that can be handled externally
 */
export const saveNewFormAction = (context, formData) => {
  let insertQuery = queryHelper.formdataToInsertQuery(formData)

  return quitstore.sendData(insertQuery)
}

/**
 * Action which retrieves a SPARL SELECT query from SPARQL-Helper,
 * sends it to QuitStore and modifies the received data to fit the
 * layout of THWDashboard
 *
 * @param context : connection to VueX store
 */
export const updateTicketListAction = (context) => {
  return new Promise((resolve, reject) => {
    let filters = context.state.filter
    let getAllDataQuery = queryHelper.dashboardQuery(filters)
    quitstore.getData(getAllDataQuery)
      .then(response => {
        let responseData = parseResponse(response)
        let formatted = []
        // setting creator, date and time depending on if
        // document is incoming or outgoing
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
        // sorting documents ascending by creation date
        for (var i = formatted.length - 1; i > 0; i--) {
          for (var j = 0; j < i; j++) {
            if (formatted[i].id.substr(-13, 13) >
              formatted[j].id.substr(-13, 13)) {
              var temp = formatted[j]
              formatted[j] = formatted[i]
              formatted[i] = temp
            }
          }
        }
        context.commit('setTicketList', formatted)
        return resolve()
      })
      .catch(() => {
        return reject(new Error('Fehler beim Laden der Dokumente. ' +
          ' Versuchen Sie es mit kürzeren Filtern!'))
      })
  })
}

/**
 * Action which retrieves all data regarding one created document,
 * represented via an ID (suffix of URI)
 *
 * @param context : connection to VueX store
 * @param id : URI suffix,  pointing to object the data is received from
 * @returns {Promise<any>} : Promise that can be handled externally
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
        return reject(new Error('Fehler beim Laden des Dokuments'))
      })
  })
}

/**
 * Action that first retrieves all available data regarding one document
 * then deletes all of this data from QuitStore and then writes all of the
 * updated data into QuitStore
 *
 * @param context : connection to VueX store
 * @param formData : updated document from THWForm.vue
 * @returns {Promise<any>} : Promise that can be handled externally
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
/**
 * Action that draws all available operations from QuitStore, sorting them
 * by name ascending, saving it in VueX store afterwards
 * @param context : connection to VueX store
 */
export const getOperationsAction = (context) => {
  return new Promise((resolve, reject) => {
    let operationsQuery = queryHelper.operationsQuery()
    quitstore.getData(operationsQuery)
      .then((response) => {
        let op = parseResponse(response)
        for (let i = op.length - 1; i > 0; i--) {
          for (let j = 0; j < i; j++) {
            if (op[i].operationName < op[j].operationName) {
              let temp = op[j]
              op[j] = op[i]
              op[i] = temp
            }
          }
        }
        context.commit('setOperationList', op)
        return resolve('test')
      })
      .catch((error) => {
        return reject(error)
      })
  })
}

/**
 * Action which creates a new operation in QuitStore
 *
 * @param context - vuex store context
 * @param {object} newOperation - current new operation to be stored */
export const handleOperation = (context, newOperation) => {
  let operationInsertQuery = queryHelper.operationToInsertQuery(newOperation)

  return quitstore.sendData(operationInsertQuery)
}

/**
 * Sends a formdata object to the pdf service and opens the response in a new window
 *
 * @param {*} context - vuex store context
 * @param {*} formdata - formdata object
 */
export const getPDFAction = (context, formdata) => {
  return new Promise((resolve, reject) => {
    printservice.sendData(JSON.stringify(formdata))
      .then((response) => {
        let file = new Blob([response.data], {
          type: 'application/pdf'})
        let fileURL = URL.createObjectURL(file)
        window.open(fileURL)

        return resolve()
      })
      .catch((error) => {
        console.error(error)
        return reject(new Error('Fehler beim Anfordern der PDF'))
      })
  })
}
