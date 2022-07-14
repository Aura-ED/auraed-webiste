const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const app = require('./app');
import mongoose from 'mongoose';

const port: number = +process.env.PORT! || 8000;
const mongoUrl: string = process.env.DB_URI!.replace(
  '<password>',
  process.env.DB_PASS!
);

mongoose.connect(mongoUrl).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
