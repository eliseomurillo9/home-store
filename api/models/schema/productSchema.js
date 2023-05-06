import { Schema, ObjectId } from 'mongoose';
let productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: false
    },
    category: {
        type: ObjectId,
        ref: 'Category'
        
    },
    img:
    {
        type: String,
        required: true
    }
})

export default productSchema;