const actionEnum = Object.freeze({
  copy: 0,
  arrayInsertConditional: 1
})

const typeEnum = Object.freeze({
  string: 0,
  boolean: 1
})

const strToBool = function (string) {
  switch (string.toLowerCase()) {
    case 'false': case 'no': case '0': case '': return false
    default: return true
  }
}

const translateBinding = function (src, ruleset) {
  var result = {}
  for (let key in src) {
    if (key in ruleset) {
      let rule = ruleset[key]

      var newValue

      // convert to specified type
      switch (rule.type) {
        case typeEnum.string:
          newValue = src[key].value + ''
          break
        case typeEnum.boolean:
          newValue = strToBool(src[key].value + '')
          break
      }

      // apply specified action
      switch (rule.action) {
        // copy property to {key} if supplied or keep old key name otherwise
        case actionEnum.copy:
          if ('key' in rule) {
            result[rule.key] = newValue
          } else {
            result[key] = newValue
          }
          break

        // insert {value} into {key} if property evaluates to true
        case actionEnum.arrayInsertConditional:
          if (newValue) {
            if (!(rule.key in result)) {
              result[rule.key] = []
            }
            result[rule.key].push(rule.value)
          }
          break
      }
    }
  }
  return result
}

export const handleResponse = function (response) {
  var result = []
  for (let binding of response.results.bindings) {
    result.push(translateBinding(binding, translations))
  }
  return result
}

/*
  Syntax  <sparqlResponseProperty>: {type: <datatype>, action: <action>, [arg1: <value1>, arg2: <value2>, ...]}

  datatype: data in the response is given as string
            <datatype> specifies how the data will be interpreted

            datatypes:  see typeEnum

  action:   specifies how data is translated

            actions:    copy        arguments:  key(optional)
                        translates the property value as is with the original key or another if the key argument is supplied

                        e.g.  rules:  test: {type: typeEnum.boolean, action: actionEnum.copy}
                                      - {test: 'false'} will translate to {test: false}

                                      test: {type: typeEnum.boolean, action: actionEnum.copy, key: 'newKey'}
                                      - {test: 'true'} will translate to {newKey: true}

                        arrayInsertConditional    arguments: key, value
                        if the property evaluates to true, insert <value> into the array at <key>

                        e.g.  rules:  test: {type: typeEnum.boolean, action: actionEnum.arrayInsertConditional, key: 'newKey', value: 'abc'}
                                      - {test: 'true'} will translate to {newKey: ['abc']}

                                      test1: {type: typeEnum.boolean, action: actionEnum.arrayInsertConditional, key: 'newKey', value: '1'}
                                      test2: {type: typeEnum.boolean, action: actionEnum.arrayInsertConditional, key: 'newKey', value: '2'}
                                      test3: {type: typeEnum.boolean, action: actionEnum.arrayInsertConditional, key: 'newKey', value: '3'}
                                      - {test1: 'true', test2: 'false', test3: 'true'} will translate to {newKey: ['1', '3']}
*/
const translations = Object.freeze({
  // top area
  topRadio: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'typeTop',
    value: 'Funk'},
  topPhone: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'typeTop',
    value: 'Telefon'},
  topFax: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'typeTop',
    value: 'Telefax'},
  topDFU: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'typeTop',
    value: 'DFÜ'},
  topCourier: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'typeTop',
    value: 'Kurier/Melder'},

  outgoing: {type: typeEnum.boolean,
    action: actionEnum.copy,
    key: 'isAusgang'},
  primaryHdZ: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'hdzIncomingA'},
  primaryTime: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'timeIncomingA'},
  primaryDate: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'dateIncomingA'},

  secondaryHdZ: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'hdzIncomingB'},
  secondaryTime: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'timeIncomingB'},
  secondaryDate: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'dateIncomingB'},

  numberTB: {type: typeEnum.string,
    action: actionEnum.copy},
  receiverName: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'nameR'},

  // middle area
  midRadio: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'typeMiddle',
    value: 'Funk'},
  midPhone: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'typeMiddle',
    value: 'Telefon'},
  midFax: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'typeMiddle',
    value: 'Telefax'},
  midDFU: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'typeMiddle',
    value: 'DFÜ'},
  midCourier: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'typeMiddle',
    value: 'Kurier/Melder'},

  announcement: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'typeCall',
    value: 'DURCHSAGE'},
  message: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'typeCall',
    value: 'Spruch'},
  instant: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'priority',
    value: 'Sofort'},
  flash: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'priority',
    value: 'Blitz'},
  talkNote: {type: typeEnum.boolean,
    action: actionEnum.copy,
    key: 'gNote'},
  callNumber: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'phone'},

  adress: {type: typeEnum.string,
    action: actionEnum.copy},
  content: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'message'},
  createTime: {type: typeEnum.string,
    action: actionEnum.copy},
  identification: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'signature'},
  role: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'position'},
  sender: {type: typeEnum.string,
    action: actionEnum.copy},

  // bottom area
  docketTime: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'signatureTime'},

  docketIdentification: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'signatureB'},
  docketLeader: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'selectStation',
    value: 'Leiter'},
  docketS1: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'selectStation',
    value: 'S1'},
  docketS2: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'selectStation',
    value: 'S2'},
  docketS3: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'selectStation',
    value: 'S3'},
  docketS4: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'selectStation',
    value: 'S4'},
  docketS6: {type: typeEnum.boolean,
    action: actionEnum.arrayInsertConditional,
    key: 'selectStation',
    value: 'S6'},

  advisorA: {type: typeEnum.string,
    action: actionEnum.copy},
  advisorB: {type: typeEnum.string,
    action: actionEnum.copy},
  advisorC: {type: typeEnum.string,
    action: actionEnum.copy},
  advisorD: {type: typeEnum.string,
    action: actionEnum.copy},
  advisorE: {type: typeEnum.string,
    action: actionEnum.copy},
  advisorTickA: {type: typeEnum.boolean,
    action: actionEnum.copy,
    key: 'advisorAchecked'},
  advisorTickB: {type: typeEnum.boolean,
    action: actionEnum.copy,
    key: 'advisorBchecked'},
  advisorTickC: {type: typeEnum.boolean,
    action: actionEnum.copy,
    key: 'advisorCchecked'},
  advisorTickD: {type: typeEnum.boolean,
    action: actionEnum.copy,
    key: 'advisorDchecked'},
  advisorTickE: {type: typeEnum.boolean,
    action: actionEnum.copy,
    key: 'advisorEchecked'},

  connectionA: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'verbA'},
  connectionB: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'verbB'},
  connectionC: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'verbC'},
  connectionD: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'verbD'},
  connectionE: {type: typeEnum.string,
    action: actionEnum.copy,
    key: 'verbE'},
  connectionTickA: {type: typeEnum.boolean,
    action: actionEnum.copy,
    key: 'verbAchecked'},
  connectionTickB: {type: typeEnum.boolean,
    action: actionEnum.copy,
    key: 'verbBchecked'},
  connectionTickC: {type: typeEnum.boolean,
    action: actionEnum.copy,
    key: 'verbCchecked'},
  connectionTickD: {type: typeEnum.boolean,
    action: actionEnum.copy,
    key: 'verbDchecked'},
  connectionTickE: {type: typeEnum.boolean,
    action: actionEnum.copy,
    key: 'verbEchecked'},

  annotations: {type: typeEnum.string, action: actionEnum.copy}
})
