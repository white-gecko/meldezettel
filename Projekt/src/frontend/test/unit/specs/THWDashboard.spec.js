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
    expect(wrapper.html()).toContain('prop="primaryHdZ"')
  })

  it('displays the creation date', () => {
    expect(wrapper.html()).toContain('prop="primaryDate"')
  })

  it('displays the creation time', () => {
    expect(wrapper.html()).toContain('prop="primaryTime"')
  })

  it('displays the content of a ticket', () => {
    expect(wrapper.html()).toContain('prop="content"')
  })
})
