
exports.up = function(knex) {
    return knex.schema.createTable('creators', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('github_acc')
        table.string('my_fave')
        table.string('spotify_fave')
    })
};

exports.down = function(knex) {
    return knex.schema.createTable('creators')
};