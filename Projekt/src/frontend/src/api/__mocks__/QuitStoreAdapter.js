/**
 * QuitStoreAdapter Mock for testing
 * @type {{getData: function(string): *, sendData: function(string): *}}
 */
export const quitstore = {

  getData: function (sparqlQuery) {
    let queryWhiteList = ['dashboard query', 'operations query', 'form query']
    return new Promise((resolve, reject) => {
      if (queryWhiteList.indexOf(sparqlQuery) > -1) {
        resolve("JSON Result")
      } else {
        reject('FAILURE')
      }
    })
  },

  sendData: function (sparqlQuery) {
    let queryWhiteList = ['delete formdata query', 'insert formdata query', 'new operation query']
    return new Promise((resolve, reject) => {
      if (queryWhiteList.indexOf(sparqlQuery) > -1) {
        resolve('SUCCESS')
      } else {
        reject('FAILURE')
      }
    })
  }
}
