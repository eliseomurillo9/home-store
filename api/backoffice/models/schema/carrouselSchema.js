import mongoose from 'mongoose';

const carrousselSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    }
})

export default carrousselSchema;