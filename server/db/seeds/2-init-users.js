
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Matt', spotify_id: '', hipstermeter_score: 55},
        {id: 2, name: 'Alex', spotify_id: '', hipstermeter_score: 88},
        {id: 3, name: 'Juliet', spotify_id: '', hipstermeter_score: 80}
      ]);
    });
};
