import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { Request, Response, NextFunction } from 'express';
import { AppError, handleError } from './utils/errorUtils';
import { NODE_ENV } from './config';
import { blogRouter } from './controllers/blogController';
import { eventRouter } from './controllers/eventController';
import { authRouter } from './controllers/authController';
import { uploadRouter } from './controllers/uploadController';
import { metaRouter } from './controllers/metaController';
import { albumRouter } from './controllers/albumController';
import { PORT } from './config';

const app = express();
app.disable('etag');

// Middlewares
app.use(express.json());
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(
  cors({
    origin: '*',
  })
);

// Controllers
app.use('/v1/blogs', blogRouter);
app.use('/v1/events', eventRouter);
app.use('/v1/auth', authRouter);
app.use('/v1/upload', uploadRouter);
app.use('/v1/meta', metaRouter);
app.use('/v1/albums', albumRouter);

// Error handlers
app.use((err: AppError, _req: Request, res: Response, _next: NextFunction) => {
  handleError(err, res);
});

app.use('*', (_req: Request, _res: Response, next) => {
  next(new AppError(404, '404 Not Found'));
});

app.listen(PORT, () => console.log('Server is running on port 3000'));
