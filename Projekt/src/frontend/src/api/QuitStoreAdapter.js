import axios from 'axios'

/**
 * The quitstore object implements methods that allow for
 * communication with the QuitStore SPARQL endpoint via http.
 * We assume that the QuitStore will always listen at port 5000
 */
export const quitstore = {
  url: 'http://192.168.99.100:5000/sparql',
  /**
   * Method used for retrieving data from the QuitStore via axios's get method.
   * @param {string} sparqlQuery - A SPARQL SELECT query
   * @returns Promise
   */
  getData: function (sparqlQuery) {
    return axios.get(this.url, {
      params: { query: sparqlQuery },
      headers: { Accept: 'application/sparql-results+json' }
    })
  },
  /**
   * Method used for sending data to the QuitStore via axios's post method.
   * @param {string} sparqlQuery - A SPARQL INSERT | DELETE query
   * @returns Promise
   */
  sendData: function (sparqlQuery) {
    return axios.request({
      method: 'post',
      url: this.url,
      data: 'query=' + encodeURIComponent(sparqlQuery)
    })
  }
}
