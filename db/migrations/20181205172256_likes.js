exports.up = function (knex, Promise) {
    return knex.schema.createTable("likes", function (table) {
        table.increments("id");
        table.string("comment_id");
        table.integer("user_id");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("likes");
};