import { NextFunction, Router, Request, Response } from 'express';
import { check } from 'express-validator';

import container from '../container';
import { isAuthenticated } from '../middleware/authenticate';
import { isValid } from '../middleware/validator';

const router = Router();

router.post(
  '/',
  [
    check('email').isEmail(),
    check('description').isString(),
    check('score.community').toInt().isInt({ min: 0, max: 10 }),
    check('score.talent').toInt().isInt({ min: 0, max: 10 }),
  ],
  isValid,
  isAuthenticated,
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, description, score } = req.body;

      const nominationService = container.resolve('nominationService');

      nominationService.saveUser(email, description, score, req.referrer);

      return res.status(200).json({ message: 'created!' });
    } catch (err) {
      return next(err);
    }
  }
);

export default router;
