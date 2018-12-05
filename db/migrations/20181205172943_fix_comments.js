exports.up = function (knex, Promise) {
    return knex.schema.table("comments", function (table) {
        table.integer('blog_id');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropColumn('rank');
};