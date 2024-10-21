import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Message from '#models/message'

export default class MessageMember extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare member_id: number

  @column()
  declare message_id: number

  @column()
  declare is_admin: boolean

  @belongsTo(() => Message, { foreignKey: 'message_id' })
  declare message: BelongsTo<typeof Message>

  @belongsTo(() => User, { foreignKey: 'member_id' })
  declare member: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
