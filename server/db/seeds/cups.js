
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cups').del()
    .then(function () {
      // Inserts seed entries
      return knex('cups').insert([
        {id: 1, cup: 'Stars'},
        {id: 2, cup: 'Flowers'},
        {id: 3, cup: 'Rain'}
      ]);
    });
};
