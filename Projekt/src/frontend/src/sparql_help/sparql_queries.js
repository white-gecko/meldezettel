export default{
  /**
   * function which creates a SPARQL Insert query based on given doc object
   *
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

    if (doc.inOperation !== '' && doc.inOperation !== undefined) {
      query += '; :inOperation id:' + doc.inOperation
    }
    delete doc.inOperation

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
   * function which creates a SPARQL delete query based on given doc object
   *
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
    console.log('HAllo')
    console.log(doc.inOperation)
    if (doc.inOperation !== '' && typeof (doc.inOperation) !== 'undefined') {
      query += '; :inOperation id:' + doc.inOperation
    }
    delete doc.inOperation

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
   *
   *  @param filter: filter object which the received data shall be based opon
   *  @return query string to query for dashboard specific data
   */
  dashboardQuery: function (filter) {
    let query = `
PREFIX : <http://www.na17b.org/thw/>
PREFIX id: <http://www.na17b.org/thw/resource/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT *
FROM :
WHERE {
?id rdf:type :document;
:ticketState ?ticketState;
:receiverName ?receiverName;
:content ?content;
:primaryDate ?primaryDate;
:primaryTime ?primaryTime;
:primaryHdZ ?primaryHdZ;
:tertiaryDate ?tertiaryDate;
:tertiaryTime ?tertiaryTime;
:numberTB ?numberTB;
:identification ?identification;
:docketIdentification ?docketIdentification;
:sender ?s;
:secondaryHdZ ?sH;
:tertiaryHdZ ?tH;
:advisorA ?aA;
:advisorB ?aB;
:advisorC ?aC;
:advisorD ?aD;
:advisorE ?aE;
:connectionA ?cA;
:connectionB ?cB;
:connectionC ?cC;
:connectionD ?cD;
:connectionE ?cE`

    if (filter.operation !== 'Alle') {
      query += `; :inOperation ?operation.` +
                ` ?operation :operationName "` + filter.operation + `"`
    }
    query += '.'

    let search = ''
    let trimmed = filter.search.trim()
    if (trimmed !== '') {
      search += `regex(?content,"` + trimmed + `")||` +
                `regex(?numberTB,"` + trimmed + `")||` +
                `regex(?receiverName,"` + trimmed + `")||` +
                `regex(?s,"` + trimmed + `")`
    }

    let name = ''
    let trimmedID = filter.identification.trim()
    if (trimmedID !== '') {
      name += `?primaryHdZ="` + trimmedID + `"||` +
              `?sH="` + trimmedID + `"||` +
              `?tH="` + trimmedID + `"||` +
              `?identification="` + trimmedID + `"||` +
              `?docketIdentification="` + trimmedID + `"||` +
              `?aA="` + trimmedID + `"||` +
              `?aB="` + trimmedID + `"||` +
              `?aC="` + trimmedID + `"||` +
              `?aD="` + trimmedID + `"||` +
              `?aE="` + trimmedID + `"||` +
              `?cA="` + trimmedID + `"||` +
              `?cB="` + trimmedID + `"||` +
              `?cC="` + trimmedID + `"||` +
              `?cD="` + trimmedID + `"||` +
              `?cE="` + trimmedID + `"`
    }

    let check = false
    let states = ''
    if (filter.s1) {
      states += ` ?ticketState=1`
      check = true
    }
    if (filter.s2) {
      if (check) {
        states += `||`
      }
      states += ` ?ticketState=2`
      check = true
    }
    if (filter.s3) {
      if (check) {
        states += `||`
      }
      states += ` ?ticketState=3`
      check = true
    }
    if (filter.s4) {
      if (check) {
        states += `||`
      }
      states += ` ?ticketState=4`
      check = true
    }
    if (filter.s5) {
      if (check) {
        states += `||`
      }
      states += ` ?ticketState=5`
      check = true
    }
    if (filter.s6) {
      if (check) {
        states += `||`
      }
      states += ` ?ticketState=6`
      check = true
    }
    if (filter.s7) {
      if (check) {
        states += ` ||`
      }
      states += ` ?ticketState=7`
      check = true
    }
    if (filter.s8) {
      if (check) {
        states += `||`
      }
      states += ` ?ticketState=8`
      check = true
    }
    if (filter.s9) {
      if (check) {
        states += `||`
      }
      states += ` ?ticketState=9`
      check = true
    }
    if (filter.s11) {
      if (check) {
        states += `||`
      }
      states += ` ?ticketState=11`
      check = true
    }
    if (filter.s12) {
      if (check) {
        states += `||`
      }
      states += ` ?ticketState=12`
      check = true
    }
    if (filter.s13) {
      if (check) {
        states += `||`
      }
      states += ` ?ticketState=13`
      check = true
    }
    if (filter.s14) {
      if (check) {
        states += `||`
      }
      states += ` ?ticketState=14`
      check = true
    }
    if (filter.s15) {
      if (check) {
        states += ` ||`
      }
      states += ` ?ticketState=15`
    }

    let queryFilter = ''
    if (search !== '' && states !== '' && name !== '') {
      search = `(` + search + `)`
      states = `(` + states + `)`
      name = `(` + name + `)`
      queryFilter = ` FILTER(` + search + `&&` + states + `&&` + name + `)`
    } else if (search !== '' && name !== '') {
      search = `(` + search + `)`
      name = `(` + name + `)`
      queryFilter = ` FILTER(` + search + `&&` + name + `)`
    } else if (name !== '' && states !== '') {
      name = `(` + name + `)`
      states = `(` + states + `)`
      queryFilter = ` FILTER(` + name + `&&` + states + `)`
    } else if (search !== '' && states !== '') {
      search = `(` + search + `)`
      states = `(` + states + `)`
      queryFilter = ` FILTER(` + search + `&&` + states + `)`
    } else if (states !== '') {
      queryFilter = ` FILTER(` + states + `)`
    } else if (search !== '') {
      queryFilter = ` FILTER(` + search + `)`
    } else if (name !== '') {
      queryFilter = ` FILTER(` + name + `)`
    }

    query += queryFilter + '}'
    return query
  },

  /**
   * Creates a query to retrieve a specified document
   *
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
  },
  operationToInsertQuery: function (newOperation) {
    // default prefixes
    let query = `
      PREFIX id: <http://www.na17b.org/thw/resource/>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    `
    // base for sparql insert queries
    query += 'INSERT DATA {GRAPH thw: {'
    let uri = 'id:' + newOperation.operationID
    query += uri + ' rdf:type thw:operation'

    query += ';thw:operationName ' + '"""' + newOperation.operationName + '"""'
    query += ';thw:operationAdress ' +
      '"""' + newOperation.operationAdress + '"""'
    query += ';thw:operationStaffType ' +
      '"""' +
      newOperation.operationStaffType +
      '"""'
    query += '.}}'

    return query
  },
  /**
   * function which creates a SPARQL query to retrieve all operations from
   * QuitStore with the regarding data
   *
   * @returns {string}
   */
  operationsQuery: function () {
    // Similar to dashboardQuery
    return `
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX id: <http://www.na17b.org/thw/resource/>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

      SELECT
        *
      FROM thw:
      WHERE {
          ?operationID rdf:type thw:operation;
          thw:operationName ?operationName;
          thw:operationAdress ?operationAdress;
          thw:operationStaffType ?operationStaffType.
      }
    `
  }
}
