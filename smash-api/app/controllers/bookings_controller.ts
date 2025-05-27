import Booking from '#models/booking'
import type { HttpContext } from '@adonisjs/core/http'
export default class BookingsController {
  async adminIndex({ response, auth }: HttpContext) {
    try {
      const user = auth.getUserOrFail()
      const bookings = await Booking.query().preload('user').preload('court')
      return response.ok({ data: bookings })
    } catch (error) {
      return response.badRequest({ message: 'Failed to fetch bookings', error })
    }
  }
  async userIndex({ response, auth, params }: HttpContext) {
    const user = auth.getUserOrFail()
    const id = params.id
    try {
      const bookings = await Booking.query().where('userId', id).preload('court').preload('user')
      if (bookings.length === 0) {
        return response.status(404).send({ message: 'No bookings found for this user' }) 
      }
      return response.ok({ data: bookings })
    } catch (error) {
      return response.badRequest({
        message: 'No bookings found for this user',
        error: error.message,
      })
    }
  }
  async show({ params, response, auth }: HttpContext) {
    const user = auth.getUserOrFail();
    try {
      const booking = await Booking.query().where('id', params.id)
      // ตรวจสอบว่า booking พบหรือไม่
      if (!booking) {
        return response.status(404).send({ message: 'Booking not found' });
      }
  
      // ส่งข้อมูลกลับ
      return response.ok({ data: booking });
    } catch (error) {
      // หากเกิดข้อผิดพลาด
      return response.status(500).send({ message: 'Internal server error', error: error.message });
    }
  }
  async destroy({ response, auth, params }: HttpContext) {
    const user = auth.getUserOrFail()
    try {
      const booking = await Booking.findOrFail(params.id)
      await booking?.delete()
      response.ok({ message: 'Delete success!' })
    } catch (error) {
      response.badRequest({ message: 'Failed to delete booking', error: error.message })
    }
  }
  async update({ params, request, response, auth }: HttpContext) {
    const user = auth.getUserOrFail()
    const id = params.id
    try {
      const booking = await Booking.findOrFail(id)
      const payload = await request.all()
      booking.courtId = payload.courtId
      booking.userId = payload.userId
      booking.bookingDate = payload.bookingDate
      booking.startTime = payload.startTime
      booking.endTime = payload.endTime
      booking.status = payload.status
      await booking.save()
      return response.ok({ message: 'Booking updated successfully', booking })
    } catch (error) {
      response.status(404).send({ message: 'Court not found' })
    }
  }
  async store({ request, response, auth }: HttpContext) {
    try {
      const user = auth.getUserOrFail()
      const { courtId, bookingDate, startTime, endTime, status } = request.only([
        'courtId',
        'bookingDate',
        'startTime',
        'endTime',
        'status',
      ])
      const booking = await Booking.create({
        userId: user.id,
        courtId: courtId,
        bookingDate: bookingDate,
        startTime: startTime,
        endTime: endTime,
        status,
      })
      return response.status(201).send({ message: 'Booking created successfully', data: booking })
    } catch (error) {
      console.error(error)
      return response
        .status(400)
        .send({ message: 'Failed to create booking', error: error.message })
    }
  }
}
