import { createServer } from './app';
import config from './config';
import { initWorker } from './worker/score-worker';

async function main() {
    const server = createServer();

    server.listen(config.port, () => {
        console.log(`Server running on port ${config.port}`);
    });

    initWorker();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
