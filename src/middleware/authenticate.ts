import { NextFunction, Request, Response } from 'express';

import container from '../container';

declare global {
  namespace Express {
    interface Request {
      referrer: string;
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

  const usersService = container.resolve('userService');

  const user = usersService.findUser(email);

  if (!user) return res.sendStatus(403);

  req.referrer = user.email;

  next();
};
