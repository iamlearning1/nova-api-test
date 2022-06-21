import { NextFunction, Router, Request, Response } from 'express';

import container from '../container';
import { isAuthenticated } from '../middleware/authenticate';
import { isAdmin } from '../middleware/authorize';

const router = Router();

router.get(
  '/',
  isAuthenticated,
  isAdmin,
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const usersService = container.resolve('usersService');

      const users = usersService.allUsers(req.user);

      return res.status(200).json(users);
    } catch (err) {
      return next(err);
    }
  }
);

export default router;
