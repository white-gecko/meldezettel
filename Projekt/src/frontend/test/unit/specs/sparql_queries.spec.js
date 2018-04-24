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
  s1: true,
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
let filter4 = {
  search: 'abc',
  identification: 'ab',
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
let filter5 = {
  search: 'abc',
  identification: 'ab',
  operation: 'Alle',
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
let filter6 = {
  search: 'abc',
  identification: '',
  operation: 'Alle',
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
let filter7 = {
  search: '',
  identification: 'ab',
  operation: 'Alle',
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

let filter8 = {
  search: '',
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

let id1 = 123456
let id2 = 'ab1371'
let id3 = false

let date1=new Date(40)
let doc1={
  documentID: '',
  inOperation:'na17b',
  outgoing:false,
  primaryHdZ:'gh',
  one:'text',
  two:false,
  three:333,
  four:date1
}

let date2=new Date(500)
let doc2={
  documentID: '',
  inOperation:'na17b',
  outgoing:true,
  identification: 'fr',
  one:'text',two:false,
  three:333,
  four:date2}

let date3=new Date(20000)
let doc3={
  documentID: 'fr1234567891011',
  one:'text',
  two:false,
  three:333,
  four:date3
}

let doc4={
  documentID: '',
  inOperation:'na17b',
  outgoing:false,
  primaryHdZ:'gh',
  one:'text',
  two:false,
  three:333,
  four:date1
}
let doc5={
  documentID: '',
  inOperation:'na17b',
  outgoing:true,
  identification: 'fr',
  one:'text',
  two:false,
  three:333,
  four:date2
}
let doc6={
  documentID: 'fr1234567891011',
  one:'text',
  two:false,
  three:333,
  four:date3}

let operation={
  operationName:'Frederike',
  operationAdress:'THW EAL',
  operationStaffType:'StabStab',
  operationID:'operation1337133713371'
}

test ('Dashboard query function works',() =>{
  expect(sparql.dashboardQuery(filter1)).toBe(`
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
:connectionE ?cE. FILTER((regex(?content,"abc")||regex(?numberTB,"abc")||regex(?receiverName,"abc")||regex(?s,"abc"))&&( ?ticketState=1 || ?ticketState=7|| ?ticketState=13))}`
)

  expect(sparql.dashboardQuery(filter2)).toBe(`
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
:connectionE ?cE; :inOperation ?operation. ?operation :operationName "na17b". FILTER((?primaryHdZ="fr"||?sH="fr"||?tH="fr"||?identification="fr"||?docketIdentification="fr"||?aA="fr"||?aB="fr"||?aC="fr"||?aD="fr"||?aE="fr"||?cA="fr"||?cB="fr"||?cC="fr"||?cD="fr"||?cE="fr")&&( ?ticketState=1|| ?ticketState=2|| ?ticketState=3|| ?ticketState=4|| ?ticketState=5|| ?ticketState=6|| ?ticketState=8|| ?ticketState=9|| ?ticketState=11|| ?ticketState=12|| ?ticketState=14 || ?ticketState=15))}`
  )

  expect(sparql.dashboardQuery(filter3)).toBe(`
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
:connectionE ?cE; :inOperation ?operation. ?operation :operationName "".}`
  )
  expect(sparql.dashboardQuery(filter4)).toBe(`
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
:connectionE ?cE. FILTER((regex(?content,"abc")||regex(?numberTB,"abc")||regex(?receiverName,"abc")||regex(?s,"abc"))&&( ?ticketState=1 || ?ticketState=7|| ?ticketState=13)&&(?primaryHdZ="ab"||?sH="ab"||?tH="ab"||?identification="ab"||?docketIdentification="ab"||?aA="ab"||?aB="ab"||?aC="ab"||?aD="ab"||?aE="ab"||?cA="ab"||?cB="ab"||?cC="ab"||?cD="ab"||?cE="ab"))}`
  )
  expect(sparql.dashboardQuery(filter5)).toBe(`
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
:connectionE ?cE. FILTER((regex(?content,"abc")||regex(?numberTB,"abc")||regex(?receiverName,"abc")||regex(?s,"abc"))&&(?primaryHdZ="ab"||?sH="ab"||?tH="ab"||?identification="ab"||?docketIdentification="ab"||?aA="ab"||?aB="ab"||?aC="ab"||?aD="ab"||?aE="ab"||?cA="ab"||?cB="ab"||?cC="ab"||?cD="ab"||?cE="ab"))}`
  )
  expect(sparql.dashboardQuery(filter6)).toBe(`
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
:connectionE ?cE. FILTER(regex(?content,"abc")||regex(?numberTB,"abc")||regex(?receiverName,"abc")||regex(?s,"abc"))}`
  )
  expect(sparql.dashboardQuery(filter7)).toBe(`
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
:connectionE ?cE. FILTER(?primaryHdZ="ab"||?sH="ab"||?tH="ab"||?identification="ab"||?docketIdentification="ab"||?aA="ab"||?aB="ab"||?aC="ab"||?aD="ab"||?aE="ab"||?cA="ab"||?cB="ab"||?cC="ab"||?cD="ab"||?cE="ab")}`
  )
  expect(sparql.dashboardQuery(filter8)).toBe(`
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
:connectionE ?cE. FILTER( ?ticketState=1 || ?ticketState=7|| ?ticketState=13)}`
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
  expect(sparql.formdataToDeleteQuery(doc4)).toMatch(
    /DELETE DATA {GRAPH : {id: rdf:type :document; :inOperation id:na17b;:outgoing false;:primaryHdZ \"\"\"gh\"\"\";:one \"\"\"text\"\"\";:two false;:three 333;:four 40.}}/
  )

  expect(sparql.formdataToDeleteQuery(doc5)).toMatch(
    /DELETE DATA {GRAPH : {id: rdf:type :document; :inOperation id:na17b;:outgoing true;:identification \"\"\"fr\"\"\";:one \"\"\"text\"\"\";:two false;:three 333;:four 500.}}/
  )

  expect(sparql.formdataToDeleteQuery(doc6)).toMatch(
    /DELETE DATA {GRAPH : {id:fr1234567891011 rdf:type :document;:one \"\"\"text\"\"\";:two false;:three 333;:four 20000.}}/
  )
})

test ('operationToInsertQuery function works',() =>{
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
