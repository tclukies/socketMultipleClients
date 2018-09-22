var io= require("socket.io-client")

var socket = io(process.env.SOCKET_HOST || "http://localhost:3000");
//   socket.emit('chat message', $('#m').val());

function lock(){
    socket.emit("lock", 99)
}

lock()

socket.on("unlock now", onUnlock)

function onUnlock(id){
    console.log("onUnlock", id)
}

socket.on("lock now", onLock)

function onLock(id){
    console.log("onLock", id)
}