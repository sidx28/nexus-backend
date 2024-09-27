// eslint-disable-next-line @adonisjs/prefer-lazy-controller-import
import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.post('/signup', [AuthController, 'signup'])
    router.post('/signin', [AuthController, 'signin'])
    router.post('/logout', [AuthController, 'logout'])
    router.get('/me', [AuthController, 'me'])
  })
  .prefix('/auth')
