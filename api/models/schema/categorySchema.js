import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subCategory: {
        type: mongoose.ObjectId,
        ref: 'subCategory'
    }
})

export default categorySchema;