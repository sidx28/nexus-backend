import vine from '@vinejs/vine'

export const signInValidator = vine.compile(
  vine.object({
    // username: vine.string().trim().optional(),
    email: vine.string().email(),
    password: vine.string(),
  })
)
