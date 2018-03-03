//mounting allows the component to be tested in isolation
import { mount } from '@vue/test-utils'
import Counter from '@/examples/counter.js'

//describing test for Counter
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
    expect(wrapper.vm.count).toBe(1)
  })

})
