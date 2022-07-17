import express from 'express';
import morgan from 'morgan';
const blogRouter = require('./routes/blogRoutes');
const eventRouter = require('./routes/eventRoutes');

const app = express();

app.use(express.json());

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

app.use('/api/blogs', blogRouter);
app.use('/api/events', eventRouter);

module.exports = app;
