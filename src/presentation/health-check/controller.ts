import { Request, Response } from 'express';

export class HealthCheckController {
  async getStatus(req: Request, res: Response) {
    res.status(200).json({ message: 'Server Ok' });
  }
}
