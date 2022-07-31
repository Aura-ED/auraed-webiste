import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 150,
      enum: ['', 'Mr.', 'Mrs.', 'Miss', 'Dr.'],
    },
    author: {
      type: String,
      maxlength: 150,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 250,
    },
    blogUrl: {
      type: String,
      required: true,
      unique: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.model('Blog', blogSchema);
