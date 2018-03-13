import { mount, createLocalVue } from '@vue/test-utils'
import THWLandingPage from '@/components/THWLandingPage'
import Vuex from 'vuex'
import expect from 'expect'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('THWLandingPage', () => {
  let wrapper
  let store
  let mutations

  beforeEach(() => {
    mutations = {
      setUser: jest.fn()
    }

    store = new Vuex.Store({
      state: {},
      mutations
    })

    wrapper = mount(THWLandingPage, { store, localVue })
  })

  it('binds to role', () => {
    expect(wrapper.vm.userData.role).toBe('')
  })

  it('binds to name', () => {
    expect(wrapper.vm.userData.sender).toBe('')
  })
})