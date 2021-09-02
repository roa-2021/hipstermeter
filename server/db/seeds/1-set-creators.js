
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('creators').del()
    .then(function () {
      // Inserts seed entries
      return knex('creators').insert([
        {id: 1, name: 'Matt', github_acc: 'mattsnz', my_fave: 'Black Sabbath', spotify_fave: ''},
        {id: 2, name: 'Juliet', github_acc: 'JULIET-01', my_fave: 'Nils Frahm', spotify_fave: ''},
        {id: 3, name: 'Shabu', github_acc: 'shabu-shrestha', my_fave: 'Selena Gomez', spotify_fave: ''},
        {id: 4, name: 'Oscar', github_acc: 'oscarholt', my_fave: 'Radiohead', spotify_fave: ''},
        {id: 5, name: 'Alex', github_acc: 'alexthomsonnz', my_fave: 'Hiatus Kaiyote', spotify_fave: 'J. Cole'}
      ]);
    });
};
