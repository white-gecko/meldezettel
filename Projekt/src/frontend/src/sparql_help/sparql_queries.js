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
  dashboardQuery: function (filter) {
    let query = `
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX id: <http://www.na17b.org/thw/resource/>
      prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

      SELECT
        ?id
        ?numberTB
        ?identification
        ?content
        ?primaryDate
        ?primaryTime
        ?primaryHdZ
        ?receiverName 
        FROM thw:
        WHERE {
          ?id rdf:type  thw:document;
                        thw:receiverName ?receiverName;
                        thw:content ?content;
                        thw:primaryDate ?primaryDate;
                        thw:primaryTime ?primaryTime;
                        thw:primaryHdZ ?primaryHdZ;
                        thw:numberTB ?numberTB;
                        thw:identification ?identification.
      FILTER(`
    let check = false
    let trimmed = trim(filter.search)
    if (trimmed != '') {
      query += `(
                regex(?content, "`+ trimmed +`") ||
                regex(?numberTB, "` + trimmed + `") ||
                regex(?receiverName, "` + trimmed + `" ||
                ?primaryHdZ = "` + trimmed + `" ||
                ?identification = "` + trimmed + `"
                )
      `
      check = true
    }
    if (filter.operation != 'Alle') {
      if (check) {
        query +=`&&
        `
      }
      query += `regex(?operation, "` + filter.operation + `")`
      check = true
    }
    query += ')}'

    return query
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
  }
}
