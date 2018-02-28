
export default function formdataToSparql(formdata){

    	query =  '@prefix : <http://www.na17b.org/thw/> .';
	query += '@prefix owl: <http://www.w3.org/2002/07/owl#> .';
	query += '@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .';
	query += '@prefix thw: <http://www.na17b.org/thw/> .';
	query += '@prefix xml: <http://www.w3.org/XML/1998/namespace> .';
	query += '@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .';
	query += '@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .';
	query += '@base <http://www.na17b.org/thw/> .';
	
	query += 'DELETE DATA { GRAPH <http://www.na17b.org/thw/> {';
		query += 'thw:resource/activeAIC thw:currentCount ?oldcount } }';

	query += 'INSERT DATA { GRAPH <http://www.na17b.org/thw/> {';
	
		query += '(URI(CONCAT("<http://www.na17b.org/thw/resource/",str(?count),">"))) rdf:type thw:document;';
				
					query += 'thw:topRadio "' + 		formdata.typeTop[0] +'";';
					query += 'thw:topPhone "' + 		formdata.typeTop[1] +'";';
					query += 'thw:topFax "' + 			formdata.typeTop[2] +'";';
					query += 'thw:topDFU "' + 			formdata.typeTop[3] +'";';
					query += 'thw:topCourier "' + 		formdata.typeTop[4] +'";';
					query += 'thw:outgoing "' + 		formdata.isAusgang +'";';
					query += 'thw:primaryDate "' + 		formdata.dateIncomingA +'";';
					query += 'thw:primaryTime "' + 		formdata.timeIncomingA +'";';
					query += 'thw:primaryHdZ "' + 		formdata.hdzIncomingA +'";';

			if(formdata.isAusgang){
					query += 'thw:secondaryDate "' + 	formdata.dateIncomingB +'";';
					query += 'thw:secondaryTime "' + 	formdata.timeIncomingB +'";';
					query += 'thw:secondaryHdZ "' + 	formdata.hdzIncomingB +'";';
			}

					query += 'thw:numberTB "' + 		formdata.numberTB +'";';
					query += 'thw:receiverName "' + 	formdata.nameR +'";';
					query += 'thw:midRadio "' + 		formdata.typeMiddle[0] +'";';
					query += 'thw:midPhone "' + 		formdata.typeMiddle[1] +'";';
					query += 'thw:midFax "' + 			formdata.typeMiddle[2] +'";';
					query += 'thw:midDFU "' + 			formdata.typeMiddle[3] +'";';
					query += 'thw:midCourier "' + 		formdata.typeMiddle[4] +'";';
					query += 'thw:announcement "' + 	formdata.typeCall[0] +'";';
					query += 'thw:message "' + 			formdata.typeCall[1] +'";';
					query += 'thw:instant "' + 			formdata.priority[0] +'";';
					query += 'thw:flash "' + 			formdata.priority[1] +'";';
					query += 'thw:talkNote "' + 		formdata.gNote +'";';
					query += 'thw:callNumber "' + 		formdata.phone +'";';
					query += 'thw:adress "' + 			formdata.adress +'";';
					query += 'thw:content "' + 			formdata.message +'";';
					query += 'thw:createTime "' + 		formdata.createTime +'";';
					query += 'thw:identification "' + 	formdata.signature +'";';
					query += 'thw:role "' + 			formdata.position +'";';
					query += 'thw:sender "' + 			formdata.sender +'";';
					query += 'thw:docketTime "' + 		formdata.signatureTime +'";';
					query += 'thw:docketIdentification "' + formdata.signatureB +'";';
					query += 'thw:docketLeader "' + 	formdata.selectStation[0] +'";';
					query += 'thw:docketS1 "' + 		formdata.selectStation[1] +'";';
					query += 'thw:docketS2 "' + 		formdata.selectStation[2] +'";';
					query += 'thw:docketS3 "' + 		formdata.selectStation[3] +'";';
					query += 'thw:docketS4 "' + 		formdata.selectStation[4] +'";';
					query += 'thw:docketS6 "' + 		formdata.selectStation[5] +'";';
					query += 'thw:advisorTickA "' + 	formdata.advisorAchecked +'";';
					query += 'thw:advisorA "' + 		formdata.advisorA +'";';
					query += 'thw:advisorTickB "' + 	formdata.advisorBchecked +'";';
					query += 'thw:advisorB "' + 		formdata.advisorB +'";';
					query += 'thw:advisorTickC "' + 	formdata.advisorCchecked +'";';
					query += 'thw:advisorC "' + 		formdata.advisorC +'";';
					query += 'thw:advisorTickD "' + 	formdata.advisorDchecked +'";';
					query += 'thw:advisorD "' + 		formdata.advisorD +'";';
					query += 'thw:advisorTickE "' + 	formdata.advisorEchecked +'";';
					query += 'thw:advisorE "' + 		formdata.advisorE +'";';
					query += 'thw:connectionTickA "' + 	formdata.verbAchecked +'";';
					query += 'thw:connectionA "' + 		formdata.verbA +'";';
					query += 'thw:connectionTickB "' + 	formdata.verbBchecked +'";';
					query += 'thw:connectionB "' + 		formdata.verbB +'";';
					query += 'thw:connectionTickC "' + 	formdata.verbCchecked +'";';
					query += 'thw:connectionC "' + 		formdata.verbC +'";';
					query += 'thw:connectionTickD "' + 	formdata.verbDchecked +'";';
					query += 'thw:connectionD "' + 		formdata.verbD +'";';
					query += 'thw:connectionTickE "' + 	formdata.verbEchecked +'";';
					query += 'thw:connectionE "' + 		formdata.verbE +'";';
					query += 'thw:annotations "' + 		formdata.annotations +'".';

		query += 'thw:resource/activeAIC thw:currentCount ?count.} }';
		
	query += 'WHERE{ GRAPH <http://www.na17b.org/thw/> {';
		
		query += 'thw:resource/activeAIC thw:currentCount ?oldcount.';
		query += 'BIND((?oldcount-1) AS ?count)';


	query += '} }';
    return query;
}
