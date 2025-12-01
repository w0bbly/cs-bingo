import { Server, Socket } from "socket.io";

export function registerSocketHandlers(io: Server) {
    io.on("connection", (socket: Socket) => {
        console.log("Socket connected:", socket.id);

        // TEMP placeholder listeners
        socket.on("ping", () => {
            socket.emit("pong");
        });

        socket.on("disconnect", () => {
            console.log("Socket disconnected:", socket.id);
        });
    });
}
