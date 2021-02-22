
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('toppings').del()
    .then(function () {
      // Inserts seed entries
      return knex('toppings').insert([
        {id: 1, topping: 'Pearls'},
        {id: 2, topping: 'Jelly'},
        {id: 3, topping: 'Pudding'},
        {id: 4, topping: 'Red Bean'}
      ]);
    });
};
