import { model } from 'mongoose';
import productSchema from './schema/productSchema.js';

export default model('Product', productSchema);
