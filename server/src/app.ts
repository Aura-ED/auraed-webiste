import express from 'express';
import morgan from 'morgan';
const blogRouter = require('./routes/blogRoutes');

const app = express();

app.use(express.json());

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

app.use('/api/blogs', blogRouter);

module.exports = app;
