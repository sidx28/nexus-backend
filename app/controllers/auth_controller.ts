import { HttpContext } from '@adonisjs/core/http'
import { userService } from '#services/user_service'
import UserAlreadyExistsException from '../exceptions/auth/user_already_exist_exception.js'
import { signUpValidator } from '#validators/auth/sign_up'
import User from '#models/user'
import { signInValidator } from '#validators/auth/sign_in'

export default class AuthController {
  async signup({ request }: HttpContext) {
    // const data = request.all()
    const sanitizedData = await request.validateUsing(signUpValidator)
    console.log(sanitizedData)

    let user = await userService.getByEmail(sanitizedData.email)

    if (user) {
      throw new UserAlreadyExistsException()
    }

    user = await userService.create({ ...sanitizedData })
    console.log(request.headers())
    // const clientIP = request.header('x-client-ip')
    const token = await User.accessTokens.create(user, [])
    return { data: { token: token.value!.release(), user } }
  }

  async signin({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(signInValidator)

    const user = await User.verifyCredentials(email, password)

    const token = await User.accessTokens.create(user)

    return { data: { user, token: token.value!.release() } }
  }

  async logout({ auth }: HttpContext) {
    const user = auth.user!

    await User.accessTokens.delete(user, user.currentAccessToken.identifier)

    return { sucess: true }
  }
}
