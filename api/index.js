const app = require('express')()
const { v4 } = require('uuid')
const twilio = require('twilio')

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`)
})

app.post('/api/answer', (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse()

  twiml.say('Hello! Welcome to NoGigiddy. How can I help you?')

  res.type('text/xml')
  res.send(twiml.toString())
})

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params
  res.end(`Item: ${slug}`)
})

module.exports = app
