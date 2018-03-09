export default{
  /** function which creates a SPARQL query based on given doc object
   * @param = formdata object that got edited or created in THWForm.vue
   * @return = SPARQL query that inserts data of formdata object into
   *           QuitStore
   */
  formdataToInsertQuery: function (doc) {
    // default prefixes + graph prefixes
    let query = 'PREFIX id: <http://www.na17b.org/thw/resource/>\n'
    query += 'PREFIX owl: <http://www.w3.org/2002/07/owl#>\n'
    query += 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n'
    query += 'PREFIX thw: <http://www.na17b.org/thw/>\n'
    query += 'PREFIX xml: <http://www.w3.org/XML/1998/namespace>\n'
    query += 'PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n'
    query += 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n'

    // creating a random number as ID for each document
    // we are aware that this is a bad solution, we will tend to that later
    let rid = Math.floor((Math.random() * 900000) + 100000)
    // base for sparql insert queries
    query += 'INSERT DATA {\n GRAPH <http://www.na17b.org/thw/> {\n'
    let uri = 'id:' + rid

    // Wrapper for updating a document in quitStore
    // updating via deleting all data related to the URI
    // and adding new data to same URI
    // not working at the moment, will be added later
    /**
    else{
        query += 'DELETE DATA { GRAPH <http://www.na17b.org/thw/> {'
        query += 'thw:resource/'+doc.documentID+' ?x ?y } }'
        query += 'INSERT DATA { GRAPH <http://www.na17b.org/thw/> {'
        uri    = 'thw:resource/'+doc.documentID
    } */
    query += uri + ' rdf:type thw:document;'

    // top area on document
    if (doc.typeTop.includes('Funk')) {
      query += 'thw:topRadio "true";'
    } else {
      query += 'thw:topRadio "false";'
    }
    if (doc.typeTop.includes('Telefon')) {
      query += 'thw:topPhone "true";'
    } else {
      query += 'thw:topPhone "false";'
    }
    if (doc.typeTop.includes('Telefax')) {
      query += 'thw:topFax "true";'
    } else {
      query += 'thw:topFax "false";'
    }
    if (doc.typeTop.includes('DFÜ')) {
      query += 'thw:topDFU "true";'
    } else {
      query += 'thw:topDFU "false";'
    }
    if (doc.typeTop.includes('Kurier/Melder')) {
      query += 'thw:topCourier "true";'
    } else {
      query += 'thw:topCourier "false";'
    }
    query += 'thw:outgoing "' + doc.isAusgang + '";'
    query += 'thw:primaryDate "' + doc.dateIncomingA + '";'
    query += 'thw:primaryTime "' + doc.timeIncomingA + '";'
    query += 'thw:primaryHdZ "' + doc.hdzIncomingA + '";'
    query += 'thw:secondaryDate "' + doc.dateIncomingB + '";'
    query += 'thw:secondaryTime "' + doc.timeIncomingB + '";'
    query += 'thw:secondaryHdZ "' + doc.hdzIncomingB + '";'

    query += 'thw:numberTB "' + doc.numberTB + '";'
    query += 'thw:receiverName "' + doc.nameR + '";'
    // middle area on document
    if (doc.typeMiddle.includes('Funk')) {
      query += 'thw:midRadio "true";'
    } else {
      query += 'thw:midRadio "false";'
    }
    if (doc.typeMiddle.includes('Telefon')) {
      query += 'thw:midPhone "true";'
    } else {
      query += 'thw:midPhone "false";'
    }
    if (doc.typeMiddle.includes('Telefax')) {
      query += 'thw:midFax "true";'
    } else {
      query += 'thw:midFax "false";'
    }
    if (doc.typeMiddle.includes('DFÜ')) {
      query += 'thw:midDFU "true";'
    } else {
      query += 'thw:midDFU "false";'
    }
    if (doc.typeMiddle.includes('Kurier/Melder')) {
      query += 'thw:midCourier "true";'
    } else {
      query += 'thw:midCourier "false";'
    }

    if (doc.typeCall.includes('DURCHSAGE')) {
      query += 'thw:announcement "true";'
    } else {
      query += 'thw:announcement "false";'
    }
    if (doc.typeCall.includes('Spruch')) {
      query += 'thw:message "true";'
    } else {
      query += 'thw:message "false";'
    }

    if (doc.priority.includes('Sofort')) {
      query += 'thw:instant "true";'
    } else {
      query += 'thw:instant "false";'
    }
    if (doc.priority.includes('Blitz')) {
      query += 'thw:flash' + '"true";'
    } else {
      query += 'thw:flash "false";'
    }
    query += 'thw:talkNote "' + doc.gNote + '";'
    query += 'thw:callNumber "' + doc.phone + '";'
    query += 'thw:adress "' + doc.adress + '";'
    query += 'thw:content "' + doc.message + '";'
    query += 'thw:createTime "' + doc.createTime + '";'
    query += 'thw:identification "' + doc.signature + '";'
    query += 'thw:role "' + doc.position + '";'
    query += 'thw:sender "' + doc.sender + '";'
    // bottom area on document
    query += 'thw:docketTime "' + doc.signatureTime + '";'
    if (doc.selectStation.includes('Leiter')) {
      query += 'thw:docketLeader "true";'
    } else {
      query += 'thw:docketLeader "false";'
    }
    if (doc.selectStation.includes('S1')) {
      query += 'thw:docketS1 "true";'
    } else {
      query += 'thw:docketS1 "false";'
    }
    if (doc.selectStation.includes('S2')) {
      query += 'thw:docketS2 "true";'
    } else {
      query += 'thw:docketS2 "false";'
    }
    if (doc.selectStation.includes('S3')) {
      query += 'thw:docketS3 "true";'
    } else {
      query += 'thw:docketS3 "false";'
    }
    if (doc.selectStation.includes('S4')) {
      query += 'thw:docketS4 "true";'
    } else {
      query += 'thw:docketS4 "false";'
    }

    if (doc.selectStation.includes('S6')) {
      query += 'thw:docketS6 "true";'
    } else {
      query += 'thw:docketS6 "false";'
    }
    query += 'thw:docketIdentification "' + doc.signatureB + '";'
    query += 'thw:advisorTickA "' + doc.advisorAchecked + '";'
    query += 'thw:advisorA "' + doc.advisorA + '";'
    query += 'thw:advisorTickB "' + doc.advisorBchecked + '";'
    query += 'thw:advisorB "' + doc.advisorB + '";'
    query += 'thw:advisorTickC "' + doc.advisorCchecked + '";'
    query += 'thw:advisorC "' + doc.advisorC + '";'
    query += 'thw:advisorTickD "' + doc.advisorDchecked + '";'
    query += 'thw:advisorD "' + doc.advisorD + '";'
    query += 'thw:advisorTickE "' + doc.advisorEchecked + '";'
    query += 'thw:advisorE "' + doc.advisorE + '";'
    query += 'thw:connectionTickA "' + doc.verbAchecked + '";'
    query += 'thw:connectionA "' + doc.verbA + '";'
    query += 'thw:connectionTickB "' + doc.verbBchecked + '";'
    query += 'thw:connectionB "' + doc.verbB + '";'
    query += 'thw:connectionTickC "' + doc.verbCchecked + '";'
    query += 'thw:connectionC "' + doc.verbC + '";'
    query += 'thw:connectionTickD "' + doc.verbDchecked + '";'
    query += 'thw:connectionD "' + doc.verbD + '";'
    query += 'thw:connectionTickE "' + doc.verbEchecked + '";'
    query += 'thw:connectionE "' + doc.verbE + '";'
    query += 'thw:annotations "' + doc.annotations + '".'
    query += 'id:activeAIC thw:currentCount "' + rid + '" .} }'
    return query
  },
  /** functions that creates SPARQL select query to retrieve all
   *  document data from QuitStore
   *  @return = Select query
   */
  allDocumentsQuery: function () {
    // default prefixes + graph prefixes
    let query = 'PREFIX id: <http://www.na17b.org/thw/resource/>\n'
    query += 'PREFIX owl: <http://www.w3.org/2002/07/owl#>\n'
    query += 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n'
    query += 'PREFIX thw: <http://www.na17b.org/thw/>\n'
    query += 'PREFIX xml: <http://www.w3.org/XML/1998/namespace>\n'
    query += 'PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n'
    query += 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n'

    // selecting all document data in table form from QuitStore
    query += 'SELECT *'
    query += '\n FROM <http://www.na17b.org/thw/>\n'
    query += 'WHERE{\n ?uri rdf:type thw:document;'
    query += 'thw:topRadio ?topRadio;'
    query += 'thw:topPhone ?topPhone;'
    query += 'thw:topFax ?topFax;'
    query += 'thw:topDFU ?topDFU;'
    query += 'thw:topCourier ?topCourier;'
    query += 'thw:outgoing ?outgoing;'
    query += 'thw:primaryDate ?primaryDate;'
    query += 'thw:primaryTime ?primaryTime;'
    query += 'thw:primaryHdZ ?primaryHdZ;'
    /* Some attributes left out due to HTTP packet
       size restrictions, will be fixed later
    query += 'thw:secondaryDate ?secondaryDate;'
    query += 'thw:secondaryTime ?secondaryTime;'
    query += 'thw:secondaryHdZ ?secondaryHdZ;'
    */
    query += 'thw:numberTB ?numberTB;'
    query += 'thw:receiverName ?receiverName;'

    query += 'thw:midRadio ?midRadio;'
    query += 'thw:midPhone ?midPhone;'
    query += 'thw:midFax ?midFax;'
    query += 'thw:midDFU ?midDFU;'
    query += 'thw:midCourier ?midCourier;'
    query += 'thw:announcement ?announcement;'
    query += 'thw:message ?message;'
    query += 'thw:instant ?instant;'
    query += 'thw:flash ?flash;'
    query += 'thw:talkNote ?talkNote;'
    query += 'thw:callNumber ?callNumber;'
    query += 'thw:adress ?adress;'
    query += 'thw:content ?content;'
    query += 'thw:createTime ?createTime;'
    query += 'thw:identification ?identification;'
    query += 'thw:role ?role;'
    query += 'thw:sender ?sender;'
    query += 'thw:docketTime ?docketTime;'
    query += 'thw:docketIdentification ?docketIdentification;'
    query += 'thw:docketLeader ?docketLeader;'
    query += 'thw:docketS1 ?docketS1;'
    /*
    query += 'thw:docketS2 ?docketS2;'
    query += 'thw:docketS3 ?docketS3;'
    query += 'thw:docketS4 ?docketS4;'
    query += 'thw:docketS6 ?docketS6;'
    */
    query += 'thw:advisorTickA ?advisorTickA;'
    query += 'thw:advisorA ?advisorA;'
    /*
    query += 'thw:advisorTickB ?advisorTickB;'
    query += 'thw:advisorB ?advisorB;'
    query += 'thw:advisorTickC ?advisorTickC;'
    query += 'thw:advisorC ?advisorC;'
    query += 'thw:advisorTickD ?advisorTickD;'
    query += 'thw:advisorD ?advisorD;'
    query += 'thw:advisorTickE ?advisorTickE;'
    query += 'thw:advisorE ?advisorE;'
    */
    query += 'thw:connectionTickA ?connectionTickA;'
    query += 'thw:connectionA ?connectionA;'
    /*
    query += 'thw:connectionTickB ?connectionTickB;'
    query += 'thw:connectionB ?connectionB;'
    query += 'thw:connectionTickC ?connectionTickC;'
    query += 'thw:connectionC ?connectionC;'
    query += 'thw:connectionTickD ?connectionTickD;'
    query += 'thw:connectionD ?connectionD;'
    query += 'thw:connectionTickE ?connectionTickE;'
    query += 'thw:connectionE ?connectionE;'
    */
    query += 'thw:annotations ?annotations.'
    query += '}'
    return query
  }
}
