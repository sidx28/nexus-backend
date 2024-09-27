import User from '#models/user'
import { UserCreateDto } from '../DTO/User/user_create_dto.js'

class UserService {
  private static _instance: UserService | null

  constructor() {}

  static getInstance() {
    if (!this._instance) this._instance = new UserService()
    return this._instance
  }

  async create(payload: UserCreateDto): Promise<User> {
    return User.create({
      ...payload,
    })
  }

  async getByEmail(email: string): Promise<User | null> {
    return User.findBy('email', email)
  }
}

export const userService = UserService.getInstance()
