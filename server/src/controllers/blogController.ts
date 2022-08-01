import { NextFunction, Request, Response } from 'express';
import { Blog } from '../models/blogModel';
import { AppError } from '../utils/appError';

exports.getBlogs = async (req: Request, res: Response) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.status(200).json({
    status: 'success',
    blogs,
  });
};

exports.createBlog = async (req: Request, res: Response) => {
  console.log(req.body);
  const blog = new Blog(req.body);
  await blog.save();
  res.status(201).json({
    status: 'success',
    message: 'Blog created',
    data: {
      blog,
    },
  });
};

exports.getBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      throw new AppError(404, 'Blog not Found!');
    }
    res.status(200).json({
      status: 'success',
      data: {
        blog,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.updateBlog = async (req: Request, res: Response) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!blog) {
    return res.status(404).json({
      status: 'fail',
      message: 'Blog not found',
    });
  }
  res.status(200).json({
    status: 'success',
    message: 'Blog updated',
    data: {
      blog,
    },
  });
};

exports.deleteBlog = async (req: Request, res: Response) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) {
    return res.status(404).json({
      status: 'fail',
      message: 'Blog not found',
    });
  }
  res.status(200).json({
    status: 'success',
    message: 'Blog deleted',
    data: {
      blog,
    },
  });
};
