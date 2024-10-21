import type { HttpContext } from '@adonisjs/core/http'

export default class UserController {
  async me({ auth }: HttpContext) {
    await auth.check()

    return {
      data: { user: auth.user },
    }
  }
}
