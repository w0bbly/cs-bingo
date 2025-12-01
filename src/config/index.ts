import dotenv from 'dotenv';
dotenv.config();

export default {
    port: process.env.PORT ? Number(process.env.PORT) : 4000,
    redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
    databaseUrl: process.env.DATABASE_URL || '',
};
