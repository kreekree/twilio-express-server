const express = require('express')
const twilio = require('twilio')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.get('/api/', (req, res) => {
  res.send('API endpoint')
})

app.get('/api/answer/', (req, res) => {
  res.send('Hello, Answer!')
})

app.post('/api/answer/', (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse()

  twiml.say('Hello! Welcome to NoGigiddy. How can I help you?')

  res.type('text/xml')
  res.send(twiml.toString())
})

app.all('/incoming', (req, res) => {
  console.log(`Incoming request method: ${req.method}`)
  console.log(`Incoming request path: ${req.path}`)
  res.send('Received the request')
})

module.exports = app
