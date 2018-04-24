import { shallow, createLocalVue } from '@vue/test-utils'
import THWDashboard from '@/components/THWDashboard'
import expect from 'expect'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from '@/store'

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

describe('THWDashboard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(THWDashboard, {
      localVue,
      store,
      router
    })
    wrapper.vm.useFilters = jest.fn();
    wrapper.vm.resetFilters = jest.fn();
    wrapper.vm.showHideIncoming = jest.fn();
    wrapper.vm.showHideOutgoing = jest.fn();
    wrapper.vm.selectDocument = jest.fn()
  })

  it('Uses filters correctly', () => {
    wrapper.find('#useFilterButton').trigger('click')
    expect(wrapper.vm.useFilters).toHaveBeenCalled()
  })

  it('Resets filters correctly', () => {
    wrapper.find('#resetFilterButton').trigger('click')
    expect(wrapper.vm.resetFilters).toHaveBeenCalled()
  })

  it('Opens a document', () => {
    wrapper.find('#ticketListTable').trigger('current-change')
    expect(wrapper.vm.selectDocument).toHaveBeenCalled()
  })

  it('Triggers outgoing menu correctly', () => {
    wrapper.find('#outgoingMenu').trigger('click')
    expect(wrapper.vm.showHideOutgoing).toHaveBeenCalled()
  })

  it('Triggers incoming menu correctly', () => {
    wrapper.find('#incomingMenu').trigger('click')
    expect(wrapper.vm.showHideIncoming).toHaveBeenCalled()
  })

  it('displays the TB number', () => {
    expect(wrapper.html()).toContain('prop="numberTB"')
  })

  it('displays the author', () => {
    expect(wrapper.html()).toContain('prop="creator"')
  })

  it('displays the sighter', () => {
    expect(wrapper.html()).toContain('prop="docketIdentification"')
  })

  it('displays the creation date', () => {
    expect(wrapper.html()).toContain('prop="date"')
  })

  it('displays the creation time', () => {
    expect(wrapper.html()).toContain('prop="time"')
  })

  it('displays the receiver', () => {
    expect(wrapper.html()).toContain('prop="receiverName"')
  })

  it('displays the content of a ticket', () => {
    expect(wrapper.html()).toContain('prop="content"')
  })

  it('loads ticketList correctly', () => {
    expect(wrapper.vm.ticketList).toBe(store.state.ticketlist)
  })

  it('loads operationList correctly', () => {
    expect(wrapper.vm.operationList).toBe(store.state.operationList)
  })

  it('loads filters correctly', () => {
    expect(wrapper.vm.filter).toBe(store.state.filter)
  })
})
