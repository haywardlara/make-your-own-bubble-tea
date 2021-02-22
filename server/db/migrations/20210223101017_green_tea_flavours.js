
exports.up = function(knex) {
  return knex.schema.createTable('milk_tea_flavours', table => {
    table.increments('id').primary()
    table.integer('flavour_id')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('milk_tea_flavours')
};
