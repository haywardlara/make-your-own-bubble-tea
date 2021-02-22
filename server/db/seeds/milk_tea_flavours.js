
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('milk_tea_flavours').del()
    .then(function () {
      // Inserts seed entries
      return knex('milk_tea_flavours').insert([
        {id: 1, flavour_id: 1},
        {id: 2, flavour_id: 2},
        {id: 3, flavour_id: 4},
        {id: 4, flavour_id: 6}
      ]);
    });
};
