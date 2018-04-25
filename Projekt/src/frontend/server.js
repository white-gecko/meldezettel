// server.js
// Used to start up an express app that serves our frontend

const express = require('express')
const serveStatic = require('serve-static')
const os = require('os')

// get list of network interfaces
let ifaces = os.networkInterfaces()
let ipAddrList = []
// Check for WLAN or ETHERNET network interfaces
let regEx = /eth\d|wlp\d/
Object.keys(ifaces).forEach(function (ifname) {
  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return
    }
    if (regEx.test(ifname)) ipAddrList.push(iface.address)
  })
})

app = express()
app.use(serveStatic(__dirname + "/dist"))

let port = process.env.PORT || 8080
app.listen(port)

console.log('Server started. Reachable under:\n')
if (ipAddrList.length < 1) {
  console.log(
    'Server is up and running. Direct your browser to your machines ' +
    'IP-Address on Port ' + port)
} else {
  ipAddrList.forEach((ipAddr) => console.log('http://' + ipAddr + ':' + port))
}

