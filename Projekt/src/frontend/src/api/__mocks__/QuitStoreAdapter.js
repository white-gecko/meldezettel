/**
 * QuitStoreAdapter Mock for testing
 * @type {{getData: function(string): *, sendData: function(string): *}}
 */
export const quitstore = {

  getData: function (sparqlQuery) {
    let queryWhiteList = ['dashboard_query', 'operations_query', 'form_query']
    let mockedDashboardResponse = `[
      {
        "id": "LS1524492877452",
        "ticketState": 11,
        "identification": "test",
        "tertiaryTime": "test",
        "tertiaryDate": "test",
        "val1": "abc",
        "val2": "def",
        "val3": "hij"
      },
      {
        "id": "LS1234566778891",
        "primaryHdZ": "LS",
        "ticketState": 2,
        "primaryDate": "today",
        "primaryTime": "now",
        "val1": "abc",
        "val2": "def",
        "val3": "hij"
      }
    ]`
    let mockedFormResponse = `
      [{"p": "name1", "o": "val1"},
      {"p": "name2", "o": "val2"},
      {"p": "name3", "o": "val3"}]
    `
    let mockedOperationsResponse = `
      [{"operationName": "Kolibri"},
      {"operationName": "Thetanus"},
      {"operationName": "Radau"}]
    `
    let mockedAdapterResponses = {
      dashboard_query: mockedDashboardResponse,
      form_query: mockedFormResponse,
      operations_query: mockedOperationsResponse
    }

    return new Promise((resolve, reject) => {
      if (queryWhiteList.indexOf(sparqlQuery) > -1) {
        resolve(mockedAdapterResponses[sparqlQuery])
      } else {
        reject(new Error('Failed mocking QuitStore response'))
      }
    })
  },

  sendData: function (sparqlQuery) {
    let queryWhiteList = [
      'delete_formdata_query',
      'insert_formdata_query',
      'new_operation_query']

    return new Promise((resolve, reject) => {
      if (queryWhiteList.indexOf(sparqlQuery) > -1) {
        resolve('SUCCESS')
      } else {
        reject(new Error('QuitStoreAdapter failed sending data'))
      }
    })
  }
}
