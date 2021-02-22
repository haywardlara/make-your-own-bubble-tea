
exports.up = function(knex) {
  return knex.schema.createTable('bubble_teas', table => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('drink_name')
    table.integer('topping_id')
    table.string('type_of_tea')
    table.integer('flavour_id')
    table.integer('cup_id')
    table.integer('straw_id')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('bubble_teas')
  
};
