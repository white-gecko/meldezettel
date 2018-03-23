export default{
  /** function which creates a SPARQL query based on given doc object
   * @param = formdata object that got edited or created in THWForm.vue
   * @return = SPARQL query that inserts data of formdata object into
   *           QuitStore
   */
  formdataToInsertQuery: function (doc) {
    // default prefixes + graph prefixes
    let query = `
      PREFIX id: <http://www.na17b.org/thw/resource/>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    `

    // creating a random number as ID for each document
    // we are aware that this is a bad solution, we will tend to that later
    let rid = Math.floor((Math.random() * 900000) + 100000)
    // base for sparql insert queries
    query += 'INSERT DATA {GRAPH <http://www.na17b.org/thw/> {'
    let uri = 'id:' + rid

    query += uri + ' rdf:type thw:document'

    for (let key in doc) {
      let value = doc[key]

      query += ';thw:' + key + ' '
      if (typeof value === 'string') {
        query += '"' + value + '"'
      } else if (typeof value === 'object') {
        let date = new Date(value)
        query += date.getTime()
      } else {
        query += value
      }
    }
    query += '.}}'

    return query
  },

  /**
   * Creates a query to query for dashboard specific data
   * @return query string to query for dashboard specific data
   */
  dashboardQuery: function () {
    return `
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX id: <http://www.na17b.org/thw/resource/>
      prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

      SELECT
        ?id
        ?content
        ?primaryDate
        ?primaryTime
        ?primaryHdZ FROM thw:
        WHERE {
          ?id rdf:type  thw:document;
                        thw:content ?content;
                        thw:primaryDate ?primaryDate;
                        thw:primaryTime ?primaryTime;
                        thw:primaryHdZ ?primaryHdZ;
      }
    `
  },

  /**
   * Creates a query to retrieve a specified document
   * @param {*String} id Id to be queried for
   * @return query string to retrieve all triples of a given document id
   */
  formQuery: function (id) {
    return `
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX id: <http://www.na17b.org/thw/resource/>

      SELECT ?p ?o FROM thw: WHERE{
        id:` + id + ` ?p ?o
        FILTER(?p != rdf:type)
      }
    `
  },
  operationToInsertQuery: function (newOperation) {
    // default prefixes
    let query = `
      PREFIX id: <http://www.na17b.org/thw/resource/>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    `
    // generate id
    let rid = newOperation.operationName
    // base for sparql insert queries
    query += 'INSERT DATA {GRAPH <http://www.na17b.org/thw/> {'
    let uri = 'id:' + rid
    query += uri + ' rdf:type thw:einsatz'

    query += ';thw:einsatzName' + '"' + newOperation.operationName + '"'
    query += ';thw:einsatzAdresse' + '"' + newOperation.operationAdress + '"'
    query += '.}}'

    return query
  },
  operationsQuery: function () {
    // I am taking over the query of 'formquery' without id filtering
    return `
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX id: <http://www.na17b.org/thw/resource/>

      SELECT ?p ?o FROM thw: 
        FILTER(?p != rdf:type)
      }
    `
  }
}
