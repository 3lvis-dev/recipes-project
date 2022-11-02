const { describe, it } = require('mocha')
const { assert } = require('chai') 
const { getAllUsers } = require('../src/users/users.controllers') 

const sumar = (a, b) => a + b

describe('Test de la función sumar', () => {
  it('Deberia retornar 12 cuando le pasamos 8 y 4', (done) => {
    const response = sumar(8, 4)
    assert.equal(response, 12)
    done()
  })

  it('Deberia retornar 5 cuando le pasamos 2 y 3', (done) => {
    const response = sumar(2, 3)
    assert.equal(response, 5)
    done()
  })
})

describe('Test de controladore de usuarios', () => {
  it('Deberia retornar todos los usuarios', (done) => {
    getAllUsers()
      .then(data => {
        assert.equal.apply(data, )
        done()
      })
  })
})