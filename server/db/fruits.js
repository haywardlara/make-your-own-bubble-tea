const connection = require('./connection')

function getFruits (db = connection) {
  return db('fruit').select()
}

module.exports = {
  getFruits
}
