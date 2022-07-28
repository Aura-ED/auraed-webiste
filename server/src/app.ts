import express from 'express';
import morgan from 'morgan';
const blogRouter = require('./routes/blogRoutes');
const eventRouter = require('./routes/eventRoutes');
import { Request, Response, NextFunction } from 'express';
import { AppError, handleError } from './utils/appError';

const app = express();

app.use(express.json());

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

app.use('/api/blogs', blogRouter);
app.use('/api/events', eventRouter);

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  handleError(err, res);
});

app.use('*', (req: Request, res: Response, next) => {
  next(new AppError(404, '404 Not Found'));
});

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  handleError(err, res);
});

module.exports = app;
