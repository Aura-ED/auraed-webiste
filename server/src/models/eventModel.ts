import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    images: [
      {
        type: String,
        required: true
      }
    ],
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const Event = mongoose.model('Event', eventSchema);
