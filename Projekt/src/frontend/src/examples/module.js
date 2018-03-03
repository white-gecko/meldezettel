// very basic module to be tested

// multiplication
function product (a, b) {
  return a * b
}
// module.export.functionName = functionName allows the testmodule to use our function/class/etc.
module.exports.product = product

// returns String
function getGreatBarockTitle () {
  return 'Canone per 3 Violini e Basso'
}
module.exports.getGreatBarockTitle = getGreatBarockTitle

// returns Array
function getShoppingList () {
  return ['Broccoli', 'Cottage Cheese', 'Hummus', 'Broccoli']
}
module.exports.getShoppingList = getShoppingList

// simple cube class
class Cube {
  constructor (length) {
    this.length = length
    this.color = null
  }
}
module.exports.Cube = Cube

// returns instance of cube with color set to 'red' and custom length
function getRedCube (length) {
  var c = new Cube(length)
  c.color = 'red'
  return c
}
module.exports.getRedCube = getRedCube
