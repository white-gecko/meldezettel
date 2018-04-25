import { parseResponse } from '@/sparql_help/sparql_response.js'


test('sparql response parsed correctly', () => {
  let s = ['12345', 'asdfghi', '123asd456', 'asd123fgh', '456', '789', '123']
  let p = ['prop1', 'prop2', 'prop3', 'prop4', 'prop5', 'prop6', 'prop7']
  let o = ['string', '12345', '12.345', 'true', 'false', 'asd', 'asd']
  let types = ['string', 'integer', 'decimal', 'boolean', 'boolean', undefined, 'asd']
  let expected = ['string', 12345, 12.345, true, false, 'asd', undefined]

  for (let type of types) {
    type = 'http://www.w3.org/2001/XMLSchema#' + type
  }

  let bindings = []

  for (let i = 0; i < s.length; i++) {
    bindings[i] = {
      's': {'type': 'uri', 'value': 'http://www.na17b.org/thw/resource/' + s[i]},
      'p': {'type': 'uri', 'value': 'http://www.na17b.org/thw/' + p[i]},
      'o': {'type': 'typed-literal', 'value': o[i], 'datatype': types[i]}
    }
  }

  let test = parseResponse({data: {'results':{'bindings': bindings}}})

  for (let i = 0; i < test.length; i++) {
    expect(test[i].s).toBe(s[i])
    expect(test[i].p).toBe(p[i])
    expect(test[i].o).toBe(expected[i])
  }
})
