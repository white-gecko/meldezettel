import sparql from '@/sparql_help/sparql_queries.js'

test ('Dashboard query function works',() =>{

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
})

test ('FormQuery function works',() => {

  let id=123456
  expect(sparql.formQuery(id)).toBe(`
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX id: <http://www.na17b.org/thw/resource/>

      SELECT ?p ?o FROM thw: WHERE{
        id:123456 ?p ?o
        FILTER(?p != rdf:type)
      }
    `
  )
})

test ('InsertQuery function works',() => {

  let date=new Date(40)
  let obj={one:'text',two:false,three:333,four:date}

  expect(sparql.formdataToInsertQuery(obj)).toMatch(
    /INSERT DATA {GRAPH <http:\/\/www.na17b.org\/thw\/> {id:[0-9]{6} rdf:type thw:document;thw:one "text";thw:two false;thw:three 333;thw:four 40.}}/
  )
})

test ('operationToInsertQuery function works',() =>{
  let operation={
    operationName:'Frederike',
    operationAdress:'THW EAL',
    operationStaffType:'StabStab',
    operationID:'operation1337133713371'}

    expect(sparql.operationToInsertQuery(operation)).toMatch(
      /INSERT DATA {GRAPH thw: {id:operation1337133713371 rdf:type thw:operation;thw:operationName """Frederike""";thw:operationAdress """EAL THW""";thw:operationStaffType """StabStab""".}}/
    )
})

test ('Operations query function works',() =>{

  expect(sparql.operationToInsertQuery()).toBe(`
    PREFIX thw: <http://www.na17b.org/thw/>
    PREFIX id: <http://www.na17b.org/thw/resource/>
    prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    SELECT
      *
    FROM thw:
    WHERE {
        ?operationId rdf:type thw:operation;
        thw:operationName ?operationName;
        thw:operationAdress ?operationAdress;
        thw:operationStaffType ?operationStaffType.
    }
  `)
})
