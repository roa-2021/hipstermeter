
exports.up = function(knex) {
    return knex.schema.createTable('creators', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('github_acc')
        table.json('my_fave')
        table.json('spotify_fave')
    })
};

exports.down = function(knex) {
    return knex.schema.createTable('creators')
};