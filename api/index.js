const express = require('express')
const twilio = require('twilio')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.post('/answer', (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse()

  twiml.say('Hello! Welcome to NoGigiddy. How can I help you?')

  res.type('text/xml')
  res.send(twiml.toString())
})

module.exports = app
