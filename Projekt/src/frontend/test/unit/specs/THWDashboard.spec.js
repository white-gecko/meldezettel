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
    expect(wrapper.html()).toContain('prop="creator"')
  })

  it('displays the creation date', () => {
    expect(wrapper.html()).toContain('prop="date"')
  })

  it('displays the creation time', () => {
    expect(wrapper.html()).toContain('prop="time"')
  })

  it('displays the content of a ticket', () => {
    expect(wrapper.html()).toContain('prop="content"')
  })
})
