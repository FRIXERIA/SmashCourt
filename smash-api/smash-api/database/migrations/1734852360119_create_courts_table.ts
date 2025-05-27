import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.string('location', 255).notNullable()
      table.integer('price_per_hour').notNullable()
      table.enum('status',['Available', 'Not Available']).notNullable()
      table.string('opening_time').notNullable()
      table.string('closing_time').notNullable()
      table.enum('type', ['Badminton', 'Tennis']).defaultTo('Badminton').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}