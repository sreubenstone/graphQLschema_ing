exports.up = function (knex, Promise) {
    return knex.schema.createTable("blogs", function (table) {
        table.increments("id");
        table.string("title");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("blogs");
};