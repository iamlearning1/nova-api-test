import { NextFunction, Request, Response } from 'express';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user.admin) return res.sendStatus(403);

  next();
};
