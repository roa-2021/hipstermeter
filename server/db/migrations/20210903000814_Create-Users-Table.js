exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary
    table.string('name')
    table.string('spotify_id')
    table.integer('hipstermeter_score')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users') 
};



