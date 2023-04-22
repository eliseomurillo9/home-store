import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    contentType: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
    content: [
        {
            fileUrl: {
                type: String,
                required: false,
            },
            alt: {
                type: String,
                required: false,
            },
            linkUrl:{
                type: String
            },
            description: {
                type: String,
                required: false,
            }
        }
    ]
})

export default contentSchema;