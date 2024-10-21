// import type { HttpContext } from '@adonisjs/core/http'

// import Chat from '#models/chat'
import { Socket, Server } from 'socket.io'

class ChatsController {
  async joinRoom(socket: Socket, room: string) {
    socket.join(room)
    console.log(`User ${socket.id} joined room: ${room}`)
  }

  async sendMessage(socket: Socket, io: Server, { room, message }: any) {
    // Save the message to the database
    // await Chat.create({
    //   room,
    //   sender: socket.id,
    //   message,
    // })

    // Broadcast the message to the room
    io.to(room).emit('message', { message, sender: socket.id })
  }

  onDisconnect(socket: Socket) {
    console.log('User disconnected:', socket.id)
  }
}

export default new ChatsController()
