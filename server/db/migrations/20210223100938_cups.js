
exports.up = function(knex) {
  return knex.schema.createTable('cups', table => {
    table.increments('id').primary()
    table.string('cup')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('cups')
};
