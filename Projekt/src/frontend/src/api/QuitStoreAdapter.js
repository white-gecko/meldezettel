import axios from 'axios'

export const quitstore = {
  url: 'http://127.0.0.1',
  path: '/sparql',
  portMap: {
    docker: ':8080',
    native: ':5000'
  },
  getData: function (sparqlQuery) {
    return axios.get(this.url + this.portMap.native + this.path, {
      params: { query: sparqlQuery },
      headers: { Accept: 'application/sparql-results+json' }
    })
  },
  sendData: function (sparqlQuery) {
    return axios.request({
      method: 'post',
      url: this.url + this.portMap.native + this.path,
      data: 'query=' + sparqlQuery
    })
  }
}
