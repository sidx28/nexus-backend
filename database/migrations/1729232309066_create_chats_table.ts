import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'chats'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('message_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('messages')
        .onDelete('CASCADE')

      table.string('text').notNullable()

      table
        .integer('sender_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')

      table.boolean('read').notNullable().defaultTo(false)

      table.string('file_url').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
