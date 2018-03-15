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
      state: {},
      mutations
    })

    wrapper = mount(THWForm, { store, localVue })
  })

  it('binds to primaryHdZ', () => {
    expect(wrapper.vm.formdata.primaryHdZ).toBe('')
  })

  it('binds to primaryTime', () => {
    expect(wrapper.vm.formdata.primaryTime).toBe('')
  })

  it('binds to primaryDate', () => {
    expect(wrapper.vm.formdata.primaryDate).toBe('')
  })

  it('binds to content', () => {
    expect(wrapper.vm.formdata.content).toBe('')
  })

  /*it('pushes a new ticket to the store', () => {
    wrapper.find('el-button').trigger('click')
    expect(mutations.saveTicket).toHaveBeenCalled()
  })
  */
})
