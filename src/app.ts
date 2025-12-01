import express from 'express';
import http from 'http';
import cors from 'cors';
import { initSocket } from './socket';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true }));

export function createServer() {
    const server = http.createServer(app);
    initSocket(server);
    return server;
}
