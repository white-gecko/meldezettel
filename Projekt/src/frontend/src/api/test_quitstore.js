import quitstore from './QuitStoreAdapter'

let insertQuery = `
    INSERT DATA {
        GRAPH <http://instructions.org/> {
            <http://www.w3.org/2006/vcard/ns#> <http://www.w3.org/2006/vcard/ns#fn> 'Lucas Schons'
        }
    }
`

let getAllDataQuery = `
    SELECT * {
        GRAPH <http://instructions.org/> {
            ?sub ?pred ?obj
        }
    }
`

quitstore.sendData(insertQuery)
quitstore.getData(getAllDataQuery)
