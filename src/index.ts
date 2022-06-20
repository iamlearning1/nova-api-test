import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import container from './container';
import nominate from './nomination/controller';
import { errorHandler } from './middleware/error-handler';

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', nominate);

app.use(errorHandler);

const logger = container.resolve('logger');

const server = app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});

export { app, server };
