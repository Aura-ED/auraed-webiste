import mongoose from 'mongoose';
import slugify from 'slugify';

const gallerySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const Gallery = mongoose.model('Gallery', gallerySchema);

gallerySchema.pre('save', function (next) {
  this.category = slugify(this.category, {
    replacement: '_',
    lower: true
  });
  next();
});
