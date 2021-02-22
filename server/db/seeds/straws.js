
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('straws').del()
    .then(function () {
      // Inserts seed entries
      return knex('straws').insert([
        {id: 1, straw: 'Stars'},
        {id: 2, straw: 'Flowers'},
        {id: 3, straw: 'Lemons'}
      ]);
    });
};
