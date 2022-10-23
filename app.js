const express = require('express')
const app = express()

app.get('/hello', (req, res) => res.send('Hello World'))
app.get('/add/:a/:b', (req, res) =>
  res.send(parseInt(req.params.a) +
           parseInt(req.params.b)))

app.listen(4000)