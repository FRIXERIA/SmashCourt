import BookingsController from '#controllers/bookings_controller'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
router.group(() => {
        router.get('/bookings', [BookingsController,'adminIndex']).as('bookings.adminIndex')
        router.get('/bookings/:id', [BookingsController,'show']).as('bookings.show')
        router.delete('/bookings/:id',[BookingsController,'destroy']).as('bookings.destroy')
        router.put('/bookings/:id',[BookingsController,'update']).as('bookings.update')
        router.get('/bookings/user/:id',[BookingsController,'userIndex']).as('bookings.userIndex')
        router.post('/bookings/create',[BookingsController,'store']).as('bookings.store')
}).prefix('/api').use(middleware.auth())