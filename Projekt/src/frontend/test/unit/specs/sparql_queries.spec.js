import sparql from '@/sparql_help/sparql_queries.js'

let filter1 = {
  search: 'abc',
  identification: '',
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

let filter2 = {
  search: '',
  identification: 'fr',
  operation: 'na17b',
  s1: false,
  s2: true,
  s3: true,
  s4: true,
  s5: true,
  s6: true,
  s7: false,
  s8: true,
  s9: true,
  s11: true,
  s12: true,
  s13: false,
  s14: true,
  s15: true
}

let filter3 = {
  search: '',
  identification: '',
  operation: '',
  s1: false,
  s2: false,
  s3: false,
  s4: false,
  s5: false,
  s6: false,
  s7: false,
  s8: false,
  s9: false,
  s11: false,
  s12: false,
  s13: false,
  s14: false,
  s15: false
}

let id1 = 123456
let id2 = 'ab1371'
let id3 = false


test ('Dashboard query function works',() =>{
  expect(sparql.dashboardQuery(filter1)).toBe(`
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

  expect(sparql.dashboardQuery(filter2)).toBe(`
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

  expect(sparql.dashboardQuery(filter3)).toBe(`
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

  expect(sparql.formQuery(id1)).toBe(`
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX id: <http://www.na17b.org/thw/resource/>

      SELECT ?p ?o FROM thw: WHERE{
        id:123456 ?p ?o
        FILTER(?p != rdf:type)
      }
    `
  )

  expect(sparql.formQuery(id2)).toBe(`
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX id: <http://www.na17b.org/thw/resource/>

      SELECT ?p ?o FROM thw: WHERE{
        id:ab1371 ?p ?o
        FILTER(?p != rdf:type)
      }
    `
  )

  expect(sparql.formQuery(id3)).toBe(`
      PREFIX thw: <http://www.na17b.org/thw/>
      PREFIX id: <http://www.na17b.org/thw/resource/>

      SELECT ?p ?o FROM thw: WHERE{
        id:false ?p ?o
        FILTER(?p != rdf:type)
      }
    `
  )
})

test ('InsertQuery function works',() => {

  let date1=new Date(40)
  let doc1={documentID: '',inOperation:'na17b',outgoing:false,primaryHdZ:'gh',one:'text',two:false,three:333,four:date1}

  let date2=new Date(500)
  let doc2={documentID: '',inOperation:'na17b',outgoing:true,identification: 'fr', one:'text',two:false,three:333,four:date2}

  let date3=new Date(20000)
  let doc3={documentID: 'fr1234567891011',one:'text',two:false,three:333,four:date3}

  expect(sparql.formdataToInsertQuery(doc1)).toMatch(
    /INSERT DATA {GRAPH : {id:gh[0-9]{13} rdf:type :document; :inOperation id:na17b;:outgoing false;:primaryHdZ \"\"\"gh\"\"\";:one \"\"\"text\"\"\";:two false;:three 333;:four 40.}}/
  )

  expect(sparql.formdataToInsertQuery(doc2)).toMatch(
    /INSERT DATA {GRAPH : {id:fr[0-9]{13} rdf:type :document; :inOperation id:na17b;:outgoing true;:identification \"\"\"fr\"\"\";:one \"\"\"text\"\"\";:two false;:three 333;:four 500.}}/
  )

  expect(sparql.formdataToInsertQuery(doc3)).toMatch(
    /INSERT DATA {GRAPH : {id:fr1234567891011 rdf:type :document;:one \"\"\"text\"\"\";:two false;:three 333;:four 20000.}}/
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
      /INSERT DATA {GRAPH thw: {id:operation1337133713371 rdf:type thw:operation;thw:operationName """Frederike""";thw:operationAdress """THW EAL""";thw:operationStaffType """StabStab""".}}/
    )
})

test ('Operations query function works',() =>{

  expect(sparql.operationsQuery()).toBe(`
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
    `)
})
