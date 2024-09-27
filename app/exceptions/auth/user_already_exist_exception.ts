import { Exception } from '@adonisjs/core/exceptions'
import { ApiErrorCodes } from '../../enums/api_error_codes.js'

export default class UserAlreadyExistsException extends Exception {
  constructor() {
    super('User already exists in the system with this email', {
      code: '404',
      status: ApiErrorCodes.USER_ALREADY_EXISTS,
    })
  }
}
