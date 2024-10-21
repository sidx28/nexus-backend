import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Inbox from '#models/inbox'
import User from '#models/user'

export default class InboxChat extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare inbox_id: number

  @column()
  declare sender_id: number

  @column()
  declare message: string

  @column()
  declare read: boolean

  @column()
  declare file_url: string

  @belongsTo(() => User, { foreignKey: 'sender_id' })
  declare sender: BelongsTo<typeof User>

  @belongsTo(() => Inbox, { foreignKey: 'inbox_id' })
  declare inbox: BelongsTo<typeof Inbox>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
