import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Court extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare name: string
  @column()
  declare location: string
  @column()
  declare price_per_hour: number
  @column()
  declare status: 'Available' | 'Not Available'
  @column()
  declare opening_time: String
  @column()
  declare closing_time: String
  @column()
  declare type: 'Badminton'| 'Tennis'
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
