const chai = require('chai')
const expect = chai.expect
const mockedData = require('../src/utilities/mockedData')

describe('mockedData', () => {
  it('retorna array de objetos', () => {
    expect(mockedData()).to.be.an('array')
    expect(mockedData()).to.be.eql([
      { name: "Vassoura",
        price: "10",
        quantity: "5"
      },
      {
        name: "Abajur",
        price: "15",
        quantity: "1"
      },
      {
        name: "Mesa",
        price: "5",
        quantity: "0"
      }
    ])
  })
})
