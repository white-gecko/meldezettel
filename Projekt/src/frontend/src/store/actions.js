import { quitstore } from '../api/QuitStoreAdapter'

/**
 * Action used to perform an async POST request to the QuitStore
 * containing the current form data
 *
 * @param context - vuex store context
 * @param {object} formData - current form data object */
export const addFormData = (context, formData) => {
  /* @TODO use sparql helper to generate insertquery out of formData object */
  let insertQuery = ''
  return quitstore.sendData(insertQuery)
}
