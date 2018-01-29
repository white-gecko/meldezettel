import THWMenu from '@/components/THWMenu'
import { mount } from 'vue-test-utils'
import expect from 'expect'

describe('THWMenu', () => {

  let wrapper;

  beforeEach( () => {
    wrapper = mount(THWMenu)
  })

  it('let\'s you choose the dashboard', () => {
    expect(wrapper.html()).toContain('index="home"')
  })

  it('let\'s you choose the ticket creation mask', () => {
    expect(wrapper.html()).toContain('index="create"')
  })

  it('let\'s you choose the role selection menu', () => {
    expect(wrapper.html()).toContain('index="role"')
  })
})
