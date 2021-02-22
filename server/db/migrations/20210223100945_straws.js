
exports.up = function(knex) {
  return knex.schema.createTable('straws', table => {
    table.increments('id').primary()
    table.string('straw')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('straws')
};
