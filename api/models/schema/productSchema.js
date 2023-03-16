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
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: 'Category'
        
    },
})

export default productSchema;