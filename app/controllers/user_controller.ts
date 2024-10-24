import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class UserController {
  async me({ auth }: HttpContext) {
    await auth.check()

    return {
      data: { user: auth.user },
    }
  }

  async list({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 10

    // const users = await db.from('users').paginate(page, limit)

    const users = await User.all()

    return { data: { users } }
  }
}
