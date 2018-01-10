const express = require(`express`);
const sendString = require(`./sendString`)
const app = express()

app.set('port', (process.env.PORT || 3000))

app.get('/', (req,res) => {
  res.send(sendString())
})

app.listen(app.get('port'), () =>
  console.log(`Node app is running on port ${app.get('port')}`))
