import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'

export default class Message extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare is_group: boolean

  @column()
  declare name: string

  @column()
  declare created_by_id: number

  @column()
  declare room: string

  @belongsTo(() => User, { foreignKey: 'created_by_id' })
  declare created_by: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
