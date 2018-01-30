const sinon = require('sinon')
const chai = require('chai')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const expect = chai.expect

const dbController = require('../../src/controllers/db_controller')

const exec = {exec: () => {}}
const mockedModel = {
  find : sinon.stub().returns(exec)
}

allDbMethods = dbController(mockedModel)

describe('dbController', () => {
  it('findAll chama find na model', () => {
    allDbMethods.findAll()
    expect(mockedModel.find).to.have.been.called
  })
})
