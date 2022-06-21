import { NextFunction, Request, Response } from 'express';

import container from '../container';
import { User } from '../entity/User';

declare global {
  namespace Express {
    interface Request {
      referrer: string;
      user: User;
    }
  }
}

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req?.headers?.authorization?.replace('Bearer ', '');

  if (!email) return res.sendStatus(403);

  const usersService = container.resolve('usersService');

  const user = usersService.findUser(email);

  if (!user) return res.sendStatus(403);

  req.referrer = user.email;

  req.user = user;

  next();
};
