import { Router } from 'express';

import { HealthCheckController } from './controller';

export class HealthCheckRoutes {
  static get routes(): Router {
    const router = Router();

    const controller = new HealthCheckController();

    router.get('/status', controller.getStatus);

    return router;
  }
}
