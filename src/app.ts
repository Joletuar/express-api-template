import { environment } from './config/environment';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

function setupErrorHandling() {
  process.on('uncaughtException', (err) => {
    console.error('[x] Uncaught Exception:', err);
    process.exit(1);
  });

  process.on('unhandledRejection', (reason, promise) => {
    console.error('[x] Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
  });

  process.on('SIGTERM', () => {
    console.error('[x] Received SIGTERM. Exiting...');
    process.exit(1);
  });
}

async function startServer() {
  try {
    const server = new Server({
      port: environment.PORT,
      routes: AppRoutes.routes,
    });
    server.start();
  } catch (error) {
    console.error('[x] Error starting http server: ', error);
    process.exit(1);
  }
}

async function connectToDB() {}

async function main() {
  setupErrorHandling();

  await connectToDB();

  startServer();
}

(() => {
  main();
})();
