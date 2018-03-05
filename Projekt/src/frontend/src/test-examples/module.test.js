/*
import /Projekt/src/frontend/src/examples/module.js
@ already substitutes for /Projekt/src/frontend/src/ and fileendings are not necessary
*/
import module from '@/test-examples/module'

/*
testing a function by:
test('String describing the test', () => {
  expect(module.function(args)).matcher(expectedValue)
})
matchers allow to test values in different ways
matchers used in this example are:
toBe - checks that a value is as expected
toBeGreaterThan - checks that a value exceeds a certain minimum
toMatch - checks that a String matches a regular expression
not.toMatch - checks that a String does not match a regular expression
toContain - checks that an Array contains a certain Object
arrayContaining - checks that an Array contains all Objects in a certain Array
toBeInstanceOf - checks that an Object is an Instance of a certain class
not.toBeNull - checks that a value is unequal to null

For a complete list of matchers visit: https://facebook.github.io/jest/docs/en/expect.html
*/


//Testing if product(2,2) returns 4
test('product(2,2)=4', () => {
  expect(module.product(2, 2)).toBe(4)
})

//Testing if the product of a positive integer and a negative integer is less than 1
test('product(negative,positive)<1', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = -1; b > -10; b--) {
      expect(module.product(a, b)).not.toBeGreaterThan(0)
    }
  }
})

//Testing if a String contains the 'Bass'
test('Bass in getGreatBarockTitle', () => {
  expect(module.getGreatBarockTitle()).toMatch(/Bass/)
})

//Testing if a String does not contain 'autotune' (not case sensitive)
test('autotune not in getGreatBarockTitle (not case sensitive)', () => {
  expect(module.getGreatBarockTitle().toLowerCase()).not.toMatch(/autotune/)
})

//Testing if an array contains 'broccoli'
test('getShoppingList contains broccoli', () => {
  expect(module.getShoppingList()).toContain('Broccoli')
})

//Testing if an array contains 'Broccoli' and 'Hummus'
test('getShoppingList contains hummus twice', () => {
  expect(module.getShoppingList()).toEqual(expect.arrayContaining(['Broccoli', 'Hummus']))
})

//Testing if the object returned by getRedCube is an instance of Cube
test('getRedCube returns instance of Cube', () => {
  expect(module.getRedCube(10)).toBeInstanceOf(module.Cube)
})

//Testing if the property color, from the object returned by getRedCube is  not nulll
test('getRedCube returns instance of Cube', () => {
  expect(module.getRedCube(10).color).not.toBeNull()
})
