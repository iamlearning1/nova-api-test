import { NextFunction, Request, Response } from 'express';
import { BadRequest, NotFound } from '../errors';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BadRequest) {
    return res.status(400).json({ message: err.message });
  }

  if (err instanceof NotFound) {
    return res.status(404);
  }

  next();
};
