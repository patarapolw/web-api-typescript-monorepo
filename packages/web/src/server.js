const Parcel = require('parcel-bundler')
const proxy = require('http-proxy-middleware')
const open = require('open')
const express = require('express')

const app = express()
const port = process.env.DEV_SERVER_PORT || '8080'
const parcel = new Parcel('./src/index.html')

app.use(parcel.middleware())

app.use(proxy('/api', {
  target: `http://localhost:${process.env.PORT || '3000'}`
}))

// start up the server
app.listen(port, () => {
  console.log(`Parcel proxy server is running at http://localhost:${port}`)
  open(`http://localhost:${port}`)
})
