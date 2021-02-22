
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('flavours').del()
    .then(function () {
      // Inserts seed entries
      return knex('flavours').insert([
        {id: 1, flavour: 'Jasmine'},
        {id: 2, flavour: 'Brown Sugar'},
        {id: 3, flavour: 'Passionfruit'},
        {id: 4, flavour: 'Taro'},
        {id: 5, flavour: 'Watermelon'},
        {id: 6, flavour: 'Matcha'}
      ]);
    });
};
