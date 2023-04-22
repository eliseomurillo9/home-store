import mongoose from 'mongoose';
import contentManagerSchema from '../schema/cms/contentManagerSchema.js';

export default mongoose.model('Content', contentManagerSchema);