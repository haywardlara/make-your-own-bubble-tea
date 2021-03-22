const connection = require('./connection')

function getBubbleTeas (db = connection) {
  return db('bubble_teas')
  .select()
}

function getUsers (db = connection){
  return db('users')
  .select()
}

function addUser (username, db = connection){
  return db('users')
  .insert({username: username})
}

function getCups (db = connection){
  return db('cups')
  .select()
}

function getStraws (db = connection){
  return db('straws')
  .select()
}

function getToppings (db = connection){
  return db('toppings')
  .select()
}

function getUsersTeas (user_id, db = connection){
  return db('bubble_teas')
  .where('user_id', user_id)
}

function addBubbleTea (user_id, drink_name, topping_id, cup_id, straw_id, type_of_tea, colour, db = connection){
  return db('bubble_teas')
  .insert({user_id: user_id, drink_name: drink_name, topping_id: topping_id, cup_id: cup_id, straw_id: straw_id, type_of_tea: type_of_tea, colour: colour})
}

function getBubbleTea (bubble_tea_id, db = connection){
  return db('bubble_teas')
  .where('bubble_teas.id', bubble_tea_id)
  .first()
  .join('cups', 'bubble_teas.cup_id', 'cups.id')
  .join('straws', 'bubble_teas.straw_id', 'straws.id')
  .join('toppings', 'bubble_teas.topping_id', 'toppings.id')
  .select('*', 'bubble_teas.id AS id')
}

module.exports = {
  getBubbleTeas,
  getUsers,
  addUser,
  getCups,
  getStraws,
  getToppings,
  getUsersTeas,
  addBubbleTea,
  getBubbleTea
}
