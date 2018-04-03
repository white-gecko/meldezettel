import sparql from '@/sparql_help/sparql_queries.js'

test ('Dashboard query function works',() =>{
  let filter={
    search: 'abc',
    operation: 'Alle',
    s1: true,
    s2: false,
    s3: false,
    s4: false,
    s5: false,
    s6: false,
    s7: true,
    s8: false,
    s9: false,
    s11: false,
    s12: false,
    s13: true,
    s14: false,
    s15: false
  }
  expect(sparql.dashboardQuery(filter)).toBe(`
PREFIX thw: <http://www.na17b.org/thw/>
PREFIX id: <http://www.na17b.org/thw/resource/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT *
FROM thw:
WHERE {
?id rdf:type  thw:document;
thw:ticketState ?ticketState;
thw:receiverName ?receiverName;
thw:content ?content;
thw:primaryDate ?primaryDate;
thw:primaryTime ?primaryTime;
thw:primaryHdZ ?primaryHdZ;
thw:tertiaryDate ?tertiaryDate;
thw:tertiaryTime ?tertiaryTime;
thw:numberTB ?numberTB;
thw:identification ?identification;
thw:docketIdentification ?docketIdentification. FILTER((regex(?content, "abc") || regex(?numberTB, "abc") || regex(?receiverName, "abc") ||?primaryHdZ = "abc" || ?identification = "abc") && ( ?ticketState = 1 || ?ticketState = 7 || ?ticketState = 13))}`
  )
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
  let obj={documentID: 'fr1234567891011',one:'text',two:false,three:333,four:date}

  expect(sparql.formdataToInsertQuery(obj)).toMatch(
    /INSERT DATA {GRAPH : {id:fr1234567891011 rdf:type :document;:one \"\"\"text\"\"\";:two false;:three 333;:four 40.}}/
  )
})

test ('DeleteQuery function works',() => {

  let date=new Date(40)
  let obj={documentID: 'fr1234567891011',one:'text',two:false,three:333,four:date}

  expect(sparql.formdataToDeleteQuery(obj)).toMatch(
    /DELETE DATA {GRAPH : {id:fr1234567891011 rdf:type :document;:one \"\"\"text\"\"\";:two false;:three 333;:four 40.}}/
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
