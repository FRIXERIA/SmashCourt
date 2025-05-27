// import CommentsController from '#controllers/comments_controller'
import CourtController from '#controllers/courts_controller'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
router.group(() => {
        // router.resource('/courts', CourtController)
        router.get('/courts', [CourtController,'index']).as('courts.index'),
        router.get('/courts/:id', [CourtController,'show']).as('courts.show')
        router.post('/courts', [CourtController,'store']).as('courts.store')
        router.put('/courts/:id', [CourtController,'update']).as('courts.update')
        router.delete('/courts/:id', [CourtController,'destroy']).as('courts.destroy')
}).prefix('/api').use(middleware.auth())