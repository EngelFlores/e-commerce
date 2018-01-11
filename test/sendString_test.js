const chai = require('chai')
const expect = chai.expect
const sendString = require('../sendString');

describe(`SendString`, () => {
  it(`retorna string`, () => {
    expect(sendString()).to.be.equal(`Hello World`)
    expect(sendString()).to.not.be.equal(`World`)
  })
})
