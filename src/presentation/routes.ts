import { Router, Request, Response } from 'express';

import { HealthCheckRoutes } from './health-check/route';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // HealthCheck routes
    router.use(HealthCheckRoutes.routes);

    // Other routes
    // ...
    // ...
    // ...

    router.use((req: Request, res: Response) => {
      return res.status(404).json({ message: 'Resource not found' });
    });

    return router;
  }
}
