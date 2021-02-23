
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bubble_teas').del()
    .then(function () {
      // Inserts seed entries
      return knex('bubble_teas').insert([
        {id: 1, user_id: 2, drink_name: 'Skydew', topping_id: 1, cup_id: 1, straw_id: 1, type_of_tea: 'milkTea', colour: '#8ED1FC'},
        {id: 2, user_id: 2, drink_name: 'Cotton Candy Dream', topping_id: 2, cup_id: 2, straw_id: 2, type_of_tea: 'milkTea', colour: '#F78DA7'},
        {id: 3, user_id: 1, drink_name: 'Orange Bloom', topping_id: 1, cup_id: 3, straw_id: 2, type_of_tea: 'greenTea', colour: '#FF6900'},
        {id: 4, user_id: 3, drink_name: 'Matcha Making', topping_id: 4, cup_id: 2, straw_id: 3, type_of_tea: 'milkTea', colour: '#00D084'}
      ]);
    });
};
