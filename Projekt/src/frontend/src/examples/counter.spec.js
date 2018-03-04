/*
 * mounting allows the component to be tested in isolation while also rendering its child components
 * if rendering childs is not necessary use 'import { shallow } from '@vue/test-utils' ' and 'const wrapper = shallow(Component)' instead of 'const wrapper = mount(Component)'
 */
import { mount } from '@vue/test-utils'

/*
 * import /Projekt/src/frontend/src/examples/counter.js
 * @ already substitutes for /Projekt/src/frontend/src/ and fileendings are not necessary
*/
import Counter from '@/examples/counter.js'

/*
 * describing test for Counter:
 * testing a gui-object by:
 * it('String descibing the test', () => {
 *   expect(wrapperproperty).matcher(value to match against)
 * })
 * for more info visit "https://vue-test-utils.vuejs.org/en/guides/getting-started.html"
 */
describe('Counter', () => {

  //mounted components are returned inside a wrapper
  //wrapper allows for easy manipulation, querying, etc.
  const wrapper = mount(Counter)

  //first test case, checking if HTML output is as expected
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  //checking if button exists
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  //checking if buttonclick increments count
  it('button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    //wrapper.vm returns vue instance
    expect(wrapper.vm.count).toBe(1)
  })
})
