export default {
  // function which creates a SPARQL query based on given doc object

  formdataToInsertQuery: function (doc) {
    // default prefixes + graph prefixes
    let query = 'PREFIX : <http://www.na17b.org/thw/> '
    query += 'PREFIX owl: <http://www.w3.org/2002/07/owl#> '
    query += 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> '
    query += 'PREFIX thw: <http://www.na17b.org/thw/> '
    query += 'PREFIX xml: <http://www.w3.org/XML/1998/namespace> '
    query += 'PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> '
    query += 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> '

    let uri = ''

    // Wrapper for inserting a new document to quitStore
    if (doc.documentID < 100000) {

      // activeAIC = manual autoincrement => overwritten by this
      query += 'DELETE DATA { GRAPH <http://www.na17b.org/thw/> {'
      query += 'thw:resource/activeAIC thw:currentCount ?oldcount } }'

      query += 'INSERT DATA { GRAPH <http://www.na17b.org/thw/> {'
      // ?count=?oldcount+1
      uri = '(URI(CONCAT("thw:resource/",str(?count),">")))'
    }

    // Wrapper for updating a document in quitStore
    // updating via deleting all data related to the URI
    //and adding new data to same URI
    else {
      query += 'DELETE DATA { GRAPH <http://www.na17b.org/thw/> {'
      query += 'thw:resource/' + doc.documentID + ' ?x ?y } }'

      query += 'INSERT DATA { GRAPH <http://www.na17b.org/thw/> {'

      uri = 'thw:resource/' + doc.documentID
    }

    query += uri + 'rdf:type thw:document;'

    // top area on document
    query += 'thw:topPhone "' + doc.typeTop[1] + '";'
    query += 'thw:topFax "' + doc.typeTop[2] + '";'
    query += 'thw:topDFU "' + doc.typeTop[3] + '";'
    query += 'thw:topCourier "' + doc.typeTop[4] + '";'
    query += 'thw:outgoing "' + doc.isAusgang + '";'
    query += 'thw:primaryDate "' + doc.dateIncomingA + '";'
    query += 'thw:primaryTime "' + doc.timeIncomingA + '";'
    query += 'thw:primaryHdZ "' + doc.hdzIncomingA + '";'

    // toggle on "Ausgehend" => 2 date,time,hdz inputs
    if (doc.isAusgang) {
      query += 'thw:secondaryDate "' + doc.dateIncomingB + '";'
      query += 'thw:secondaryTime "' + doc.timeIncomingB + '";'
      query += 'thw:secondaryHdZ "' + doc.hdzIncomingB + '";'
    }

    query += 'thw:numberTB "' + doc.numberTB + '";'
    query += 'thw:receiverName "' + doc.nameR + '";'
    // middle area on document
    query += 'thw:midRadio "' + doc.typeMiddle[0] + '";'
    query += 'thw:midPhone "' + doc.typeMiddle[1] + '";'
    query += 'thw:midFax "' + doc.typeMiddle[2] + '";'
    query += 'thw:midDFU "' + doc.typeMiddle[3] + '";'
    query += 'thw:midCourier "' + doc.typeMiddle[4] + '";'
    query += 'thw:announcement "' + doc.typeCall[0] + '";'
    query += 'thw:message "' + doc.typeCall[1] + '";'
    query += 'thw:instant "' + doc.priority[0] + '";'
    query += 'thw:flash "' + doc.priority[1] + '";'
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
    query += 'thw:docketIdentification "' + doc.signatureB + '";'
    query += 'thw:docketLeader "' + doc.selectStation[0] + '";'
    query += 'thw:docketS1 "' + doc.selectStation[1] + '";'
    query += 'thw:docketS2 "' + doc.selectStation[2] + '";'
    query += 'thw:docketS3 "' + doc.selectStation[3] + '";'
    query += 'thw:docketS4 "' + doc.selectStation[4] + '";'
    query += 'thw:docketS6 "' + doc.selectStation[5] + '";'
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

    // handling the manual autoincrement
    if (doc.documentID < 100000) {
      query += 'thw:resource/activeAIC thw:currentCount ?count.} }'

      // receive highest used URI suffix from autoincrement element
      query += 'WHERE{ GRAPH <http://www.na17b.org/thw/> {'
      query += 'thw:resource/activeAIC thw:currentCount ?oldcount.'
      // assign ?oldcount+1 to ?count
      query += 'BIND((?oldcount+1) AS ?count)'
    }

    query += '} }'

    return query
  },

  allDocumentsQuery: function () {
    // default prefixes + graph prefixes
    let query = 'PREFIX id: <http://www.na17b.org/thw/resource/> '
    query += 'PREFIX owl: <http://www.w3.org/2002/07/owl#> '
    query += 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>'
    query += 'PREFIX thw: <http://www.na17b.org/thw/>'
    query += 'PREFIX xml: <http://www.w3.org/XML/1998/namespace>'
    query += 'PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>'
    query += 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>'
    query += 'BASE <http://www.na17b.org/thw/>'

    // selecting all document data in table form from QuitStore
    query += 'SELECT ?uri ?topRadio ?topPhone ?topFax ?topDFU ?topCourier '
    query += '?outgoing ?primaryDate ?primaryTime ?primaryHdZ '
    query += '?secondaryDate ?secondaryTime ?secondaryHdZ ?numberTB '
    query += '?receiverName ?midRadio ?midPhone ?midFax ?midDFU '
    query += '?midCourier ?announcement ?message ?instant ?flash ?talkNote '
    query += '?callNumber ?adress ?content ?createTime '
    query += '?identification ?role ?sender ?docketTime ?docketIdentification '
    query += '?docketLeader ?docketS1 ?docketS2 '
    query += '?docketS3 ?docketS4 ?docketS6 ?advisorTickA ?advisorA '
    query += '?advisorTickB ?advisorB ?advisorTickC ?advisorC '
    query += '?advisorTickD ?advisorD ?advisorTickE ?advisorE ?connectionTickA'
    query += ' ?connectionA ?connectionTickB ?connectionB '
    query += '?connectionTickC ?connectionC ?connectionTickD ?connectionD '
    query += '?connectionTickE ?connectionE ?annotations '
    query += 'FROM <http://www.na17b.org/thw/>'
    query += 'WHERE{ ?uri rdf:type thw:document;'
    query += 'thw:topRadio ?topRadio;'
    query += 'thw:topPhone ?topPhone;'
    query += 'thw:topFax ?topFax;'
    query += 'thw:topDFU ?topDFU;'
    query += 'thw:topCourier ?topCourier;'
    query += 'thw:outgoing ?outgoing;'
    query += 'thw:primaryDate ?primaryDate;'
    query += 'thw:primaryTime ?primaryTime;'
    query += 'thw:primaryHdZ ?primaryHdZ;'

    query += 'thw:secondaryDate ?secondaryDate;'
    query += 'thw:secondaryTime ?secondaryTime;'
    query += 'thw:secondaryHdZ ?secondaryHdZ;'

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
    query += 'thw:docketS2 ?docketS2;'
    query += 'thw:docketS3 ?docketS3;'
    query += 'thw:docketS4 ?docketS4;'
    query += 'thw:docketS6 ?docketS6;'
    query += 'thw:advisorTickA ?advisorTickA;'
    query += 'thw:advisorA ?advisorA;'
    query += 'thw:advisorTickB ?advisorTickB;'
    query += 'thw:advisorB ?advisorB;'
    query += 'thw:advisorTickC ?advisorTickC;'
    query += 'thw:advisorC ?advisorC;'
    query += 'thw:advisorTickD ?advisorTickD;'
    query += 'thw:advisorD ?advisorD;'
    query += 'thw:advisorTickE ?advisorTickE;'
    query += 'thw:advisorE ?advisorE;'
    query += 'thw:connectionTickA ?connectionTickA;'
    query += 'thw:connectionA ?connectionA;'
    query += 'thw:connectionTickB ?connectionTickB;'
    query += 'thw:connectionB ?connectionB;'
    query += 'thw:connectionTickC ?connectionTickC;'
    query += 'thw:connectionC ?connectionC;'
    query += 'thw:connectionTickD ?connectionTickD;'
    query += 'thw:connectionD ?connectionD;'
    query += 'thw:connectionTickE ?connectionTickE;'
    query += 'thw:connectionE ?connectionE;'
    query += 'thw:annotations ?annotations.'
    query += '}'
    return query
  }
}
