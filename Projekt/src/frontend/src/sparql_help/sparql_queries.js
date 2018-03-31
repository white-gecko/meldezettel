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

    let uri = ''
    if (doc.documentID !== '') {
      uri = 'id:' + doc.documentID
    } else {
      uri = 'id:' + doc.signature + Date.now()
    }
    delete doc.documentID

    // base for sparql insert queries
    query += 'INSERT DATA {GRAPH <http://www.na17b.org/thw/> {'

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

  /** Creates a query to query for dashboard specific data
   *  @return query string to query for dashboard specific data
   */
  dashboardQuery: function (filter) {
    let query = `
PREFIX thw: <http://www.na17b.org/thw/>
PREFIX id: <http://www.na17b.org/thw/resource/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT
?id
?state
?numberTB
?identification
?content
?primaryDate
?primaryTime
?primaryHdZ
?tertiaryDate
?tertiaryTime
?receiverName 
?docketIdentification
FROM thw:
WHERE {
?id rdf:type  thw:document;
thw:state ?state;
thw:receiverName ?receiverName;
thw:content ?content;
thw:primaryDate ?primaryDate;
thw:primaryTime ?primaryTime;
thw:primaryHdZ ?primaryHdZ;
thw:tertiaryDate ?tertiaryDate;
thw:tertiaryTime ?tertiaryTime;
thw:numberTB ?numberTB;
thw:identification ?identification;
thw:docketIdentification ?docketIdentification`

    if (filter.operation !== 'Alle') {
      query += `; thw:operation ?operation.` +
                ` ?operation thw:operationName "` + filter.operation + `"`
    }
    query += '.'

    let search = ''
    let trimmed = filter.search.trim()
    if (trimmed !== '') {
      search += `regex(?content, "` + trimmed + `") || ` +
                `regex(?numberTB, "` + trimmed + `") || ` +
                `regex(?receiverName, "` + trimmed + `") ||` +
                `?primaryHdZ = "` + trimmed + `" || ` +
                `?identification = "` + trimmed + `"`
    }

    let check = false
    let states = ''
    if (filter.s1) {
      states += ` ?state = 1`
      check = true
    }
    if (filter.s2) {
      if (check) {
        states += ` ||`
      }
      states += ` ?state = 2`
      check = true
    }
    if (filter.s3) {
      if (check) {
        states += ` ||`
      }
      states += ` ?state = 3`
      check = true
    }
    if (filter.s4) {
      if (check) {
        states += ` ||`
      }
      states += ` ?state = 4`
      check = true
    }
    if (filter.s5) {
      if (check) {
        states += ` ||`
      }
      states += ` ?state = 5`
      check = true
    }
    if (filter.s6) {
      if (check) {
        states += ` ||`
      }
      states += ` ?state = 6`
      check = true
    }
    if (filter.s7) {
      if (check) {
        states += ` ||`
      }
      states += ` ?state = 7`
      check = true
    }
    if (filter.s8) {
      if (check) {
        states += ` ||`
      }
      states += ` ?state = 8`
      check = true
    }
    if (filter.s9) {
      if (check) {
        states += ` ||`
      }
      states += ` ?state = 9`
      check = true
    }
    if (filter.s11) {
      if (check) {
        states += ` ||`
      }
      states += ` ?state = 11`
      check = true
    }
    if (filter.s12) {
      if (check) {
        states += ` ||`
      }
      states += ` ?state = 12`
      check = true
    }
    if (filter.s13) {
      if (check) {
        states += ` ||`
      }
      states += ` ?state = 13`
      check = true
    }
    if (filter.s14) {
      if (check) {
        states += ` ||`
      }
      states += ` ?state = 14`
      check = true
    }
    if (filter.s15) {
      if (check) {
        states += ` ||`
      }
      states += ` ?state = 15`
    }

    let queryFilter = ''
    if (search !== '' && states !== '') {
      search = `(` + search + `)`
      states = `(` + states + `)`
      queryFilter = ` FILTER(` + search + ` && ` + states + `)`
    } else if (states !== '') {
      queryFilter = ` FILTER(` + states + `)`
    } else if (search !== '') {
      queryFilter = ` FILTER(` + search + `)`
    }

    query += queryFilter + '}'
    console.log(query)

    return query
  },

  /**
   * Creates a query to retrieve a specified document
   * @param {*String} id = Id to be queried for
   * @return query string to retrieve all triples of a given document id
   */
  formQuery: function (id) {
    return `
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX id: <http://www.na17b.org/thw/resource/>

      SELECT ?id ?p ?o FROM thw: WHERE{
        id:` + id + ` ?p ?o
        FILTER(?p != rdf:type)
      }
    `
  }
}
