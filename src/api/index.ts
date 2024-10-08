import express, {Request, Response} from 'express';
import {MessageResponse} from '../types/Messages';

const router = express.Router();

router.get<{}, MessageResponse>('/', (_req: Request, res: Response) => {
  res.json({
    message: 'api v1',
  });
});

export default router;
