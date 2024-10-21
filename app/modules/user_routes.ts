import UserController from '#controllers/user_controller'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/', [UserController, 'me'])
  })
  .prefix('/me')
