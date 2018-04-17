import expect from 'expect'
const actionsInjector = require('inject-loader!../../../src/store/actions.js')

const actions = actionsInjector({
  '../api/QuitStoreAdapter': {
    sendData (insertQuery) {
      setTimeout(() => {
        insertQuery(['test'])
      }, 100)
    }
  }
})


// helper for testing action with expected mutations
const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    try {
      expect(type).to.equal(mutation.type)
      if (payload) {
        expect(payload).to.deep.equal(mutation.payload)
      }
    } catch (error) {
      done(error)
    }

    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({ commit, state }, payload)

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

describe('actions', () => {
  it('addFormData', done => {
    testAction(actions.addFormData, null, {}, [], done)
  })
})
