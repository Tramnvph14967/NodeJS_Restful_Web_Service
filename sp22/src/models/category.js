import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    slug: {
        type: String,
        minLength: 5,
        lowercase: true,
        unique:  true,
        index: true
    }
}, { timestamps: true})

export default mongoose.model('Category', categorySchema);