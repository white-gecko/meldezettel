import { parseResponse } from '@/sparql_help/sparql_response.js'


test('sparql response parsed correctly', () => {
  let s = ['12345', 'asdfghi', '123asd456', 'asd123fgh']
  let p = ['prop1', 'prop2', 'prop3', 'prop4']
  let o = ['string', '12345', '12.345', 'true']
  let types = ['string', 'integer', 'decimal', 'boolean']
  let expected = ['string', 12345, 12.345, true]

  let bindings = []

  for (let i = 0; i < s.length; i++) {
    bindings[i] = {
      's': {'type': 'uri', 'value': 'http://www.na17b.org/thw/resource/' + s[i]},
      'p': {'type': 'uri', 'value': 'http://www.na17b.org/thw/' + p[i]},
      'o': {'type': 'typed-literal', 'value': o[i], 'datatype': 'http://www.w3.org/2001/XMLSchema#' + types[i]}
    }
  }

  test = parseResponse({'results':{'bindings': bindings}})
  
  for (let i = 0; i < test.length; i++) {
    expect(test[i].s).toBe(s[i])
    expect(test[i].p).toBe(p[i])
    expect(test[i].o).toBe(expected[i])
  }
})