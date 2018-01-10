const express = require(`express`);
const sendString = require(`./sendString`)
const app = express()

app.get('/', (req,res) => {
  res.send(sendString())
})

app.listen(3000)
