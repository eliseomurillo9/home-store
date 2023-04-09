import mongoose from 'mongoose';
import carrousselSchema from './schema/carrouselSchema.js';

export default mongoose.model('carrousel', carrousselSchema);