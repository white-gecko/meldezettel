import sparql from '@/sparql_help/sparql_queries.js'

test ('SPARQL query functions work',() =>{

  let id=123456
  let date=new Date(40)
  let obj={one:'text',two:false,three:333,four:date}

  expect(sparql.dashboardQuery()).toBe(`
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
    `)

  expect(sparql.formQuery(id)).toBe(`
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX id: <http://www.na17b.org/thw/resource/>

      SELECT ?p ?o FROM thw: WHERE{
        id:123456 ?p ?o
        FILTER(?p != rdf:type)
      }
    `)

  expect(sparql.formdataToInsertQuery(obj)).toMatch(
    /INSERT DATA {GRAPH <http:\/\/www.na17b.org\/thw\/> {id:[0-9]{6} rdf:type thw:document;thw:one "text";thw:two false;thw:three 333;thw:four 40.}}/
  )
})
