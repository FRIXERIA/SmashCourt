import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import User from '#models/user'
import Court from '#models/court'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
export default class Booking extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare courtId: number

  @column.dateTime()
  declare bookingDate: DateTime

  @column()
  declare startTime: string

  @column()
  declare endTime: string

  @column()
  declare status: 'confirmed' | 'canceled'

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Court)
  declare court: BelongsTo<typeof Court>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}