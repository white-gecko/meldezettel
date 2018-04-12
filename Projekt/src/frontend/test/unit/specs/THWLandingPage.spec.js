import { mount, createLocalVue } from '@vue/test-utils'
import THWLandingPage from '@/components/THWLandingPage'
import Vuex from 'vuex'
import expect from 'expect'
import store from '../../../src/store/index.js'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'Home'
    }
  ]
})

describe('THWLandingPage', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(THWLandingPage, { store, localVue })
  })

  it('saves new operations to Quitstore', () => {
    wrapper.vm.submitOperation = jest.fn()
    wrapper.find('#saveOperationButton').trigger('click')
    expect(wrapper.vm.submitOperation).toHaveBeenCalled()
  })

  it('validates input data', () => {
    wrapper.vm.validateUser = jest.fn()
    wrapper.find('#validateUserButton').trigger('click')
    expect(wrapper.vm.validateUser).toHaveBeenCalled()
  })

  it('resets input fields', () => {
    wrapper.vm.resetUserData = jest.fn()
    wrapper.find('#resetUserInputButton').trigger('click')
    expect(wrapper.vm.resetUserData).toHaveBeenCalled()
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
