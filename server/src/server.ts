import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import app from './app';
import mongoose from 'mongoose';

const port: number = +process.env.PORT! || 8000;
const mongoUrl: string = process.env.DB_URI!;

mongoose.set('toJSON', { virtuals: true });
mongoose.connect(mongoUrl).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
