import { shallow, createLocalVue } from '@vue/test-utils'
import THWDashboard from '@/components/THWDashboard'
import expect from 'expect'
import Vuex from 'vuex'
import store from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('THWDashboard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(THWDashboard, { store })
  })

  it('displays the author', () => {
    expect(wrapper.html()).toContain('prop="hdzIncomingA"')
  })

  it('displays the creation date', () => {
    expect(wrapper.html()).toContain('prop="dateIncomingA"')
  })

  it('displays the creation time', () => {
    expect(wrapper.html()).toContain('prop="timeIncomingA"')
  })

  it('displays the content of a ticket', () => {
    expect(wrapper.html()).toContain('prop="message"')
  })
})
