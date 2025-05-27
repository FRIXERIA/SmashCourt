import { DateTime } from 'luxon'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Booking from '#models/booking'

export default class extends BaseSeeder {
  async run() {
    await Booking.createMany([
      {
        id: 1,
        userId: 2,
        courtId: 1,
        bookingDate: DateTime.fromJSDate(new Date('2024-12-15')),
        startTime:'14.00',
        endTime: '15.00',
        status: 'confirmed',
      },
      {
        id: 2, 
        userId: 2,
        courtId: 2,
        bookingDate: DateTime.fromJSDate(new Date('2024-12-15')),
        startTime:'08.00',
        endTime: '09.00',
        status: 'confirmed',
      },
      {
        id: 3,
        userId: 2,
        courtId: 3,
        bookingDate: DateTime.fromJSDate(new Date('2024-12-15')),
        startTime:'12.00',
        endTime: '13.00',
        status: 'confirmed',
      },
      {
        id: 4,
        userId: 3,
        courtId: 4,
        bookingDate: DateTime.fromJSDate(new Date('2024-12-16')),
        startTime:'14.00',
        endTime: '15.00',
        status: 'canceled',
      },
      {
        id: 5,
        userId: 3,
        courtId: 5,
        bookingDate: DateTime.fromJSDate(new Date('2024-12-16')),
        startTime:'20.00',
        endTime: '21.00',
        status: 'confirmed',
      },
      {
        id: 6,
        userId: 3,
        courtId: 6,
        bookingDate: DateTime.fromJSDate(new Date('2024-12-16')),
        startTime:'16.00',
        endTime: '17.00',
        status: 'confirmed',
      },
      {
        id: 7,
        userId: 4,
        courtId: 7,
        bookingDate: DateTime.fromJSDate(new Date('2024-12-17')),
        startTime:'18.00',
        endTime: '19.00',
        status: 'canceled',
      },
      {
        id: 8,
        userId: 4,
        courtId: 8,
        bookingDate: DateTime.fromJSDate(new Date('2024-12-17')),
        startTime:'15.00',
        endTime: '16.00',
        status: 'confirmed',
      },
      {
        id: 9,
        userId: 4,
        courtId: 9,
        bookingDate: DateTime.fromJSDate(new Date('2024-12-17')),
        startTime:'13.00',
        endTime: '14.00',
        status: 'canceled',
      },
      {
        id: 10,
        userId: 2,
        courtId: 10,
        bookingDate: DateTime.fromJSDate(new Date('2024-12-18')),
        startTime:'14.00',
        endTime:'15.00',
        status: 'confirmed',
      },
    ])
  }
}
