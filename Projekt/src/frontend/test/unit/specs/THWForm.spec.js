import { mount, createLocalVue } from '@vue/test-utils'
import THWForm from '@/components/THWForm'
import Vuex from 'vuex'
import expect from 'expect'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('THWForm', () => {
  let wrapper
  let store
  let mutations

  beforeEach(() => {
    mutations = {
      saveTicket: jest.fn()
    }
    store = new Vuex.Store({
      state: {}, mutations
    })
    wrapper = mount(THWForm, { store, localVue })
  })

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
  /*
  it('pushes a new ticket to the store', () => {
      wrapper.find('el-button').trigger('click')
      expect(mutations.saveTicket).toHaveBeenCalled()
    })
  */
})
