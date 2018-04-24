const thw = 'http://www.na17b.org/thw/'
const id = 'http://www.na17b.org/thw/resource/'
const xsd = 'http://www.w3.org/2001/XMLSchema#'

/**
 * Converts a string to a boolean
 * @param {*String} string String to be converted
 * @return returns boolean value according to given string
 */
const strToBool = function (string) {
  switch (string.toLowerCase()) {
    case 'false': case 'no': case '0': case '': return false
    default: return true
  }
}

/**
 * Parses a sparql response literal
 * @param {*Object} obj Object containing the literal
 * @param {*String} prefix Prefix to be omitted from the datatype (default is http://www.w3.org/2001/XMLSchema#)
 * @return Returns the data with the correct type from a sparql response literal
 */
const parseLiteral = function (obj, prefix) {
  prefix = prefix || xsd

  let datatypeRaw = obj['datatype']
  let value = obj['value']

  if (datatypeRaw !== undefined) {
    let datatype = obj['datatype'].replace(prefix, '')

    switch (datatype) {
      case 'boolean': return strToBool(value)
      case 'integer': return parseInt(value)
      case 'decimal': return parseFloat(value)
      case 'string': return value
      default:
        console.error('unsupported datatype')
        return undefined
    }
  } else {
    return value
  }
}

/**
 * Omits the longest matching prefix from a sparql response uri
 * @param {*Object} obj Object containing the uri
 * @param {*String} prefix List of prefixes to be omitted
 * @return returns the uri without prefix
 */
const parseUri = function (obj, prefixes) {
  let value = obj['value']
  let longestMatch = ''
  for (let prefix of prefixes) {
    if (value.indexOf(prefix) !== -1 && longestMatch.length < prefix.length) {
      longestMatch = prefix
    }
  }

  return value.replace(longestMatch, '')
}

/**
 * parses a sparql response containing literals and uris
 * @param {*Object} obj sparql response
 * @return returns the modified bindings of the response
 */
export const parseResponse = function (obj) {
  let bindings = obj.data.results.bindings
  for (let binding of bindings) {
    for (let key in binding) {
      if (binding[key]['type'] === 'uri') {
        binding[key] = parseUri(binding[key], [thw, id])
      } else {
        binding[key] = parseLiteral(binding[key])
      }
    }
  }
  return bindings
}
