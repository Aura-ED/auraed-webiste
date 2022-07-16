import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 150
    },
    author: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      maxlength: 250
    },
    blogUrl: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const Blog = mongoose.model('Blog', blogSchema);
