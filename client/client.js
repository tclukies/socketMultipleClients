
    var socket = io();
    //   socket.emit('chat message', $('#m').val());
    document.querySelector(".lock").addEventListener("click", lock)
    document.querySelector(".unlock").addEventListener("click", unlock)


    function lock(){
        socket.emit("lock", 42)
    }


    function unlock(){
        socket.emit("unlock", 12)
    }