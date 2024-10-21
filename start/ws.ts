import app from '@adonisjs/core/services/app'
import Ws from '#services/ws_service'
import ChatsController from '#controllers/chats_controller'

app.ready(() => {
  Ws.boot()
  const io = Ws.io
  io?.on('connection', (socket) => {
    console.log('socket', socket.id)

    socket.on('joinRoom', (room) => {
      ChatsController.joinRoom(socket, room)
    })

    socket.on('message', (data) => {
      ChatsController.sendMessage(socket, io, data)
    })

    socket.on('disconnect', () => {
      ChatsController.onDisconnect(socket)
    })
  })
})
