import { quitstore } from '../api/QuitStoreAdapter'

export const addFormData = (context, newTicket) => {
  /* @TODO remove testing insert query */
  let secs = Date.now() / 1000
  let newTicketInsertQuery =
  `
  INSERT DATA {
      GRAPH <http://instructions.org/> {
          <http://www.w3.org/2006/vcard/ns#> <http://www.w3.org/2006/vcard/ns#fn> 'Lucas Schons` + secs + `'
      }
  }
`
  quitstore.sendData(newTicketInsertQuery).then(context.commit('saveTicket', newTicket))
}
