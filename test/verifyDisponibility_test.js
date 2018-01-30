const chai = require('chai')
const expect = chai.expect
const verifyDisponibility = require('../utilities/verifyDisponibility')


describe('verifyDisponibility', () => {
  context('com quantity igual 0', () => {
    it('Retorna array alterado', () => {
      const mockedData = [{name: "Vassoura",
      price: "10",
      quantity: "0"},
      {name: "Abajur",
      price: "15",
      quantity: "1"}]
      const result = verifyDisponibility(mockedData)
      expect(result).to.be.eql([
        {
          name: "Vassoura",
          price: "10",
          quantity: "indisponivel"
        },
        {
          name: "Abajur",
          price: "15",
          quantity: "1"
        }
      ])
    })
  })
  context('com quantity maior que 0', () => {
    it('Retorna array inaltarado', () => {
      const mockedData = [{name: "Vassoura",
      price: "10",
      quantity: "4"},
      {name: "Abajur",
      price: "15",
      quantity: "1"}]
      const result = verifyDisponibility(mockedData)
      expect(result).to.be.eql([
        {name: "Vassoura",
        price: "10",
        quantity: "4"},
        {name: "Abajur",
        price: "15",
        quantity: "1"}
      ])
    })
  })
})
