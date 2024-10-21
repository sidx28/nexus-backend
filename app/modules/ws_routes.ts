// import ChatsController from '#controllers/chats_controller'
// import Ws from '#services/ws_service'

// Ws.io?.on('connection', (socket) => {
//   console.log('User connected:', socket.id)

//   const io = Ws.io!

//   socket.on('joinRoom', (room) => {
//     ChatsController.joinRoom(socket, room)
//   })

//   socket.on('message', (data) => {
//     ChatsController.sendMessage(socket, io, data)
//   })

//   socket.on('disconnect', () => {
//     ChatsController.onDisconnect(socket)
//   })
// })
