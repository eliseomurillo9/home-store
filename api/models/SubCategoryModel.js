import mongoose from 'mongoose';
import subCategory from './schema/subCategorySchema.js';

export default mongoose.model('SubCategory', subCategory);