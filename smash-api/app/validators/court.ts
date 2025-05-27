import vine from '@vinejs/vine'
import { CourtStatus, CourtType } from '../enums/courts.js'
const schema = vine.object({
  name: vine
    .string()
    .maxLength(50)
    .unique(async (db, value, _field) => {
      const court = await db.from('courts').where('name', value).first()
      return !court
    }),
  type: vine.enum(Object.values(CourtType)),
  status: vine.enum(Object.values(CourtStatus)),
  location: vine.string().maxLength(200),
  price_per_hour: vine.number(),
  opening_time: vine.string().regex(/^(0[0-9]|1[0-9]|2[0-3])\.[0-5][0-9]$/),
  closing_time: vine.string().regex(/^(0[0-9]|1[0-9]|2[0-3])\.[0-5][0-9]$/),
})
export const createCourtValidations = vine.compile(schema)
