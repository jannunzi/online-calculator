const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello World')
})
app.get('/add/:a/:b', (req, res) => {
  const c = parseInt(req.params.a) + parseInt(req.params.b)
  res.send(c)
})
app.get('/subtract/:a/:b', (req, res) => {
  const c = parseInt(req.params.a) - parseInt(req.params.b)
  res.send(c)
})

app.listen(4000)