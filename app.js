const express = require('express')
const exphbs  = require('express-handlebars')
const mongoose = require('mongoose')
const Product = require('./models/Product');
const mockedData = require('./src/utilities/mockedData')
const verifyDisponibility = require('./src/utilities/verifyDisponibility')
const app = express()

mongoose.connect('mongodb://localhost:27017/e-commerce-dev')

app.use(express.static(__dirname + '/views'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res, next) => {
  Product.find()
    .then(all => products = all)
    .then(() => res.render('index', {products}))
    .catch(err => {
      console.log(err)
      next()
    })
})

app.use((req,res) => {
  res.redirect('/')
})
app.listen(app.get('port'), () =>
console.log(`Node app is running on port ${app.get('port')}`))
