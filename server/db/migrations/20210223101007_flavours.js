
exports.up = function(knex) {
  return knex.schema.createTable('flavours', table => {
    table.increments('id').primary()
    table.string('flavour')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('flavours')
};
