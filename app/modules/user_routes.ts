import UserController from '#controllers/user_controller'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/', [UserController, 'me']), router.get('/users', [UserController, 'list'])
  })
  .prefix('/me')

router.group(() => {
  router.get('/users', [UserController, 'list'])
})
