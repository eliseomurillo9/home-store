import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim: true
    }
})

export default subCategorySchema;