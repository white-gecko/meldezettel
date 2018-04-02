export default{
  /** function which creates a SPARQL Insert query based on given doc object
   * @param doc formdata object that got edited or created in THWForm.vue
   * @return string SPARQL query that inserts data of formdata object into
   *           QuitStore
   */
  formdataToInsertQuery: function (doc) {
    // default prefixes + graph prefixes
    let query = `
PREFIX id: <http://www.na17b.org/thw/resource/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX : <http://www.na17b.org/thw/>
`

    let uri = ''
    if (doc.documentID !== '') {
      uri = 'id:' + doc.documentID
    } else if (doc.outgoing) {
      uri = 'id:' + doc.identification + Date.now()
    } else {
      uri = 'id:' + doc.primaryHdZ + Date.now()
    }
    delete doc.documentID

    // base for sparql insert queries
    query += 'INSERT DATA {GRAPH : {'

    query += uri + ' rdf:type :document'

    for (let key in doc) {
      let value = doc[key]

      query += ';:' + key + ' '
      if (typeof value === 'string') {
        query += '"""' + value + '"""'
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

  /** function which creates a SPARQL delete query based on given doc object
   * @param doc old formdata object that got updated in THWForm.vue
   * @return string SPARQL query that deletes data of formdata object from
   *           QuitStore
   */
  formdataToDeleteQuery: function (doc) {
    // default prefixes + graph prefixes
    let query = `
      PREFIX id: <http://www.na17b.org/thw/resource/>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX : <http://www.na17b.org/thw/>
      `

    let uri = 'id:' + doc.documentID
    delete doc.documentID

    // base for sparql delete queries
    query += 'DELETE DATA {GRAPH : {'

    query += uri + ' rdf:type :document'

    for (let key in doc) {
      let value = doc[key]

      query += ';:' + key + ' '
      if (typeof value === 'string') {
        query += '"""' + value + '"""'
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
   * @return string  query string to query for dashboard specific data
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
   * @param {String} id Id to be queried for
   * @return string query string to retrieve all triples of a given document id
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
  }
}
