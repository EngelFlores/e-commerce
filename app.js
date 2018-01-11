const express = require(`express`);
const exphbs  = require('express-handlebars');
const sendString = require(`./sendString`);
const app = express()

app.use(express.static(__dirname + '/views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000))


app.get('/', (req,res) => {
  const products = [{name: "Vassoura",
              price: "10",
              quantity: "5"},
              {name: "Abajur",
              price: "15",
              quantity: "1"}]


res.render('index')
})


app.listen(app.get('port'), () =>
console.log(`Node app is running on port ${app.get('port')}`))
