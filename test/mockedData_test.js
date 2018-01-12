const chai = require('chai')
const expect = chai.expect
const mockedData = require('../utilities/mockedData')

describe('mockedData', () => {
  it('retorna array de objetos', () => {
    expect(mockedData()).to.be.an('array')
  })
})
