import { NextFunction, Request, Response } from 'express';
import { BadRequest, NotFound, Unauthorized } from '../errors';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BadRequest)
    return res.status(400).json({ message: err.message });

  if (err instanceof NotFound) return res.sendStatus(404);

  if (err instanceof Unauthorized)
    return res.status(403).json({ message: err.message });

  next();
};
