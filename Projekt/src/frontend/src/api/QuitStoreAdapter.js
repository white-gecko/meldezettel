/* eslint-disable */
import axios from 'axios'

export default {
    url : "http://127.0.0.1:8080/sparql",
    getData: function(sparqlQuery) {
        axios.get(this.url,{
            params: {query: sparqlQuery},
            headers: {Accept: "application/sparql-results+json"},
        })
        .then(response => console.log(response.data.results.bindings))
    },
    sendData: function(sparqlQuery) {
        axios.request({
            method: 'post',
            url: this.url,
            data: 'query=' + sparqlQuery
        })
        .then(response => console.log("Post-Response data: " + response.data))
        .catch (error => console.log("something went wrong"))
    }
}
