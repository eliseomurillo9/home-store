import mongoose from 'mongoose';
import categorySchema from './schema/categorySchema.js';

export default mongoose.model('Category', categorySchema);