import { useEffect, useState } from "react"
import { io } from "socket.io-client"

const useSocket = (path) => {

    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const socketIo = io(path, {transports: ['websocket']})
        socketIo.connect()
        setSocket(socketIo)
        return () => {
            socketIo.disconnect();
        }
    }, [])

    return socket

}

export default useSocket