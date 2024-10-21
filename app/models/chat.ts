import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Message from '#models/message'

export default class Chat extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare message_id: number

  @column()
  declare sender_id: number

  @column()
  declare text: string

  @column()
  declare read: boolean

  @column()
  declare file_url: string

  @belongsTo(() => User, { foreignKey: 'sender_id' })
  declare sender: BelongsTo<typeof User>

  @belongsTo(() => Message, { foreignKey: 'message_id' })
  declare message: BelongsTo<typeof Message>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
