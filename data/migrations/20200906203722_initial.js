exports.up = async function(knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id")
        table.text("username").unique().notNull()
        table.text("password").notNull()
        table.text("department").notNull()
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users")
}
