import { mount, createLocalVue } from '@vue/test-utils'
import THWForm from '@/components/THWForm'
import Vuex from 'vuex'
import expect from 'expect'
import VueRouter from 'vue-router'
import state from '@/store/state'


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

describe('THWForm', () => {
  let wrapper
  let store
  let actions

  beforeEach(() => {
    actions = {
      saveNewFormAction: jest.fn(),
      getPDFAction: jest.fn()
    }
    store = new Vuex.Store({
      state,
      actions
    })
    wrapper = mount(THWForm, { 
      store,
      localVue,
      router
     })
     wrapper.vm.saveForm = jest.fn();
      wrapper.vm.formReset = jest.fn()
  })

  it('saves new tickets to the db', () => {
      wrapper.find('#saveNewFormButton').trigger('click')
      expect(wrapper.vm.saveForm).toHaveBeenCalled()
  })

  it('sends tickets to the next station', () => {
      wrapper.find('#sendFormToNextPersonButton').trigger('click')
      expect(wrapper.vm.saveForm).toHaveBeenCalled()
  })

  it('allows to print a ticket', () => {
      wrapper.find('#printFormButton').trigger('click')
      expect(actions.getPDFAction).toHaveBeenCalled()
  })

  it('allows to reject a ticket', () => {
      wrapper.find('#rejectFormButton').trigger('click')
      expect(wrapper.vm.saveForm).toHaveBeenCalledWith('reject')
  })

  it('resets the form when pressing the reset button', () => {
      wrapper.find('#resetFormButton').trigger('click')
      expect(wrapper.vm.formReset).toHaveBeenCalled()
  })

  it ('binds to documentID', () => {
    expect(wrapper.vm.formdata.documentID).toBe('')
  })

  it ('binds to inOperation', () => {
    expect(wrapper.vm.formdata.inOperation).toBe('')
  })

  it ('binds to topRadio', () => {
    expect(wrapper.vm.formdata.topRadio).toBe(false)
  })

  it ('binds to topPhone', () => {
    expect(wrapper.vm.formdata.topPhone).toBe(false)
  })

  it ('binds to topFax', () => {
    expect(wrapper.vm.formdata.topFax).toBe(false)
  })

  it ('binds to topDFU', () => {
    expect(wrapper.vm.formdata.topDFU).toBe(false)
  })

  it ('binds to topCourier', () => {
    expect(wrapper.vm.formdata.topCourier).toBe(false)
  })

  it ('binds to numberTB', () => {
    expect(wrapper.vm.formdata.numberTB).toBe('')
  })

  it ('binds to outgoing', () => {
    expect(wrapper.vm.formdata.outgoing).toBe(true)
  })

  it ('binds to receiverName', () => {
    expect(wrapper.vm.formdata.receiverName).toBe('')
  })

  it ('binds to primaryDate', () => {
    expect(wrapper.vm.formdata.primaryDate).toBe('')
  })

  it ('binds to primaryTime', () => {
    expect(wrapper.vm.formdata.primaryTime).toBe('')
  })

  it ('binds to primaryHdZ', () => {
    expect(wrapper.vm.formdata.primaryHdZ).toBe('')
  })

  it ('binds to secondaryDate', () => {
    expect(wrapper.vm.formdata.secondaryDate).toBe('')
  })

  it ('binds to secondaryTime', () => {
    expect(wrapper.vm.formdata.secondaryTime).toBe('')
  })

  it ('binds to secondaryHdZ', () => {
    expect(wrapper.vm.formdata.secondaryHdZ).toBe('')
  })

  it ('binds to tertiaryDate', () => {
    expect(wrapper.vm.formdata.tertiaryDate).toBe('')
  })

  it ('binds to tertiaryTime', () => {
    expect(wrapper.vm.formdata.tertiaryTime).toBe('')
  })

  it ('binds to tertiaryHdZ', () => {
    expect(wrapper.vm.formdata.tertiaryHdZ).toBe('')
  })

  it ('binds to midRadio', () => {
    expect(wrapper.vm.formdata.midRadio).toBe(false)
  })

  it ('binds to midPhone', () => {
    expect(wrapper.vm.formdata.midPhone).toBe(false)
  })

  it ('binds to midFax', () => {
    expect(wrapper.vm.formdata.midFax).toBe(false)
  })

  it ('binds to midDFU', () => {
    expect(wrapper.vm.formdata.midDFU).toBe(false)
  })

  it ('binds to midCourier', () => {
    expect(wrapper.vm.formdata.midCourier).toBe(false)
  })

  it ('binds to callAnnouncement', () => {
    expect(wrapper.vm.formdata.callAnnouncement).toBe(false)
  })

  it ('binds to callMessage', () => {
    expect(wrapper.vm.formdata.callMessage).toBe(false)
  })

  it ('binds to priorityInstant', () => {
    expect(wrapper.vm.formdata.priorityInstant).toBe(false)
  })

  it ('binds to priorityFlash', () => {
    expect(wrapper.vm.formdata.priorityFlash).toBe(false)
  })

  it ('binds to address', () => {
    expect(wrapper.vm.formdata.address).toBe('')
  })

  it ('binds to callNumber', () => {
    expect(wrapper.vm.formdata.callNumber).toBe('')
  })

  it ('binds to talkNote', () => {
    expect(wrapper.vm.formdata.talkNote).toBe(false)
  })

  it ('binds to content', () => {
    expect(wrapper.vm.formdata.content).toBe('')
  })

  it ('binds to sender', () => {
    expect(wrapper.vm.formdata.sender).toBe('')
  })

  it ('binds to createTime', () => {
    expect(wrapper.vm.formdata.createTime).toBe('')
  })

  it ('binds to identification', () => {
    expect(wrapper.vm.formdata.identification).toBe('')
  })

  it ('binds to position', () => {
    expect(wrapper.vm.formdata.position).toBe('')
  })

  it ('binds to docketIdentification', () => {
    expect(wrapper.vm.formdata.docketIdentification).toBe('')
  })

  it ('binds to docketTime', () => {
    expect(wrapper.vm.formdata.docketTime).toBe('')
  })

  it ('binds to stationLeader', () => {
    expect(wrapper.vm.formdata.stationLeader).toBe(false)
  })

  it ('binds to stationS1', () => {
    expect(wrapper.vm.formdata.stationS1).toBe(false)
  })

  it ('binds to stationS2', () => {
    expect(wrapper.vm.formdata.stationS2).toBe(false)
  })

  it ('binds to stationS3', () => {
    expect(wrapper.vm.formdata.stationS3).toBe(false)
  })

  it ('binds to stationS4', () => {
    expect(wrapper.vm.formdata.stationS4).toBe(false)
  })

  it ('binds to stationS6', () => {
    expect(wrapper.vm.formdata.stationS6).toBe(false)
  })

  it ('binds to advisorA', () => {
    expect(wrapper.vm.formdata.advisorA).toBe('')
  })

  it ('binds to advisorB', () => {
    expect(wrapper.vm.formdata.advisorB).toBe('')
  })

  it ('binds to advisorC', () => {
    expect(wrapper.vm.formdata.advisorC).toBe('')
  })

  it ('binds to advisorD', () => {
    expect(wrapper.vm.formdata.advisorD).toBe('')
  })

  it ('binds to advisorE', () => {
    expect(wrapper.vm.formdata.advisorE).toBe('')
  })

  it ('binds to advisorTickA', () => {
    expect(wrapper.vm.formdata.advisorTickA).toBe(false)
  })

  it ('binds to advisorTickB', () => {
    expect(wrapper.vm.formdata.advisorTickB).toBe(false)
  })

  it ('binds to advisorTickC', () => {
    expect(wrapper.vm.formdata.advisorTickC).toBe(false)
  })

  it ('binds to advisorTickD', () => {
    expect(wrapper.vm.formdata.advisorTickD).toBe(false)
  })

  it ('binds to advisorTickE', () => {
    expect(wrapper.vm.formdata.advisorTickE).toBe(false)
  })

  it ('binds to connectionA', () => {
    expect(wrapper.vm.formdata.connectionA).toBe('')
  })

  it ('binds to connectionB', () => {
    expect(wrapper.vm.formdata.connectionB).toBe('')
  })

  it ('binds to connectionC', () => {
    expect(wrapper.vm.formdata.connectionC).toBe('')
  })

  it ('binds to connectionD', () => {
    expect(wrapper.vm.formdata.connectionD).toBe('')
  })

  it ('binds to connectionE', () => {
    expect(wrapper.vm.formdata.connectionE).toBe('')
  })

  it ('binds to connectionTickA', () => {
    expect(wrapper.vm.formdata.connectionTickA).toBe(false)
  })

  it ('binds to connectionTickB', () => {
    expect(wrapper.vm.formdata.connectionTickB).toBe(false)
  })

  it ('binds to connectionTickC', () => {
    expect(wrapper.vm.formdata.connectionTickC).toBe(false)
  })

  it ('binds to connectionTickD', () => {
    expect(wrapper.vm.formdata.connectionTickD).toBe(false)
  })

  it ('binds to connectionTickE', () => {
    expect(wrapper.vm.formdata.connectionTickE).toBe(false)
  })

  it ('binds to annotations', () => {
    expect(wrapper.vm.formdata.annotations).toBe('')
  })

  it ('binds to ticketState', () => {
    expect(wrapper.vm.formdata.ticketState).toBe(0)
  })

})
