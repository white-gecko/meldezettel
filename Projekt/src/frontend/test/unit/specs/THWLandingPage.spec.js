import { mount, createLocalVue } from '@vue/test-utils'
import THWLandingPage from '@/components/THWLandingPage'
import Vuex from 'vuex'
import expect from 'expect'
import store from '../../../src/store/index.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('THWLandingPage', () => {
  let wrapper
  let mutations

  beforeEach(() => {
    mutations = {
      setUser: jest.fn()
    }

    wrapper = mount(THWLandingPage, { store, localVue })
  })

  it('binds to name', () => {
    expect(wrapper.vm.userData.sender).toBe('')
  })
  it('binds to Hdz', () => {
    expect(wrapper.vm.userData.identification).toBe('')
  })
  it('binds to role', () => {
    expect(wrapper.vm.userData.role).toBe('SGL')
  })
  it('binds to position', () => {
    expect(wrapper.vm.userData.position).toBe('')
  })
  it('binds to operation', () => {
    expect(wrapper.vm.userData.operation).toEqual({
      operationName: '',
      operationAdress: '',
      operationStaffType: '',
      operationID: ''
    })
  })
})
