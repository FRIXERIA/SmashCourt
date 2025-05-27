import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bookings'
  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('court_id')
        .unsigned()
        .references('id')
        .inTable('courts')
        .onDelete('CASCADE')
        .notNullable() 
      table.date('booking_date').notNullable()
      table.string('start_time').notNullable()
      table.string('end_time').notNullable()
      table.enum('status', ['confirmed', 'canceled']).defaultTo('confirmed').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}