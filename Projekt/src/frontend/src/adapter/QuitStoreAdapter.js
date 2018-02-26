/* eslint-disable */
import axios from 'axios'

let quitStoreAdapter = {
    url : "http://127.0.0.1:8080/sparql",
    getData: function(sparqlQuery) {
        axios.get(this.url,{
            params: {query: sparqlQuery},
            headers: {Accept: "application/sparql-results+json"},
        })
        .then(response => console.log("Get-Response data: " + response.data.results.bindings))
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

let insertQuery = `
    INSERT DATA {
        GRAPH <http://instructions.org/> {
            <http://www.w3.org/2006/vcard/ns#> <http://www.w3.org/2006/vcard/ns#fn> 'Lucas Schons'
        }
    }
`

let getAllDataQuery = `
    SELECT * {
        GRAPH <http://instructions.org/> {
            ?sub ?pred ?obj
        }
    }
`
quitStoreAdapter.sendData(insertQuery)
quitStoreAdapter.getData(getAllDataQuery)