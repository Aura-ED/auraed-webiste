import { Blog } from '../models/blogModel';
import {
  createDoc,
  deleteDoc,
  getDoc,
  getDocs,
  updateDoc,
} from './crudControllers';

exports.getBlogs = getDocs(Blog);
exports.getBlog = getDoc(Blog);
exports.createBlog = createDoc(Blog);
exports.updateBlog = updateDoc(Blog);
exports.deleteBlog = deleteDoc(Blog);
