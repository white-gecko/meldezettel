import { mount, createLocalVue } from '@vue/test-utils'
import THWForm from '@/components/THWForm'
import Vuex from 'vuex'
import expect from 'expect'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

const router = new VueRouter()

describe('THWForm', () => {
  let wrapper
  let store
  let actions

  beforeEach(() => {
    actions = {
      saveForm: jest.fn(),
      saveNewFormAction: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
    wrapper = mount(THWForm, { store, localVue, router })
  })

  /*
  it ('binds to hdzIncomingA', () => {
    expect(wrapper.vm.formdata.hdzIncomingA).toBe('')
  })

  it ('binds to creationTime', () => {
    expect(wrapper.vm.formdata.timeIncomingA).toBe('')
  })

  it ('binds to creationDate', () => {
    expect(wrapper.vm.formdata.dateIncomingA).toBe('')
  })

  it ('binds to message', () => {
    expect(wrapper.vm.formdata.message).toBe('')
  })
  */

  it('pushes a new ticket to the store', () => {
      wrapper.find('sendButtonNew').trigger('click')
      expect(actions.saveForm).toHaveBeenCalled()
    })
})
