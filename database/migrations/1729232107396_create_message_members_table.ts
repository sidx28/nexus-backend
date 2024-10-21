import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'message_members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('member_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')

      table
        .integer('message_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('messages')
        .onDelete('CASCADE')

      table.boolean('is_admin').defaultTo(false)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
