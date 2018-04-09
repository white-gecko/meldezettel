import { mount, createLocalVue } from '@vue/test-utils'
import THWLandingPage from '@/components/THWLandingPage'
import Vuex from 'vuex'
import expect from 'expect'
import store from '../../../src/store/index.js'
import Vue from 'vue'

const localVue = createLocalVue()
localVue.use(Vuex)

function setStoredOperations (Component, storedOperation) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: storedOperation }).$mount()
  return vm.$el.textContent
}

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
  it('sets stored operations', () => {
    expect(setStoredOperations(THWLandingPage, {
      operationName: 'Frederike',
      operationAdress: 'THW EAL Tübingen',
      operationStaffType: 'FgrFuK',
      operationID: '1337'
    })).toBe({
      operationName: "Frederike",
      operationAdress: "THW EAL Tübingen",
      operationStaffType: "FgrFuK",
      operationID: "1337"
    })
  })
})
