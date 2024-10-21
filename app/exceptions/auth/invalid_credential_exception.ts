import { Exception } from '@adonisjs/core/exceptions'
import { ApiErrorCodes } from '../../enums/api_error_codes.js'

export default class InvalidCredentialException extends Exception {
  constructor() {
    super('Invalid Credentials', {
      code: ApiErrorCodes.INVALID_CREDENTIALS.toString(),
      status: 401,
    })
  }
}
