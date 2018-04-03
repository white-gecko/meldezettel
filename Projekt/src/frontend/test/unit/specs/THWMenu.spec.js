import THWMenu from '@/components/THWMenu'
import { mount } from '@vue/test-utils'
import expect from 'expect'

describe('THWMenu', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(THWMenu)
  })

  it('let\'s you choose the dashboard', () => {
    expect(wrapper.html()).toContain('index="home"')
  })

  it('let\'s you choose the ticket creation mask', () => {
    expect(wrapper.html()).toContain('index="create"')
  })

  it('let\'s you open the saved draft', () => {
    expect(wrapper.html()).toContain('index="draft"')
  })
})
