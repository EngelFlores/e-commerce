const express = require(`express`);
const sendString = require(`./sendString`)
const app = express()

app.set('port', (process.env.PORT || 3000))

app.use(express.static(__dirname + '/views'));

app.get('/', (req,res) => {
  const products = [{name: "Vassoura",
              price: "10",
              quantity: "5"},
              {name: "Abajur",
              price: "15",
              quantity: "1"}]
})

app.listen(app.get('port'), () =>
console.log(`Node app is running on port ${app.get('port')}`))
