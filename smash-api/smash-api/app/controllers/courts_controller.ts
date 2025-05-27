import Court from '#models/court'
import { createCourtValidations } from '#validators/court'
import type { HttpContext } from '@adonisjs/core/http'

export default class CourtsController {
  async index({ response }: HttpContext) {
    const court = await Court.all()
    response.ok(court)
  }
  async show({ params, response }: HttpContext) {
    const id = params.id
    try {
      const court = await Court.findOrFail(id)
      response.ok(court)
    } catch (error) {
      response.status(404).send({ message: 'Court not found' })
    }
  }
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createCourtValidations)
    const court = await Court.create(data)
    response.created(court)
  }
  async update({ params, request, response }: HttpContext) {
    try {
      const court = await Court.findOrFail(params.id)
      const payload = request.all()
      if (payload.name) court.name = payload.name;
    if (payload.location) court.location = payload.location;
    if (payload.price_per_hour) court.price_per_hour = payload.price_per_hour;
    if (payload.status) court.status = payload.status;
    if (payload.opening_time) court.opening_time = payload.opening_time;
    if (payload.closing_time) court.closing_time = payload.closing_time;
    if (payload.type) court.type = payload.type;
      await court?.save()
      response.ok(court)
    } catch (error) {
      response.status(404).send({ message: 'Court not found', error: error })
    }
  }
  async destroy({ params, response }: HttpContext) {
    const id = params.id
    try {
      const court = await Court.findOrFail(id) // ค้นหาข้อมูลตาม id
      await court.delete() // ลบข้อมูล
      response.ok({ message: 'Delete success!' })
    } catch (error) {
      response.status(404).send({ message: 'Court not found' }) // ถ้าไม่พบข้อมูล
    }
  }
}
