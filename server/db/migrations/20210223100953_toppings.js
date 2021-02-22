
exports.up = function(knex) {
  return knex.schema.createTable('toppings', table => {
    table.increments('id').primary()
    table.string('topping')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('toppings')
};
