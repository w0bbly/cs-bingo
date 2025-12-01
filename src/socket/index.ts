import { Server } from "socket.io";
import http from "http";
import { registerSocketHandlers } from "./handlers";

export function initSocket(server: http.Server) {
    const io = new Server(server, {
        cors: { origin: "*" }
    });

    registerSocketHandlers(io);

    console.log("Socket.IO initialized");
    return io;
}
