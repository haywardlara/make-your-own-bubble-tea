
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'KittyKat'},
        {id: 2, username: 'Lemondrop'},
        {id: 3, username: 'Snowpie'}
      ]);
    });
};
