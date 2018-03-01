import axios from 'axios'

export const quitstore = {
  url: 'http://127.0.0.1:8080/sparql',
  getData: function (sparqlQuery) {
    return axios.get(this.url, {
      params: { query: sparqlQuery },
      headers: { Accept: 'application/sparql-results+json' }
    })
  },
  sendData: function (sparqlQuery) {
    return axios.request({
      method: 'post',
      url: this.url,
      data: 'query=' + sparqlQuery
    })
  }
}
