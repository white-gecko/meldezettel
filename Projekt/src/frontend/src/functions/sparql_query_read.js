// function which creates a SPARQL query to retrieve all 
// document data from quitstore


export default function sparqlRead(){
	

	// default prefixes + graph prefixes
    query =  '@prefix : <http://www.na17b.org/thw/> .';
	query += '@prefix owl: <http://www.w3.org/2002/07/owl#> .';
	query += '@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .';
	query += '@prefix thw: <http://www.na17b.org/thw/> .';
	query += '@prefix xml: <http://www.w3.org/XML/1998/namespace> .';
	query += '@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .';
	query += '@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .';
	query += '@base <http://www.na17b.org/thw/> .';

	query += 'SELECT * {GRAPH <http://www.na17b.org/thw/> {?document ?p ?o}';
	query += 'WHERE {?document rdf:type thw:document.} }';

	return query;
}
