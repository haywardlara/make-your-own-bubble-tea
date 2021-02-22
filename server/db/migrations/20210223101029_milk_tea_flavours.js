
exports.up = function(knex) {
  return knex.schema.createTable('green_tea_flavours', table => {
    table.increments('id').primary()
    table.integer('flavour_id')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('green_tea_flavours')
};
