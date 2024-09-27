import { Exception } from '@adonisjs/core/exceptions'
import { ApiErrorCodes } from '../../enums/api_error_codes.js'

export default class InvalidCredentialException extends Exception {
  constructor() {
    super('Invalid Credentials', { code: '401', status: ApiErrorCodes.INVALID_CREDENTIALS })
  }
}
