
exports.up = function (knex, Promise) {
    return knex.schema.createTable("comments", function (table) {
        table.increments("id");
        table.string("body");
        table.integer("user_id");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("users");
};