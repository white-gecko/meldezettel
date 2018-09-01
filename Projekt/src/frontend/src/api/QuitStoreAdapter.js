import axios from 'axios'
import { Parser, Generator } from 'sparqljs'

/**
 * The quitstore object implements methods that allow for
 * communication with the QuitStore SPARQL endpoint via http.
 * We assume that the QuitStore will always listen at port 5000
 */
export const quitstore = {
  url: 'http://127.0.0.1:5000/sparql',
  /**
   * Method used for retrieving data from the QuitStore via axios's get method.
   * @param {string} sparqlQuery - A SPARQL SELECT query
   * @returns Promise
   */
  getData: function (sparqlQuery) {
    var parser = new Parser()
    var parsedQuery = parser.parse(sparqlQuery)
    var generator = new Generator()
    var generatedQuery = generator.stringify(parsedQuery)

    return axios.get(this.url, {
      params: { query: generatedQuery },
      headers: { Accept: 'application/sparql-results+json' }
    })
  },
  /**
   * Method used for sending data to the QuitStore via axios's post method.
   * @param {string} sparqlQuery - A SPARQL INSERT | DELETE query
   * @returns Promise
   */
  sendData: function (sparqlQuery) {
    var parser = new Parser()
    var parsedQuery = parser.parse(sparqlQuery)
    var generator = new Generator()
    var generatedQuery = generator.stringify(parsedQuery)

    return axios.request({
      method: 'post',
      url: this.url,
      data: generatedQuery,
      headers: { 'Content-Type': 'application/sparql-update' }
    })
  }
}
